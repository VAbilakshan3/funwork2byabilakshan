const mongoose = require('mongoose')

mongoose
    .connect('mongodb://abilakshan:365463999@testcluster-shard-00-00.dzprx.mongodb.net:27017,testcluster-shard-00-01.dzprx.mongodb.net:27017,testcluster-shard-00-02.dzprx.mongodb.net:27017/form?ssl=true&replicaSet=atlas-1tufku-shard-0&authSource=admin&retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true  })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db