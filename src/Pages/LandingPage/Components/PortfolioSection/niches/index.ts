import type { ComponentType } from "react";
import { FurnitureConcept, FurnitureScene } from "./Furniture";
import { BeautyConcept, BeautyScene } from "./Beauty";
import { RepairConcept, RepairScene } from "./Repair";
import { EventsConcept, EventsScene } from "./Events";
import { CafeConcept, CafeScene } from "./Cafe";
import { EducationConcept, EducationScene } from "./Education";

export type TNiche = {
  id: string;
  /** big ghost index watermark on the tile */
  index: string;
  /** small tracked eyebrow under the name */
  eyebrow: string;
  /** niche name — first part (display font) */
  name: string;
  /** niche name — accent part (serif italic) */
  nameAccent: string;
  /** format line (modal footer) */
  format: string;
  /** niche accent — tile glow + hairline + name accent */
  accent: string;
  /** hover vignette (composition of niche objects, staggered in) */
  Scene: ComponentType;
  /** full expanded landing concept */
  Concept: ComponentType;
};

/** Niches are added here one by one as each premium concept is finished. */
export const NICHES: TNiche[] = [
  {
    id: "furniture",
    index: "01",
    eyebrow: "Лендинг ателье",
    name: "Мебель",
    nameAccent: "на заказ",
    format: "Лендинг ателье",
    accent: "#E08A54",
    Scene: FurnitureScene,
    Concept: FurnitureConcept,
  },
  {
    id: "beauty",
    index: "02",
    eyebrow: "Тёмный лендинг + запись",
    name: "Салон",
    nameAccent: "красоты",
    format: "Лендинг с онлайн-записью",
    accent: "#CBA96A",
    Scene: BeautyScene,
    Concept: BeautyConcept,
  },
  {
    id: "repair",
    index: "03",
    eyebrow: "Сервис · вызов мастера",
    name: "Ремонт",
    nameAccent: "и сантехника",
    format: "Утилити-лендинг + вызов",
    accent: "#FF7A1A",
    Scene: RepairScene,
    Concept: RepairConcept,
  },
  {
    id: "events",
    index: "04",
    eyebrow: "Событийное агентство",
    name: "Свадьбы",
    nameAccent: "и торжества",
    format: "Романтичный лендинг + программа",
    accent: "#D98BA0",
    Scene: EventsScene,
    Concept: EventsConcept,
  },
  {
    id: "cafe",
    index: "05",
    eyebrow: "Кофейня · кондитерская",
    name: "Кафе",
    nameAccent: "и десерты",
    format: "Меню-витрина с ценами",
    accent: "#CE8A3C",
    Scene: CafeScene,
    Concept: CafeConcept,
  },
  {
    id: "education",
    index: "06",
    eyebrow: "Онлайн-школа · курсы",
    name: "Обучение",
    nameAccent: "и курсы",
    format: "Каталог курсов + расписание",
    accent: "#6C5CE7",
    Scene: EducationScene,
    Concept: EducationConcept,
  },
];
