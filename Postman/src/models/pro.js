const mongoose = require('mongoose');
const { Schema } = mongoose;

const AutoIncrement = require('mongoose-sequence')(mongoose);

const ProSchema = new Schema({
    name: String,
    description: String,
    Marca: String,
    Tono: String,
    price: String,
    imgUrl: String
});

// Aplicar el plugin AutoIncrement al esquema ProSchema
ProSchema.plugin(AutoIncrement, { inc_field: 'id' });

module.exports = mongoose.model('Pro', ProSchema);
