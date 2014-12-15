var nodeEnv = process.env.NODE_ENV;

function is(env){
	if (!Array.isArray(env)) { env = [env]; }
	return env.some(function(e){
		return e === nodeEnv;
	});
}

function isNot(env){
	return !is(env);
}

module.exports = {
	is: is,
	isNot: isNot
};