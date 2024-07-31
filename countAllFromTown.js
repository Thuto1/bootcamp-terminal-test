 export default function countAllFromTown(regNumbersStr, townPrefix) {
    
  const regNumbers = regNumbersStr.split(',');

  
  let townCount = 0;

  
  for (let i = 0; i < regNumbers.length; i++) {
     
      if (regNumbers[i].trim().startsWith(townPrefix)) {
          
          townCount++;
      }
  }

  
  return townCount;
}