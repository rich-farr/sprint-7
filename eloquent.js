//Eloquent Javascript Chapter 3
//Exercise One:
function min(x, y) {
	return Math.min(x, y);
};
console.log(min(0, 10));
console.log(min(0, -10));

//Exercise Two:
function isEven(number) {
  	number = Math.abs(number);
	if (number % 2 === 0) {
      return true;
    } else if (number % 2 === 1) {
      return false;
    } else isEven(number - 2);
};
console.log(isEven(50));
console.log(isEven(175));
console.log(isEven(-1));

//Exercise Three:
var total1 = 0;
function countBs(str) {
	for (var i = 0; i < str.length; i++) {
     if (str.charAt([i]) == 'B')
      total1 += 1;
    }
  return total1;
};
console.log(countBs("BBC"));

var total2 = 0;
function countChar(str, char) {
	for (var i = 0; i < str.length; i++) {
     if (str.charAt([i]) == char)
      total2 += 1;
    }
  return total2;
};
console.log(countChar("kakkerlak", "k"));