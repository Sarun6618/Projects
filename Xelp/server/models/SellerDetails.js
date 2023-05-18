const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const SellerDetailsSchema=new Schema({
    Business:{
        type:String,
        required:true
    },
    ContactName:{
        type:String,
        required:true
    },
    ContactNo:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    GST:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    NameAsBank:{
        type:String,
        required:true
    },
    BankName:{
        type:String,
        required:true
    },
    BankAccNo:{
        type:Number,
        required:true
    },
    Branch:{
        type:String,
        required:true
    },
    IFSC:{
        type:String,
        required:true
    },
    PANCard:{
        type:String,
        required:true
    },
    // MSME:
    // {
    //     data:Buffer,
    //     contentType:String
    // }
})
const SellerDetails=mongoose.model('SellerDetails',SellerDetailsSchema,'SellerDetails');
module.exports=SellerDetails
