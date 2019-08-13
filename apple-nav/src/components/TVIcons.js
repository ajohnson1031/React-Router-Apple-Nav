import React from "react";
import AppleTV from "../imgs/0_svg/5_TV_icons/0_apple_tv_dark.svg";
import AppleTVPlus from "../imgs/0_svg/5_TV_icons/1_apple_tv_plus_dark.svg";
import AppleTV4K from "../imgs/0_svg/5_TV_icons/2_apple_tv_4K-HD_dark.svg";
import AppleTVAirplay from "../imgs/0_svg/5_TV_icons/3_apple_tv_airplay_dark.svg";
import AppleTVAcc from "../imgs/0_svg/5_TV_icons/4_apple_tv_accessories_dark.svg";
import { Container, Image } from "semantic-ui-react";

const TVIcons = props => {
  const tvArray = [
    { icon: AppleTV, text: `Apple TV app` },
    { icon: AppleTVPlus, text: `Apple TV+` },
    { icon: AppleTV4K, text: "Apple TV 4K" },
    { icon: AppleTV4K, text: "Apple TV HD" },
    { icon: AppleTVAirplay, text: "AirPlay" },
    { icon: AppleTVAcc, text: "Accessories" }
  ];

  return (
    <Container className="subnav">
      <Container className="subnav-container dark">
        <Container className="subnav-inner half">
          {tvArray.map((item, i) => {
            return (
              <div className="subnav-item" key={i}>
                <Image src={item.icon} alt={item.text} height="54" />
                <p>
                  {item.text}
                  <span className="small-caps">{i === 1 ? "R" : ""}</span>
                </p>
              </div>
            );
          })}
        </Container>
      </Container>
      <div>
        <h2 className="page-header">{`Apple TV Page`}</h2>
      </div>
    </Container>
  );
};

export default TVIcons;
