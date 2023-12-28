// Given array of battery batches
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use reduce() to calculate the totalBatteries
const totalBatteries = batteryBatches.reduce((accumulator, currentBatch) => accumulator + currentBatch, 0);

// Output the result
console.log(totalBatteries); // The totalBatteries will be logged to the console
