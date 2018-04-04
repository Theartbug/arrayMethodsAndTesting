module.exports = {
  map(array, callback) {
    const newArr = [];
    for(let i = 0; i < array.length; i++) {
      if(!array.hasOwnProperty(i)) newArr.length++;
      else {
        const mutation = callback(array[i]);
        newArr.push(mutation);
      }
    }
    return newArr;
  },

  filter(array, callback) {
    const newArr = [];
    for(let i = 0; i < array.length; i++) {
      if(array.hasOwnProperty(i)) {
        if(callback(array[i])) newArr.push(array[i]);
      }
    }
    return newArr;
  },

  indexOf(array, callback) {
    for(let i = 0; i < array.length; i++) {
      if(array.hasOwnProperty(i)) {
        if(callback(array[i])) return i;
      }
    }
    return -1;
  },

  reduce(array, callback, initialValue = null) {
    const accumulator = initialValue ? initialValue : array[0];
    const startIndex = initialValue ? 0 : 1;
    let total = accumulator;

    for(let i = startIndex; i < array.length; i++) {
      if(array.hasOwnProperty(i)) {
        total = callback(total, array[i]);
      }
    }
    return total;
  },

  every(array, callback) {
    let correct = 0;
    for(let i = 0; i < array.length; i++) {
      if(array.hasOwnProperty(i)) {
        if(callback(array[i])) correct++;
        else return false;
      }
    }
    return true;
  }

};