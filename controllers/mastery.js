const User = require("../models/User")

module.exports = {
    getDashboard: async (req,res)=>{
        try{
            res.render('course/dashboard.pug', {user:req.user})
        }catch(err){
            console.log(err)
        }
    },
    getArticles: (req,res)=>{
        res.render('funnel/articles.pug')
    },
    getAccount: async (req,res)=>{
        try{
            res.render('course/account.pug', {user:req.user})
        }catch(err){
            console.log(err)
        }
    }
  }
