import { headers } from "next/headers";
import ptBR from "../../locales/pt-BR.json";
import en from "../../locales/en.json";
import { About, type AboutTranslations } from "@/components/About";
import { Contact, type ContactTranslations } from "@/components/Contact";
import { Hero, type HeroTranslations } from "@/components/Hero";
import { Projects, type ProjectsTranslations } from "@/components/Projects";

type Locale = "pt-BR" | "en";

const translations: Record<
  Locale,
  {
    about: AboutTranslations;
    hero: HeroTranslations;
    contact: ContactTranslations;
    projects: ProjectsTranslations;
  }
> = {
  "pt-BR": ptBR as {
    about: AboutTranslations;
    hero: HeroTranslations;
    contact: ContactTranslations;
    projects: ProjectsTranslations;
  },
  en: en as {
    about: AboutTranslations;
    hero: HeroTranslations;
    contact: ContactTranslations;
    projects: ProjectsTranslations;
  },
};

async function detectLocale(): Promise<Locale> {
  const acceptLanguage =
    (await headers()).get("accept-language")?.toLowerCase() ?? "";

  if (acceptLanguage.includes("en")) {
    return "en";
  }

  return "pt-BR";
}

export default async function Home() {
  const locale = await detectLocale();
  const t = translations[locale];

  return (
    <>
      <About t={t.about} />
      <Hero t={t.hero} />
      <Projects t={t.projects} />
      <Contact t={t.contact} />
    </>
  );
}
