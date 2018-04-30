const { readFile, writeFile } = require('fs');
const { promisify } = require('util');

const readFileAsync  = promisify(readFile),
      writeFileAsync = promisify(writeFile),
      inputFilePath  = process.argv[2] || "input.json",
      outputFilePath = process.argv[3] || "output.json",
      cutOffCount    = 10; // can modify this value for a higher cutoff (how many ppl needed to match)

// fileIO takes in our matcher function, reads from input, writes to output, convert to/from JSON and 
// catch and log errors when appropriate
let fileIO = (fn) => readFileAsync(inputFilePath, 'utf8')
                      .then(JSON.parse)
                      .then(fn)
                      .then(JSON.stringify)
                      .then((data) => writeFileAsync(outputFilePath, data, 'utf8'))
                      .catch(console.error);

// getAllPairs creates a list of all unique restaurant pairs
let getAllPairs = (restaurantsLists) => {
  let uniqueRestaurants = new Set(),
      restaurantPairs = [];

  for (let restaurants of restaurantsLists) {
    for (let restaurant of restaurants) {
      uniqueRestaurants.add(restaurant);
    }
  }

  // to Array for the sake of iterating by index
  uniqueRestaurants = Array.from(uniqueRestaurants.values());

  for (let i=0; i < uniqueRestaurants.length; i++) {
    for (let j=i+1; j < uniqueRestaurants.length; j++) {
      restaurantPairs.push([uniqueRestaurants[i], uniqueRestaurants[j]]);
    }
  }

  return restaurantPairs;
}

// restuarantMatcher takes in our json input as simple JS obj and returns the list of resulting pairs
let restaurantsMatcher = (data) => {
  let restaurantPairs = getAllPairs(Object.values(data)),
      pairCount = new Map(),
      resultPairs = [];

  // init Map values at 0
  for (let pair of restaurantPairs) {
    pairCount.set(pair, 0);
  }

  // for each individual check all matching pairs it contributes to and update the count
  for (let [name, restaurants] of Object.entries(data)) {
    for (let [pair, count] of pairCount) {
      if (restaurants.includes(pair[0]) && restaurants.includes(pair[1])) {
        pairCount.set(pair, count + 1);
      }
    }
  }
  
  // filter result by cutOffCount
  for (let [pair, count] of pairCount) {
    if (count >= cutOffCount) {
      resultPairs.push(pair);
    }
  }

  return resultPairs;
}

// call the fileIO w/ our matching function
fileIO(restaurantsMatcher);


