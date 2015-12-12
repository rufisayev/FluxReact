var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');

module.exports = Reflux.createStore({
    //if any actions within Actions get called,you have a method here with same in Actions call the method
    listenables: [Actions],
    getImages: function (topicId) {
        Api.get('topics/' + topicId).then(function (json) {
            this.images = json.data;
            this.triggerChange();
        }.bind())
    }
    ,
    triggerChange: function () {
        this.trigger('change', this.images);
    }
});