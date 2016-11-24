var dispatcher = require("../dispatcher");

function PostStore() {
    var listeners = [];
    var posts = [];

    function getPosts() {
        return posts;
    }

    function onChange(listener) {
        listeners.push(listener);
    }

    function addPost(post) {
        posts.push(post)
        triggerListeners();
    }


    function triggerListeners() {
        listeners.forEach(function (listener) {
            listener(posts);
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "post") {
            switch (split[1]) {
                case "addPost":
                    addPost(payload.post);
                    break;
            }
        }
    });

    return {
        getPosts: getPosts,
        onChange: onChange
    }
}

module.exports = PostStore();
