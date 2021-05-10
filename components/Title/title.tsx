export default function Title({ partner }: any) {
  return (
    <title>
      {partner.name} |{' '}
      {partner.roles?.map((role: string) => {
        if (role != '') return role + ' ';
      })}
      | {partner.location?.neighborhood}, {partner.location?.provinceState}
    </title>
  );
}
