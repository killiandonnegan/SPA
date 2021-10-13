

const {Customer} = require('../models/all.model');
const {Phone} = require('../models/all.model');
const {Order} = require('../models/all.model');

//User interface additions
exports.root = (req, res) => {
    Customer.find()
    .then(customers => {
        Phone.find()
        .then(phones=> {
            Order.find()
            .then(orders => {
        res.render('customers_view', {
            results: customers,
            results2: phones,
            results3: orders
        })});


    });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occured while retrieving all customers"
        });
    });
};



//search for firstname
exports.searchFirstname = (req, res) => {
    var search = req.params.s;
    console.log("Searching First Names: "+search)
    Customer.find({ firstname: new RegExp(search,"ig")})
    .then(customers => {
        res.render('customers_view',{
            results: customers
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Customers."
        });
    });
};
//search for surname
exports.searchSurname = (req, res) => {
    var search = req.params.s;
    console.log("Searching Last Names: "+search)
    Customer.find({ lastname: new RegExp(search,"ig")})
    .then(customers => {
        res.render('customers_view',{
            results: customers
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Customers."
        });
    });
};      
//search for mobile
exports.searchMobile = (req, res) => {
    var search = req.params.s;
    console.log("Searching Mobiles: "+search)
    Customer.find({ mobile: new RegExp(search,"ig")})
    .then(customers => {
        res.render('customers_view',{
            results: customers
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Customers."
        });
    });
};
//search for email
exports.searchEmail = (req, res) => {
    var search = req.params.s;
    console.log("Searching Emails: "+search)
    Customer.find({ email: new RegExp(search,"ig")})
    .then(customers => {
        res.render('customers_view',{
            results: customers

          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Customers."
        });
    });
};
//search for homeaddline1
exports.searchHomeaddline1 = (req, res) => {
    var search = req.params.s;
    console.log("Searching Home Address Line 1s: "+search)
    Customer.find({ homeaddline1: new RegExp(search,"ig")})
    .then(customers => {
        res.render('customers_view',{
            results: customers

          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Customers."
        });
    });
};
//search for homeaddline2
exports.searchHomeaddline2 = (req, res) => {
    var search = req.params.s;
    console.log("Searching Home Address Line 2s: "+search)
    Customer.find({ homeaddline2: new RegExp(search,"ig")})
    .then(customers => {
        res.render('customers_view',{
            results: customers
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Customers."
        });
    });
};
//search for hometown
exports.searchHometown = (req, res) => {
    var search = req.params.s;
    console.log("Searching Home Address Town: "+search)
    Customer.find({ hometown: new RegExp(search,"ig")})
    .then(customers => {
        res.render('customers_view',{
            results: customers
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Customers."
        });
    });
};
//search for homecounty
exports.searchHomecounty = (req, res) => {
    var search = req.params.s;
    console.log("Searching Home Address Counties: "+search)
    Customer.find({ homecounty: new RegExp(search,"ig")})
    .then(customers => {
        res.render('customers_view',{
            results: customers

          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Customers."
        });
    });
};
//search for homeeircode
exports.searchHomeeir = (req, res) => {
    var search = req.params.s;
    console.log("Searching Home Address Eircodes: "+search)
    Customer.find({ homeeir: new RegExp(search,"ig")})
    .then(customers => {
        res.render('customers_view',{
            results: customers

          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Customers."
        });
    });
};
//search for shippingaddline1
exports.searchShippingaddline1 = (req, res) => {
    var search = req.params.s;
    console.log("Searching Shipping Address Line 1s: "+search)
    Customer.find({ shippingaddline1: new RegExp(search,"ig")})
    .then(customers => {
        res.render('customers_view',{
            results: customers

          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Customers."
        });
    });
};
//search for shippingaddline2
exports.searchShippingaddline2 = (req, res) => {
    var search = req.params.s;
    console.log("Searching Shipping Address Line 2s: "+search)
    Customer.find({ shippingaddline2: new RegExp(search,"ig")})
    .then(customers => {
        res.render('customers_view',{
            results: customers

          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Customers."
        });
    });
};
//search for shippingtown
exports.searchShippingtown = (req, res) => {
    var search = req.params.s;
    console.log("Searching Shipping Address Towns: "+search)
    Customer.find({ shippingtown: new RegExp(search,"ig")})
    .then(customers => {
        res.render('customers_view',{
            results: customers
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Customers."
        });
    });
};
//search for shippingcounty
exports.searchShippingcounty = (req, res) => {
    var search = req.params.s;
    console.log("Searching Shipping Address Counties: "+search)
    Customer.find({ shippingcounty: new RegExp(search,"ig")})
    .then(customers => {
        res.render('customers_view',{
            results: customers
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Customers."
        });
    });
};
//search for shippingeir
exports.searchShippingeir = (req, res) => {
    var search = req.params.s;
    console.log("Searching Shipping Address Eircodes: "+search)
    Customer.find({ shippingeir: new RegExp(search,"ig")})
    .then(customers => {
        res.render('customers_view',{
            results: customers
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Customers."
        });
    });
};


