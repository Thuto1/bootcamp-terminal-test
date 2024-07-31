export default function regCheck(registrationNumber, locationIndicator) {
  // Check if the registration number ends with the location indicator
  return registrationNumber.endsWith(locationIndicator);
}