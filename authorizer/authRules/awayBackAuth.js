var permissionLevels = require('../permissionWeights.js');
module.exports = function(core){
	core.on('back', function(action, callback){
		if(!action.room.guides || !action.room.guides.readLevel) return callback();
		if(action.room.guides.readLevel === undefined) action.room.guides.readLevel = 'guest';
		if(permissionLevels[action.room.guides.readLevel] <= permissionLevels[action.role]) return callback();
		else return callback(new Error('ERR_NOT_ALLOWED'));
	}, "authorization");
};