// Code your solution in this file!
// returnFirstTwoDrivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // returnLastTwoDrivers
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // selectingDrivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // fareDoubler
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers
  function selectDifferentDrivers(drivers, driverSelector) {
    return driverSelector(drivers);
  }
  
  // Testing the functions manually
  console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // Should output: ['Antonia', 'Nuru']
  console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // Should output: ['Amari', 'Mo']
  
  console.log(selectingDrivers[0](['Antonia', 'Nuru', 'Amari', 'Mo'])); // Should output: ['Antonia', 'Nuru']
  console.log(selectingDrivers[1](['Antonia', 'Nuru', 'Amari', 'Mo'])); // Should output: ['Amari', 'Mo']
  
  console.log(createFareMultiplier(4)(5)); // Should output: 20
  
  console.log(fareDoubler(10)); // Should output: 20
  console.log(fareTripler(10)); // Should output: 30
  
  console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); // Should output: ['Antonia', 'Nuru']
  console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers)); // Should output: ['Amari', 'Mo']
  