// Create and Save a new Customer          (CREATE)
exports.create = (req, res) => {

    // Create a new Customer (using schema)
    const customer = new Customer({
        title: req.body.title,
        firstname: req.body.firstname,
        surname: req.body.surname,
        mobile: req.body.mobile,
        email: req.body.email,
        homeaddline1: req.body.homeaddline1,
        homeaddline2: req.body.homeaddline2,
        hometown: req.body.hometown,
        homecounty: req.body.homecounty,
        homeeir: req.body.homeeir,
        shippingaddline1: req.body.shippingaddline1,
        shippingaddline2: req.body.shippingaddline2,
        shippingtown: req.body.shippingtown,
        shippingcounty: req.body.shippingcounty,
        shippingeir: req.body.shippingeir
    });

    // Save Customer in the database
    customer.save()
    .then(data => {
        res.send(data);
        console.log("Customer added");
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating the Customer."
            });
        });
    };




// Retrieve and return all Customers from the database.     (RETRIEVE)
exports.findAll = (req, res) => {
    Customer.find()
    .then(customers => {
        res.send(customers);
        console.log("Found the following customers:");
        console.log(customers);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Customers."
        });
    });
};

// Find a single customer with an email        (RETRIEVE with id)
exports.findOne = (req, res) => {
    Customer.findById(req.params.customerId)
    .then(customer => {
        if(!customer) {
            return res.status(404).send({
                message: "Customer not found with email " + req.params.customerId
            });
    }
        res.send(customer);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.customerId
            });
        }
        return res.status(500).send({
            message: "Error retrieving Customer with id " + req.params.customerId
        });
    });
};



    // Update a Customer identified by the quotationId in the request
        exports.update = (req, res) => {

        // Find the Customer and update it with the request body
        Customer.findByIdAndUpdate(req.params.customerId, {

            title: req.body.title,
            firstname: req.body.firstname,
            surname: req.body.surname,
            mobile: req.body.mobile,
            email: req.body.email,
            homeaddline1: req.body.homeaddline1,
            homeaddline2: req.body.homeaddline2,
            hometown: req.body.hometown,
            homecounty: req.body.homecounty,
            homeeir: req.body.homeeir,
            shippingaddline1: req.body.shippingaddline1,
            shippingaddline2: req.body.shippingaddline2,
            shippingtown: req.body.shippingtown,
            shippingcounty: req.body.shippingcounty,
            shippingeir: req.body.shippingeir
        },
            { new: true }) // "new: true" return updated object
        .then(customer => {
            if(!customer) {
                return res.status(404).send({
                    message: "Customer not found with id " + req.params.customerId
                });
            }
            res.send(customer);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Customer not found with id " + req.params.customerId
                });
            }
            return res.status(500).send({
                message: "Error updating Quotation with id " + req.params.customerId
            });
        });
    };

// Delete a note with the specified noteId in the request   (DELETE)
exports.delete = (req, res) => {
    Customer.findByIdAndRemove(req.params.customerId)
    .then(customer => {
            if(!customer) {
                return res.status(404).send({
                    message: "Customer not found with id " + req.params.customerId
                });
            }
            res.send({message: "Customer deleted successfully!"});
        }).catch(err => {
            if(err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Customer not found with id " + req.params.customerId
                });
            }
            return res.status(500).send({
                message: "Could not delete Customer with id " + req.params.customerId
            });
        });
    };


    // END OF CUSTOMER ///////////////////////////////////////////////////////////////////////


    exports.searchManufacturer = (req, res) => {
        var search = req.params.s;
        console.log("Searching Manufacturers: "+search)
        Phone.find({ manufacturer: new RegExp(search,"ig")})
        .then(phones => {
            res.render('customers_view',{
                results2: phones
              });
        }).catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while retrieving all Customers."
            });
        });
    };

    exports.searchModel = (req, res) => {
        var search = req.params.s;
        console.log("Searching Models: "+search)
        Phone.find({ model: new RegExp(search,"ig")})
        .then(phones => {
            res.render('customers_view',{
                results2: phones
              });
        }).catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while retrieving all Customers."
            });
        });
    };

    exports.searchPrice = (req, res) => {
        var search = req.params.s;
        console.log("Searching Prices: "+search)
        Phone.find({ price: new RegExp(search,"ig")})
        .then(phones => {
            res.render('customers_view',{
                results2: phones
              });
        }).catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while retrieving all Customers."
            });
        });
    };


    
    // Create and Save a new Phone          (CREATE)
    exports.create2 = (req, res) => {
    
        // Create a new Phone (using schema)
        const phone = new Phone({
            manufacturer: req.body.manufacturer,
            model: req.body.model,
            price: req.body.price
        });
    
        // Save Phone in the database
        phone.save()
        .then(data => {
            res.send(data);
            console.log("Phone added");
        }).catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while creating the Phone."
                });
            });
        };
    // Retrieve and return all Phones from the database.     (RETRIEVE)
    exports.findAll2 = (req, res) => {
        Phone.find()
        .then(phones => {
            res.send(phones);
            console.log("Found the following phones:");
            console.log(phones);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while retrieving all Phones."
            });
        });
    };
    
    // Find a single phone with an email        (RETRIEVE with id)
    exports.findOne2 = (req, res) => {
        Phone.findById(req.params.phoneId)
        .then(phone => {
            if(!phone) {
                return res.status(404).send({
                    message: "Phone not found with email " + req.params.phoneId
                });
        }
            res.send(phone);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Phone not found with id " + req.params.phoneId
                });
            }
            return res.status(500).send({
                message: "Error retrieving Phone with id " + req.params.phoneId
            });
        });
    };
    
    
    
        // Update a Phone identified by the phoneId in the request
            exports.update2 = (req, res) => {
    
            // Find the Phone and update it with the request body
            Phone.findByIdAndUpdate(req.params.phoneId, {
    
                manufacturer: req.body.manufacturer,
                model: req.body.model,
                price: req.body.price
            },
                { new: true }) // "new: true" return updated object
            .then(phone => {
                if(!phone) {
                    return res.status(404).send({
                        message: "Phone not found with id " + req.params.phoneId
                    });
                }
                res.send(phone);
            }).catch(err => {
                if(err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Phone not found with id " + req.params.phoneId
                    });
                }
                return res.status(500).send({
                    message: "Error updating Phone with id " + req.params.phoneId
                });
            });
        };
    
    
    
    
    // Delete a note with the specified noteId in the request   (DELETE)
    exports.delete2 = (req, res) => {
        Phone.findByIdAndRemove(req.params.phoneId)
        .then(phone => {
                if(!phone) {
                    return res.status(404).send({
                        message: "Phone not found with id " + req.params.phoneId
                    });
                }
                res.send({message: "Phone deleted successfully!"});
            }).catch(err => {
                if(err.kind === 'ObjectId' || err.name === 'NotFound') {
                    return res.status(404).send({
                        message: "Phone not found with id " + req.params.phoneId
                    });
                }
                return res.status(500).send({
                    message: "Could not delete Phone with id " + req.params.phoneId
                });
            });
        };



        // END OF PHONE /////////////////////////////////////////////////////


        

