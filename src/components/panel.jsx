export default function Panel({ title, theme }) {
  const className = "bg-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
    </section>
  );
}
