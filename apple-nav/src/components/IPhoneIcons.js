import React from "react";
import IPhoneXS from "../imgs/0_svg/3_iPhone_icons/0_iphone_xs_light.svg";
import IPhoneXR from "../imgs/0_svg/3_iPhone_icons/1_iphone_xr_light.svg";
import IPhone8 from "../imgs/0_svg/3_iPhone_icons/2_iphone8_light.svg";
import IPhone7 from "../imgs/0_svg/3_iPhone_icons/3_iphone7_light.svg";
import IPhoneComp from "../imgs/0_svg/3_iPhone_icons/4_iphone_compare_light.svg";
import IPhoneAppleCard from "../imgs/0_svg/3_iPhone_icons/5_iphone_applecard_light.svg";
import IPhoneAirpods from "../imgs/0_svg/3_iPhone_icons/6_iphone_airpods_light.svg";
import IPhoneAcc from "../imgs/0_svg/3_iPhone_icons/7_iphone_accessories_light.svg";
import IPhoneIos from "../imgs/0_svg/3_iPhone_icons/8_iphone_ios_light.svg";
import { Container, Image } from "semantic-ui-react";

const IPhoneIcons = props => {
  const iPhoneArray = [
    { icon: IPhoneXS, text: `iPhone Xs` },
    { icon: IPhoneXR, text: `iPhone X` },
    { icon: IPhone8, text: "iPad" },
    { icon: IPhone7, text: "iPad mini" },
    { icon: IPhoneComp, text: "Compare" },
    { icon: IPhoneAppleCard, text: "Apple Card" },
    { icon: IPhoneAirpods, text: "AirPods" },
    { icon: IPhoneAcc, text: "Accessories" },
    { icon: IPhoneIos, text: "iOS 12" }
  ];

  return (
    <Container className="subnav">
      <Container className="subnav-container light">
        <Container className="subnav-inner">
          {iPhoneArray.map((item, i) => {
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
        <h2 className="page-header">{`iPhone Page`}</h2>
      </div>
    </Container>
  );
};

export default IPhoneIcons;
