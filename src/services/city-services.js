const {CityRepository} = require('../repository/index'); 
// Importing the CityRepository 

class CityService {
    constructor(){
    this.cityRepository = new CityRepository();
}
    async createCity(data) {
        try {
            const city = await this.cityRepository.CreateCity(data);
            return city;
        } catch (error) {
            console.log("sometihng went wrong in service layer");
            throw {error}; // Propagate the error to the caller
        }
    }

    async deleteCity(cityId) {
        try {
            const repsonse = await this.cityRepository.deleteCity(cityId);
        } catch (error) {
             console.log("sometihng went wrong in service layer");
            throw {error};
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
             console.log("sometihng went wrong in service layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCityById(cityId);
            return city;
        } catch (error) {
             console.log("sometihng went wrong in service layer");
            throw {error};
        }
    }

    async getAllCities(filter) {
        try {
            const cities = await this.cityRepository.getAllCities({name: filter.name }); //{name : "del"} --> {name : "delhi"}
            return cities;
        } catch (error) {
             console.log("sometihng went wrong in service layer");
            throw {error};
        }
    }
}

module.exports = CityService;