const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const Items =  new Schema ({
    name:  String ,
    time: String ,
    image :String,
    imgInfo:String,
    userName:{type:String, unique:true},
    userId:Number,
    userRelatedWorks:String,
    worksId:Number,
    views:Number,
    progilePicReviews:String,
    date:Date

},
{ timestamps: true }
)

const Item = mongoose.model("item", Items);
var s1 = new Item({
    image:"l",
    imgInfo:"hadil",
    userName:"hasamardil",
    userId:45445,
    userRelatedWorks:"Something",
    worksId:33455,
    views:33333,
    progilePicReviews:"Something"

    

})

s1.save((error,result)=>{
if(error){
    console.log("err")
}else{
    console.log("don")
}

});


module.exports.Items=Items;
