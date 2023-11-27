function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });
}

console.log("Start");

fetchData()
  .then((data) => {
    console.log(data);
    console.log("Async operation completed");
  })
  .catch((error) => {
    console.log("Error:", error);
  });

console.log("End");
