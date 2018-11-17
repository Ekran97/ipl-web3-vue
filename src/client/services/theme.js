function saveBackground(bg) {
  localStorage.removeItem("BG");
  localStorage.setItem("BG", JSON.stringify(bg));
}

function saveVariant(variant) {
  localStorage.removeItem("VARIANT");
  localStorage.setItem("VARIANT", JSON.stringify(variant));
}

function retrieveBackground() {
  const bg = localStorage.getItem("BG");
  return JSON.parse(bg);
}

function retrieveVariant() {
  const variant = localStorage.getItem("VARIANT");
  return JSON.parse(variant);
}

export { saveBackground, saveVariant, retrieveBackground, retrieveVariant };
