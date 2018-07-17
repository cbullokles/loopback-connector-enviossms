exports.initialize = function initializeDataSource(dataSource, callback) {
	dataSource.connector = new EnviosSMS(dataSource);
	process.nextTick(() => {
		callback();
	});
};

class EnviosSMS {
    constructor(dataSourceProp){
        var username = dataSourceProp.username;
        var password = dataSourceProp.password;
        this.baseURL  = "http://api.enviossms.com/sms/1/text/single";
        this.headers = { "Content-Type": "application/json" };
        
        var Client = require('node-rest-client').Client;
        this.client = new Client({'user': username, 'password': password});
        this.client.registerMethod("sendSMS", "http://api.enviossms.com/sms/1/text/single", "POST");
    };
	
    create(model, data, callback) {
        var smsmessage = {
            "data": data,
            "headers": this.headers 
        } ;
        console.log(`Sending: ${smsmessage}`)
        this.client.methods.sendSMS(smsmessage, callback);
    };
    
    send(data, callback) {
        var smsmessage = {} ;
        smsmessage.data = data;
        smsmessage.headers = this.headers;
        this.client.methods.sendSMS(smsmessage, callback);
	};
}

exports.EnviosSMS = EnviosSMS;