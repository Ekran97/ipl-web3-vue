import sendApiRequest from "../utils/api";

function storeJWT(jwt) {
  const serialized = JSON.stringify(jwt);
  localStorage.setItem("JWT", serialized);
}

function retrieveJWT() {
  const serialized = localStorage.getItem("JWT");
  return JSON.parse(serialized);
}

function clearJWT() {
  localStorage.removeItem("JWT");
}

const createSession = (email, password) => {
  return sendApiRequest({
    url: "/login",
    method: "POST",
    params: {
      email: email,
      password: password
    }
  })
    .then(data => {
      const jwt = data.jwt;
      storeJWT(jwt);
      return jwt;
    })
    .catch(error => {
      return error;
    });
};

const deleteSession = () => {
  clearJWT();
};

export { createSession, deleteSession, retrieveJWT };
