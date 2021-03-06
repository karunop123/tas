/**
 * Test of Tas.js
 * (c) 2017 Owen Luke
 * https://github.com/tasjs/tas
 * Released under the MIT License.
 */

define(['../tas', '../tester', './this.done'],
function(tas, tester, runner) {

	tas(function () {
		var exp = 'object';
		var val = typeof runner.get();
		tester.test("3.as promise: this.done", tas, exp, val);
	});
});
