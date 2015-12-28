"use strict";

var fs = require("fs");
var writeStream = fs.createWriteStream("output.txt")

var count = 1;
var questions = [
    "What is your name",
    "What is your fav hobby",
    "What is your goal"
];

function ask(i) {
    process.stdout.write(questions[i]);
    process.stdout.write("\n");
};

process.stdin.on("data", function (data) {
    writeStream.write(data.toString("utf8").trim());

    if (count < questions.length) {
        ask(count);
        count += 1;
    } else {
        process.exit(0);
    }
});

process.on("exit", function () {
    writeStream.close();
    process.stdout.write("Thank you for your input\n");
});

ask(0);