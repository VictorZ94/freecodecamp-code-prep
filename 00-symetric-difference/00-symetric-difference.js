export function sym(...args) {
  let array1 = args[0]

  for (let i = 0; i < args.length - 1; i++)
    array1 = calcSymDiff([...new Set(array1)], [...new Set(args[i + 1])])

  return array1;
}

export const calcSymDiff = (arr1, arr2) => {
  let symDiff = []
  const newArray = arr1.concat(arr2)

  newArray.map(num => {
    if (!symDiff.includes(num)) {
      symDiff.push(num)
      return
    }
    if (symDiff.indexOf(num) > -1) {
       symDiff.splice(symDiff.indexOf(num), 1)
       return
    }
  })

  return symDiff.sort();
}

