const fs = require("fs");
const mergeFiles = require("merge-files");
const algos = "../completedProblemsUnsolved/";

const fileNames = fs.readdirSync(algos);
const outputPath = __dirname + "/result.js";

const result = new Set();

// console.log(moveElement);
// // status: true or false
// const status = mergeFiles(result, outputPath);

const randomProblemGenerator = (fileNames) => {
  // let result = new Set();
  const result = {};
  while (Object.keys(result).length < 10) {
    let randomIndex = Math.floor(Math.random() * Math.floor(fileNames.length));

    let randomProblem = `${algos}${fileNames[randomIndex]}`;
    while (!result[randomProblem]) {
      result[randomProblem] = true;
    }
  }

  return Object.keys(result);
};

mergeFiles(randomProblemGenerator(fileNames), outputPath);
