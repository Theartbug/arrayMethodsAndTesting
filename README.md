# arrayMethodsAndTesting

Objective
===
Implement functions that perform array operations similar to how they exist on the built-in JavaScript array object with TDD from Mocha and Chai. Create:
  - map
  - filter
  - every
  - reduce
  - forEach
  - indexOf
Have these methods manage holes in arrays.

Steps Taken
===

Start with creating tests for each method, then create the method. As a new test for a method was added, modify the method.

Reflection / Changes
===

I found reduce to be the most challenging method to implement, especially with the addition of a starting index. 
I was slightly frustrated with Chai's limited capabilities for testing how many times a function was called. Apparently there is something called Chai Spies that can help with those kinds of tests.
