const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');
const router = express.Router();

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

//dabatase connectionString
const connectionString = 'mongodb://elclubber2:12345@cluster0-shard-00-00-wctlx.gcp.mongodb.net:27017,cluster0-shard-00-01-wctlx.gcp.mongodb.net:27017,cluster0-shard-00-02-wctlx.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
(async () => {
    // connects our back end code with the database
    mongoose.connect(connectionString, { useNewUrlParser: true });
})();


// this is our get method
// this method fetches all available data in our database
router.get('/getData', (req, res) => {
    Data.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

// this is our update method
// this method overwrites existing data in our database
router.post('/updateData', (req, res) => {
    const { id, update } = req.body;
    Data.findByIdAndUpdate(id, update, (err) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });
  
  // this is our delete method
  // this method removes existing data in our database
  router.delete('/deleteData', (req, res) => {
    const { id } = req.body;
    Data.findOneAndDelete({id: id}, (err) => {
      if (err) return res.send(err);
      return res.json({ success: true });
    });
  });
  
  // this is our create methid
  // this method adds new data in our database
  router.post('/putData', (req, res) => {
    let data = new Data();
  
    const { id, message } = req.body;
  
    if ((!id && id !== 0) || !message) {
      return res.json({
        success: false,
        error: 'INVALID INPUTS',
      });
    }
    data.message = message;
    data.id = id;
    data.save((err) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });

// append /api for our http requests
app.use('/api', router);

//production mode
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => { res.sendfile(path.join(__dirname = 'client/build/index.html')); })
}

//build mode
app.get('*', (req, res) => {
    mongoose.connect(connectionString, { useNewUrlParser: true });
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
})
//start server
app.listen(port, (req, res) => {
    console.log(`server listening on port: ${port}`);
})