var React = require("react");
var io = require('socket.io-client')
var ReactCSSTransitionGroup = require('react-addons-css-transition-group')

var Motion = require('react-motion')

var Actions = require("../actions/Actions");
var Posts = require('./Posts.jsx');


var Feed = React.createClass({
  componentWillMount: function(){
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect)
  },
  connect: function() {
    console.log('Connected to server, fetching data...');
  },
  addPost:function(e){
      Posts.setState({name:'HIII',age:'WHATTTTT'})
      e.preventDefault();
      Actions.addPost();
  },
  render:function(){
    return(
      <div className="row">
         <div className="col-md-6">
           {
             this.props.posts.map(function(p, index){
               return <Posts info={p} key={"post"+index} />;
             })
           }
         </div>
         <button className="btn" onClick={this.addPost}>Add Post</button>
      </div>
    )
  }
});

module.exports = Feed
