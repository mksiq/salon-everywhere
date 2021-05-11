import { useEffect, useState } from 'react';
import PartnerGroup from '../components/PartnerGroup/PartnerGroup';
import Title from '../components/Title/title';
import Router from 'next/router';

import { emptyPartner } from '../data/mockData';
import { DataStore } from '@aws-amplify/datastore';
import { Partner } from '../models';

export default function Home() {
  const [partnerItem, setPartnerItem] = useState(emptyPartner);
  useEffect(() => {
    const fetchPartners = async () => {
      const partnersData = await DataStore.query(Partner);
      const partnerData = partnersData[0] as Partner;
      setPartnerItem(partnerData);
    };
    (async () => {
      await fetchPartners();
    })();
  }, [partnerItem]);

  return (
    <>
      <Title partner={partnerItem} />
      <PartnerGroup partner={partnerItem} />
      <div className="col-sm-12 col-md-4"></div>
    </>
  );
}
