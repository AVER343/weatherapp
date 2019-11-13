console.log('CLient Side js loaded');
$('#alertinfo').hide();
$('#alertdanger').hide();
const weatherForm=document.querySelector('form');
const search=document.querySelector('input');
weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const location = search.value
    if(location==null)
    {
        console.log("Enter a city name")
    }
    else{
        fetch(`/weather?address=${location}`).
        then((response)=>{if(response.status!=200){}
        else{response.json().then((data)=>
            {if(data.error)
            {console.log(data.error)}
            else
                {document.getElementById("alertinfo").innerHTML = `The weather condition in ${data.city} ,at the moment, is ${data.weather} `;
                $('#alertinfo').show();
                }
            })
            }})

    }
    })