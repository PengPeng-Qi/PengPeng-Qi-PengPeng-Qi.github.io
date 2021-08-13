'use strict'
var mergeTwoLists = function (l1, l2) {
  if (l1 == [] && l2 == []){
    return [];
  }
  if (l1 == [] && l2 != []){
    Str = l2;
  }
  if (l2 == [] && l1 != []){
    Str = l1;
  }

  let l1Str = l1.join('');
  let l2Str = l2.join('');
  var Str = l1Str.concat(l2Str);
  let Arr = Str.split('');
  for (let i = 0; i < Arr.length; i++){
    let temp;
    for (let j = i; j < Arr.length - 1; j++){
      if (Arr[j] > Arr[j + 1]){
        temp = Arr[j];
        Arr[j] = Arr[j + 1];
        Arr[j + 1] = temp;
      }
    }
  }
  console.log(Arr);
  // console.log(l1Str, l2Str);
  // console.log(Str);
};
var end = mergeTwoLists([1, 2, 4], [1, 3, 4]);