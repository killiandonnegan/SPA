module.exports = (app) => {

const customers = require('../controllers/all.controllers.js');
const orders = require('../controllers/all.controllers.js');
const phones = require('../controllers/all.controllers.js');

//User interface additions
app.get('/', customers.root);

// Create a new Customer
app.post('/customers', customers.create);

// Retrieve all Customers
app.get('/customers', customers.findAll);

// Retrieve a single Customer specified by customerId
app.get('/customers/:customerId', customers.findOne);

// Update a Customer specified by customerId
app.put('/customers/:customerId', customers.update);

// Delete a Customer specified by customerId
app.delete('/customers/:customerId', customers.delete);

//User interface additions
app.get('/firstname/:s', customers.searchFirstname);
app.get('/surname/:s', customers.searchSurname);
app.get('/mobile/:s', customers.searchMobile);
app.get('/email/:s', customers.searchEmail);
app.get('/homeaddline1/:s', customers.searchHomeaddline1);
app.get('/homeaddline2/:s', customers.searchHomeaddline2);
app.get('/hometown/:s', customers.searchHometown);
app.get('/homecounty/:s', customers.searchHomecounty);
app.get('/homeeir/:s', customers.searchHomeeir);
app.get('/shippingaddline1/:s', customers.searchShippingaddline1);
app.get('/shippingaddline2/:s', customers.searchShippingaddline2);
app.get('/shippingtown/:s', customers.searchShippingtown);
app.get('/shippingcounty/:s', customers.searchShippingcounty);
app.get('/shippingeir/:s', customers.searchShippingeir);


app.get('/manufacturer/:s', phones.searchManufacturer);
app.get('/model/:s', phones.searchModel);
app.get('/price/:s', phones.searchPrice);


app.get('/email2/:s', orders.searchEmail2);
app.get('/list/:s', orders.searchList);







    // Create a new Quotation
    app.post('/phones', phones.create2);
    
    // Retrieve all Quotations
    app.get('/phones', phones.findAll2);
    
    // Retrieve a single Quotation specified by phoneId
    app.get('/phones/:phoneId', phones.findOne2);
    
    // Update a Quotation specified by phoneId
    app.put('/phones/:phoneId', phones.update2);
    
    // Delete a Quotation specified by phoneId
    app.delete('/phones/:phoneId', phones.delete2);
    



        // Create a new Order
        app.post('/orders', orders.create3);
    
        // Retrieve all Orders
        app.get('/orders', orders.findAll3);
        
        // Retrieve a single Order specified by orderId
        app.get('/orders/:orderId', orders.findOne3);
        
        // Update a Order specified by orderId
        app.put('/orders/:orderId', orders.update3);
        
        // Delete a Order specified by orderId
        app.delete('/orders/:orderId', orders.delete3);


}
