if (!Array.prototype.includes) {
    Array.prototype.customIncludes = function(searchElement, fromIndex = 0) {
      // Handle invalid arguments
      if (this == null) {
        throw new TypeError('Array.prototype.includes called on null or undefined');
      }
  
      const obj = Object(this);
      const len = obj.length || 0;
      let n = fromIndex < 0 ? Math.max(len + fromIndex, 0) : fromIndex;
  
      while (n < len) {
        if (Object.is(obj[n], searchElement)) { // Strict equality check
          return true;
        }
        n++;
      }
      return false;
    };
  }
  