const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const Items =  new Schema ({
    id:Number,
    name:  String ,
    time: String ,
    userName:String,
    userId:Number,
    userRelatedWorks:String,
    worksId:Number,
    views:Number,
    progilePicReviews:String,
    date:Date

});

const img =  new Schema ({
   
    itemid:Number,
    url:String,
    imgInfo:String
});

const Item = mongoose.model("item", Items);
const Imgs = mongoose.model("img", img);

const img1 =  new Imgs ({

    itemid:1,
    url:"anuthing",
    imgInfo:"hhh"
});

// var savingToDb = new Item({
//     image:"l",
//     imgInfo:"ola",
//     userName:"olathedog",
//     userId:45445,
//     userRelatedWorks:"Something",
//     worksId:33455,
//     views:33333,
//     progilePicReviews:"Something"

    

// });

// img1.save((error,result)=>{
// if(error){
//     console.log("img error",error
//     )
// }
// else{
// console.log("img don")
// }
// });


// savingToDb.save((error,result)=>{
// if(error){
//     console.log("err")
// }else{
//     console.log("data has been saved")
// };

// });


module.exports.Items=Items;
module.exports.Imgs=Imgs;
