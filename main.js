function findOutlier(integers){
  let odd = 0, even = 0;
  for (let i = 0; i < 3; i++) {
    if (integers[i] % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }
  if (even > odd) {
    for (let o = 0; o < integers.length; o++) {
      if (integers[o] % 2 != 0) {
        return integers[o];
      }
    }
  } else {
    for (let e = 0; e < integers.length; e++) {
      if (integers[e] % 2 == 0) {
        return integers[e];
      }
    }
  }
}
