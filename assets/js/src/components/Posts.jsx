var React = require("react");
var io = require('socket.io-client')
var ReactCSSTransitionGroup = require('react-addons-css-transition-group')

var Posts = React.createClass({
  render: function() {
    var postEntries = this.props.entries;
    function pushPosts(post) {
      return (
        <div key={post.key} className="post">
          <div className="post-header">
            <div className="post-name"><span>{post.name}</span></div>
            <div className="post-age"><span>{post.age}</span></div>
          </div>
          <div className="post-avatar">
            <img src={post.avatar} />
          </div>
        </div>
      )
    }
    var listPosts = postEntries.map(pushPosts);
    return (
      <div className="theList">
        <ReactCSSTransitionGroup className="example" transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {listPosts}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

module.exports = Posts
