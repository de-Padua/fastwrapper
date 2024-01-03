class Wrapper {
  response = "";

  #method;
  #body;
  #headers = { "Content-Type": "application/json" };
  #requestOption = {
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  };
  #fullreq;

  constructor(url) {
    this.url = url;
    this.response = [];
  }

  get() {
    this.#method = "get";
    return this;
  }
  post() {
    this.#method = "post";
    return this;
  }
  patch() {
    this.#method = "patch";
    return this;
  }
  update() {
    this.#method = "update";
    return this;
  }
  delete() {
    this.#method = "delete";
    return this;
  }

  headers(custom) {
    this.#headers = custom;
    return this;
  }

  body(custom) {
    const body = JSON.stringify(custom);
    this.#body = body;
    return this;
  }
  options(custom) {
    const customReq = { ...this.#requestOption, ...custom };
    this.#requestOption = customReq;
    return this;
  }
  call() {
    return this.buildRequest();
  }
  buildRequest() {
    console.log(this.#method);
    if (this.#method === "get") {
      const request = {
        method: this.#method,
        ...this.#requestOption,
        headers: this.#headers,
      };
      this.#fullreq = request;
    } else {
      const request = {
        ...this.#requestOption,
        method: this.#method,
        body: this.#body,
        headers: this.#headers,
      };
      this.#fullreq = request;
    }

    return this.resquest();
  }
  async resquest() {
    const request = new Request(this.url, this.#fullreq);
    const data = await fetch(request);
    const resp = await data.json();
    return resp;
  }
}

module.exports = Wrapper;
