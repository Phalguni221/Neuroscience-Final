const mongoose = require('mongoose')

let techSchema = new mongoose.Schema({
    title: { type: String, default: 'Anonymous' },
    author: { type: String, default: 'Anonymous' },
    date: { type: String, required: true },
    link: { type: String, default: '' }
})

techSchema.methods.showEstablished = function() {}
  
module.exports = mongoose.model('tech', techSchema, 'techs')

