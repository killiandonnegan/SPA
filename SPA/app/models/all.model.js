
const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    title: String,
    firstname: String,
    surname: String,
    mobile: String,
    email: String,
    homeaddline1: String,
    homeaddline2: String,
    hometown: String,
    homecounty: String,
    homeeir: String,
    shippingaddline1: String,
    shippingaddline2: String,
    shippingtown: String,
    shippingcounty: String,
    shippingeir: String
}, {
    timestamps: true
});



const OrderSchema = mongoose.Schema({
    
    email: String,
    list: { type: Array, "default" : []}

}, {
    timestamps: true
});


const PhoneSchema = mongoose.Schema({
    
    manufacturer: String,
    model: String,
    price: String
}, {
    timestamps: true
});

module.exports = {
    Customer: mongoose.model('Customer', CustomerSchema),
    Phone: mongoose.model('Phone', PhoneSchema),
    Order: mongoose.model('Order', OrderSchema)
};
