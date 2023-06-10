const mongoose = require('mongoose');

const KeeperSchema = new mongoose.Schema({

    Title : String,
    Content : String,
    myId : String

});

const KeeperModel = mongoose.model('notes',KeeperSchema);

module.exports = KeeperModel;