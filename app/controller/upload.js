'use strict';

const Controller = require('egg').Controller;
const fse = require('fs-extra');
const fs = require('fs');
const path = require('path');
const pump = require('pump');

class UploadController extends Controller {
  async upload() {
    const stream = await this.ctx.getFileStream();
    console.log(stream.fields, stream.filename);
    // const filename = encodeURIComponent(stream.fields.filename) + path.extname(stream.filename).toLowerCase()
    const filename = stream.fields.filename;
    const target = path.join(this.config.baseDir, 'app/public', filename);
    const writeStream = fs.createWriteStream(target);

    // stream.on('data', function(data) {
    //   writeStream.write(data);
    // });
    pump(stream, writeStream, function(err) {
      console.log('pipe finished', err)
    });
    this.ctx.body = { url: '/public/' + filename };
  }
}

module.exports = UploadController;
