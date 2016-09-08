import Telescope from 'meteor/nova:lib';
import React, {PropTypes, Component} from 'react';
import {FlashContainer} from "meteor/nova:core";
import {DocumentContainer} from "meteor/utilities:react-list-container";
import Posts from "meteor/nova:posts";

class Layout extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.context.messages.registerCompont(this);
        this.state = this.initialState = {
            isSearching: false,
            isLogin: false,
            popoverMenu: null,
            cachePost: null,
            didMount: false,
        };
    }

    componentDidMount() {
        this.setState({didMount: true});
    }

    dismissCurrentPostPanel() {
        this.context.messages.dismissPostPanel();
    }

    showCurrentPostPanel(postId) {
        this.context.messages.pushAndPostShow(postId);
    }

    render() {
        let classValue = "wrapper" + (this.state.isSearching ? " search-mode" : "") + (this.state.cachePost ? " no-scroll" : "");

        return (
          <div className={classValue} id="wrapper">

              <Telescope.components.HeadTags />

              <Telescope.components.UsersProfileCheck {...this.props} />

              <div>
                  <Telescope.components.Header {...this.props} />
              </div>

              {/*Rendering the popover menus*/}
              {/*{this.renderPopoverMenus()}*/}

              <div className={this.state.isSearching ? 'overlayActive_oQWJ3' : 'overlayInactive_1UI7W'}></div>
              {/*Showing the post's detail pages*/}
              {/*{this.renderPosts()}*/}
              {/*Showing the login UI*/}
              {/*{this.state.isLogin ? <Telescope.components.UserLogin /> : null}*/}

              <div >
                  <div className="constraintWidth_ZyYbM container_3aBgK">
                      <FlashContainer component={Telescope.components.FlashMessages}/>
                  </div>

                  <Telescope.components.Newsletter />
                  <div className="constraintWidth_ZyYbM container_3aBgK">
                      {this.props.children}
                  </div>

              </div>

              <Telescope.components.Footer {...this.props}/>

          </div>
        )

    }
}

Layout.contextTypes = {
    messages: React.PropTypes.object
};

Layout.displayName = "Layout";

module.exports = Layout;