const { Country } = require("../models");

class countryServices {
  static async find() {
    try {
      const allCountries = await Country.findAll();
      return { error: false, data: allCountries };
    } catch (error) {
      return { error: true, data: "Países no encontrados" };
    }
  }

  static async one(id) {
    try {
      const data = await Country.findAll(id);
      return {
        error: false,
        data: data,
      };
    } catch (error) {
      console.error(error);
      return {
        error: true,
        data: "error 404: Country not found",
      };
    }
  }

  static async createOne(body) {
    const { name } = body;
    try {
      const newCountry = Country.create({
        name,
      });

      return { error: false, data: newCountry };
    } catch (error) {
      return { error: true, data: "No se pudo crear un nuevo país" };
    }
  }

  static async remove(id) {
    try {
      const data = await Country.destroy(id);
      return data;
    } catch (error) {
      console.error(error);
      return {
        error: true,
        data: "error 404: country not found",
      };
    }
  }
}

module.exports = countryServices;
