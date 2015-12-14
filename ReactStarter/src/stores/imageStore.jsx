var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
    //if any actions within Actions get called,you have a method here with same in Actions call the method
    listenables: [Actions],
    getImages: function (topicId) {
        Api.get('topics/' + topicId).then(function (json) {
            this.images = _.reject(json.data, function (image) {
                return image.is_album;
            });
            this.triggerChange();
        }.bind(this))
    },
    getImage: function (id) {
        Api.get('gallery/' + id).then(function (json) {
            if (this.images) {
                this.images.push(json.data);
            } else {
                this.images = [json.data];
            }
            this.triggerChange();
        }.bind(this));
    },
    find: function (id) {
        var image = _.findWhere(this.images, {id: id});
        if (image) {
            return image;
        } else {
            this.getImage(id);
            return null;
        }
    },
    triggerChange: function () {
        this.trigger('change', this.images);
    }
});