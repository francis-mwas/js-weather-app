class StoredData{
    constructor(){
        this.city;
        this.region;
        this.defaultCity = "Nairobi";
        this.defaultRegion = "Nairobi Area";
    }

    getData(){
        if(localStorage.getItem('city') === null){
            this.city = this.defaultCity;
        }else{
            this.city = localStorage.getItem('city');
        }

        if(localStorage.getItem('region') === null){
            this.region = this.defaultRegion;
        }

        return {
            city: this.city,
            region: this.region
        }

    }
    setData(city, region){
     localStorage.setItem('city', city);
     localStorage.setItem('region', region);
    }
}