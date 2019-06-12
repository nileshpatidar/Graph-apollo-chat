const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/graphql", { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }).then(() => {
    console.log(`Database: graphql connected successfully.`);
}, connectionError => {
    console.log(`Database connection error: ${connectionError}`);
});
mongoose.Promise = global.Promise;

module.exports = mongoose;