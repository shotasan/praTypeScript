let a: number
let b: number

function main(a: number, b: number) {
  let tmp: number
  let r: number

  if (a < b) {
    tmp = a;
    a = b;
    b = tmp;
  }

  r = a % b;
  while (r != 0) {
    a = b;
    b = r;
    r = a % b;
  }

  console.log(b);
}

main(48, 72);