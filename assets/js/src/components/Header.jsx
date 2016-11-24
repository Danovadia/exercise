var React = require("react");

var Header = React.createClass({
   settings: function() {
     return '';
   },
   render:function(){
       return(
           <div className="container">
             <div className="logo">
               <img src="img/logo.png" />
             </div>
             <div className="settings">
               <ul>
                 {this.props.settings}
               </ul>
             </div>
           </div>
       )
   }
});

module.exports = Header
