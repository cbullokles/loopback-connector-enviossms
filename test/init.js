
module.exports = require('should');

var DataSource = require('loopback-datasource-juggler').DataSource;

var config = {};
config = {
	username: "Fukuroo",
	password: "fukuroo123",
	baseURL: "http://api.enviossms.com/sms/1/text/single", // eslint-disable-line max-len
};

global.config = config;

global.getDataSource = global.getSchema = function(customConfig) {
	var ds = new DataSource(require('../'), customConfig || config);
	ds.log = function(a) {
		console.log(a);
	};

	return ds;
};
