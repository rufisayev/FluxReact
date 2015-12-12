var React = require('react');
var ImageStore = require('../stores/imageStore');
var Actions = require('../actions');
var Reflux = require('reflux');

module.exports = React.createClass({
    mixins: [
        Reflux.listenTo(ImageStore, 'onChange')
    ],
    getInitialState: function () {
        return {images: []}
    },
    componentWillMount: function () {
        //TopicStore.getTopics();
        Actions.getImages(this.props.params.id);
    },
    render: function () {
        return <div>
            /*get url id*/
            I am topic with id {this.props.params.id}
        </div>
    },
    onChange: function (event, images) {
        this.setState({images: images});
    }
});