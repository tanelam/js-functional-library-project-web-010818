fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      if (typeof collection === 'object') {
        for (let i in collection){
          let element = collection[i];
            iteratee(element);
          };
        }else{
        for (let i = 0; i < collection.length; i++){
          let element = collection[i];
            iteratee(element);
          }
        }
      return collection;
    },

    map: function(collection, iteratee) {
      let newArray = []
      if (typeof collection === 'object'){
        for (let i in collection) {
          let element = collection[i]
            newArray.push(iteratee(element))
          }
        }else{
          for (let i = 0; i < collection.length; i++) {
            let element = collection[i]
              newArray.push(iteratee(element))
        }
      }
        return newArray
    },

    reduce: function(collection, iteratee, acc) {
      let newValue = acc;
        for(let i = 0; i < collection.length; i++){
          return newValue += collection[i]
        }
      return newValue;
    },

    find: function(collection, predicate) {
      for( let i = 0; i < collection.length; i++){
        if (predicate(collection[i]) === true){
          return true;
        }
      }
      return false;
    },

    filter: function(collection, predicate){
      let newArray = [];
      for( let i = 0; i < collection.length; i++){
        if (predicate(collection[i]) === true){
           newArray.push(collection[i]);
        }
      }
      return newArray;
    },

    size: function(collection) {
      let sum = 0;
      if (typeof collection === 'object') {
        for (let i in collection){
          let element = collection[i];
          sum++;
          };
        }else{
        for (let i = 0; i < collection.length; i++){
          let element = collection[i];
            element;
            sum++;
          }
        }
      return sum;
    },

    first: function(array, n = 0) {
      if(n !== 0){
        let newItem = array.slice(0, n);
        return newItem;
      }else{
        return array[0]
      }
    },

    last: function(array, n = 0) {
      if(n !== 0){
        let newItem = array.slice(n - 2);
        return newItem;
      }else{
        return array[array.length -1];
      }
    },


    compact: function(array) {
      let newArray = []
      for(let i = 0; i < array.length; i++){
        if (array[i]) {
          newArray.push(array[i])
        }
      }
     return newArray
    },

    sortBy: function(array, iteratee) {
      // let sortedArray = []
      // if (typeof array[i] === "number"){
      //   for (let i = 0; i < array.length; i++){
      //   // if ((array[i] <=> array[i + 1]) === 1){
      //   //   sortedArray.push(array[i + 1]);
      //   //   sortedArray.push(array[i]);
      //   //}
      // }else {
      //   for (let i = 0; i < array.length; i++){
      //
      //   }
      //   }
      // }
      // return sortedArray
    },

    flatten: function(array, shallow) {


    },

    uniq: function(array, isSorted, iteratee) {
      // let newArray = []
      // if (iteratee) {
      // for(let i = 0; i < array.length; i++){
      //   iteratee(array[i])
      // }
      // for(let i = 0; i < array.length; i++){
      //   if (newArray.includes(array[i]) === false){
      //     newArray.push(array[i])
      //    }
      //   }
      // }
      // return newArray
    },

    keys: function(object) {
      let newArr = []
      for(let key in object){
        newArr.push(key)
      }
      return newArr
    },

    values: function(object) {
      let newArr = []
      for(let key in object){
        newArr.push(object[key])
      }
      return newArr
    },


    functions: function(object) {
      let functionsArr = []
      for(let key in object){
        if (typeof object[key] === "function"){
          functionsArr.push(object[key])
        }
      }
      return functionsArr
    },

    giveMeMore: function() {


    }

  }
})()

fi.libraryMethod()
