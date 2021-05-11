import React, { useEffect, useState } from 'react';
import PartnerGroup from '../components/PartnerGroup/PartnerGroup';
import Title from '../components/Title/title';
import Router from 'next/router';

import { emptyPartner } from '../data/mockData';
import { DataStore } from '@aws-amplify/datastore';
import { Partner } from '../models';
import MyProps from '../types/MyProps';

export default function Home({ partner }: MyProps) {
  return (
    <>
      <Title partner={partner} />
      <PartnerGroup partner={partner} />
      <div className="col-sm-12 col-md-4"></div>
    </>
  );
}

export async function getStaticProps() {
  const partnersData = await DataStore.query(Partner);

  const partner = JSON.parse(JSON.stringify(partnersData[0]));

  return {
    props: {
      partner,
    },
  };
}
