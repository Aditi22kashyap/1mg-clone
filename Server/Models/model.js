const mongoose = require('mongoose');

const schema = new mongoose.Schema({
title : 'String',
desc : 'String',
rating : 'Number',
price : 'Number',
discount : 'Number',
category : 'String',
brand : 'String',
product_form : 'String',
gender : 'String',
age : 'String',
image : 'String'
})

const product = mongoose.model('product', schema);

module.exports = product ;