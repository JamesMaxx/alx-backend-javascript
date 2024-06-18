process.stdout.write("Welcome to Holberton School, what is your name?\n");

let input = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  input += data;
});

process.stdin.on("end", () => {
  process.stdout.write(`Your name is: ${input.trim()}\n`);
  process.stdout.write("This important software is now closing\n");
  process.exit();
});

