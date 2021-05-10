import Head from 'next/head';
import PartnerGroup from '../components/PartnerGroup/PartnerGroup';
import Title from '../components/Title/title';

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
  const partner = {
    _id: 1,
    id: 'melissa-hirtle-794768',
    name: 'Melissa Hirtle',
    tag: '@melissa-hirtle-794768',
    location: {
      neighborhood: 'Rockingham',
      city: 'Halifax',
      provinceState: 'NS',
      country: 'CA',
    },
    roles: ['Hairstylist', 'Service Business Owner or Principal'],
    description: `
    I bring over 20 years of dedicated experience to my valued clientele.

  I have an adoration for doing color but I equally enjoy cutting short and long hair.
  
  My education includes training with John Paul Mitchell Systems in Las Vegas as well as classes in a wide variety of other colour lines and cutting techniques.
  
  Follow me on Instagram @ merakihairbeautik.
  
  I offer all hair services and facial waxing.`,
    skills: [
      'Babylights',
      'Balayage',
      'Blow Out',
      'Braids',
      'Bridal',
      'Curly Hair',
      'Hair Color',
      'Hair Straightening',
      'Highlights',
      "Men's Haircut",
      'Perm',
      'Styling',
      'Updo',
      'Vivids',
      'Wigs',
      "Women's Haircut",
    ],
    portfolio: [],
    inspiration: '',
    businesses: [],
  };

  return {
    props: {
      partner,
    },
  };
};
