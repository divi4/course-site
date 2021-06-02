const User = require("../models/User")
const dict = [
  {
    vid0: {
      title: "How to be great",
      description: "I'll teach you to be great",
      link: "https://www.youtube.com/embed/GEhEUy85PsY",
      duration: "4.56"
    },
    vid1: {
      title: "How to be great2",
      description: "I'll teach you to be great2",
      link: "https://www.youtube.com/embed/GEhEUy85PsY",
      duration: "4.56"
    },
    vid2: {
      title: "How to be great3",
      description: "I'll teach you to be great3",
      link: "https://www.youtube.com/embed/GEhEUy85PsY",
      duration: "4.56"
    },
    vid3: {
      title: "How to be great4",
      description: "I'll teach you to be great4",
      link: "https://www.youtube.com/embed/GEhEUy85PsY",
      duration: "4.56"
    },
  },
  {
    vid0: {
      title: "How to be awesome",
      description: "I'll teach you to be awesome",
      link: "https://www.youtube.com/embed/yahBtp_1jWE",
      duration: "4.56"
    },
    vid1: {
      title: "How to be awesome2",
      description: "I'll teach you to be awesome2",
      link: "https://www.youtube.com/embed/yahBtp_1jWE",
      duration: "4.56"
    },
    vid2: {
      title: "How to be awesome3",
      description: "I'll teach you to be awesome3",
      link: "https://www.youtube.com/embed/yahBtp_1jWE",
      duration: "4.56"
    },
    vid3: {
      title: "How to be awesome4",
      description: "I'll teach you to be awesome4",
      link: "https://www.youtube.com/embed/yahBtp_1jWE",
    },
  },
  {
    vid0: {
      title: "How to be sick",
      description: "I'll teach you to be sick",
      link: "https://www.youtube.com/embed/y3Xn9A4Negk",
      duration: "4.56"
    },
    vid1: {
      title: "How to be sick2",
      description: "I'll teach you to be sick2",
      link: "https://www.youtube.com/embed/y3Xn9A4Negk",
      duration: "4.56"
    },
    vid2: {
      title: "How to be sick3",
      description: "I'll teach you to be sick3",
      link: "https://www.youtube.com/embed/y3Xn9A4Negk",
      duration: "4.56"
    },
    vid3: {
      title: "How to be sick4",
      description: "I'll teach you to be sick4",
      link: "https://www.youtube.com/embed/y3Xn9A4Negk",
      duration: "4.56"
    },
  },
  {
    vid0: {
      title: "How to be a mad ladd",
      description: "I'll teach you to be a mad ladd",
      link: "https://www.youtube.com/embed/y3Xn9A4Negk",
      duration: "4.56"
    },
    vid1: {
      title: "How to be a mad ladd2",
      description: "I'll teach you to be a mad ladd2",
      link: "https://www.youtube.com/embed/y3Xn9A4Negk",
      duration: "4.56"
    },
    vid2: {
      title: "How to be a mad ladd3",
      description: "I'll teach you to be a mad ladd3",
      link: "https://www.youtube.com/embed/y3Xn9A4Negk",
      duration: "4.56"
    },
    vid3: {
      title: "How to be a mad ladd4",
      description: "I'll teach you to be a mad ladd4",
      link: "https://www.youtube.com/embed/y3Xn9A4Negk",
      duration: "4.56"
    },
  }
]

module.exports = {
    getDashboard: async (req,res)=>{
        try{
            res.render('course/dashboard.pug', {user:req.user, dict:dict})
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
