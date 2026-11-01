import epirs from "../../../../assets/portfolio/epirs.webp";
import vetrosaint from "../../../../assets/portfolio/vetrosaint.webp";
import vitatest from "../../../../assets/portfolio/vitatest.webp";
import dmitruk from "../../../../assets/portfolio/dmitruk.webp";

export interface ICase {
  id: string;
  name: string;
  industry: string;
  format: string;
  domain: string;
  image: string;
  /** Brand colour of the client site — tints the card on hover. */
  accent: string;
}

export const CASES: ICase[] = [
  {
    id: "epirs",
    name: "ЭПИРС",
    industry: "Производство стеклопластика · B2B",
    format: "Одностраничный сайт",
    domain: "epirs.by",
    image: epirs,
    accent: "#F0B323",
  },
  {
    id: "vetrosaint",
    name: "Ветросайнт",
    industry: "Композитные материалы · опт",
    format: "Сайт с каталогом",
    domain: "vetrosaint.by",
    image: vetrosaint,
    accent: "#5B8CFF",
  },
  {
    id: "vitatest",
    name: "ВитаТест",
    industry: "Пожарная безопасность · Брест",
    format: "Сайт услуг",
    domain: "vitatest.by",
    image: vitatest,
    accent: "#F0443A",
  },
  {
    id: "dmitruk",
    name: "Адвокат Дмитрук П. В.",
    industry: "Юридические услуги · Минск",
    format: "Персональный сайт",
    domain: "advocatedmitruk.minsk.by",
    image: dmitruk,
    accent: "#C9A27E",
  },
];
