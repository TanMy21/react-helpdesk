import React from "react";
import Row from "react-bootstrap/Row";
import SettingsChannelCol from "./settingsChannelCol";
import { HiOutlineMail } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";
import { GrChat } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { FaTwitterSquare } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";
import { VscFeedback } from "react-icons/vsc";

const SettingsChannelRow = (props) => {
  const settingsItem = [
      {
          icon: <HiOutlineMail />,
          title:"Email"
      },
      {
        icon: <CgWebsite />,
        title:"Portal"
      },
      {
        icon: <GrChat />,
        title:"Chat"
      }
  ];

  return (
    <>
      <Row className="settings-item-row">
          {
              settingsItem.map((mappedObject, item) => {
                  return(<SettingsChannelCol key={item} icon={mappedObject.icon} title={mappedObject.title} />);
              })
          }
        {/* <SettingsChannelCol icon={<HiOutlineMail />} title={"Email"} />
        <SettingsChannelCol icon={<HiOutlineMail />} title={"Email"} /> */}
      </Row>
    </>
  );
};

export default SettingsChannelRow;
