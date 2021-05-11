import MyProps from '../../../types/MyProps';

export default function Inspiration({ partner }: MyProps) {
  return (
    <>
      <div className="container mt-2">
        <p>{partner.inspiration}</p>
      </div>
    </>
  );
}
