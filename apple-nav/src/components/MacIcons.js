import React from "react";
import MacBookAir from "../imgs/0_svg/1_Mac_icons/0_macbook_air.svg";
import MacBookPro from "../imgs/0_svg/1_Mac_icons/1_macbook_pro.svg";
import IMac from "../imgs/0_svg/1_Mac_icons/2_imac.svg";
import IMacPro from "../imgs/0_svg/1_Mac_icons/3_imac_pro.svg";
import MacPro from "../imgs/0_svg/1_Mac_icons/4_mac_pro.svg";
import MacMini from "../imgs/0_svg/1_Mac_icons/5_mac_mini.svg";
import MacComp from "../imgs/0_svg/1_Mac_icons/6_mac_compare.svg";
import MacProDisp from "../imgs/0_svg/1_Mac_icons/7_mac_pro_display_xdr.svg";
import MacAcc from "../imgs/0_svg/1_Mac_icons/8_mac_accessories.svg";
import MacOS from "../imgs/0_svg/1_Mac_icons/9_mac_os_mojave.svg";
import { Container, Image } from "semantic-ui-react";

const WatchIcons = props => {
  const watchArray = [
    { icon: MacBookAir, text: "MacBook Air" },
    { icon: MacBookPro, text: "MacBook Pro" },
    { icon: IMac, text: "iMac" },
    { icon: IMacPro, text: "iMac Pro" },
    { icon: MacPro, text: "Mac Pro" },
    { icon: MacMini, text: "Mac Mini" },
    { icon: MacComp, text: "Compare" },
    { icon: MacProDisp, text: "Pro Display XDR" },
    { icon: MacAcc, text: "Accessories" },
    { icon: MacOS, text: "Mojave" }
  ];

  return (
    <Container className="subnav">
      <Container className="subnav-container light">
        <Container className="subnav-inner">
          {watchArray.map((item, i) => {
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
        <h2 className="page-header">{`Mac Page`}</h2>
      </div>
    </Container>
  );
};

export default WatchIcons;
