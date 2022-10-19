function count() {
  let numbers = []

  for (i = 0; i <= 99; i++) {
    numbers.push(i + 1)
  }

  numbers.forEach((number, index) => {
    console.log(`[${index}]: ${number}`);
  })
}

count()
