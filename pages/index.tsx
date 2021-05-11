import React, { useEffect, useState } from 'react';
import PartnerGroup from '../components/PartnerGroup/PartnerGroup';
import Title from '../components/Title/title';
import Router from 'next/router';

import { emptyPartner } from '../data/mockData';
import { DataStore } from '@aws-amplify/datastore';
import { Partner } from '../models';

export default function Home() {
  const [partnerItem, setPartnerItem] = useState(emptyPartner);

  useEffect(() => {
    fetchPartners();
    async function fetchPartners() {
      const partnersData = await DataStore.query(Partner);
      const partnerData = partnersData[0] as Partner;

      if (partnerData) {
        setPartnerItem(partnerData);
      } else {
        /* Without amplify will return as undefined for the first time it is load forcing the
         * user to refresh*/
        setTimeout(() => {
          setPartnerItem(partnerData);
          Router.reload();
        }, 300);
      }
    }
  }, []);

  return (
    <>
      <Title partner={partnerItem} />
      <PartnerGroup partner={partnerItem} />
      <div className="col-sm-12 col-md-4"></div>
    </>
  );
}
