export function pairwise(arr, arg) {
  if (arr.length < 1) return 0;
  let idx = []
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      //console.log("into loop", i, j)
      if (
          arr[i] + arr[j] === arg &&
          !idx.includes(i) &&
          !idx.includes(j)
        ) {
        idx.push(i);
        idx.push(j);
      }
    }
  }
  //console.log("idx", idx)
  return idx.reduce((accumulator, currentValue) => accumulator + currentValue)
}