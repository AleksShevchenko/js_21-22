var pow = require('../app.js');



describe("pow", function() {
  it("if exponent < 0 result will be < 1", function() {

    //prepare
    var result;

    //act
    result = pow.exponent(3, -2);

    //assert
    expect(result).toBe(0.1111111111111111);
  });

  it("if exponent equal 0 result will be 1", function() {

    //prepare
    var result;

    //act
    result = pow.exponent(99335, 0);

    //assert
    expect(result).toBe(1);
  });

  it("if exponent is a odd number and x < 0 result will be < 0", function() {

    //prepare
    var result;

    //act
    result = pow.exponent(-2, 5);

    //assert
    expect(result).toBe(-32);
  });
});
