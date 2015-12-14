var React = require('react');
var ImageStore = require('../stores/imageStore');
var Actions = require('../actions');
var Reflux = require('reflux');
var ImagePreview = require('./imagePreview');

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
    componentWillReceiveProps: function (nextProps) {
        //TopicStore.getTopics();
        Actions.getImages(nextProps.params.id);
    },
    render: function () {
        console.log(this.state.images.length)
        return <div className="topic">
            {this.renderImages()}
        </div>
    },
    onChange: function (event, images) {
        this.setState({images: images});
    },
    renderImages: function(){
        return this.state.images.slice(0,20).map(function(image){
            return <ImagePreview key={image.id} {...image}/>
        });
    }
});