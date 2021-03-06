import { useState } from 'react';
import PartnerMenu from '../PartnerMenu/PartnerMenu';
import PartnerProfileInfo from '../PartnerProfileInfo/PartnerProfileInfo';
import SpacingBar from '../../SpacingBar/SpacingBar';
import partnerStyle from '../../../styles/Partner.module.css';
import PartnerContact from '../PartnerContact/PartnerContact';
import MyProps from '../../../types/MyProps';
import PartnerPortfolio from '../PartnerPortfolio/PartnerPortfolio';
import PartnerInspiration from '../PartnerInspiration/PartnerInspiration';

export default function PartnerInfo({ partner }: MyProps) {
  const [active, setActive] = useState('profile');

  return (
    <>
      <div className={partnerStyle.customContainer}>
        <div className="row">
          <div className="col-sm-12 col-md-10">
            <PartnerMenu active={active} setActive={setActive}></PartnerMenu>
            <SpacingBar height={10} />
            {active === 'profile' ? (
              <PartnerProfileInfo partner={partner} />
            ) : active === 'portfolios' ? (
              <PartnerPortfolio partner={partner} complete={true} />
            ) : (
              <PartnerInspiration partner={partner} />
            )}
          </div>

          <div className="col-sm-12 col-md-2">
            <PartnerContact partner={partner} />
          </div>
        </div>
      </div>
    </>
  );
}
