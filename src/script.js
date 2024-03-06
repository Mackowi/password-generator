export const generatePassword = (sl, bl, sc, num, length) => {
  let dictionary = ''

  if (sl) {
    const smallLetters = 'abcdefghijklmnopqrstuvwxyz'
    dictionary += smallLetters
  }
  if (bl) {
    const bigLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    dictionary += bigLetters
  }
  if (sc) {
    const specialChar = '!@#$%^&*()_+-=[]{}|;:",.<>?/'
    dictionary += specialChar
  }
  if (num) {
    const number = '12345678910'
    dictionary += number
  }

  let password = ''
  for (let i = 0; i < length; i++) {
    password += dictionary[Math.floor(Math.random() * dictionary.length)]
  }
  return password
}
