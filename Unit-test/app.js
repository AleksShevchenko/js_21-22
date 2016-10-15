var pow = {
	exponent: function (x, n) {
		var result = x;

		    if (n > 0) {
      for (var i = 1; i < n; i++) {
        result *= x;
      }
      console.log('Результат равен  ' + result);
      return result;
    } else if (n === 0) {
      result = 1;
        console.log('Результат равен  ' + result);
        return 1;
    } else if (n < 0) {
      for (i = -1; i > n; i--){
      result *= x;
      }
      result = 1 / result;
        console.log('Результат равен  ' + result);
        return result;
    }
	}
};


module.exports = pow;