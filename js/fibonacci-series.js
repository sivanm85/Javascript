function fibonacciGenerator(n) {
  let fibonacciSeries = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
  }
  return fibonacciSeries;
}

const fibNumbers = fibonacciGenerator(10);
document.getElementById("demo").innerHTML = fibNumbers.join(", ");
