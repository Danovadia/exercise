var React = require("react");
var io = require('socket.io-client')

var Posts = React.createClass({
  componentWillMount: function(){
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect)
  },
  getInitialState:function(){
    return {
        name:"aaa",
        age:"dsadsa"
    }
  },
  render:function(){
    return (
      <div className="post">
        <div className="post-header">
            <span className="post-name">{this.state.name}</span>
            <span className="post-age">{this.state.age}</span>
        </div>
        <div className="post-avatar">
          <img src="http://lorempixel.com/300/300"></img>
        </div>
      </div>
    );
  }
});

module.exports = Posts
