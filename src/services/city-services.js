const {CityRepository} = require('../repository/index'); 
// Importing the CityRepository 

class CityService {
    constructor(){
    this.cityRepository = new CityRepository();
}
    async createCity(data) {
        try {
            const city = await this.cityRepository.CreateCity(data);
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
            retun city;
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
}

module.exports = CityService;