const request =require('request')

let weatherData=(cityName,callback)=>{
if(cityName){
        let city=cityName
        let country=`country`
        let units=`metrics`
        let URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=4493a4b0c86d28d278340905593f7188&units=${units}`

        request({url:URL,json:true},(error,response)=>{
        
        if(error){
                    console.log('Unable to connect to Internet')
                }
            else if (response.body.cod==200)
                {
                const {weather,main,name,sys}=response.body
                callback(weather,main,name,sys)
                }  
            else{
                    console.log(response.body.cod)

                }
            })}
            else {
                return error=`Please provide with an address.`
            }
        }

    
module.exports=weatherData