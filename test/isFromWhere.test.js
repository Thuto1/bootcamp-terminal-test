import assert from "assert";
import isFromBellville from "../isFromBellville.js";
describe('this is the...' , function(){
  it('...Bellville function' , function(){
    assert.equal(isFromBellville('CY 123'), true);
    assert.equal(isFromBellville('CJ 123'), false);
  });
});