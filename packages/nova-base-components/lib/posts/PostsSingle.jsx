import React from 'react';
import {DocumentContainer} from "meteor/utilities:react-list-container";
import Posts from "meteor/nova:posts";

const PostsSingle = (props, context) => {
    return (
      <DocumentContainer
        collection={Posts}
        publication="posts.single"
        selector={{_id: props.params._id}}
        terms={props.params}
        joins={Posts.getJoins()}
        component={Telescope.components.PostsPage}
        loading={<div className="placeholder_1WOC3"><div className="loader_54XfI animationRotate loader_OEQVm"></div></div>}
      />
    )
};

PostsSingle.displayName = "PostsSingle";

module.exports = PostsSingle;