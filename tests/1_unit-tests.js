const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  suite('Test values',function() {
    test('Whole number input', function(done){
    let input = "32L";
    assert.equal(convertHandler.getNum(input), 32);
    done();
  });
    
    test('Decimal number input', function(done){
      let input = "32.2L" ;
      assert.equal(convertHandler.getNum(input), 32.2);
      done();
    });
    
    test('Fractional number input', function(done){
      let input = "2/2L";
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });
  
    test('Fractional input with a decimal', function(done){
      let input = "5.2/2L" ;
      assert.equal(convertHandler.getNum(input), 2.6);
      done();
    });
  
    test('Error on a double-fraction', function(done){
      let input = "2/2/2L" ;
      assert.equal(convertHandler.getNum(input), undefined);
      done();
    });
  
    test('Numerical input of 1 when no numerical input is provided', function(done){
      let input = "L";
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });
  
    test('Read each valid input unit', function(done){
      let input = "10L";
      assert.equal(convertHandler.getUnit(input), "L");
      done();
    });
  
    test('Return an error for an invalid input unit', function(done){
      let input = "10gr";
      assert.equal(convertHandler.getUnit(input), undefined);
      done();
    });
  
    test('Correct return unit for each valid input unit', function(done){
      let input = "L";
      assert.equal(convertHandler.getReturnUnit(input), "gal");
      done();
    });
  
    test('Return the spelled-out string unit for each valid input unit', function(done){
      let input = "L";
      assert.equal(convertHandler.spellOutUnit(input), "liters");
      done();
    });
  
    test('Convert gal to L', function(done){
      let initNum = 10;
      let initUnit = "gal";
      assert.equal(convertHandler.convert(initNum, initUnit), 37.8541 );
      done();
    });
  
    test('Convert L to gal', function(done){
      let initNum = 10;
      let initUnit = "L";
      assert.equal(convertHandler.convert(initNum, initUnit), 2.64172);
      done();
    });
  
    test('Convert mi to km', function(done){
      let initNum = 10;
      let initUnit = "mi";
      assert.equal(convertHandler.convert(initNum, initUnit), 16.0934);
      done();
    });
  
    test('Convert km to mi', function(done){
      let initNum = 10;
      let initUnit = "km";
      assert.equal(convertHandler.convert(initNum, initUnit), 6.21373);
      done();
    });
  
     test('Convert lbs to kg', function(done){
      let initNum = 10;
      let initUnit = "lbs";
      assert.equal(convertHandler.convert(initNum, initUnit), 4.53592);
      done();
    });
  
     test('Convert kg to lbs', function(done){
      let initNum = 10;
      let initUnit = "kg";
      assert.equal(convertHandler.convert(initNum, initUnit), 22.04624);
      done();
    });
  });
});