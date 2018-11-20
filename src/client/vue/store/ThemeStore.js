import * as Theme from "../../services/theme.js";

const default_type = "dark";
const default_variant = "dark";

const actualType = Theme.retrieveBackground();
const actualVariant = Theme.retrieveVariant();

const state = {
  type: actualType != null ? actualType : default_type,
  variant: actualVariant != null ? actualVariant : default_variant
};

const mutations = {
  toggleType(state) {
    var type;
    var variant;
    if (state.type == "dark") {
      type = "light";
      variant = "light";
    } else {
      type = "dark";
      variant = "dark";
    }
    setType(state, { type });
    setVariant(state, { variant });
  }
};

const getters = {};

function setType(state, { type }) {
  state.type = type;
  Theme.saveBackground(type);
}

function setVariant(state, { variant }) {
  state.variant = variant;
  Theme.saveVariant(variant);
}

export { state, mutations, getters };
