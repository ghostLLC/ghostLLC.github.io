const languageLinks = document.querySelectorAll("[data-language-link]");

function preserveSectionAcrossLanguages() {
  for (const link of languageLinks) {
    link.setAttribute("href", `${link.dataset.languageLink}${window.location.hash}`);
  }
}

window.addEventListener("hashchange", preserveSectionAcrossLanguages);
preserveSectionAcrossLanguages();
