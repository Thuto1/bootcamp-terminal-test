import assert from "assert";
import yearsAgo from "../yearsAgo.js";
describe('How many years ago...' , function(){
  it('...well this is its function test' , function(){
    assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
  });

});