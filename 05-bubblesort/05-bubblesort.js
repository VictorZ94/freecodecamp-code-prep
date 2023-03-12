export function bubbleSort(array) {
  // Only change code below this line
  let arrayIsSorted = false;
  while (!arrayIsSorted) {
    let counter = 0;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      } else {
        counter++
      }
    }
    if (counter === array.length - 1) {
      arrayIsSorted = true;
    }
  }
  return array;
  // Only change code above this line
}
