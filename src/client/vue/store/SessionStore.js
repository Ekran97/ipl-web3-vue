import * as Session from "../../services/session.js";
import { decode } from "jsonwebtoken";

const jwt = Session.retrieveJWT();
const decodedJwt = decode(jwt);
const username = decodedJwt == null ? null : decodedJwt.email;

const state = {
    authenticated: jwt != null,
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
    isAuthenticated(state){
        return state.authenticated;
    },
    username(state){
        return state.username;
    }
};

export { state, mutations, getters };
