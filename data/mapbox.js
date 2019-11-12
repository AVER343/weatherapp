const request =require('request')
let geoData=(cityName,callback)=>{
    let units=`imperial`
    let URL=`https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName}.json?access_token=pk.eyJ1IjoiYXYzNDMiLCJhIjoiY2syamk2aTNrMXJxMDNpbjBuNm0wam04MiJ9.X4k_WA3w3t3_1k2-k2ByGw&units=${units}`
    request({url:URL,json:true},(error,response)=>{
    if(error)
    {
        console.log('Sorry, something went wrong')
    }
    else{
        
        callback(response)

    }
})
}

module.exports=geoData