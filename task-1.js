//zad1
function fib(n) {
  var a=1;
  var b=1;
  var n1=1;
  for (var i = 2; i < n; i++) {
    n1 = a + b;
    a = b;
    b = n1;
  }
  return n1;
}

var x = 3;

console.log(fib(x));


// zad2

function phiEstimation(n) {
  var a=fib(n);
  var b=fib(n-1);
  var phi=a/b;
  return phi;
}

// zad3

function reverseWords(n) {
  var a = n.split(' ');
  var b = a.reverse();
  var c = b.join(' ');
  // return c;
  return n.split(' ')
    .reverse()
    .join(' ');
}

console.log(reverseWords('lidid i vanin'));

// zad4

function reverseLetters(n) {
  var arrayOfWords = n.split(' ');
  var reverseWord = function(a) {
    // same as: x => x.split('').reverse().join('');
    // same as: (x) => { return x.split('').reverse().join(''); }
    return a.split('').reverse().join('');
  }
  return arrayOfWords.map(reverseWord).join(' ');
}

console.log(reverseLetters('abvgd js'));
