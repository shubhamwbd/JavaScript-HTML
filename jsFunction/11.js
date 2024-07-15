function Second_Greatest_Lowest(arr) {
    
    arr.sort(function(a, b) {
      return a - b;
    });
    
    let secondLowest = arr[1];
    
    
    let reversedArr = arr.reverse();
    let secondGreatest = reversedArr[1];
    
    return [secondLowest, secondGreatest];
  }
  console.log(Second_Greatest_Lowest([1,2,3,4,5]));
  