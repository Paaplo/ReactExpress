module.exports = {
	development: process.env.MONGO_URI || 'localhost/db',
    test: process.env.MONGO_URI ||  'localhost/db-test'
};