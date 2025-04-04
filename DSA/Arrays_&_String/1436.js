// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the
// destination city, that is, the city without any path outgoing to another city.
// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

// ans:

var destCity = function (paths) {
     let destination = new Set();
     for (let path of paths) {
          destination.add(path[0]);
     }

     for(let path of paths) {
        if(!destination.has(path[1])){
            return path[1]
        }
     }
};

console.log(
     destCity([
          ["London", "New York"],
          ["New York", "Lima"],
          ["Lima", "Sao Paulo"],
     ])
); // Sao Paulo
console.log(destCity([["B","C"],["D","B"],["C","A"]])) // A
console.log(destCity([["A","Z"]])) // Z
