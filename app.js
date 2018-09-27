//init storage
const storage = new StoredData();
const weather = new Weather();
//initialize UI
const ui = new UI();


weather.changeLocation("Nairobi", "Nairobi");
//get weather on DOM load.
document.addEventListener('DOMContentLoaded', getWeatherResults);

//add event listener when the button is clicked 
document.getElementById('w-change-btn').addEventListener('click', (e) =>{
   const city = document.getElementById('city').value;
   const state = document.getElementById('state').value;

weather.changeLocation(city, state);

//display weather information.
getWeatherResults();

//close the modal
$('#location').modal('hide');

});

function getWeatherResults(){
      weather.getWeather()
    .then(results =>{
      ui.renderWeather(results);
      //console.log(results);
    })
    .catch(error =>{
        console.log(error);
    })

}

