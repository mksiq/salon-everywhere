export default function PartnerContact({ partner }: any) {
  return (
    <div>
      <div className="col">
        <div className="container">
          <div className="roundSquare">
            <div>
              <span>X</span> <span>Book Now</span>
              Book through {partner.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
