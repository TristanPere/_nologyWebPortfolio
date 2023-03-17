const ProjectScreenShots = document.querySelectorAll(
  ".portfolio__card__screenShot"
);
const GithubEyes = document.querySelectorAll(".portfolio__card__eye");
const CodeSlashs = document.querySelectorAll(".portfolio__card__code-slash");
const ReactButtons = document.querySelectorAll(".portfolio__card__react");
const SCSSButtons = document.querySelectorAll(".portfolio__card__scss");

ProjectScreenShots[0].addEventListener("click", () => {
  window.location =
    "https://tristanpere.github.io/tristan-peregrines-calculator/";
});
ProjectScreenShots[1].addEventListener("click", () => {
  window.location = "https://tristanpere.github.io/Goose-Feed-Game/";
});
ProjectScreenShots[2].addEventListener("click", () => {
  window.location = "https://github.com/TristanPere/punkbeerwebpage";
});
ProjectScreenShots[3].addEventListener("click", () => {
  window.location = "https://github.com/nology-tech/Sable-client-project";
});
GithubEyes[0].addEventListener("click", () => {
  window.location =
    "https://github.com/TristanPere/tristan-peregrines-calculator";
});
GithubEyes[1].addEventListener("click", () => {
  window.location = "https://github.com/TristanPere/Goose-Feed-Game";
});
GithubEyes[2].addEventListener("click", () => {
  window.location = "https://github.com/TristanPere/punkbeerwebpage";
});
CodeSlashs[0].addEventListener("click", () => {
  window.location =
    "https://github.com/TristanPere/Goose-Feed-Game/blob/main/index.html";
});
CodeSlashs[1].addEventListener("click", () => {
  window.location =
    "https://github.com/TristanPere/tristan-peregrines-calculator/blob/main/index.html";
});
CodeSlashs[2].addEventListener("click", () => {
  window.location =
    "https://github.com/TristanPere/punkbeerwebpage/tree/main/src";
});
ReactButtons[0].addEventListener("click", () => {
  window.location =
    "https://github.com/TristanPere/Goose-Feed-Game/blob/main/main.js";
});
ReactButtons[1].addEventListener("click", () => {
  window.location =
    "https://github.com/TristanPere/tristan-peregrines-calculator/blob/main/main.js";
});
ReactButtons[2].addEventListener("click", () => {
  window.location =
    "https://github.com/TristanPere/punkbeerwebpage/tree/main/src";
});
SCSSButtons[0].addEventListener("click", () => {
  window.location =
    "https://github.com/TristanPere/Goose-Feed-Game/blob/main/styles.scss";
});
SCSSButtons[1].addEventListener("click", () => {
  window.location =
    "https://github.com/TristanPere/tristan-peregrines-calculator/blob/main/styles.scss";
});
SCSSButtons[2].addEventListener("click", () => {
  window.location =
    "https://github.com/TristanPere/punkbeerwebpage/tree/main/src";
});
