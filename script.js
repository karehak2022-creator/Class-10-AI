const answers = {
  "what is corrosion": "Corrosion is the slow destruction of metals by chemical reactions with air, moisture or chemicals (e.g. rusting of iron).",
  "what is rusting": "Rusting is a type of corrosion in which iron reacts with oxygen and moisture to form rust."
};

function searchAnswer() {
  const q = document.querySelector(".search-input").value.toLowerCase().trim();
  const box = document.querySelector(".tab-panel");

  if (answers[q]) {
    box.innerHTML = `<p>${answers[q]}</p>`;
  } else {
    box.innerHTML = `<p>No answer found. Try NCERT keywords.</p>`;
  }
}
