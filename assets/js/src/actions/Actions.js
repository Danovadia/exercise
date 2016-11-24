var dispatcher = require("../dispatcher");

module.exports = {
    addPost:function(post){
        dispatcher.dispatch({
           post:post,
           type:"post:addPost"
        });
    }
}
