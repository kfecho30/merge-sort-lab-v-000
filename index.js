function findMinAndRemoveSorted(arr) {
  return arr.shift()
}

function merge(arr1, arr2){
  let merged = []
  while(arr1.length != 0 && arr2.length != 0){
    if(arr1[0] > arr2[0]) {
      merged.push(arr2.shift())
    } else {
      merged.push(arr1.shift())
    }
  }
  return merged.concat(arr1).concat(arr2)
}
