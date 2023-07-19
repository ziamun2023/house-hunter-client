function isPalindrome(string) {
 
    const thestring = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    const length = thestring.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
      if (thestring[i] !== thestring[length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  console.log(isPalindrome("hehhw"))