//Write a function formatName(firstName, lastName) that trims extra spaces from both inputs and returns the full name in this exact format: 'LASTNAME, Firstname'.
//Test: formatName('  esther  ', '  ogbu  ') should return 'OGBU, Esther'

function formatName(firstName, lastName) {
  firstName = firstName.trim();
  lastName = lastName.trim();

  let formattedFirst =
    firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

  let formattedLast = lastName.toUpperCase();
  
  return `${formattedLast}, ${formattedFirst}`;
}

console.log(formatName('  utibe  ', '  ntuen  '));