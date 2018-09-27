class Weather{
    constructor(city, region){
        this.apiKey = ' 198c98db63a74d9b9ee135332182609';
       
        
        this.city = city;
        this.region = region;
    }

    //fetch details from the api.
    async getWeather(){
        const response = await fetch(`http://api.apixu.com/v1/current.json?key=${this.apiKey}&q=${this.city}&r=${this.region}`);
        const resultsData = await response.json();
        //console.log(resultsData);
       return resultsData;
       
    }

    //change weather location...
    changeLocation(city, region){
        this.city = city;
        this.region = region;
    }
}