const searchServices = require("../services/searchServices");
const { Search } = require("../models");

class RouterSearch {
  /////////// RUTAS ARIEL/////////
  static async allSearch(req, res) {
    const { error, data } = await searchServices.getAll();
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async createSearch(req, res) {
    console.log("ACA REQ BODY", req.body);
    const { error, data } = await searchServices.create(req.body);

    if (error) {
      return res.status(404).send(data);
    }
    res.status(201).send(data);
  }

  static async edit(req, res) {
    const { id } = req.params;

    Search.update(
      {
        ...req.body,
      },
      { where: { id } }
    )
      .then((result) => res.status(201).send(result))
      .catch((err) => res.status(404).send(err));
  }

  static async getOne(req, res) {
    const { error, data } = await searchServices.getOne({
      where: { id: req.params.id },
    });
    if (error) {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  }

  static async delete(req, res) {
    await searchServices.delete({
      where: { id: req.params.id },
    });
  }
  ///////////FIN RUTAS ARIEL/////////
}

module.exports = RouterSearch;
