const {
    customerName,
    upperCaseCustomerName,
    setBestCustomer,
    overwriteBestCustomer,
    changeLeastFavoriteCustomer
  } = require('../phase-1-scope-lab'); // Adjust the path as needed
  
  const assert = require('assert');
  
  describe('Fix the Scope', function() {
    // Test case 1: Ensure customerName is 'bob' in global scope
    it('declare customerName to be bob in global scope', function() {
      assert.strictEqual(global.customerName, 'bob');
    });
  
    // Test case 2: Test upperCaseCustomerName function
    it('upperCaseCustomerName() modifies the customerName variable', function() {
      upperCaseCustomerName();
      assert.strictEqual(global.customerName, 'BOB');
    });
  
    // Test case 3: Test setBestCustomer function
    it('setBestCustomer() sets bestCustomer', function() {
      setBestCustomer();
      assert.strictEqual(global.bestCustomer, 'not bob');
    });
  
    // Test case 4: Test overwriteBestCustomer function
    it('overwriteBestCustomer() overwrites the best customer', function() {
      overwriteBestCustomer();
      assert.strictEqual(global.bestCustomer, 'maybe bob');
    });
  
    // Test case 5: Test changeLeastFavoriteCustomer function
    it('changeLeastFavoriteCustomer() unsuccessfully tries to reassign the least favorite customer', function() {
      // Ensure the function does not throw an error
      assert.throws(changeLeastFavoriteCustomer, TypeError);
    });
  });
  