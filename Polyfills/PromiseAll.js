const promiseArray = [
    Promise.resolve(3),
    Promise.resolve(5),
    Promise.resolve(10)
]

Promise.myPromiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    let completedPromises = 0;

    promises.forEach((promise, index) => {
      promise.then((val) => {
        results[index] = val; // Preserve the order of promises
        completedPromises++;

        if (completedPromises === promises.length) {
          resolve(results); // Resolve the final results when all promises are done
        }
      }).catch((error) => {
        reject(error); // If any promise rejects, reject the entire Promise.myPromiseAll
      });
    });
  });
}

Promise.myPromiseAll(promiseArray).then((results) => {
  console.log(results); // [3, 5, 10]
}).catch((error) => {
  console.log("Error in promise array:", error);
});
