const input = document.getElementById("input");
const btn = document.getElementById("btn");

function runCommand(text) {

  const t = text.toLowerCase().trim();

  // ONLY EXACT MATCH
  if (t === "play mix") {
    window.open(
      "https://youtube.com/playlist?list=PLrJ7l1lrjsHZzruihsClswv15iUlO4al6&si=b8ZbLgygS0VYbZ2j",
      "_blank"
    );
  }
}

function execute() {
  const text = input.value;
  if (!text) return;

  runCommand(text);

  input.value = "";
}

btn.addEventListener("click", execute);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") execute();
});
