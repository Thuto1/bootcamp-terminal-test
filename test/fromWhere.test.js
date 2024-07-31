import assert from "assert";
import fromWhere from "../fromWhere.js";
describe('This the fromWhere...' , function(){
  it('...testing function' , function(){
    assert.equal(fromWhere('CY 567489'), 'Bellville'); 
    assert.equal(fromWhere('CJ 343502'), 'Paarl');
    assert.equal(fromWhere('CA 987504'), 'Cape Town');
    assert.equal(fromWhere('ZN 568593'), 'Some other place!');
  });

});