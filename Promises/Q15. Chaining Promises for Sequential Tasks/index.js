function startTask() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Task A completed"), 1000);
  });
}

function processTask(input) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Task B processed: ${input}`), 1500);
  });
}

function finalizeTask(input) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Final result: ${input}`), 500);
  });
}

startTask()
  .then(result => {
    console.log(result);
    return processTask(result);
  })
  .then(result => {
    console.log(result);
    return finalizeTask(result);
  })
  .then(console.log)
  .catch(error => console.error("Error:", error));