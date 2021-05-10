export default function SpacingBar({ height }: any) {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'var(--secondary-light)',
        height: height + 'px',
      }}
    ></div>
  );
}
