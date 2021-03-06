import React, { useEffect, useState } from 'react';
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
import MyProps from '../../../types/MyProps';

export default function PartnerProfileInfo({ partner }: MyProps) {
  const shortText = partner.description.substring(0, 318) + '...';
  const [displayText, setDisplayText] = useState(shortText);

  useEffect(() => {
    setDisplayText(shortText);
  }, [partner.description]);

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
      <br />
      <SpacingBar height={5} />
      <br className="mb-md-3" />
      <PartnerSkills partner={partner} />
      <br className="mb-md-3" />
      <SpacingBar height={5} />
      <br />
      <PartnerPortfolio partner={partner} complete={false} />
      <br className="mb-md-3" />
      <SpacingBar height={5} />
      <br className="mb-md-3" />
      <PartnerBusinesses partner={partner} />
      <br />
    </div>
  );
}
