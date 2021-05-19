'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Designed to take a value and return it unchanged.
 * 
 * @peram {Value} any value: The thing you want to return
 * @returns {Value}: returns the value unchanged.
 */ 
 
function identity(value) {
    //return the value unchanged
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Designed to take a value and return it as a string.
 * 
 * @peram {value} any value: the thing you want to test
 * @returns {String} value: returns the value changed to a string.
 */ 
 
 function typeOf(value) {
    //if the value is an array
    if(Array.isArray(value)) {
        return "array";
    } else if(typeof value === "string") {
        return "string";
    } else if(value === null) {
        return "null";
    } else if(typeof value === "object") {
        return "object";
    } else if(value === undefined) {
        return "undefined";
    } else if(typeof value === "number") {
        return "number";
    } else if(typeof value === "boolean") {
        return "boolean";
    } else if(typeof value === "function") {
        return "function";
    }
}
module.exports.typeOf = typeOf;

/**
 * first: Designed to take an array and a number and if the value isnt an
 * array or a negative number, return an empty array. If the number is not
 * a number, return the first index in the array. if the number is greater
 * than the array's length, return the entire array. Otherwise, return the
 * first number item in the array.
 * 
 * @peram {Array} collection: an array
 * @peram {Number} value: a number
 * @returns {Array} collection: first index in the array
 * @returns {Number} value: first number item of the array
 * 
 */ 
 
function first(array, num) {
    //if its not an array or the number is less than 0
    if(!Array.isArray(array) || num < 0) {
        //return an empty array
        return [];
        //if its not a number
    } else if(!num || NaN) {
        //return the first index of the array
        return array[0];
        //if the number is greater than the array length
    } else if(num > array.length) {
        //return the entire array
        return array;
    }
    //otherwise return the first number item of the array
    return array.slice(array[0], num);
    
}
module.exports.first = first;
 
 /**
 * last: Designed to take an array and a number and if the value isnt an
 * array or a negative number, return an empty array. If the number is not
 * a number, return the last index in the array. if the number is greater
 * than the array's length, return the entire array. Otherwise, return the
 * last number item in the array.
 * 
 * @peram {Array} collection: an array
 * @peram {Number} value: a number
 * @returns {Array} collection: last index in the array
 * @returns {Number} value: last number item of the array
 * 
 */ 
 
 function last(array, num) {
    //if it's not an array or the number is less than 0
    if(!Array.isArray(array) || num < 0) {
        //return empty array
        return [];
        //if its not a number
    } else if(!num || NaN) {
        //return the last index in the array
        return array[array.length - 1];
        //if the number is greater than the array length
    } else if(num > array.length) {
        //return the entire array
        return array;
    }
    //otherwise return the last number item in the array
    return array.slice(array.length - num);
}
module.exports.last = last;

/**
 * indexOf: Designed to loop through a collection and return the 
 * index of the array that is the first occurance of the value.
 * 
 * @peram {Array} collection: an array to loop through
 * @peram {Value} value: the value inside of the array
 * @returns {Value} value: the value that is at the index of the
 * first occurance of the value
 */ 
 
 function indexOf(array, value) {
    //loop through the array
    for(var i = 0; i < array.length; i++) {
        //if the value is in the array
       if(array[i] === value) {
           //return the first index of the array that's the first occurrace of the value
           return i;
       }
    }
    //otherwise return -1
    return -1
    
}
module.exports.indexOf = indexOf;

/**
 * contains: Designed to loop through a collection and return either true 
 * or false ifgiven value is inside of the collection.
 * 
 * @peram {Array} collection: the array to loop through
 * @peram {Value} value: the value you're checking
 * @returns {Boolean} value: either true or false
 * 
 */ 
 
function contains(array, value) {
    //loop through the array
    for(var i = 0; i < array.length; i++) {
        //if the value is inside of the array
        if(array[i] === value) {
            //return true
            return true;
        }
    }
    //otherwise return false
    return false;
}
module.exports.contains = contains;

/**
 * unique: Designed to loop through a collection and returns a new
 * array of all elements from the input array with duplicates removed
 * 
 * @peram {Array} collection: the collection to loop through
 * @returns {Array} collection: a new array with all the duplicates removed
 * 
 */ 
 
 function unique(array) {
    //create empty array to push the duplicates into
    var newArr = [];
    //loop through initial array
for(var i = 0; i < array.length; i++) {
    //if the array already has the values init
    if(_.indexOf(array, array[i]) === i) {
        //push the duplicates into the empty array
        newArr.push(array[i]);
    }
}
//return the new array filled with the duplicates
    return newArr;
}
module.exports.unique = unique;

/**
 * filter: Designed to loop through a collection and return a new array with the filtered elements
 * inside of it.
 * 
 * @peram{Array} collection: the array to loop through
 * @peram{Function} test: the function to perform on the array
 * @returns {Array} collection: returns a new array with the filtered elements inside
 * 
 */ 
 
function filter(array, func) {
    var filterArr = []
   //loop through array
   for(var i = 0; i < array.length; i++) {
       //if the function is called
       if(func(array[i], i, array)) {
           //push those elements into the new array
           filterArr.push(array[i]);
       }
   }
   //return the new array
   return filterArr;
}
module.exports.filter = filter;

/**
 * reject: Designed to loop through an array and return a new array filled with the elements not tested
 * in the callback function.
 * 
 * @peram {Array} collection: array over which to loop
 * @peram {Function} test: the callback function
 * @returns {Array} collection: returns a new array with the elements inside
 * 
 */ 
 
 function reject(array, func) {
    
      var newArr = []
   //loop through array
   for(var i = 0; i < array.length; i++) {
       //if the function is not called
       if(!func(array[i], i, array)) {
           //push those elements into the new array
           newArr.push(array[i]);
       }
   }
   //return the new array
   return newArr;
    
}
module.exports.reject = reject;

/**
 * partition: Designed to loop through an array, if the callback function is ran, push the elements
 * into the new array starting at the first index, otherwise start at the second index
 * 
 * @peram {Array} collection: the array to loop over
 * @peram {Function} test: the callback function
 * @returns {Array} collection: the new array with the elements inside
 * 
 */ 
 
 function partition(array, func) {
    let trueAndFalseArr = [[],[]];
    
    for(let i = 0; i <= array.length - 1; i++) {
        
        if(func(array[i], i, array) === true) {
            
            trueAndFalseArr[0].push(array[i]);
            
        } else {
            
            trueAndFalseArr[1].push(array[i]);
        }
    }
    return trueAndFalseArr;
 }

module.exports.partition = partition;

/**
 *map: Designed to loop through an array and call the callback
 * function on the collection and return a new array.
 * 
 * @peram {Array or Object} collection: the array through which to loop through
 * @peram {Function} test: the callback function
 * @returns {Array} collection: new array with new values pushed into it.
 * 
 */
 
function map(collection, func) {
    var newArr = [];
    //use each to loop through collections
  _.each(collection, function(value, i, collection) {
      //call the function
    func(value, i, collection)
    //push the elements after the function has been called inot the new array
    newArr.push(func(value, i, collection));
  });
//return new array
  return newArr;
};
module.exports.map = map;

/**
 * pluck:
 * 
 */ 
 
function pluck(array, key) {
    
     return array.map(function(obj) {
      
    return obj[key];
  });
}
module.exports.pluck = pluck;

/**
 * every:
 * 
 * @peram {Array or Object} collection:
 * @peram {Function} test:
 * @returns {Boolean}: returns true or false;
 * 
 */ 
 
function every(collection, func) {
       if(func === undefined){
        for (let i = 0; i < collection.length; i++){
            if(collection[i] === false){
                return false;
            }
        }
        return true;
    }
    if(Array.isArray(collection)){
        // loop through array
        for (let i = 0; i < collection.length; i++){
            // call function on each index
            if(!(func(collection[i], i, collection))){
                return false;
            }
        }
        return true;
    }
    else if (typeof collection === "object"){
        // loop through object
        for (var key in collection){
            // call function on each property
            if(!(func(collection[key], key, collection))){
                return false;
            }
        }
    return true;
    }
}
module.exports.every = every;

/**
 * some: Designed to take a collection, loop through it and call the callback function
 * on some of the elements
 * 
 * @peram {Array or Object} collection: the array or object to loop through and check for
 * @peram {Function} test: the callback function
 * 
 */ 
 
function some(collection, func) {
     if(func === undefined){
        for (let i = 0; i < collection.length; i++){
            if(collection[i] === true){
                return true;
            }
        }
        return false;
    }
    if(Array.isArray(collection)){
        // loop through array
        for (let i = 0; i < collection.length; i++){
            // call function on each index
            if((func(collection[i], i, collection))){
                return true;
            }
        }
        return false;
    }
    else if (typeof collection === "object"){
        // loop through object
        for (var key in collection){
            // call function on each property
            if((func(collection[key], key, collection))){
                return true;
            }
        }
    return false;
    }
}
module.exports.some = some;

/**
 * reduce: Designed to loop through an array and call the function call
 * and return the seed.
 * 
 * @peram {Array} collection: the array over which to loop
 * @peram {Function} test: the callback function
 * @peram {Seed}: seed
 * @returns {Seed}: the new seed set to the new elements.
 * 
 */ 
 
function reduce(array, func, seed) {
 //check if seed exists/ not undefined
    if(seed !== undefined) {
       //if it does, then loop through array
       for(var i = 0; i < array.length; i++) {
           //reassign seed to be value of function call 
          //call the func function on seed, value, index
          seed = func(seed, array[i], i)
       }
       //return seed
       return seed;
    } else {
        //if no seed given, first value in array is the seed
        seed = array[0];
        //if it does, then loop through array
        for (var i = 1; i < array.length; i++) {
          //reassign seed to be value of function call 
          //call the func function on seed, value, index
          seed = func(seed, array[i], i);
        }
        return seed;
    }
    
};
module.exports.reduce = reduce;

/**
 * extend: Designed to take in objects and return a new object with the other ones inside of it.
 * 
 * @perams {Object} collection: the object you want to copy
 * @returns {Object} collection: the new object with the coppied object inside.
 * 
 */ 
 
function extend(obj1, ...obj2) {
    
var newObj = Object.assign(obj1, ...obj2)
    
return newObj;
}
module.exports.extend = extend;