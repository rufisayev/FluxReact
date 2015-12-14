var React = require('react');
var Header = require('./header');
var TopicList = require('./topicList');


module.exports = React.createClass({
    //for routing it the previeous pages it must be under <Header/>( {this.props.children})
    render: function(){
        return <div>
            <Header/>
            {this.content()}
        </div>
    },
    content:function(){
        if(this.props.children){
            return this.props.children;
        }else{
            return <TopicList/>
        }
    }
});