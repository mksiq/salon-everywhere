import barStyle from '../../styles/SpacingBar.module.css';

export default function SpacingBar({ height }: any) {
  return (
    <div
      className={barStyle.bar}
      style={{
        height: height + 'px',
      }}
    ></div>
  );
}
