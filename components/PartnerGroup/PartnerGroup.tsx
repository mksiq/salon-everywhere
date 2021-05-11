import MyProps from '../../types/MyProps';
import PartnerCard from '../PartnerGroup/PartnerCard/PartnerCard';
import PartnerInfo from '../PartnerGroup/PartnerInfo/PartnerInfo';
import PartnerContactMobile from './PartnerContact/PartnerContact.mobile';

export default function PartnerGroup({ partner }: MyProps) {
  return (
    <>
      <PartnerCard partner={partner} />
      <div className="d-md-none">
        <PartnerContactMobile partner={partner} />
      </div>
      <PartnerInfo partner={partner} />
    </>
  );
}
