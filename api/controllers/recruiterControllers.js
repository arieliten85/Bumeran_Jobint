const recruiterServices = require("../services/recruiterServices");
const { Recruiter } = require("../models");

class recruiterControllers {
  /////////// RUTAS ARIEL/////////
  static async register(req, res) {
    const { error, data } = await recruiterServices.createRecruiter(req.body);
    console.log("ACA DATA", data);
    if (data[1]) res.status(201).send(data[0]);
    else res.status(400).send(data[1]);

    if (error) res.status(404).send(data);
  }

  static async login(req, res) {
    try {
      res.send(req.user);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }

  static logout(req, res) {
    req.logout(req.recruiter, (err) => {
      if (err) return next(err);
      res.send("Deslogueado");
    });
  }
  /////////// FIN RUTAS ARIEL/////////

  /////////////////// NUEVAS  RUTAS MODULARIZADAS///////////////

  static async getAll(req, res) {
    const { error, data } = await recruiterServices.find();
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async getOne(req, res) {
    const { error, data } = await recruiterServices.one({
      where: { id: req.params.id },
    });
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async create(req, res) {
    const { error, data } = await recruiterServices.createOne(req.body);

    if (error) {
      return res.status(404).send(data);
    }
    res.status(201).send(data);
  }

  static async edit(req, res) {
    const { id } = req.params;

    Recruiter.update(
      {
        ...req.body,
      },
      { where: { id } }
    )
      .then((result) => res.status(201).send(result))
      .catch((err) => res.status(404).send(err));
  }

  static async delete(req, res) {
    await recruiterServices.remove({
      where: { id: req.params.id },
    });

    res.sendStatus(202);
  }
}

module.exports = recruiterControllers;
