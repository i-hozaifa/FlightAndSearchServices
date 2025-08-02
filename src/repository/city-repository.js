const {City} = require('../models/index');

class CityRepository{
    async CreateCity({ name }){
       try{
        const city = await City.create({ name });
        return city;
       } catch (error) {
        console.log("Error creating city:");
        throw {error};
       }
    }

        async deleteCity(cityId){
        try{
            await City.destroy({
        where: {
            id: cityId 
        } 
        });
        return true;
    } catch (error) {
        console.log("Error deleting city:");
        throw {error};
    }
  }
  async getCityById(cityId){
    try {
        const city = await City.findByPk(cityId);
        return city;
    } catch (error) {
        console.log("Error fetching city by ID:");
        throw {error};
    }
  }
  async updateCity(cityId, { name }){
    try {
        const city = await City.update(data , {
            where: {
                id: cityId
            }
        });
        return city;
    } catch (error) {
        console.log("Error fetching city by ID:");
        throw {error};
    }
  }
}

module.exports = CityRepository;