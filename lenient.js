'use strict';

var YES_MATCH_SCORE_THRESHOLD = 2;
var NO_MATCH_SCORE_THRESHOLD = 1.25;

var yMatch = {
	5: .25,
	6: .25,
	7: .25,
	t: .75,
	y: 1,
	u: .75,
	g: .25,
	h: .25,
	k: .25
};

var eMatch = {
	2: .25,
	3: .25,
	4: .25,
	w: .75,
	e: 1,
	r: .75,
	s: .25,
	d: .25,
	f: .25
};

var sMatch = {
	q: .25,
	w: .25,
	e: .25,
	a: .75,
	s: 1,
	d: .75,
	z: .25,
	x: .25,
	c: .25
};

var nMatch = {
	h: .25,
	j: .25,
	k: .25,
	b: .75,
	n: 1,
	m: .75
};

var oMatch = {
	9: .25,
	0: .25,
	i: .75,
	o: 1,
	p: .75,
	k: .25,
	l: .25
};

function getYesMatchScore(val) {
	var score = 0;
	var y = val[0];
	var e = val[1];
	var s = val[2];
	if (yMatch.hasOwnProperty(y)) {
		score += yMatch[y];
	}
	if (eMatch.hasOwnProperty(e)) {
		score += eMatch[e];
	}
	if (sMatch.hasOwnProperty(s)) {
		score += sMatch[s];
	}
	return score;
}

function getNoMatchScore(val) {
	var score = 0;
	var n = val[0];
	var o = val[1];
	if (nMatch.hasOwnProperty(n)) {
		score += nMatch[n];
	}
	if (oMatch.hasOwnProperty(o)) {
		score += oMatch[o];
	}
	return score;
}

module.exports = function (val) {
	val = String(val).trim();

	if (getYesMatchScore(val) >= YES_MATCH_SCORE_THRESHOLD) {
		return true;
	}

	if (getNoMatchScore(val) >= NO_MATCH_SCORE_THRESHOLD) {
		return false;
	}

	return null;
};
