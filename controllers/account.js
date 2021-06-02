const cloudinary = require("../middleware/cloudinary")

module.exports = {
    getAccount: async (req,res)=>{
        try{
            res.render('course/account.pug', {user:req.user})
        }catch(err){
            console.log(err)
        }
    }
}
