'use strict';

const path = require('path');

function Seq(ctx) {
  Object.assign(this, ctx)
  // return this;
}

Seq.create = function(ctx) {
  return new Seq(ctx);
};

Seq.prototype.run = function() {
  const sq = this.find();
  console.log(sq);
  const arr = Object.keys(sq);
  console.log('arr', arr);
  for (let i = 0, len = arr.length; i < len; i++) {
    const item = sq[arr[i]];
    if (item.type === 'controller') {
      this.app.controller.seq.test.call(this);
    }
  }
};


Seq.prototype.find = function() {
  const r = require(path.resolve(__filename, '../', 'lasApply'));
  return r;
};

module.exports = Seq;
