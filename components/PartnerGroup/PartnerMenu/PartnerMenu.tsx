import stylesMen from '../../../styles/PartnerMenu.module.css';

export default function PartnerMenu({ active, setActive }: any) {
  return (
    <div>
      <ul className="nav">
        <li
          className={
            (active === 'profile' ? stylesMen.active : '') +
            ' nav-item ' +
            stylesMen.options
          }
        >
          <button onClick={() => setActive('profile')}>PROFILE</button>
        </li>
        <li
          className={
            (active === 'portfolios' ? stylesMen.active : '') +
            ' nav-item ' +
            stylesMen.options
          }
        >
          <button onClick={() => setActive('portfolios')}>PORTFOLIOS</button>
        </li>
        <li
          className={
            (active === 'inspiration' ? stylesMen.active : '') +
            ' nav-item ' +
            stylesMen.options
          }
        >
          <button onClick={() => setActive('inspiration')}>INSPIRATION</button>
        </li>
      </ul>
    </div>
  );
}
