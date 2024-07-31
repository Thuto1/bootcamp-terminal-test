import assert from "assert";
import transportFee from "../transportFee.js";
describe('Transport fee' , function(){
  it('...test' , function(){
    assert.equal(transportFee('morning'), 'R20');

    assert.equal(transportFee('afternoon'), 'R10');
    
    assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    
    
  });

});