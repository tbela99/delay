/*
---
script: delay.js
license: MIT-style license.
description: delayed each implementation.
copyright: Copyright (c) 2011 Thierry Bela
authors: [Thierry Bela]

...
*/

Object.extend('eachDelay', function (object, fn, delay, bind) {

	for (var key in object) if (object.hasOwnProperty(key)) fn.delay(delay, bind, [object[key], key, object])
});

Array.implement({

	invokeDelay: function(methodName, delay){

		var args = Array.slice(arguments, 2);
		for(var i = 0; i < this.length; i++) this[i][methodName].delay(delay, this[i], args)
	},

	eachDelay: function (fn, delay, bind) {

		for(var i = 0; i < this.length; i++) fn.delay(delay, bind, [this[i], i, this])
	}
});
