const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticulosSchema = new Schema({
    id_articulo:{type: String, required: true, max:40},
    title:{type: String, required: true, max:250},
    description:{type: String, required: true, max:250},
    url:{type: String, required: true, max:250},
    stock:{type: Number, required: true, max:1000000},
    price:{type: Number, required: true, max:1000000},
    category:{type: String, required: true, max:100},
    type_pet:{type: String, required: true, max:100},
    status:{type: Number, required: true, max:10}
});

module.exports = mongoose.model("articulos", ArticulosSchema);

