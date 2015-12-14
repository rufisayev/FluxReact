var React = require('react');
var Main = require('./components/main');
var ReactRouter = require('react-router');//for routing
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Topic = require('./components/topic');
var ImageDetail = require('./components/imageDetails');

var Child1 = React.createClass({
    render: function () {
        return <h1>Child1</h1>
    }
});


var Child2 = React.createClass({
    render: function () {
        return <h1>
            Child2
            {this.props.children}
        </h1>

    }
});
module.exports = (
    <Router history={new HashHistory}>
        <Route path="/" component={Main}>
            <Route path="1" component={Child1}/>
            <Route path="2" component={Child2}>
                <Route path="32" component={Child1}/>
            </Route>
            <Route path="topics/:id" component={Topic}/>
            <Route path="images/:id" component={ImageDetail}/>
        </Route>
    </Router>
)