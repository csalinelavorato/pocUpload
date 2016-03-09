/**
 * UploadController
 *
 * @description :: Server-side logic for managing uploads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
'use strict';

module.exports = {
  send: function(req, res, next) {
    var multer = require('multer');

    var storage = multer.diskStorage({
      destination: function(req, file, callback) {
        callback(null, './uploads');
      },
      filename: function(req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now());
      }
    });
    var upload = multer({
      storage: storage
    }).single('pdf');

    req.file = require('../archive/pdf.pdf');

    upload(req,res,function(err) {
        
        console.log(req.file);
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });





  }
};