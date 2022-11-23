export default function contarOvejas (ovejas) {
  return ovejas.filter((oveja) => {
    return (
      oveja.color === 'rojo' &&
      oveja.name.toLocaleLowerCase().includes('a') &&
      oveja.name.toLocaleLowerCase().includes('n')
    )
  })
}
