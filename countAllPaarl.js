export default function countAllPaarl(regNumbersStr) {
    
  const regNumbers = regNumbersStr.split(',');

 
  let paarlCount = 0;


  for (let i = 0; i < regNumbers.length; i++) {
      
      if (regNumbers[i].trim().startsWith('CJ')) {
          
          paarlCount++;
      }
  }

  
  return paarlCount;
}