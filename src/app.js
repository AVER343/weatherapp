let weatherAPIData = require('../data/data') 
let geoData = require('../data/mapbox') 
const express = require('express')
const hbs =require('hbs')
const path =require('path')
const app= express()
let cityName='Delhi'
const port=process.env.PORT||3000
//partials
const partialsPath=path.join(__dirname,'./templates/partials')
hbs.registerPartials(partialsPath)
//handlebars
const viewsPath=path.join(__dirname,`./templates/views`)
app.set('view engine','hbs')
app.set('views',viewsPath)
const error='Something went wrong'
app.get('',(req,res)=>{ 
         res.render('index',{title:`Home Page`,error:`${error}`})
})
app.get('/about',(req,res)=>{
        res.render('about',{title:`About page`})
})
app.get('/help',(req,res)=>{
        res.render('index',{title:`Help`})
})
app.get('/help/*',(req,res)=>{
        res.render('error',{error:`Help not available for the specified topic`,title:`error`})
})
app.get(`/weather/`,(req,res)=>{
        if(!req.query.address)
        {
               res.render('search',{error:`Please provide with a valid city name`})
        }
                weatherAPIData(req.query.address,(weather,main,name,sys)=>{
                res.send({sys:sys,main:main,title:`Search Weather Information`,weather:weather[0].main,city:name})
        })         
        
})

//general static
app.use(express.static(path.join(__dirname,'./templates')))
app.get('*',(req,res)=>{
        res.render('error',{error:Error})
})
//get the coordinates by location 
geoData(`${cityName}`,({body})=>
    {   
        if(body.features.length==0)
        {
        console.log("Entered city isnt available")
        }
        else
        {
        const {features}=body
        const {geometry}=features[0]
        const {coordinates}=geometry
       
        }
    })
app.listen(port)
