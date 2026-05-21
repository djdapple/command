document.getElementById("btn").onclick = run;

document.getElementById("input").addEventListener("keypress", function(e) {
  if (e.key === "Enter") run();
});

function run() {
  const t = input.value.toLowerCase().trim();

  if (t === "play mix") {
    window.open("https://youtube.com/playlist?list=PLrJ7l1lrjsHZzruihsClswv15iUlO4al6&si=b8ZbLgygS0VYbZ2j");
  }

  if (t === "open soundcloud") {
    window.open("https://on.soundcloud.com/Q62wFisuboT0qNnY9d");
  }

  if (t === "open gmail") {
    window.open("https://mail.google.com");
  }

  input.value = "";
}
