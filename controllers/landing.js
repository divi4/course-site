module.exports = {
    getLanding: (req,res)=>{
        res.render('funnel/landing.pug')
    },
    getStartHere: (req,res)=>{
        res.render('funnel/start-here.pug')
    },
    getArticles: (req,res)=>{
        res.render('funnel/articles.pug')
    },
    getCourse: (req,res)=>{
        res.render('funnel/course.pug')
    },
    getLogin: (req,res)=>{
        res.render('funnel/login.pug')
    },
}
