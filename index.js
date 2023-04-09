// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    //returns the number of blocks given a value
    if(blockNumber > 42){
      return blockNumber - 42
    } else{
      return 42 - blockNumber
    }
  };

const feetPerBlock = 264;

function distanceFromHqInFeet(blockNumber) {
    return feetPerBlock * distanceFromHqInBlocks(blockNumber);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    
  };
  
function distanceTravelledInFeet(start, end) {
    //returns the number of feet traveled
    if(end > start){
      return (end - start) * feetPerBlock;
    } else if(start > end){
      return (start - end) * feetPerBlock;
    }
  }

function calculatesFarePrice(start, end) {
    //returns the fare for the customer
    if (distanceTravelledInFeet(start, end) < 400) {
      return 0;
  } else if (distanceTravelledInFeet(start, end) > 400 && distanceTravelledInFeet(start, end) < 2000){
      return 0.02 * (distanceTravelledInFeet(start, end) - 400);
  } else if (distanceTravelledInFeet(start, end) < 2500){
      return 25;
  } else if (distanceTravelledInFeet(start, end) > 2500){
      return 'cannot travel that far'
  }
  }