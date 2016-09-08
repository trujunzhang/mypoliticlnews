import Telescope from 'meteor/nova:lib';
import React from 'react';
const moment = require('moment');

const PostsList = ({results, currentUser, hasMore, ready, count, totalCount, loadMore, showHeader = true}) => {

    // console.log(results);
    // console.log(ready);
    // console.log(hasMore);
    // console.log(totalCount);
    // console.log(count);

    return (
      <div className="content_1jnXo">
          <section className="results_37tfm">

          </section>
          <div className="sidebar_Y2LGQ">

              <Telescope.components.WidgetCalendar selected={moment().startOf("day")}/>
              <Telescope.components.WidgetTopics />

          </div>
      </div>
    )

};

PostsList.displayName = "PostsList";

module.exports = PostsList;