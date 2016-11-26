var React = require("react");
var io = require('socket.io-client')
var ReactCSSTransitionGroup = require('react-addons-css-transition-group')

var Motion = require('react-motion')

var Posts = require('./Posts.jsx');


var Feed = React.createClass({
  getInitialState: function() {
    return {
      posts: []
    };
  },
  componentWillMount: function(){
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect)
  },
  connect: function() {
    console.log('Connected to server, fetching data...');
  },
  addPost: function(e) {
    var newArray = this.state.posts;
    newArray.unshift(
      {
        name: e.name,
        age: e.age,
        avatar: e.avatar,
        key: Date.now()
      }
    );
    this.setState({posts:newArray})
    console.log(itemArray)
  },
  render: function() {
      var self = this;
      this.socket.on('post', function (data) {
        self.addPost(data)
      });
      return (
        <div className="post-list">
          <div className="header">
          </div>
          <Posts entries={this.state.posts}/>
        </div>
      );
    }
});

module.exports = Feed
