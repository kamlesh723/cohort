const greetings = [
  "Hello",
  "Bonjour",
  "Hola",
  "Ciao",
  "नमस्ते"
];

const greetingEl = document.getElementById("greeting");
const contentEl = document.getElementById("content");

let index = 0;

const interval = setInterval(() => {
  greetingEl.textContent = greetings[index];
  index++;

  if (index === greetings.length) {
    clearInterval(interval);

    // small pause before showing content
    setTimeout(() => {
      greetingEl.style.display = "none";
      contentEl.style.display = "block";
    }, 500);
  }
}, 500);
