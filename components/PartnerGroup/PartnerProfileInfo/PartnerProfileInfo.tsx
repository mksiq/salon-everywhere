import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleDown,
  faAngleDoubleUp,
} from '@fortawesome/free-solid-svg-icons';
import PartnerSkills from '../PartnerSkills/PartnerSkills';
import SpacingBar from '../../SpacingBar/SpacingBar';
import PartnerPortfolio from '../PartnerPortfolio/PartnerPortfolio';
import profileStyle from '../../../styles/Partner.module.css';
import PartnerBusinesses from '../PartnerBusinesses/PartnerBusinesses';

export default function PartnerProfileInfo({ partner }: any) {
  const shortText = partner.description.substring(0, 318) + '...';
  const [displayText, setDisplayText] = useState(shortText);
  const [toggleIcon, setToggleIcon] = useState(
    <FontAwesomeIcon
      icon={faAngleDoubleDown}
      className={profileStyle.arrowIcon}
    />
  );
  const toggleText = () => {
    if (displayText === shortText) {
      setDisplayText(partner.description);
      setToggleIcon(
        <FontAwesomeIcon
          icon={faAngleDoubleUp}
          className={profileStyle.arrowIcon}
        />
      );
    } else {
      setDisplayText(shortText);
      setToggleIcon(
        <FontAwesomeIcon
          icon={faAngleDoubleDown}
          className={profileStyle.arrowIcon}
        />
      );
    }
  };

  return (
    <div>
      <div
        onClick={(e) => {
          toggleText();
        }}
      >
        {displayText.split('\n').map((element: string, index: number) => {
          return <p key={index}>{element}</p>;
        })}
        <div className={profileStyle.profile + ' my-auto'}>{toggleIcon}</div>
      </div>
      <br /> <br /> <br />
      <SpacingBar height={5} />
      <br />
      <br />
      <PartnerSkills partner={partner} />
      <br /> <br /> <br />
      <SpacingBar height={5} />
      <br /> <br />
      <PartnerPortfolio partner={partner} complete={false} />
      <br /> <br /> <br />
      <SpacingBar height={5} />
      <br /> <br />
      <PartnerBusinesses partner={partner} />
      <br /> <br />
    </div>
  );
}
