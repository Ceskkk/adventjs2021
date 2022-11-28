export default function isValid (letter) {
  let result = true
  const letterSplitted = letter.split(' ')

  letterSplitted.every((gift) => {
    if (!isGiftValid(gift)) {
      result = false
      return false
    }
    return true
  })
  return result
}

const isGiftValid = (gift) => {
  if (gift.charAt(0) === '(') {
    if (gift.slice(-1) !== ')' || gift.includes('{') || gift.includes('}') || gift.includes('[') || gift.includes(']')) {
      return false
    } else if (!isGiftOnlyLetters(gift.slice(1, -1))) {
      return false
    }
  } else if (gift.charAt(0) === ')') {
    return false
  }
  return true
}

const isGiftOnlyLetters = (gift) => {
  return /^[A-zÀ-ú]+$/.test(gift)
}
