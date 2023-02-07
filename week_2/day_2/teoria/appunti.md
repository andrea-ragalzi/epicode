# Le Variabili

## const  
- La const keyword e stata introdotta in ES6 (2015).

- Le variabili definite con cont non possono essere ridichiarate.

- Le variabili definite con cont non possono essere riassegnate.

- Le variabili definite con cont sono block scope.
  
      const PI = 3.141592653589793;  
      PI = 3.14;      // This will give an error  
      PI = PI + 10;   // This will also give an error  

## var

L'istruzione var dichiara una variabile.

Le variabile sono contenitori per storicizzare informazioni.

var carName;  
carName = "Volvo";  
var carName = "Volvo";

Le variabili dichiarate dentro a un { } blocco non sono viste all'esterno.

## let

- La keyword let e stata introdotta con ES6 (2015).

- Le variabili definite con let non possono essere ridichiarate.

- Le variabili definite con let devono essere definite prima di essere usate.

- Le variabili definite con let sono block scope.

      let name1;
      let name1 = value1;
      let name1 = value1, name2 = value2;
      let name1, name2 = value2;
      let name1 = value1, name2, /* …, */ nameN = valueN;

 ### Block Scope  
   
 Prima di ES6 (2015), JavaScript aveva solo Global Scope e Function Scope.

 ES6 introduced two important new JavaScript keywords: let and const.

 These two keywords provide Block Scope in JavaScript.

 Variables declared inside a { } block cannot be accessed from outside the block:

 __ECMAScript6 (ES6 / JavaScript 2015) encourage you to declare variables with let not var.__

 ## Datatypes

- Stringa
- Numerico
  - Int
  - FLoat
- Booleano
  - True
  - False
- Null
- Undefined




