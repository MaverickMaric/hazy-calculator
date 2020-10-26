function calculate(arr) {
  let newArr = []

  arr.forEach((element) => {
    // check if element != '' && element != undefinded {
    // check operand {
    if (element !== '' && element !== undefined) {
      if (['+', '-', '*', '/'].includes(element)) {
        newArr.push(element)
      }
      else if (!isNaN(element)) {
        newArr.push(Number(element))
      }
    }
  })
  console.log(newArr)
  let num1 = newArr[0]
  let operator = newArr[1]
  let num2 = newArr[2]

  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return num1 / num2
    default:
      return NaN
  }
}
module.exports = calculate

