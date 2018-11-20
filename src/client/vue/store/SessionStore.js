import * as Session from "../../services/session.js";
import { decode } from "jsonwebtoken";

const jwt = Session.retrieveJWT();
var username;
var authenticated;
if (jwt != "FAKE JWT" && jwt != null) {
    const decodedJwt = decode(jwt);
    username = decodedJwt.email;
    authenticated = true;
} else {
    username = null;
    authenticated = false
}

const state = {
    authenticated: authenticated,
    jwt: jwt,
    username: username
};

const mutations = {
    login(state, { email, password }) {
        return Session.createSession(email, password).then(jwt => {
            state.jwt = jwt;
            state.username = decode(jwt).email;
            state.authenticated = true;
        });
    },

    logout(state) {
        Session.deleteSession();
        state.jwt = null;
        state.username = null;
        state.authenticated = false;
    }
};

const getters = {
    isAuthenticated(state) {
        return state.authenticated;
    },
    username(state) {
        return state.username;
    }
};

export { state, mutations, getters };
