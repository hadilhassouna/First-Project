const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const Items =  new Schema ({
    id:Number,
    name:  String ,
    time: String ,
    userName:String,
    userId:Number,
    views:Number,
    progilePicReviews:String,
    date:Date,
    projectId:String,
    projectInfo:String,
    imgInfo:String
});

const reviews =  new Schema ({
    profilePic:String,
    name:  String ,
    time: Number ,
    userName:String,
    comment: String

});
const img =  new Schema ({
    userid:Number,
    projectid:Number,
    itemid:Number,
    url:String,
    imgInfo:String,
    projectInfo:String,
    projectName:String
});



const Imgs = mongoose.model("img", img);
const review = mongoose.model("review", reviews);


const review1 =  new review ({

    profilePic:"String",
    name:  "String" ,
    time: 2 ,
    userName:"String",
    comment: "String"
});

const img1 =  new Imgs ({
    userid:1,
    projectid:1,
    itemid:1,
    url:"anuthing",
    imgInfo:"hhh",
    projectInfo:"data about project",
    projectName: "projectName"
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

// review1.save((error,result)=>{
//     if(error){
//         console.log("review error",error
//         )
//     }
//     else{
//     console.log("review don")
//     }
//     });

// savingToDb.save((error,result)=>{
// if(error){
//     console.log("err")
// }else{
//     console.log("data has been saved")
// };

// });


module.exports.Items=Items;
module.exports.Imgs=Imgs;
module.exports.reviews=reviews;



