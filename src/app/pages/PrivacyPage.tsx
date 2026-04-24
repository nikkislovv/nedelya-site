import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function PrivacyPage() {
  const navigate = useNavigate();

  /* Scroll to top on mount */
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      {/* Mini-header */}
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 1000,
          background: 'rgba(250,246,240,0.96)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid var(--border)',
          boxShadow: 'var(--shadow-header)',
        }}
      >
        <div className="nd-container" style={{ display: 'flex', alignItems: 'center', height: 68 }}>
          <a
            href="/"
            className="nd-logo"
            onClick={e => { e.preventDefault(); navigate('/'); }}
          >
            Nedelya<span>.site</span>
          </a>
        </div>
      </header>

      <div className="nd-privacy">
        <button
          className="nd-privacy__back"
          onClick={() => navigate(-1)}
          aria-label="Назад"
        >
          ← Назад
        </button>

        <h1>Политика конфиденциальности</h1>
        <p className="nd-privacy__date">Последнее обновление: апрель 2026</p>

        <h2>1. Общие положения</h2>
        <p>
          Настоящая Политика конфиденциальности определяет порядок обработки и защиты
          персональных данных пользователей сайта&nbsp;
          <a href="https://nedelya.site">nedelya.site</a>.
        </p>
        <p>
          Используя сайт, вы соглашаетесь с условиями настоящей Политики.
          Если вы не согласны с условиями, пожалуйста, прекратите использование сайта.
        </p>

        <h2>2. Какие данные мы собираем</h2>
        <p>
          При заполнении формы заявки мы собираем следующие данные: имя, адрес
          электронной почты, номер телефона или имя пользователя Telegram (опционально),
          а также комментарий к проекту.
        </p>
        <p>
          Сайт также может использовать стандартные технологии — файлы cookie и данные
          журналов сервера — в аналитических целях.
        </p>

        <h2>3. Цели обработки данных</h2>
        <p>Персональные данные используются исключительно для:</p>
        <p>
          — обработки заявок и связи с потенциальными клиентами;<br />
          — ответа на вопросы и запросы пользователей;<br />
          — улучшения качества сервиса.
        </p>

        <h2>4. Передача данных третьим лицам</h2>
        <p>
          Мы не продаём, не передаём и не раскрываем персональные данные третьим лицам,
          за исключением случаев, предусмотренных законодательством.
          Для отправки форм может использоваться сервис EmailJS, политика которого
          доступна на сайте emailjs.com.
        </p>

        <h2>5. Хранение данных</h2>
        <p>
          Данные хранятся в течение срока, необходимого для достижения указанных целей,
          либо до момента отзыва согласия пользователем.
        </p>

        <h2>6. Права пользователя</h2>
        <p>
          Вы вправе запросить доступ к своим данным, их исправление или удаление.
          Для этого свяжитесь с нами по адресу:&nbsp;
          <a href="mailto:hello@nedelya.site">hello@nedelya.site</a>.
        </p>

        <h2>7. Контактная информация</h2>
        <p>
          По всем вопросам, связанным с обработкой персональных данных, обращайтесь:
          <br />Email: <a href="mailto:hello@nedelya.site">hello@nedelya.site</a>
          <br />Telegram: <a href="https://t.me/nedelya_site">@nedelya_site</a>
        </p>

        <h2>8. Изменения в Политике</h2>
        <p>
          Мы оставляем за собой право вносить изменения в настоящую Политику.
          Актуальная версия всегда доступна на этой странице.
        </p>
      </div>
    </>
  );
}
