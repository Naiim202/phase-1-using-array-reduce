// index.js
const batteryBatches = [4, 5, 3, 4, 4, 6, 5]; // Provided array of battery amounts

const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

console.log(totalBatteries); // To verify the result
