import PartnerCard from '../PartnerGroup/PartnerCard/PartnerCard';
import PartnerInfo from '../PartnerGroup/PartnerInfo/PartnerInfo';
import SpacingBar from '../SpacingBar/SpacingBar';
import PartnerContact from './PartnerContact/PartnerContact';

export default function PartnerGroup({ partner }: any) {
  return (
    <>
      <PartnerCard partner={partner} />

      <PartnerInfo partner={partner} />
    </>
  );
}
