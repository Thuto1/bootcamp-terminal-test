export default function countRegNumber(registrationString) {
    var registrationNumbersArray = registrationString.split(',');
    

    return registrationNumbersArray.length;
}