const input = document.getElementById("input");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

function runCommand(text) {

  const t = text.toLowerCase();

  // 🎵 YOUR ONLY COMMAND
  if (t.includes("play mix")) {

    window.open(
      "https://youtube.com/playlist?list=PLrJ7l1lrjsHZzruihsClswv15iUlO4al6&si=b8ZbLgygS0VYbZ2j",
      "_blank"
    );

    return "Playing Tony...";
  }

  return "Command not found.";
}

function execute() {

  const text = input.value.trim();
  if (!text) return;

  const result = runCommand(text);

  output.innerText = result;

  input.value = "";
}

btn.addEventListener("click", execute);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") execute();
});
