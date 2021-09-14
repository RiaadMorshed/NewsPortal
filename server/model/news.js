const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsSchema = new Schema({
    image: { type: String  },
    title: { type: String  },
    author: { type: String },
    description: { type: String  },
    category: { type: String  },
});

const News = mongoose.model('News', newsSchema);

module.exports = News;