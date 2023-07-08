function primaSegiEmpat(width: number, height: number, start: number) {
  // your code here
  let count : number = 0
  let currentNumber : number = start + 1
  let jumlah : number = 0
  const grid : number [][] = []

  while (count < width * height) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(currentNumber); i++){
      if (currentNumber % i === 0){
        isPrime = false
        break;
      }
    }

    if (isPrime) {
      if (count % width === 0) {
        grid.push([currentNumber])
      } else {
        grid[grid.length - 1].push(currentNumber)
      }
      count++
      jumlah += currentNumber
    }
    currentNumber++
  }
  for (let i = 0; i < grid.length; i++) {
    console.log(grid[i])
  }
  console.log(jumlah)
}

console.log('Test Case 1 - 2, 3, 13')
primaSegiEmpat(2, 3, 13)

console.log('Test Case 2 - 5, 2, 1')
primaSegiEmpat(5, 2, 1)

primaSegiEmpat(2, 3, 13)
/*
17 19
23 29
31 37
156
*/
primaSegiEmpat(5, 2, 1)
/*
2  3  5  7 11
13 17 19 23 29
129
*/