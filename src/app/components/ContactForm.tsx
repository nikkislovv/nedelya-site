import { useState, useRef, useEffect } from 'react';

const PROJECT_TYPES = [
  'Сайт-визитка',
  'Лендинг',
  'Портфолио',
  'Сайт мероприятия',
  'Блог / контент-сайт',
  'Сайт услуг',
  'Каталог / витрина',
  'Интернет-магазин',
  'Только дизайн',
  'Разработка по готовому дизайну',
  'Другое',
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  comment: string;
  agree: boolean;
}

interface Errors {
  name?: string;
  email?: string;
  projectType?: string;
}

const INITIAL: FormState = {
  name: '', email: '', phone: '', projectType: '', comment: '', agree: false,
};

export function ContactForm() {
  const [form, setForm]           = useState<FormState>(INITIAL);
  const [errors, setErrors]       = useState<Errors>({});
  const [status, setStatus]       = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [attachedFile, setAttachedFile] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const set = (field: keyof FormState, value: string | boolean) =>
    setForm(f => ({ ...f, [field]: value }));

  /* Close dropdown when clicking outside */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim())            e.name        = 'Введите ваше имя';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                                      e.email       = 'Введите корректный e-mail';
    if (!form.projectType)            e.projectType = 'Выберите тип проекта';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('loading');
    try {
      /* Здесь интегрируется EmailJS:
         await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', {
           from_name:    form.name,
           from_email:   form.email,
           phone:        form.phone,
           project_type: form.projectType,
           message:      form.comment,
         }, 'PUBLIC_KEY');
      */
      await new Promise(r => setTimeout(r, 1600));
      setStatus('success');
      setForm(INITIAL);
      setAttachedFile(null);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section className="nd-form-section" id="contact">
        <div className="nd-container">
          <div className="nd-form-wrap">
            <div className="nd-form__success">
              <div className="nd-form__success-icon">🎉</div>
              <div className="nd-form__success-title">Спасибо!</div>
              <p className="nd-form__success-text">
                Мы получили вашу заявку и свяжемся в течение 24 часов.
              </p>
              <button
                className="nd-btn nd-btn--outline"
                style={{ marginTop: 24 }}
                onClick={() => setStatus('idle')}
              >
                Отправить ещё одну
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="nd-form-section" id="contact">
      <div className="nd-container">
        <div className="nd-section-head nd-anim">
          <div className="nd-label">Контакты</div>
          <h2>Обсудить проект</h2>
          <p>Ответим в течение 24 часов</p>
        </div>

        <div className="nd-form-wrap nd-anim">
          <form className="nd-form" onSubmit={handleSubmit} noValidate>

            <div className="nd-form-row">
              {/* Имя */}
              <div className="nd-field">
                <label className="nd-field__label">
                  Имя <span>*</span>
                </label>
                <input
                  type="text"
                  className={`nd-field__input${errors.name ? ' nd-field__input--err' : ''}`}
                  placeholder="Как вас зовут?"
                  value={form.name}
                  onChange={e => set('name', e.target.value)}
                  onBlur={() => { if (!form.name.trim()) setErrors(er => ({ ...er, name: 'Введите ваше имя' })); }}
                />
                {errors.name && <span className="nd-field__err">⚠ {errors.name}</span>}
              </div>

              {/* Email */}
              <div className="nd-field">
                <label className="nd-field__label">
                  E-mail <span>*</span>
                </label>
                <input
                  type="email"
                  className={`nd-field__input${errors.email ? ' nd-field__input--err' : ''}`}
                  placeholder="hello@example.com"
                  value={form.email}
                  onChange={e => set('email', e.target.value)}
                />
                {errors.email && <span className="nd-field__err">⚠ {errors.email}</span>}
              </div>
            </div>

            <div className="nd-form-row">
              {/* Телефон / Telegram */}
              <div className="nd-field">
                <label className="nd-field__label">Телефон / Telegram</label>
                <input
                  type="text"
                  className="nd-field__input"
                  placeholder="+375… или @username"
                  value={form.phone}
                  onChange={e => set('phone', e.target.value)}
                />
              </div>

              {/* Тип проекта — custom dropdown */}
              <div className="nd-field">
                <label className="nd-field__label">
                  Тип проекта <span>*</span>
                </label>
                <div
                  className={`nd-custom-select${dropdownOpen ? ' nd-custom-select--open' : ''}${errors.projectType ? ' nd-custom-select--err' : ''}`}
                  ref={dropdownRef}
                >
                  <button
                    type="button"
                    className="nd-custom-select__trigger"
                    onClick={() => setDropdownOpen(o => !o)}
                    aria-haspopup="listbox"
                    aria-expanded={dropdownOpen}
                  >
                    <span className={form.projectType ? '' : 'nd-custom-select__placeholder'}>
                      {form.projectType || '— Выберите тип —'}
                    </span>
                    <span className="nd-custom-select__arrow" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                  {dropdownOpen && (
                    <div className="nd-custom-select__menu" role="listbox">
                      {PROJECT_TYPES.map(t => (
                        <button
                          key={t}
                          type="button"
                          role="option"
                          aria-selected={form.projectType === t}
                          className={`nd-custom-select__option${form.projectType === t ? ' nd-custom-select__option--active' : ''}`}
                          onClick={() => {
                            set('projectType', t);
                            setDropdownOpen(false);
                            setErrors(er => ({ ...er, projectType: undefined }));
                          }}
                        >
                          {t}
                          {form.projectType === t && (
                            <svg className="nd-custom-select__check" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M2.5 7l3.5 3.5 5.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {errors.projectType && <span className="nd-field__err">⚠ {errors.projectType}</span>}
              </div>
            </div>

            {/* Комментарий */}
            <div className="nd-field">
              <label className="nd-field__label">Комментарий</label>
              <textarea
                className="nd-field__textarea"
                placeholder="Расскажите коротко о проекте: что нужно сделать, есть ли брендинг, примеры которые нравятся..."
                value={form.comment}
                onChange={e => set('comment', e.target.value)}
              />
            </div>

            {/* Прикрепить документ */}
            <div className="nd-field">
              <label className="nd-field__label">Прикрепить документ</label>
              <label className="nd-file-upload">
                <input
                  type="file"
                  className="nd-file-input"
                  accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                  onChange={e => {
                    const file = e.target.files?.[0];
                    setAttachedFile(file ? file.name : null);
                  }}
                />
                {attachedFile ? (
                  <div className="nd-file-upload__inner nd-file-upload__inner--filled">
                    <span className="nd-file-upload__icon-wrap nd-file-upload__icon-wrap--filled">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10l5 5 7-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <div>
                      <span className="nd-file-upload__filename">{attachedFile}</span>
                      <span className="nd-file-upload__hint">Нажмите, чтобы заменить</span>
                    </div>
                  </div>
                ) : (
                  <div className="nd-file-upload__inner">
                    <span className="nd-file-upload__icon-wrap">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 13V7M10 7L7.5 9.5M10 7L12.5 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3.5 13.5A3.5 3.5 0 005 17h10a3.5 3.5 0 001.5-6.67V10a5 5 0 00-9.9-.8A3.5 3.5 0 003.5 13.5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <div>
                      <span className="nd-file-upload__text">Перетащите файл или нажмите для выбора</span>
                      <span className="nd-file-upload__hint">PDF, DOC, DOCX, TXT, PNG, JPG — до 10 МБ</span>
                    </div>
                  </div>
                )}
              </label>
            </div>

            {/* Согласие */}
            <div className="nd-checkbox-row">
              <input
                type="checkbox"
                id="agree"
                className="nd-checkbox"
                checked={form.agree}
                onChange={e => set('agree', e.target.checked)}
              />
              <label htmlFor="agree" className="nd-checkbox-lbl">
                Я согласен(а) с&nbsp;
                <a href="/privacy" target="_blank" rel="noopener noreferrer">
                  политикой конфиденциальности
                </a>
                &nbsp;и даю согласие на обработку персональных данных
              </label>
            </div>

            {/* Error message */}
            {status === 'error' && (
              <div className="nd-form__err-msg">
                Что-то пошло не так. Напишите нам в Telegram:{' '}
                <a href="https://t.me/nedelya_support" style={{ fontWeight: 600 }}>
                  @nedelya_support
                </a>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="nd-btn nd-btn--accent nd-form__submit"
              disabled={!form.agree || status === 'loading'}
            >
              {status === 'loading' ? '⏳ Отправляем...' : 'Отправить заявку →'}
            </button>

            <p style={{ fontSize: 12, color: 'var(--text-sec)', textAlign: 'center' }}>
              Ответим в течение 24 часов. Без спама и лишних звонков.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}