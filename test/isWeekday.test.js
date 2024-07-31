import assert from "assert";
import isWeekday from "../isWeekday.js";
describe('this is the...' , function(){
  it('...isWeekday function test' , function(){
    assert.equal(isWeekday('Saturday'), false);
    assert.equal(isWeekday('Sunday'), false);
    assert.equal(isWeekday('Monday'), true);
    assert.equal(isWeekday('Tuesday'), true);
    assert.equal(isWeekday('Wednesday'), true);
    assert.equal(isWeekday('Thursday'), true);
    assert.equal(isWeekday('Friday'), true);
});
});