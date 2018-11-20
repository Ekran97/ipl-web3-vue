import * as Session from "../../../services/session.js";
import { decode } from "jsonwebtoken";

const jwt = Session.retrieveJWT();
var username;
var authenticated;

if (jwt != null) {
  const decodedJwt = decode(jwt);
  if (decodedJwt != null) {
    username = decodedJwt.email;
    authenticated = true;
  } else {
    username = null;
    authenticated = false;
  }
} else {
  username = null;
  authenticated = false;
}

const state = {
  authenticated: authenticated,
  jwt: jwt,
  username: username
};

const mutations = {
  login(state, { email, password }) {
    return Session.createSession(email, password)
      .then(jwt => {
        state.jwt = jwt;
        state.username = decode(jwt).email;
        state.authenticated = true;
      })
      .catch(error => {
        state.jwt = null;
        state.username = "";
        state.authenticated = false;
      });
  },
  logout(state) {
    Session.deleteSession();
    state.jwt = null;
    state.username = null;
    state.authenticated = false;
  }
};

const getters = {};

export default { namespaced: true, state, mutations, getters };
