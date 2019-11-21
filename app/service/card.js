'use strict';

const Service = require('egg').Service;

class CardService extends Service {
  async index() {
    const { app } = this;
    const cards = await app.model.Card.findAll();
    return cards;
  }

  async show(id) {
    const { app } = this;
    const card = await app.model.Card.findByPk(id);
    return card;
  }

  async create(data) {
    const { app } = this;
    const card = await app.model.Card.create(data);
    return card;
  }

  async update(data, id) {
    const { app } = this;
    const card = await app.model.Card.findByPk(id);
    await card.update(data);
  }

  async destroy(id) {
    const { app } = this;
    const card = await app.model.Card.findByPk(id);
    await card.destroy();
  }
}

module.exports = CardService;
