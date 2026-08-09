import { useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence, useReducedMotion, type Variants, type Transition } from "motion/react";
import { Button } from "../../../../Components/Button/Button";
import { TelegramIcon, WhatsappIcon, EmailIcon } from "../../../../Components/BrandIcons/BrandIcons";
import classes from "./ContactSection.module.css";

const PROJECT_TYPES = [
  "Лендинг",
  "Сайт-визитка",
  "Интернет-магазин",
  "Портфолио",
  "Блог / контент-сайт",
  "Сайт услуг",
  "Только дизайн",
  "По готовому дизайну",
  "Другое",
];

const CONTACTS = [
  { Icon: TelegramIcon, label: "Telegram", value: "@nedelya_site", href: "https://t.me/nedelya_site", external: true },
  { Icon: WhatsappIcon, label: "WhatsApp", value: "+375 (00) 000-00-00", href: "https://wa.me/375000000000", external: true },
  { Icon: EmailIcon, label: "Email", value: "hello@nedelya.site", href: "mailto:hello@nedelya.site", external: false },
] as const;

const TRUST = ["Оценка бесплатно", "Ответ за 24 часа", "Без спама и звонков"];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 7.4l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface IFormState {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  comment: string;
  agree: boolean;
}

interface IErrors {
  name?: string;
  email?: string;
  projectType?: string;
}

const INITIAL: IFormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  comment: "",
  agree: false,
};

/* ---------- Motion variants ---------- */
const REVEAL: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const CONTAINER: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
};
const CHIP_SPRING = { type: "spring", stiffness: 420, damping: 26 } as const;
const CARD_T: Transition = { duration: 0.55, ease: "easeOut" };
const SUCCESS_T: Transition = { duration: 0.4, ease: "easeOut" };

