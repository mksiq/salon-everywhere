import PartnerGroup from '../components/PartnerGroup/PartnerGroup';
import Title from '../components/Title/title';
import { server } from '../config';

export default function Home({ partner }: any) {
  return (
    <>
      <Title partner={partner} />
      <PartnerGroup partner={partner} />

      <div className="col-sm-12 col-md-4"></div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/partner`);
  const partner = await res.json();
  return {
    props: {
      partner,
    },
  };
};
