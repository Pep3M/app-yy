// esta funcion genera un numero aleatorio de 4 cifras, donde ninguna se repite y la primera no es 0
export const generateRandomNumber = () => {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const number = []
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length)
    number.push(digits[randomIndex])
    digits.splice(randomIndex, 1)
    if (i === 0) {
      digits.unshift(0)
    }
  }
  return number
}