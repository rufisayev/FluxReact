var React = require('react');
var TopicStore = require('..//stores/topicStore');
var Reflux = require('reflux');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
    mixins: [
        //listen to any event that is trigger by TopicStore and when TopicStore trigger the event run onChange method
        Reflux.listenTo(TopicStore, 'onChange')
    ],
    getInitialState: function () {
        return {
            topics: []
        }
    }
    ,
    componentWillMount: function () {
       //TopicStore.getTopics();
        Actions.getTopics();
    }
    ,
    render: function () {
        return <div className="list-group">
            {this.renderTopics()}
        </div>
    }
    ,
    renderTopics: function () {
        return this.state.topics.slice(0,4).map(function (topic) {
            return <Link activeClassName="active" to={"topics/" + topic.id} className="list-group-item" key={topic.id}>
                <h4>{topic.name}</h4>
                <p>{topic.description}</p>
            </Link>
        })
    }
    ,
    onChange: function (event, topics) {
        this.setState({topics: topics});
    }
})
;