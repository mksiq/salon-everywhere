import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import partnerStyle from '../../../styles/Partner.module.css';
import MyProps from '../../../types/MyProps';

export default function PartnerSkills({ partner }: MyProps) {
  return (
    <div>
      <div className="h3 secondary-text text-heavy">Skills</div>
      {partner.skills.map((skill: string, index: number) => {
        return (
          <div className={partnerStyle.pill} key={index}>
            {skill}
            <FontAwesomeIcon
              icon={faStar}
              className={partnerStyle.starIcon}
            ></FontAwesomeIcon>
          </div>
        );
      })}
    </div>
  );
}
