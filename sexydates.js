/**
 * SexyDates.js
 * Motivated by https://github.com/nubbel/SexyDates
 *
 * Copyright (c) 2014 Kargnas. All rights reserved.
 */

var SexyDates = {
	unitFactors: {
		second: 1,
		minute: 60,
		hour: 60 * 60,
		day: 60 * 60 * 24,
		week: 60 * 60 * 24 * 7,
		month: 60 * 60 * 24 * 30,
		year: 60 * 60 * 24 * 30 * 12 // @FIXME: 360 days
	},
	numberForUnit: function(unit){
		return SexyDates.unitFactors[unit];
	},
	Test: function(){
		// seconds == seconds
		console.log((0).second().ago() + " - now");
		console.log((1).second().ago() + " - 1 second ago from now");

		console.log((1).second().since((1).day().ago()) + " - passed 1 second from yesterday");
		console.log((3).second().fromNow() + " - passed 3 second from now");

		console.log((1).year().fromNow() + " - year ago from now");
	}
};

Number.prototype.second = function(){
	return this.byUnit('second');
};

Number.prototype.seconds = function(){
	return this.byUnit('second');
};

Number.prototype.minute = function(){
	return this.byUnit('minute');
};
Number.prototype.minutes = function(){
	return this.byUnit('minute');
};

Number.prototype.hour = function(){
	return this.byUnit('hour');
};

Number.prototype.hours = function(){
	return this.byUnit('hour');
};

Number.prototype.day = function(){
	return this.byUnit('day');
};

Number.prototype.days = function(){
	return this.byUnit('day');
};

Number.prototype.week = function(){
	return this.byUnit('week');
};

Number.prototype.weeks = function(){
	return this.byUnit('week');
};

Number.prototype.month = function(){
	return this.byUnit('month');
};

Number.prototype.months = function(){
	return this.byUnit('month');
};

Number.prototype.year = function(){
	return this.byUnit('year');
};

Number.prototype.years = function(){
	return this.byUnit('year');
};

Number.prototype.byUnit = function(unit){
	return this + SexyDates.numberForUnit(unit);
};

// same as before
Number.prototype.ago = function(){
	return this._afterFrom(new Date(), true);
};

Number.prototype.agoFrom = function(date){
	return this._afterFrom(date, true);
};

// same as after
Number.prototype.since = function(date){
	return this._afterFrom(date);
};

// same as after
Number.prototype.fromNow = function(){
	return this._afterFrom(new Date());
};

Number.prototype._afterFrom = function(date, minus){
	var from = (typeof date == 'undefined' ? new Date() : new Date(date)),
		to = new Date(),
		seconds = (typeof minus == 'undefined' ? this : (minus == true ? this * -1 : this));

	to.setTime(from.getTime() + seconds * 1000);
	return to;
};
