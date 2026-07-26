import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { SectionHead } from "../../../../Components/SectionHead/SectionHead";
import { SlideIn } from "../../../../Components/SlideIn/SlideIn";
import { Button } from "../../../../Components/Button/Button";
import classes from "./ContactSection.module.css";

const PROJECT_TYPES = [
  "Сайт-визитка",
  "Лендинг",
  "Портфолио",
  "Сайт мероприятия",
  "Блог / контент-сайт",
  "Сайт услуг",
  "Каталог / витрина",
  "Интернет-магазин",
  "Только дизайн",
  "Разработка по готовому дизайну",
  "Другое",
];

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

export function ContactSection() {
  const [form, setForm] = useState<IFormState>(INITIAL);
  const [errors, setErrors] = useState<IErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const set = (field: keyof IFormState, value: string | boolean) =>
    setForm((f) => ({ ...f, [field]: value }));

  /* Close dropdown when clicking outside */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

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

  if (status === "success") {
    return (
      <section className={classes.section} id="contact">
        <div className={classes.inner}>
          <div className={classes.wrap}>
            <div className={classes.success}>
              <div className={classes.successIcon}>🎉</div>
              <div className={classes.successTitle}>Спасибо!</div>
              <p className={classes.successText}>
                Мы получили вашу заявку и свяжемся в течение 24 часов.
              </p>
              <Button variant="outline" className={classes.successBtn} onClick={() => setStatus("idle")}>
                Отправить ещё одну
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={classes.section} id="contact">
      <div className={classes.inner}>
        <SlideIn direction="bottom">
          <SectionHead label="Контакты" title="Обсудить проект" subtitle="Ответим в течение 24 часов" />
        </SlideIn>

        <SlideIn direction="bottom" delay={100}>
          <div className={classes.wrap}>
            <form className={classes.form} onSubmit={handleSubmit} noValidate>
              <div className={classes.row}>
                {/* Имя */}
                <div className={classes.field}>
                  <label className={classes.label}>
                    Имя <span>*</span>
                  </label>
                  <input
                    type="text"
                    className={clsx(classes.input, errors.name && classes.inputErr)}
                    placeholder="Как вас зовут?"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    onBlur={() => {
                      if (!form.name.trim()) setErrors((er) => ({ ...er, name: "Введите ваше имя" }));
                    }}
                  />
                  {errors.name && <span className={classes.fieldErr}>⚠ {errors.name}</span>}
                </div>

                {/* Email */}
                <div className={classes.field}>
                  <label className={classes.label}>
                    E-mail <span>*</span>
                  </label>
                  <input
                    type="email"
                    className={clsx(classes.input, errors.email && classes.inputErr)}
                    placeholder="hello@example.com"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                  />
                  {errors.email && <span className={classes.fieldErr}>⚠ {errors.email}</span>}
                </div>
              </div>

              <div className={classes.row}>
                {/* Телефон / Telegram */}
                <div className={classes.field}>
                  <label className={classes.label}>Телефон / Telegram</label>
                  <input
                    type="text"
                    className={classes.input}
                    placeholder="+375… или @username"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                  />
                </div>

                {/* Тип проекта — custom dropdown */}
                <div className={classes.field}>
                  <label className={classes.label}>
                    Тип проекта <span>*</span>
                  </label>
                  <div
                    className={clsx(
                      classes.customSelect,
                      dropdownOpen && classes.customSelectOpen,
                      errors.projectType && classes.customSelectErr,
                    )}
                    ref={dropdownRef}
                  >
                    <button
                      type="button"
                      className={classes.trigger}
                      onClick={() => setDropdownOpen((o) => !o)}
                      aria-haspopup="listbox"
                      aria-expanded={dropdownOpen}
                    >
                      <span className={form.projectType ? undefined : classes.placeholder}>
                        {form.projectType || "— Выберите тип —"}
                      </span>
                      <span className={classes.arrow} aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                    {dropdownOpen && (
                      <div className={classes.menu} role="listbox">
                        {PROJECT_TYPES.map((t) => (
                          <button
                            key={t}
                            type="button"
                            role="option"
                            aria-selected={form.projectType === t}
                            className={clsx(classes.option, form.projectType === t && classes.optionActive)}
                            onClick={() => {
                              set("projectType", t);
                              setDropdownOpen(false);
                              setErrors((er) => ({ ...er, projectType: undefined }));
                            }}
                          >
                            {t}
                            {form.projectType === t && (
                              <svg className={classes.check} width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M2.5 7l3.5 3.5 5.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {errors.projectType && <span className={classes.fieldErr}>⚠ {errors.projectType}</span>}
                </div>
              </div>

              {/* Комментарий */}
              <div className={classes.field}>
                <label className={classes.label}>Комментарий</label>
                <textarea
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
              {status === "error" && (
                <div className={classes.errMsg}>
                  Что-то пошло не так. Напишите нам в Telegram:{" "}
                  <a href="https://t.me/nedelya_support">@nedelya_support</a>
                </div>
              )}

              {/* Submit */}
              <Button
                type="submit"
                className={classes.submit}
                disabled={!form.agree || status === "loading"}
              >
                {status === "loading" ? "⏳ Отправляем..." : "Отправить заявку →"}
              </Button>

              <p className={classes.hint}>Ответим в течение 24 часов. Без спама и лишних звонков.</p>
            </form>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
ContactSection.displayName = "ContactSection";
