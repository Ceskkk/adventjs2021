import contarOvejas from './challenge01/index.js'
import listGifts from './challenge02/index.js'

// Challenge01
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' }
]

console.log('Challenge01:', contarOvejas(ovejas))

// Challenge02
const carta = 'bici coche balón _playstation bici coche peluche'

console.log('Challenge02: ', listGifts(carta))
