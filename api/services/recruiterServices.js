const { Recruiter } = require('../models');

class recruiterServices {
  static async createRecruiter(body) {
    const { name, lastName, email, password } = body;

    try {
      const newUser = await Recruiter.findOrCreate({
        where: { email },
        defaults: {
          name,
          lastName,
          password,
        },
      });

      return { error: false, data: newUser };
    } catch (error) {
      console.log(error);

      return { error: true, data: error };
    }
  }

  static async find() {
    try {
      const allRecruiter = await Recruiter.findAll();
      return { error: false, data: allRecruiter };
    } catch (error) {
      return { error: true, data: 'Recruiters no encontrados' };
    }
  }



  static async one(id) {
    try {
      const data = await Recruiter.findAll(id);
      return {
        error: false,
        data: data,
      };
    } catch (error) {
      console.error(error);
      return {
        error: true,
        data: 'error 404: Recruiter not found',
      };
    }
  }


  static async createOne(body) {
    const {
      country,
      area,
      description,
      vacancies,
      status,
      jobSchedules,
      salary,
      title,
      category,
    } = body;
    try {
      const newSearch = Recruiter.create({
        country,
        area,
        description,
        vacancies,
        status,
        jobSchedules,
        salary,
        title,
        category,
      });

      return { error: false, data: newSearch };
    } catch (error) {
      return { error: true, data: 'No se puedo crear un nuevo Publicacion' };
    }
  }




  static async remove(id) {
    try {
      const data = await Recruiter.destroy(id);
      return data;
    } catch (error) {
      console.error(error);
      return {
        error: true,
        data: "error 404: product not found",
      };
    }
  }




  

}

module.exports = recruiterServices;
