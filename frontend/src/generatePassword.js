export function generatePassword(n) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.?/!#%&+-"; // the characters to use in the password

    let password = "";
  
    for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password
}