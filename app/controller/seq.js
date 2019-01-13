'use strict';

const Controller = require('egg').Controller;

class SeqController extends Controller {
  async index() {
    await this.ctx.service.seq.run();
    this.ctx.body = {
      code: '000000',
    }
  }
  
  async test() {
    console.log('i in');
    return;
  }
}

module.exports = SeqController;
