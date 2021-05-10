import { useState } from 'react';
import Partner from '../../../model/Partner.model';
import PartnerMenu from '../PartnerMenu/PartnerMenu';
import PartnerProfileInfo from '../PartnerProfileInfo/PartnerProfileInfo';
import SpacingBar from '../../SpacingBar/SpacingBar';

export default function PartnerInfo({ partner }: any) {
  const [active, setActive] = useState('profile');

  return (
    <>
      <PartnerMenu active={active} setActive={setActive}></PartnerMenu>
      <SpacingBar height={10} />
      {active === 'profile' ? <PartnerProfileInfo partner={partner} /> : ''}
    </>
  );
}
