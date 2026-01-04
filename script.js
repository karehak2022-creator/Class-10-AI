const data = {
  "density": {
    quick: "Density is defined as mass per unit volume of a substance.",
    step: "Density = Mass ÷ Volume\nSI unit is kg/m³",
    board: "Write definition + formula + unit for full marks.",
    pyq: "Asked 6 times in last 10 years.",
    key: "ρ = m/V, unit kg/m³",
    mistakes: "Forgetting unit, writing wrong formula.",
    related: "Define density | Calculate density"
  },
  "corrosion": {
    quick: "Corrosion is the gradual destruction of metals by chemical reaction with environment.",
    step: "Example: Rusting of iron.",
    board: "Definition + example gives full marks.",
    pyq: "Frequently asked (3–5 marks).",
    key: "Occurs in presence of air and moisture.",
    mistakes: "Confusing corrosion with erosion.",
    related: "What is rusting | Prevention of corrosion"
  }
};

document.querySelector("button").addEventListener("click", () => {
  const q = document.querySelector("input").value.toLowerCase().trim();
  const box = document.querySelector(".answer-box");

  if (!data[q]) {
    box.innerHTML = "<b>No NCERT answer found.</b>";
    return;
  }

  box.innerHTML = `
    <h3>Quick Answer</h3>
    <p>${data[q].quick}</p>

    <h3>Step-by-Step</h3>
    <p>${data[q].step}</p>

    <h3>Board Format</h3>
    <p>${data[q].board}</p>

    <h3>PYQ Frequency</h3>
    <p>${data[q].pyq}</p>

    <h3>Key Points</h3>
    <p>${data[q].key}</p>

    <h3>Common Mistakes</h3>
    <p>${data[q].mistakes}</p>

    <h3>Related Questions</h3>
    <p>${data[q].related}</p>
  `;
});
