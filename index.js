function palindrome(str) {
  // turn  to  lowercase
  const alphanumeric = str
  .toLowerCase()
  .match(/[a-z0-9]/g);
    
  return alphanumeric.join('') === alphanumeric.reverse().join('')
}

palindrome("eye");
