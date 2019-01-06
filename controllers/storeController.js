const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
    req.flash('error', 'something happened');
    req.flash('info', 'something happened');
    req.flash('warning', 'something happened');
    res.render('index');
};

exports.addStore = (req, res) => {
    res.render('editStore', { title: 'Add Store' });
};

exports.createStore = async (req, res) => {
    const store = new Store(req.body);
    await store.save();
    req.flash('success', `Successfully Created ${store.name}. Care to leave a review?`);
    res.redirect('/');
};

exports.getStores = async (req, res) => {
    const stores = await Store.find()
    res.render('stores', { title: 'Stores', stores });
};
