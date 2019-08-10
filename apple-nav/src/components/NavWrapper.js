import React from "react";
import { Container, Image } from "semantic-ui-react";
import { Route, NavLink } from "react-router-dom";
import AppleLogo from "../imgs/apple-logo.png";
import AppleBag from "../imgs/bag_image_large.png";
import AppleSearch from "../imgs/search_image_large.png";

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

  console.log();

  return (
    <Container className="nav-header">
      <Container className="nav-wrapper">
        {headerNavItems.map(item => {
          return (
            <Route
              render={props => (
                <NavLink
                  to={`/${item.path === null ? "" : item.path}`}
                  className="hnav-link"
                >
                  {item.text === null ? (
                    <Image src={item.icon} alt={item.path} width="18.5" />
                  ) : (
                    item.text
                  )}
                </NavLink>
              )}
            />
          );
        })}
      </Container>
    </Container>
  );
};

export default NavWrapper;
