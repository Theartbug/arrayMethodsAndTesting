module.exports = {
  map(array, callback, index = 0) {
    const newArr = [];
    for(let i = index; i < array.length; i++) {
      if(!array.hasOwnProperty(i)) newArr.length++;
      else {
        const mutation = callback(array[i]);
        newArr.push(mutation);
      }
    }
    return newArr;
  },

  filter(array, callback, index = 0) {
    const newArr = [];
    for(let i = index; i < array.length; i++) {
      if(array.hasOwnProperty(i)) {
        if(callback(array[i])) newArr.push(array[i]);
      }
    }
    return newArr;
  },

  indexOf(array, callback, index = 0) {
    for(let i = index; i < array.length; i++) {
      if(array.hasOwnProperty(i)) {
        if(callback(array[i])) return i;
      }
    }
    return -1;
  },

  reduce(array, callback, initialValue = null, index = 0) {
    let startIndex = 0;
    if(initialValue && index === 0) startIndex = 0;
    if(!initialValue && index === 0) startIndex = 1;
    if(index !== 0) startIndex = index + 1;
    const startIndexValue = array[index] ? array[index] : 0; //make sure starting input is valid
    let total = initialValue ? initialValue : startIndexValue; 

    for(let i = startIndex; i < array.length; i++) {
      if(array.hasOwnProperty(i)) {
        total = callback(total, array[i]);
      }
    }
    return total;
  },

  every(array, callback, index = 0) {
    for(let i = index; i < array.length; i++) {
      if(array.hasOwnProperty(i)) {
        if(!callback(array[i])) return false;
      }
    }
    return true;
  },

  forEach(array, callback, index = 0) {
    for(let i = index; i < array.length; i++) {
      if(array.hasOwnProperty(i)) callback(array[i]);
    }
    return undefined;
  }

};