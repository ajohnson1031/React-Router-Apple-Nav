import React from "react";
import Watch4 from "../imgs/0_svg/4_Watch_icons/0_watch_series_4.svg";
import WatchNike from "../imgs/0_svg/4_Watch_icons/1_watch_nike.svg";
import WatchHermes from "../imgs/0_svg/4_Watch_icons/2_watch_hermes.svg";
import Watch3 from "../imgs/0_svg/4_Watch_icons/3_watch_series_3.svg";
import WatchOS from "../imgs/0_svg/4_Watch_icons/4_watch_os.svg";
import WatchBands from "../imgs/0_svg/4_Watch_icons/5_watch_bands.svg";
import WatchAcc from "../imgs/0_svg/4_Watch_icons/6_watch_accessories.svg";
import WatchComp from "../imgs/0_svg/4_Watch_icons/7_watch_compare.svg";
import { Container, Image } from "semantic-ui-react";

const WatchIcons = props => {
  const ipadArray = [
    { icon: Watch4, text: "Apple Watch Series 4" },
    { icon: WatchNike, text: "Apple Watch Nike+" },
    { icon: WatchHermes, text: "Apple Watch Hermès" },
    { icon: Watch3, text: "Apple Watch Series 3" },
    { icon: WatchOS, text: "watchOS" },
    { icon: WatchBands, text: "Bands" },
    { icon: WatchAcc, text: "Accessories" },
    { icon: WatchComp, text: "Compare" }
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
        <h2 className="page-header">{`Watch Page`}</h2>
      </div>
    </Container>
  );
};

export default WatchIcons;
