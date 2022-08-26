const { Country } = require("../models");
const countryServices = require("../services/countryServices");

class countryControllers {
  static async getAll(req, res) {
    const { error, data } = await countryServices.find();
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async getOne(req, res) {
    const { error, data } = await countryServices.one({
      where: { id: req.params.id },
    });
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async create(req, res) {
    const { error, data } = await countryServices.createOne(req.body);
    if (error) {
      return res.status(404).send(data);
    }
    res.status(201).send(data);
  }

  static async edit(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    Country.update(
      {
        name,
      },
      { where: { id } }
    )
      .then((result) => res.status(201).send(result))
      .catch((err) => res.status(404).send(err));
  }

  static async delete(req, res) {
    await countryServices.remove({
      where: { id: req.params.id },
    });
    res.sendStatus(202);
  }
}

module.exports = countryControllers;
