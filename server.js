
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require ("body-parser");

const app = express();

app.use(express.static(__dirname + "/client/dist"));
app.use(express.static(__dirname+"/client/src/components"))
// //Config DB 
const URI = require("./config/keys").mongoURI;
console.log(URI)
mongoose.connect(URI, { autoIndex: false });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log(" we're connected");
});

app.use(bodyParser.json());
const Item = require("./models/item.js").Item;
const Imgs = require("./models/item.js").Imgs;
const rev = require("./models/item.js").rev;
const userinfo = require("./models/item.js").Userinfo;
const others = require("./models/item.js").Others;




app.get("/imgs", (req, res) => {
 // res.send("Home Page")
 Imgs.find()
    .then(Imgs => res.json(Imgs));
})
app.get("/relate", (req, res) => {
    console.log("relate server", req.body);       
    // res.send("Home Page")
    //var relate = req.body;
    // res.send("ddd")
    others.find({},(err,data)=>{
        console.log(data)
        res.send(data)
    })
//     others.find({})
//        .then( 
//            relate => res.json(relate));
   })

app.get("/userinfo", (req, res) => {
    // res.send("Home Page")
    userinfo.find()
       .then(Userinfo => res.json(Userinfo));
   })

   app.get("/Reviewers", (req, res) => {
console.log("he.....")
    // res.send("Home Page")
    rev.find({})
       .then(Userinfo =>{ 
           console.log("fffffff",Userinfo)
            res.json(Userinfo)});
        
      
   })
app.post("/items", (req, res) => {
 const newItem = Item({ name: req.body.name})
 newItem.save().then(item => res.json(item));
})
const port = process.env.PORT || 5000;
app.listen(port, () => {
console.log("server started on port" + port)});



// app.use(bodyParser.json());
// const Item = require ("./models/item.js").Item;

// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// app.get('/items',
//  cors(corsOptions),
//   function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for only example.com.'})
// })
// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })

// // app.get("/items" , (req,res) => {
// // Item.find({})
// // .sort({date:-1})
// // .then(items => res.json(items));
// //  })
// //  app.post("items", (req,res)=> {
// //      const newItem = Item({image : req.body.image})
// //      newItem.save().then(item => res.json(item));
// //  })

// app.use(cors());
// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log('server started on port ' + port));


