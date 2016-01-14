var util = require('util');
var exec = require('child_process').exec;
var Q = require('q');

var qexec = function ( cmd ){
	var deferred = Q.defer();
	exec(cmd, function(error, stdout, stderr){
		if(error) {
			deferred.reject(error);
		} else {
			deferred.resolve(stdout, stderr);
		}
	});
	return deferred.promise;
};

var clear = function(){
	return qexec('clear').then(function(stdout, stderr){
		util.puts(stdout);
	});
};

var timeout = function(duration){
	var deferred = Q.defer();
	setTimeout(function(){
		deferred.resolve();
	}, duration);
	return deferred.promise;
}

exports.qexec = qexec;
exports.clear = clear;
exports.timeout = timeout;