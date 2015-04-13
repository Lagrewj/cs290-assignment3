/*
Input:
a: a whole, positive number

Output:
plus5: a number that is the sum of 5 and `a`
asString: a string that is just `a` converted to a string
yourNumberIs: a string that says "Your Number is `x`." where `x` is replaced by
in input `a`
a: the original a number
*/
function variableModification(a) {
  var plus5;
  var asString;
  var yourNumberIs;
  //your code here                         //checking type of a
  asString = String(a);                    //casting string
  yourNumberIs = "Your Number is " + a ;
  plus5 = parseInt(a) + 5;                 //parsing int as backup
  //end your code
  return [plus5, asString, yourNumberIs, a];
}

/*
Input:
b: could be anything

Output:
return true if b is a primitive string value (also known as a string literal),
false otherwise
*/
function isString(b) {
  //your code here
  if (typeof(b) == "string"){         //now lets check the type of b
    return true;                      //if string literal return true
  }
  else{
    return false;
  }
  //end your code
}

/*
Input:
c: could be anything

Output:
return true if c is null, false otherwise
*/
function isNull(c) {
  //your code here
    if (c === null){              //checking c, if null return true
    return true;
  }
  else{
    return false;
  }
  //end your code
}
