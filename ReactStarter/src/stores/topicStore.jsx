var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
    //if any actions within Actions get called,you have a method here with same in Actions call the method
    listenables: [Actions],
    getTopics: function () {
        return Api.get('topics/defaults').then(function (json) {
            this.topics = json.data;
            this.triggerChange();
        }.bind(this));
    },
    triggerChange: function () {
        this.trigger('change', this.topics);
    }
});