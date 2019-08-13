import React from "react";
import AppleMusic from "../imgs/0_svg/6_Music_icons/0_apple_music_light.svg";
import AppleITunes from "../imgs/0_svg/6_Music_icons/1_apple_music_itunes_light.svg";
import AppleHomepod from "../imgs/0_svg/6_Music_icons/2_apple_music_homepod_light.svg";
import AppleAirpods from "../imgs/0_svg/6_Music_icons/3_apple_music_airpods_light.svg";
import AppleIpod from "../imgs/0_svg/6_Music_icons/4_apple_music_ipod_touch_light.svg";
import AppleAcc from "../imgs/0_svg/6_Music_icons/5_apple_music_accessories_light.svg";
import AppleCard from "../imgs/0_svg/6_Music_icons/6_apple_music_gift_cards_light.svg";

import { Container, Image } from "semantic-ui-react";

const MusicIcons = props => {
  const musicArray = [
    { icon: AppleMusic, text: "Apple Music" },
    { icon: AppleITunes, text: "iTunes" },
    { icon: AppleHomepod, text: "HomePod" },
    { icon: AppleAirpods, text: "AirPods" },
    { icon: AppleIpod, text: "iPod touch" },
    { icon: AppleAcc, text: "Music Accessories" },
    { icon: AppleCard, text: "Gift Cards" }
  ];

  return (
    <Container className="subnav">
      <Container className="subnav-container light">
        <Container className="subnav-inner half">
          {musicArray.map((item, i) => {
            return (
              <div className="subnav-item" key={i}>
                <Image src={item.icon} alt={item.text} height="54" />
                <p>{item.text}</p>
              </div>
            );
          })}
        </Container>
      </Container>
      <div>
        <h2 className="page-header">{`Music Page`}</h2>
      </div>
    </Container>
  );
};

export default MusicIcons;
