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
  }

};