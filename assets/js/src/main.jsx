var React = require("react");
var ReactDOM = require("react-dom");
var io = require('socket.io-client')
var ReactCSSTransitionGroup = require('react-addons-css-transition-group')

var ReactMotion = require('react-motion');
var Motion = ReactMotion.Motion;

var Feed = require("./components/Feed.jsx");
var Header = require("./components/Header.jsx");


// var Feed = React.createClass({
//   getInitialState: function() {
//     return {
//       items: []
//     };
//   },
//   componentWillMount: function(){
//     this.socket = io('http://localhost:3000');
//     this.socket.on('connect', this.connect)
//   },
//   connect: function() {
//     console.log('Connected to server, fetching data...');
//   },
//   addItem: function(e) {
//     var newArray = this.state.items;
//     newArray.unshift(
//       {
//         name: e.name,
//         age: e.age,
//         avatar: e.avatar,
//         key: Date.now()
//       }
//     );
//     this.setState({items:newArray})
//     console.log(itemArray)
//   },
//   render: function() {
//       var self = this;
//       this.socket.on('post', function (data) {
//         self.addItem(data)
//       });
//       return (
//         <div className="todoListMain">
//           <div className="header">
//           </div>
//           <Posts entries={this.state.items}/>
//         </div>
//       );
//     }
// });

// var Posts = React.createClass({
//   render: function() {
//     var todoEntries = this.props.entries;
//     function createTasks(item) {
//       return (
//         <div key={item.key} className="post">
//           <div className="post-header">
//             <div className="post-name"><span>{item.name}</span></div>
//             <div className="post-age"><span>{item.age}</span></div>
//           </div>
//           <div className="post-avatar">
//             <img src={item.avatar} />
//           </div>
//         </div>
//       )
//     }
//     var listItems = todoEntries.map(createTasks);
//     return (
//       <div className="theList">
//         <ReactCSSTransitionGroup className="example" transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
//           {listItems}
//         </ReactCSSTransitionGroup>
//       </div>
//     );
//   }
// });



ReactDOM.render(
  <div>
    <Header/>
  </div>,
  document.getElementById('header')
);


ReactDOM.render(
  <div>
    <Feed/>
  </div>,
  document.getElementById('root')
);
