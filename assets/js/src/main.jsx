var React = require("react");
var ReactDOM = require("react-dom");

var Feed = require("./components/Feed.jsx");
var Header = require("./components/Header.jsx");
var postStore = require("./stores/postStore");
var _posts = postStore.getPosts();
postStore.onChange(function(posts){
    _posts = posts;
    render();
});


function render(){
  ReactDOM.render(<Header />, document.getElementById("header"));
  ReactDOM.render(<Feed posts={_posts}/>, document.getElementById("root"));
}

render();
