import { Header, type HeaderTranslations } from "../Header";

export function Layout({
  children,
  headerT,
}: {
  children: React.ReactNode;
  headerT: HeaderTranslations;
}) {
  return (
    <div className="min-h-screen bg-black">
      <Header t={headerT} />
      <main>{children}</main>
    </div>
  );
}
