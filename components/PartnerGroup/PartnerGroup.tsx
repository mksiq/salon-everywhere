import MyProps from '../../types/MyProps';
import PartnerCard from '../PartnerGroup/PartnerCard/PartnerCard';
import PartnerInfo from '../PartnerGroup/PartnerInfo/PartnerInfo';

export default function PartnerGroup({ partner }: MyProps) {
  return (
    <>
      <PartnerCard partner={partner} />
      <PartnerInfo partner={partner} />
    </>
  );
}