// Create and Save a new Order          (CREATE)
exports.create3 = (req, res) => {

    // Create a new Order (using schema)
    const order = new Order({

        email: req.body.email,
        list: req.body.list
    });

    // Save Order in the database
    order.save()
    .then(data => {
        res.send(data);
        console.log("Order added");
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating the Order."
            });
        });
    };


    exports.searchEmail2 = (req, res) => {
        var search = req.params.s;
        console.log("Searching Prices: "+search)
        Order.find({ email2: new RegExp(search,"ig")})
        .then(orders => {
            res.render('customers_view',{
                results3: orders
              });
        }).catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while retrieving all Customers."
            });
        });
    };

    exports.searchList = (req, res) => {
        var search = req.params.s;
        console.log("Searching Prices: "+search)
        Order.find({ list: new RegExp(search,"ig")})
        .then(orders => {
            res.render('customers_view',{
                results3: orders
              });
        }).catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while retrieving all Customers."
            });
        });
    };



// Retrieve and return all Orders from the database.     (RETRIEVE)
exports.findAll3 = (req, res) => {
    Order.find()
    .then(orders => {
        res.send(orders);
        console.log("Found the following orders:");
        console.log(orders);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Orders."
        });
    });
};

// Find a single order with an email        (RETRIEVE with id)
exports.findOne3 = (req, res) => {
    Order.findById(req.params.orderId)
    .then(order => {
        if(!order) {
            return res.status(404).send({
                message: "Order not found with email " + req.params.orderId
            });
    }
        res.send(order);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Order not found with id " + req.params.orderId
            });
        }
        return res.status(500).send({
            message: "Error retrieving Order with id " + req.params.orderId
        });
    });
};



    // Update a Order identified by the orderId in the request
        exports.update3 = (req, res) => {

        // Find the Order and update it with the request body
        Order.findByIdAndUpdate(req.params.orderId, {

            email2: req.body.email2,
            list: req.body.list
        },
            { new: true }) // "new: true" return updated object
        .then(order => {
            if(!order) {
                return res.status(404).send({
                    message: "Order not found with id " + req.params.orderId
                });
            }
            res.send(order);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Order not found with id " + req.params.orderId
                });
            }
            return res.status(500).send({
                message: "Error updating Order with id " + req.params.orderId
            });
        });
    };




// Delete an order with the specified orderID in the request   (DELETE)
exports.delete3 = (req, res) => {
    Order.findByIdAndRemove(req.params.orderId)
    .then(order => {
            if(!order) {
                return res.status(404).send({
                    message: "Order not found with id " + req.params.orderId
                });
            }
            res.send({message: "Order deleted successfully!"});
        }).catch(err => {
            if(err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Order not found with id " + req.params.orderId
                });
            }
            return res.status(500).send({
                message: "Could not delete Order with id " + req.params.orderId
            });
        });
    }; 

 