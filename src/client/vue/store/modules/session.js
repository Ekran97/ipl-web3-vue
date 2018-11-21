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
  login(state, { jwt }) {
    state.jwt = jwt;
    state.authenticated = true;
    state.username = decode(jwt).email;
  },
  logout(state) {
    state.jwt = null;
    state.username = null;
    state.authenticated = false;
  }
};

const actions = {
  login(context, { email, password }) {
    return Session.createSession(email, password)
      .then(jwt => {
        context.commit("login", { jwt });
      })
      .catch(() => context.commit("logout"));
  },
  logout(context) {
    Session.deleteSession();
    context.commit("logout");
  }
};

export default { namespaced: true, state, mutations, actions };
