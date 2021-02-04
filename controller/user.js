const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongoURL = 'mongodb://localhost:27017';
var db;
const collection_name = 'userList';
MongoClient.connect(mongoURL, (err, connection) => {
	if (err) throw err;
	db = connection.db('user-management');
	console.log('Database connected');
});

exports.getUserList = (req, res) => {
	db.collection(collection_name)
		.find({ isActive: true })
		.toArray((err, result) => {
			if (err) throw err;
			res.send(result);
		});
};

exports.addUser = (req, res) => {
	const data = {
		name: req.body.name,
		city: req.body.city,
		phone: req.body.phone,
		email: req.body.email,
		isActive: req.body.isActive,
		role: req.body.role,
	};
	db.collection(collection_name).insert(data, (err, result) => {
		if (err) res.send(err);
		res.send('User added');
	});
	// res.send(data);
};
