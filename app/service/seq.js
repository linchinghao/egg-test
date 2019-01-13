'use strict';

const Service = require('egg').Service;
const Seq = require('../lib');

class SeqService extends Service {
  async run() {
    // console.log(this);
    const seq = Seq.create(this);
    return await seq.run();
  }
}

module.exports = SeqService;
