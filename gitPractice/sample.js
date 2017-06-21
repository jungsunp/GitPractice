/**
 * Author: Jung Park
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
var Harshad = ( function() {
  'use strict';

  return {
    /**
     * Returns true when the given number is a valid Harshad number.
     *
     * @param {Number} number The given number
     * @returns {Boolean}
     * @function Harshad.isValid
     */
    isValid: function( number ) {
      // Your implementation goes here
      if (number === 0)
        return true;
      var numArr = number.toString().split("").map(Number);
      var sum = 0;
      for (var i = 0; i < numArr.length; i++){
        sum += numArr[i];
      }
      if (number % sum === 0)
        return true;
      else
        return false;
    },
    /**
     * Gets the next Harshad number after the given number.
     *
     * @param {Number} number The given number
     * @returns {Number}
     * @function Harshad.getNext
     */
    getNext: function( number ) {
      // Your implementation goes here
      var num = number;
      do {
        num ++;
      } while (!this.isValid(num))
      return num;
    },
    /**
     * Returns the suite of Harshad numbers, starting after a given number.
     *
     * @param {Number} count The number of elements to return
     * @param {Number} start The number after which the serie should start;
     *  defaults to 0
     * @returns {Array}
     * @function Harshad.getSerie
     */
    getSerie: function( count, start ) {
      // Your implementation goes here
      var arr = [], num, cnt = 0 ,idx;
      if (start === undefined)
        idx = 0;
      else
        idx = start;
      
      do {
        num = this.getNext(idx);
        //console.log(num);
        idx = num;
        arr[cnt] = idx;
        cnt ++;
      } while (cnt < count)
      return arr;
    }
  };

} () );