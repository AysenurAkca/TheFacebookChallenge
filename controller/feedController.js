const Feed = require('../model/feedModel')

const mainPage = async (req, res)=>{
    const feeds = await Feed.find()
    .sort({created_at : "-1"})
    res.render('index', {feeds, err: ''})
}

const addNewPost = (req,res) => {
    if(req.body.name==="" || req.body.message===""){
        Feed.find()
        .then((feeds)=>res.render('index', {feeds, err: 'Name and message fields cant be empty'}))
        
    }else if(req.body.name.length>15){
        Feed.find()
        .then((feeds)=>res.render('index', {feeds, err: 'The name field must be no longer than 15 characters'}))
    }else if(req.body.message.length>40){
        Feed.find()
        .then((feeds)=>res.render('index', {feeds, err: 'The name message must be no longer than 40 characters'}))
    }
    else{
        const newFeed = new Feed(req.body)
        newFeed.save()
        .then(()=> res.redirect('/feed') )
        .catch((error)=> console.log('You have a problem about saving feed', error))
    }
    
}

const detailPage = (req,res) => {
    const {id} = req.params;
    Feed.findById(id)
    .then((selecetedFeed)=> res.render('detailPage', {selecetedFeed}))
    .catch((err)=> console.log(err))
}
const deleteFeed = (req,res) => {
    const {id} = req.params;
    Feed.findByIdAndDelete(id)
    .then(()=> res.redirect('/feed'))
    .catch((err)=> console.log(err))
}

const editFeedPage = (req,res)=>{
        const {id} = req.params;
        Feed.findById(id)
        .then((theFeed) => res.render('editPage', {theFeed, err:''}))
}

const editFeed = (req,res)=> {
    if(req.body.name==="" || req.body.message===""){
        const {id} = req.params;
        Feed.findById(id)
        .then((theFeed)=>{res.render('editPage', {theFeed, err: 'Name and message fields cant be empty'})})
        
    }else if(req.body.name.length>15){
        const {id} = req.params;
        Feed.findById(id)
        .then((theFeed)=>{res.render('editPage', {theFeed, err: 'The name field must be no longer than 15 characters'})})
    }else if(req.body.message.length>40){
        const {id} = req.params;
        Feed.findById(id)
        .then((theFeed)=>{res.render('editPage', {theFeed, err: 'The name message must be no longer than 40 characters'})})
    }else{
        const {id} = req.params;
        Feed.findByIdAndUpdate(id, req.body)
        .then(()=> {res.redirect(`/feed/${id}`)})
        .catch((err)=> console.log(err))
    }
    
}

module.exports = {mainPage, addNewPost, detailPage, deleteFeed, editFeedPage, editFeed}