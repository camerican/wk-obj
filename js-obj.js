// Create a constructor for Multiplier
//  constructor will set currentValue to 1

function Multiplier() {
  this.currentValue = 1;
  this.getCurrentValue = function() {
    return this.currentValue;
  }
}


// 2 methods: getCurrentValue
//            multiply - takes an argument

// we'll practice using the Object
//  - instantiating it (via new)
//  - and we'll multiply a few times
//  - and getCurrentValue

// var multiplier1 = {
//  currentValue: 1,
//  getCurrentValue: function() {
//   return this.currentValue;
//    },
//    multiply: function( num ) {
//      this.currentValue = this.currentValue * num;
//      return this.currentValue;
//    }
// }

// Constructors will allow us to get 
// * all pre-configured attributes for free
//    by instantiating with "new" keyword
function Multiplier() {
  this.currentValue = 1;
  this.getCurrentValue = function() {
    return this.currentValue;
  }
  this.multiply = function(num) {
    this.currentValue = this.getCurrentValue() * num;
    //return this.currentValue;
    return this.getCurrentValue();
  }
}
var multiplier2 = new Multiplier();
// console.log(doer.currentValue);
console.log( multiplier2.getCurrentValue() );
console.log( multiplier2.multiply(2) );
console.log( multiplier2.getCurrentValue() );
console.log( multiplier2.multiply(4) );
console.log( multiplier2.getCurrentValue() );
