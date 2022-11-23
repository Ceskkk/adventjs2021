const formatLetter = (letter) => {
  const letterSplitted = letter.split(' ')
  return letterSplitted.filter(gift => gift && !gift.startsWith('_'))
}

const giftsToObj = (letter) => {
  const listGifts = {}

  letter.forEach(gift => {
    if (gift in listGifts) listGifts[gift]++
    else listGifts[gift] = 1
  })

  return listGifts
}

export default function listGifts (letter) {
  const letterFormatted = formatLetter(letter)
  const listGifts = giftsToObj(letterFormatted)

  return listGifts
}
