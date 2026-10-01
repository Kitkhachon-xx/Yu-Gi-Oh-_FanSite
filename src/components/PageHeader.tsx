export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative px-4 pb-10 pt-16 text-center sm:px-6 sm:pt-24">
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold/80">{eyebrow}</p>
      )}
      <h1 className="mt-3 text-4xl font-bold gold-text sm:text-5xl md:text-6xl">{title}</h1>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">{subtitle}</p>
      )}
      <div className="divider-gold mx-auto mt-8 max-w-md" />
    </section>
  );
}
