import React from "react";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import AppleLink from "./AppleLink";
import AppleLogo from "../imgs/apple-logo.png";
import AppleBag from "../imgs/bag_image_large.png";
import AppleSearch from "../imgs/search_image_large.png";
import Home from "./Home";
import Support from "./Support";
import Search from "./Search";
import Bag from "./Bag";
import MacIcons from "./MacIcons";
import IPadIcons from "./IPadIcons";
import IPhoneIcons from "./IPhoneIcons";
import WatchIcons from "./WatchIcons";
import TVIcons from "./TVIcons";
import MusicIcons from "./MusicIcons";

const NavWrapper = () => {
  const headerNavItems = [
    {
      icon: AppleLogo,
      text: null,
      path: null,
      num: 0
    },
    { icon: null, text: "Mac", path: "mac", num: 1 },
    { icon: null, text: "iPad", path: "ipad", num: 2 },
    { icon: null, text: "iPhone", path: "iphone", num: 3 },
    { icon: null, text: "Watch", path: "watch", num: 4 },
    { icon: null, text: "TV", path: "tv", num: 5 },
    { icon: null, text: "Music", path: "music", num: 6 },
    { icon: null, text: "Support", path: "support", num: 7 },
    {
      icon: AppleSearch,
      text: null,
      path: "search",
      num: 8
    },
    {
      icon: AppleBag,
      text: null,
      path: "shopping-bag",
      num: 9
    }
  ];

  return (
    <Container className="nav-header">
      <Container className="nav-wrapper">
        {headerNavItems.map((item, i) => {
          return (
            <div key={i}>
              <Route
                path={``}
                render={props => (
                  <AppleLink
                    {...props}
                    icon={item.icon}
                    text={item.text}
                    path={`/${item.path === null ? "" : item.path}`}
                    keynum={item[i]}
                  />
                )}
              />
            </div>
          );
        })}{" "}
      </Container>{" "}
      <Route exact path="/" component={Home} />
      <Route path="/mac" component={MacIcons} />
      <Route path="/ipad" component={IPadIcons} />
      <Route path="/iphone" component={IPhoneIcons} />
      <Route path="/watch" component={WatchIcons} />
      <Route path="/tv" component={TVIcons} />
      <Route path="/music" component={MusicIcons} />
      <Route path="/support" component={Support} />
      <Route path="/search" component={Search} />
      <Route path="/shopping-bag" component={Bag} />
    </Container>
  );
};

export default NavWrapper;
