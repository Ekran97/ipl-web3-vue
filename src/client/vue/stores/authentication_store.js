import Vue from "vue";
import * as Session from "../services/session.js";
import { decode } from "jsonwebtoken";

const AuthenticationStore = Vue.extend({
  state: {
    jwt: null,
    username: null
  },

  constructor(props) {
    super(props);

    const jwt = Session.retrieveJWT();
    const decodedJwt = decode(jwt);
    var username;

    if (decodedJwt == null) {
      username = null;
    } else {
      username = decodedJwt.email;
    }

    this.jwt = jwt;
    this.username = username;
  },

  login({ email, password }) {
    return Session.createSession(email, password).then(jwt => {
      this.jwt = jwt;
      this.username = decode(jwt).email;
    });
  },

  logout() {
    Session.deleteSession();
    this.jwt = null;
    this.username = null;
  },

  isAuthenticated() {
    return this.jwt != null;
  }
});

export { AuthenticationStore };
