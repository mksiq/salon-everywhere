import PartnerCard from '../PartnerGroup/PartnerCard/PartnerCard';
import PartnerInfo from '../PartnerGroup/PartnerInfo/PartnerInfo';
import SpacingBar from '../SpacingBar/SpacingBar';

export default function PartnerGroup({ partner }: any) {
  return (
    <>
      <PartnerCard partner={partner} />
      <div className="col-sm-12 col-lg-8">
        <div className="container">
          <PartnerInfo partner={partner} />
        </div>
      </div>
    </>
  );
}