export function ContactSection() {
  const [form, setForm] = useState<IFormState>(INITIAL);
  const [errors, setErrors] = useState<IErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const reduce = useReducedMotion();

  const set = (field: keyof IFormState, value: string | boolean) =>
    setForm((f) => ({ ...f, [field]: value }));

  const validate = (): IErrors => {
    const e: IErrors = {};
    if (!form.name.trim()) e.name = "Введите ваше имя";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Введите корректный e-mail";
    if (!form.projectType) e.projectType = "Выберите тип проекта";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("loading");
    try {
      const data = new FormData();
      data.append("access_key", "43466d75-a865-4363-9434-7d93a2c7ddad");
      data.append("cc_email", "nikitakislov368@gmail.com,nikvikprg@gmail.com");
      data.append("subject", `Новая заявка от ${form.name} — ${form.projectType}`);
      data.append("name", form.name);
      data.append("email", form.email);
      data.append("phone", form.phone || "—");
      data.append("project_type", form.projectType);
      data.append("message", form.comment || "—");

      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message);

      setStatus("success");
      setForm(INITIAL);
    } catch {
      setStatus("error");
    }
  };

  /* Reveal helpers that respect reduced motion */
  const containerProps = reduce
    ? {}
    : { variants: CONTAINER, initial: "hidden" as const, whileInView: "show" as const, viewport: { once: true, amount: 0.25 } };
  const item = reduce ? {} : { variants: REVEAL };
  const cardProps = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 26 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: CARD_T,
      };

  const submitDisabled = !form.agree || status === "loading";

  return (
    <section className={classes.section} id="contact">
      <div className={classes.inner}>
        <div className={classes.grid}>
          {/* ---------- LEFT · info panel ---------- */}
          <motion.div className={classes.info} {...containerProps}>
            <motion.span className={classes.eyebrow} {...item}>
              Контакты
            </motion.span>
            <motion.h2 className={classes.title} {...item}>
              Обсудить проект
            </motion.h2>
            <motion.p className={classes.lead} {...item}>
              Расскажите о задаче — вернёмся с оценкой и сроками за 24 часа. Без обязательств.
            </motion.p>

            <motion.div className={classes.contacts} {...(reduce ? {} : { variants: CONTAINER })}>
              {CONTACTS.map(({ Icon, label, value, href, external }) => (
                <motion.a
                  key={label}
                  href={href}
                  className={classes.contactRow}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  {...item}
                  whileHover={reduce ? undefined : { x: 4 }}
                  transition={CHIP_SPRING}
                >
                  <span className={classes.contactIcon}>
                    <Icon />
                  </span>
                  <span className={classes.contactMeta}>
                    <span className={classes.contactLabel}>{label}</span>
                    <span className={classes.contactValue}>{value}</span>
                  </span>
                  <span className={classes.contactArrow} aria-hidden="true">
                    →
                  </span>
                </motion.a>
              ))}
            </motion.div>

            <motion.ul className={classes.trust} {...(reduce ? {} : { variants: CONTAINER })}>
              {TRUST.map((t) => (
                <motion.li key={t} className={classes.trustItem} {...item}>
                  <span className={classes.trustCheck}>
                    <CheckIcon />
                  </span>
                  {t}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ---------- RIGHT · form card ---------- */}
          <motion.div className={classes.card} {...cardProps}>
            {status === "success" ? (
              <motion.div
                className={classes.success}
                initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                animate={reduce ? undefined : { opacity: 1, scale: 1 }}
                transition={SUCCESS_T}
              >
                <div className={classes.successIcon}>🎉</div>
                <div className={classes.successTitle}>Спасибо!</div>
                <p className={classes.successText}>
                  Мы получили вашу заявку и свяжемся в течение 24 часов.
                </p>
                <Button variant="outline" className={classes.successBtn} onClick={() => setStatus("idle")}>
                  Отправить ещё одну
                </Button>
              </motion.div>
            ) : (
              <form className={classes.form} onSubmit={handleSubmit} noValidate>
                {/* Тип проекта — selectable chips */}
                <div className={classes.field}>
                  <label className={classes.label}>
                    Тип проекта <span>*</span>
                  </label>
                  <div className={classes.chips} role="radiogroup" aria-label="Тип проекта">
                    {PROJECT_TYPES.map((t) => {
                      const active = form.projectType === t;
                      return (
                        <motion.button
                          key={t}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          className={clsx(classes.chip, active && classes.chipActive)}
                          onClick={() => {
                            set("projectType", t);
                            setErrors((er) => ({ ...er, projectType: undefined }));
                          }}
                          whileHover={reduce ? undefined : { y: -2 }}
                          whileTap={reduce ? undefined : { scale: 0.94 }}
                          transition={CHIP_SPRING}
                        >
                          {t}
                        </motion.button>
                      );
                    })}
                  </div>
                  <AnimatePresence initial={false}>
                    {errors.projectType && (
                      <motion.span
                        className={classes.fieldErr}
                        initial={reduce ? false : { opacity: 0, y: -4 }}
                        animate={reduce ? undefined : { opacity: 1, y: 0 }}
                        exit={reduce ? undefined : { opacity: 0, y: -4 }}
                      >
                        ⚠ {errors.projectType}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Имя + E-mail */}
                <div className={classes.row}>
                  <div className={classes.field}>
                    <label className={classes.label} htmlFor="cf-name">
                      Имя <span>*</span>
                    </label>
                    <input
                      id="cf-name"
                      type="text"
                      className={clsx(classes.input, errors.name && classes.inputErr)}
                      placeholder="Как вас зовут?"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      onBlur={() => {
                        if (!form.name.trim()) setErrors((er) => ({ ...er, name: "Введите ваше имя" }));
                      }}
                    />
                    <AnimatePresence initial={false}>
                      {errors.name && (
                        <motion.span
                          className={classes.fieldErr}
                          initial={reduce ? false : { opacity: 0, y: -4 }}
                          animate={reduce ? undefined : { opacity: 1, y: 0 }}
                          exit={reduce ? undefined : { opacity: 0, y: -4 }}
                        >
                          ⚠ {errors.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className={classes.field}>
                    <label className={classes.label} htmlFor="cf-email">
                      E-mail <span>*</span>
                    </label>
                    <input
                      id="cf-email"
                      type="email"
                      className={clsx(classes.input, errors.email && classes.inputErr)}
                      placeholder="hello@example.com"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                    />
                    <AnimatePresence initial={false}>
                      {errors.email && (
                        <motion.span
                          className={classes.fieldErr}
                          initial={reduce ? false : { opacity: 0, y: -4 }}
                          animate={reduce ? undefined : { opacity: 1, y: 0 }}
                          exit={reduce ? undefined : { opacity: 0, y: -4 }}
                        >
                          ⚠ {errors.email}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Телефон / Telegram */}
                <div className={classes.field}>
                  <label className={classes.label} htmlFor="cf-phone">
                    Телефон / Telegram
                  </label>
                  <input
                    id="cf-phone"
                    type="text"
                    className={classes.input}
                    placeholder="+375… или @username"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                  />
                </div>

                {/* Комментарий */}
                <div className={classes.field}>
                  <label className={classes.label} htmlFor="cf-comment">
                    Комментарий
                  </label>
                  <textarea
                    id="cf-comment"
                    className={classes.textarea}
                    placeholder="Расскажите коротко о проекте: что нужно сделать, есть ли брендинг, примеры которые нравятся..."
                    value={form.comment}
                    onChange={(e) => set("comment", e.target.value)}
                  />
                </div>

                {/* Согласие */}
                <div className={classes.checkboxRow}>
                  <input
                    type="checkbox"
                    id="agree"
                    className={classes.checkbox}
                    checked={form.agree}
                    onChange={(e) => set("agree", e.target.checked)}
                  />
                  <label htmlFor="agree" className={classes.checkboxLbl}>
                    Я согласен(а) с&nbsp;
                    <a href="/privacy" target="_blank" rel="noopener noreferrer">
                      политикой конфиденциальности
                    </a>
                    &nbsp;и даю согласие на обработку персональных данных
                  </label>
                </div>

                {/* Error message */}
                <AnimatePresence initial={false}>
                  {status === "error" && (
                    <motion.div
                      className={classes.errMsg}
                      initial={reduce ? false : { opacity: 0, y: -6 }}
                      animate={reduce ? undefined : { opacity: 1, y: 0 }}
                      exit={reduce ? undefined : { opacity: 0, y: -6 }}
                    >
                      Что-то пошло не так. Напишите нам в Telegram:{" "}
                      <a href="https://t.me/nedelya_support">@nedelya_support</a>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <motion.div
                  className={classes.submitWrap}
                  whileTap={reduce || submitDisabled ? undefined : { scale: 0.985 }}
                  transition={CHIP_SPRING}
                >
                  <Button type="submit" className={classes.submit} disabled={submitDisabled}>
                    {status === "loading" ? "⏳ Отправляем..." : "Отправить заявку →"}
                  </Button>
                </motion.div>

                <p className={classes.hint}>Ответим в течение 24 часов. Без спама и лишних звонков.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
ContactSection.displayName = "ContactSection";
