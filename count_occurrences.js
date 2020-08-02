let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

function countOccurrences(vehicles) {
  let count = {};
  for (let i = 0; i < vehicles.length; i++) {
    let el = vehicles[i];
    if (!count[el]) {
      count[el] = 1;
    } else {
      count[el] += 1;
    }
  }

  for(name in count) {
    let value = count[name];
    console.log(name + ' => ' + value);
  }
}
/*
// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/
