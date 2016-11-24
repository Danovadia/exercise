var React = require("react");
var io = require('socket.io-client')

var Posts = React.createClass({
  componentWillMount: function(){
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect)
  },
  render:function(){
    return (
      <div className="post">
        <div className="post-header">
            <span className="post-name">a</span>
            <span className="post-age">s</span>
        </div>
        <div className="post-avatar">
          <img src="http://lorempixel.com/300/300"></img>
        </div>
      </div>
    );
  }
});

module.exports = Posts
