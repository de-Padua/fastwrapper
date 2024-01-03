class Wrapper {
  #method;
  #body;
  #headers = { "Content-Type": "application/json" };
  #requestOption = {
    method: this.#method, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  };
  #fullreq;

  constructor(url) {
    this.url = url;
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
    if (this.#method === "GET") {
      const request = {
        ...this.#requestOption,
        headers: this.#headers,
      };
      this.#fullreq = request;
    } else {
      const request = {
        ...this.#requestOption,
        body: this.#body,
        headers: this.#headers,
      };
      this.#fullreq = request;
    }

    this.resquest();
  }
  async resquest() {
    console.log(this.#fullreq);
  }
}

module.exports = Wrapper;
