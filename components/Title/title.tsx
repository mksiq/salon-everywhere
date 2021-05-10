import Head from 'next/head';
import MyProps from '../../types/MyProps';

export default function Title({ partner }: MyProps) {
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
