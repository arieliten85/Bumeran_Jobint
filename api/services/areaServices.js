const { Area } = require('../models');

class areaServices {
    static async find() {
        try {
          const allAreas = await Area.findAll();
          return { error: false, data: allAreas };
        } catch (error) {
          return { error: true, data: 'Países no encontrados' };
        }
    }

    static async one(id) {
        try {
          const data = await Area.findAll(id);
          return {
            error: false,
            data: data,
          };
        } catch (error) {
          console.error(error);
          return {
            error: true,
            data: 'error 404: Area not found',
          };
        }
      }

      static async createOne(body) {
        const {
          name,
        } = body;
        try {
          const newArea = Area.create({
           name,
          });
    
          return { error: false, data: newArea };
        } catch (error) {
          return { error: true, data: 'No se pudo crear una nueva área' };
        }
      }

      static async remove(id) {
        try {
          const data = await Area.destroy(id);
          return data;
        } catch (error) {
          console.error(error);
          return {
            error: true,
            data: "error 404: area not found",
          };
        }
      }   
}

module.exports = areaServices;