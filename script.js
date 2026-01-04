const form = document.querySelector(".search-form");
const input = document.querySelector(".search-input");
const answerBox = document.getElementById("answerBox");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const question = input.value.trim().toLowerCase();

  if (question === "") {
    answerBox.innerHTML = "❗ Please ask a Class 10 NCERT question.";
    return;
  }

  // Sample NCERT-based answers (demo)
  if (question.includes("density")) {
    answerBox.innerHTML = `
      <h3>Quick Answer</h3>
      <p><b>Density</b> is the mass per unit volume of a substance.</p>
      <p><b>Formula:</b> Density = Mass ÷ Volume</p>

      <h4>Board Tip</h4>
      <p>This question is asked many times in CBSE Class 10 exams.</p>
    `;
  } else {
    answerBox.innerHTML = `
      <p>⚠️ Answer not found in demo database.</p>
      <p>This app supports <b>CBSE Class 10 NCERT only</b>.</p>
    `;
  }
});
