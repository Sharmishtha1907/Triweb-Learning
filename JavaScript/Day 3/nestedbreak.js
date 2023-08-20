//inner break;
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(i, " ", i);
    if (j == 3) {
      break;
    }
  }
}
console.log("________________________________");

//outer break
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(i, " ", i);
  }
  if (i == 3) {
    break;
  }
}
console.log("________________________________");
for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  for (let j = 1; j <= 5; j++) {
    console.log(i, " ", i);
  }
}

/* OUTPUT
1   1
1   1
1   1
2   2
2   2
2   2
3   3
3   3
3   3
4   4
4   4
4   4
5   5
5   5
5   5
________________________________
1   1
1   1
1   1
1   1
1   1
2   2
2   2
2   2
2   2
2   2
3   3
3   3
3   3
3   3
3   3
________________________________
1   1
1   1
1   1
1   1
1   1
2   2
2   2
2   2
2   2
2   2

*/
