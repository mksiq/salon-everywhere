import Head from 'next/head';

export default function Title({ partner }: any) {
  return (
    <Head>
      <title>
        {partner.name} |{' '}
        {partner.roles?.map((role: string) => {
          if (role != '') return role + ' ';
        })}
        | {partner.location?.neighborhood}, {partner.location?.provinceState}
      </title>
    </Head>
  );
}
