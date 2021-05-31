const Imgs = require("../models/imgs")
const cloudinary = require("../middleware/cloudinary")

module.exports = {
    getAccount: async (req,res)=>{
        try{
            res.render('course/account.pug', {user:req.user})
        }catch(err){
            console.log(err)
        }
    },
    createPost: async (req, res) => {
      try {
        const result = await cloudinary.uploader.upload(req.file.path);

        await Imgs.create({
          googleId: req.user.googleId,
          filename: result.secure_url,
          cloudinaryId: result.public_id,
          like: 0,
          userLikes: [],
          caption: req.body.caption
        });

        if(req.file) {
          res.redirect("course/account")
        }
      } catch (err) {
        console.log(err)
      }
    },
    updateLike: async (req, res)=>{
        let currentLike = Number(req.body.like)
        if(await Imgs.findOne({_id:req.body.postIdFromJSFile}).find({ userLikes: { $in: [req.user.googleId] } }) == false){
          try{
              await Imgs.findOneAndUpdate({_id:req.body.postIdFromJSFile}, {
                like: currentLike + 1,
                $push: {userLikes: req.user.googleId},
              })
              res.json('Added Like')  // This line is needed to update page - Indirectly Fixes a Type Error?
          }catch(err){
              console.log(err)
          }
        } else {
          let currentLike = Number(req.body.like)
          try{
              await Imgs.findOneAndUpdate({_id:req.body.postIdFromJSFile}, {
                like: currentLike - 1,
                $pull: {userLikes: req.user.googleId},
              })
              res.json('Removed Like')  // This line is needed to update page - Indirectly Fixes a Type Error?
          }catch(err){
              console.log(err)
          }
        }
    },
    deletePost: async (req, res)=>{
        try{
            let post = await Imgs.findById({ _id: req.body.postIdFromJSFile})
            await cloudinary.uploader.destroy(post.cloudinaryId)
            await Imgs.findOneAndDelete({_id:req.body.postIdFromJSFile})
            res.redirect("course/account")
        }catch(err){
            console.log(err)
        }
    }
}
