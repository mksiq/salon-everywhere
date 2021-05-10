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
      address: '660 Bedford Hwy, Rockingham, Halifax, NS, CAN, B3M 0M5',
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
    portfolio: [
      {
        id: 1,
        type: 'Balayage',
        images: [
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/gz9p7bctwl8aj0yk7zpx',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/znmwdumfocw1ftlwvogm',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/y0qennwtouwtojauhemc',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/gzounnnn0teeyqhoxmwu',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/u9vwbnribqzrx3u9zfx6',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/z3hgap14pvwex2sz8o9l',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/k5p4v8rtmeqbnhhhra2e',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/ln3ifwewgnztkqpeah3h',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/pfymstuk1sjfi7dm8y3m',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/nd6kc6xwhnvy7ggjzpqr',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/cml4scnt1svaxgy61tgk',
        ],
      },
      {
        id: 2,
        type: 'Haircolor',
        images: [
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/j2sjlh60gsvujcwvb4dq',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/md20oi6kzbkqoakrxdsi',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/k5mzsy7ggdpeilzmackk',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/gold85dnejx40eykao36',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/rwut4xchwixkhukj5vxk',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/rvooos45e3flv1kigwqe',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/phoesegwkxo1sfnnu2vr',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/t2wpzcoknp7spjbmhc6o',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/wbmawskyrd9ot0gopvr2',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/ctazrmbuwcavtjhsx3rw',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/qvmcxf8vevmqmxkkngmv',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/sp9qfz3pkmyizurtnyix',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/ibytv1ltbey47psecs0k',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/pgnwjckc5lnp4jhiefou',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/kvqzyphadektwiqss3yd',
        ],
      },
      {
        id: 3,
        type: 'Highlights',
        images: [
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/ol75lqzihjkki0iyxpnk',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/liakg44wpsd5w1v0plhu',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/jobugxevwf72g2zigos9',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/ibvryc5vzyhah0jqq8p0',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/rniutxugjivphywvtoox',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/f0ni9wfzzv1zyjf67hfd',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/nexdw7fanderpobrptez',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/cmfofhnfdngtmjzrqzi8',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/iydwkriavdvmhwodwzfs',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/cuvlfzyr8uap9878lpcy',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/gzgx8y4fwydtn78lugv6',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/ajm4yy7vthyvuis4v8pb',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/ag3u8vr9kx4oxomjiwyk',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/bdcwfk8uibmveku3vjku',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/ifrvvw2gppx1vpcvucmh',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/mjrbhogkosrpclezthfp',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/d0idy8a0bycsxgsxjspf',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/kiomfadr0gx9ogfznhjz',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/jj8htefbma8s2ulwecee',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/ovvo19t0q309msaid1j4',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/mlxj7kts85bcxqwxooji',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/qu2sba6zzy3kgzcpazfr',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/vhqg7ki6wxpt2bmozwfo',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/ri9yw34veqwzggah7jmb',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/rmankujjnkywrneiigav',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/voagv6goqcfdoywkndvw',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/byaphmpn8dxnpioljdde',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/t4gx8jax1tsz8jnyb9ma',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/lup2ls3fwwkrbrnrstwa',
        ],
      },
      {
        id: 4,
        type: 'Vivids',
        images: [
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/pgu2zs9acqoiuzmz6yyb',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/hxjazbldvvqo1jffxmy0',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/djktqnsjmhkafxgdaaky',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/wj2zzh0vnauodnsklx0k',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/kd3njjcqxpkgeesylbjd',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/zhstsjiqgjri4dvvrqvi',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/yxgvvqpt1sczfxlgnenq',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/emhzdhzuyaitds63huqv',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/kocbsfaktpwlkhuv6bi4',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/tbyaewmxg7kl97ty4zzn',
        ],
      },
      {
        id: 5,
        type: 'Kids',
        images: [
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/lupu8vkwkozjkm330mea',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/bmjctfjf8ef2smmgzrn1',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/kstha980kpucvcwbuzyg',
        ],
      },
      {
        id: 6,
        type: "Women's Haircuts",
        images: [
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/r1fqooooy5hya3zcedmh',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/ezzlftwsjfv5yfplzgpn',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/azn829szdwm2bmbkink1',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/vvea6dpku4r3xfwhsgsc',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/qfkyowffrqi1kvgx8vxj',
          'https://res.cloudinary.com/saloneverywhere/image/upload/dpr_auto,f_auto,q_auto,w_750/user_uploads/520/u86soqfeenlnzo127ctw',
        ],
      },
    ],
    inspiration: '',
    businesses: [],
  };

  return {
    props: {
      partner,
    },
  };
};
