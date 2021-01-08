import fs from "fs";

const createDir = (dirPath) => {
  fs.mkdirSync(process.cwd() + dirPath, { recursive: true }, (error) => {
    if (error) {
      console.error(`An error occurred: ${error}`);
    } else {
      console.log(`Directory succesffully  created!`);
    }
  });
};

const createFile = (filePath, fileContent) => {
  fs.writeFile(filePath, fileContent, (error) => {
    if (error) {
      console.error(`An error occurred: ${error}`);
    } else {
      console.log(`File successfully created!`);
    }
  });
};

const completedProblems = [];

const randomProblemGenerator = (completedProblems) => {
  let result = new Set();
  while (result.size <= 10) {
    let randomIndex = Math.floor(
      Math.random() * Math.floor(completedProblems.length)
    );

    let randomUser = completedProblems[randomIndex]._id;
    while (!result.has(randomUser)) {
      result.add(randomUser);
    }
  }
  return result;
};
