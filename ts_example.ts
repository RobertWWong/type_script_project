function fib(n: number){
  let memmoize : Array<number> = [0, 1];
  if (n < 2)
    return memmoize[n]

  for (let i = 2; i < n; i++)
  {
    memmoize.push(memmoize[i-1] + memmoize[i-2]);
    console.log(memmoize);
  }

  return memmoize[memmoize.length - 1]
}


let fibThis : number = fib(10);

console.log(fibThis);
