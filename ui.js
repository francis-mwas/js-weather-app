class UI{
    constructor(){
       this.country = document.getElementById('w-country'); 
       this.location = document.getElementById('w-location');
       this.description = document.getElementById('w-desc');
       this.tem_string = document.getElementById('w-string');
       this.details = document.getElementById('w-details');
       this.icon = document.getElementById('w-icon');
       this.humidity = document.getElementById('w-humidity');
       this.windDegree = document.getElementById('w-dewpoints');
       this.wind = document.getElementById('w-wind');
       this.feelslike = document.getElementById('w-feels-like');
    }

    renderWeather(weather){
        this.country.textContent = weather.location.country;
        this.location.textContent = `${weather.location.name},${weather.location.region}`;
        this.description.textContent = weather.current.condition.text;
        this.tem_string.textContent = weather.current.temp_c;
        //this.details.textContent = weather.current.condition.text;
        this.icon.setAttribute('src', weather.current.condition.icon);
        this.humidity.textContent = `Relative humidity : ${weather.current.humidity}`;
        this.feelslike.textContent = `Feels Like : ${weather.current.feelslike_c}`;
        this.windDegree.textContent = `Wind degree : ${weather.current.wind_degree}`;
        this.wind.textContent = `Wind direction : ${weather.current.wind_dir}`;

    }
}