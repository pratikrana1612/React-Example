export default function Section({ children, title, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {/* <menu></menu> */}
      {children}
    </section>
  );
}
