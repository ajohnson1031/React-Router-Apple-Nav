import React from "react";
import IPadPro from "../imgs/0_svg/2_iPad_icons/0_ipad_pro_light.svg";
import IPadAir from "../imgs/0_svg/2_iPad_icons/1_ipad_air_light.svg";
import IPad from "../imgs/0_svg/2_iPad_icons/2_ipad_light.svg";
import IPadMini from "../imgs/0_svg/2_iPad_icons/3_ipad_mini_light.svg";
import IPadComp from "../imgs/0_svg/2_iPad_icons/4_ipad_compare_light.svg";
import ApplePencil from "../imgs/0_svg/2_iPad_icons/5_apple_pencil_light.svg";
import SmartKeyBd from "../imgs/0_svg/2_iPad_icons/6_smart_keyboard_light.svg";
import IPadAcc from "../imgs/0_svg/2_iPad_icons/7_ipad_accessories_light.svg";
import IPadIos from "../imgs/0_svg/2_iPad_icons/8_ipad_ios_light.svg";
import { Container, Image } from "semantic-ui-react";

const IPadIcons = props => {
  const ipadArray = [
    { icon: IPadPro, text: "iPad Pro" },
    { icon: IPadAir, text: "iPad Air" },
    { icon: IPad, text: "iPad" },
    { icon: IPadMini, text: "iPad mini" },
    { icon: IPadComp, text: "Compare" },
    { icon: ApplePencil, text: "Apple Pencil" },
    { icon: SmartKeyBd, text: "Smart Keyboard" },
    { icon: IPadAcc, text: "Accessories" },
    { icon: IPadIos, text: "iOS 12" }
  ];

  return (
    <Container className="subnav">
      <Container className="subnav-container light">
        <Container className="subnav-inner">
          {ipadArray.map((item, i) => {
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
        <h2 className="page-header">{`iPad Page`}</h2>
      </div>
    </Container>
  );
};

export default IPadIcons;
