import { ACCENT as accent } from "./accent";
import RotatingWord from "./components/RotatingWord";
import LiveLog from "./components/LiveLog";
import { PAGES, SiteFooter, SiteHeader } from "./components/SiteChrome";
import CountNumber from "./components/CountNumber";
import CountUp from "./components/CountUp";
import ConsultDialog from "./components/ConsultDialog";

// Headline figures shown in the "Какво печелите" strip.
const STATS: { to: number; prefix?: string; suffix: string; label: string }[] = [
  { to: 70, prefix: "до", suffix: "%", label: "по-малко ръчна работа" },
  { to: 10, suffix: " ч.", label: "спестени на човек седмично" },
  { to: 3, suffix: "×", label: "по-бърз отговор на клиенти" },
  { to: 4, suffix: " седм.", label: "до първата работеща автоматизация" },
];

// Client quote and case-study figures. Hidden until the real quote and numbers are available.
const SHOW_TESTIMONIAL = false;

export default function Home() {
  return (
      <div style={{ background: '#F4F1EA', color: '#1E1B16', fontFamily: "'Golos Text', 'Segoe UI', Arial, sans-serif", fontSize: '17px', lineHeight: '1.6' }}>
      
      <SiteHeader home />
      
      <section id="top" style={{ position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: '0', backgroundImage: 'linear-gradient(#E2DCCF 1px, transparent 1px), linear-gradient(90deg, #E2DCCF 1px, transparent 1px)', backgroundSize: '32px 32px', backgroundPosition: 'center top', WebkitMaskImage: 'radial-gradient(ellipse 75% 70% at 50% 35%, #000 35%, transparent 80%)', maskImage: 'radial-gradient(ellipse 75% 70% at 50% 35%, #000 35%, transparent 80%)' }}></div>
      <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '104px 32px 88px' }}>
      <span aria-hidden="true" style={{ position: 'absolute', top: '72px', left: '32px', width: '14px', height: '14px', borderTop: '1px solid #1E1B16', borderLeft: '1px solid #1E1B16' }}></span>
      <span aria-hidden="true" style={{ position: 'absolute', top: '72px', right: '32px', width: '14px', height: '14px', borderTop: '1px solid #1E1B16', borderRight: '1px solid #1E1B16' }}></span>
      <span aria-hidden="true" style={{ position: 'absolute', bottom: '56px', left: '32px', width: '14px', height: '14px', borderBottom: '1px solid #1E1B16', borderLeft: '1px solid #1E1B16' }}></span>
      <span aria-hidden="true" style={{ position: 'absolute', bottom: '56px', right: '32px', width: '14px', height: '14px', borderBottom: '1px solid #1E1B16', borderRight: '1px solid #1E1B16' }}></span>
      <p style={{ margin: '0 0 28px', padding: '0 24px', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#55504A' }}>Автоматизация на бизнес процеси с изкуствен интелект</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px 64px', alignItems: 'flex-end', padding: '0 24px' }}>
      <h1 style={{ flex: '999 1 640px', minWidth: '0', margin: '0', fontFamily: "'Literata', Georgia, serif", fontWeight: '400', fontSize: 'clamp(44px, 6vw, 92px)', lineHeight: '1.04', letterSpacing: '-0.025em' }}>Умни системи, които поемат <RotatingWord /> вместо екипа ви.</h1>
      <div style={{ flex: '1 1 280px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '20px', borderTop: '1px solid #1E1B16' }}>
      <p style={{ margin: '0', color: '#3C3832' }}>Премахнете рутината. Фокусирайте се върху това, което е наистина важно.</p>
      <a href="#contact" data-consult className="nb-btn" style={{ textDecoration: 'none', background: '#1E1B16', color: '#F4F1EA', padding: '15px 22px', alignSelf: 'flex-start', minHeight: '24px', display: 'flex', alignItems: 'center', fontWeight: '500' }}>Заявете консултация</a>
      </div>
      </div>
      <figure aria-label="Пример за автоматизации в реално време" style={{ margin: '64px 24px 0', border: '1px solid #1E1B16', background: '#FBF9F4' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'space-between', alignItems: 'center', padding: '12px 18px', borderBottom: '1px solid #1E1B16', fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
      <span style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><span aria-hidden="true" style={{ width: '8px', height: '8px', borderRadius: '50%', background: `${accent}`, animation: 'nb-blink 1.6s ease-in-out infinite' }}></span>Автоматизациите работят</span>
      <span style={{ color: '#55504A' }}>пример</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', fontFamily: "'JetBrains Mono', monospace", fontSize: '14px' }}>
      <LiveLog />
      </div>
      </figure>
      </div>
      </section>
      
      <section aria-label="Принципи" style={{ borderTop: '1px solid #1E1B16', borderBottom: '1px solid #1E1B16', overflow: 'hidden' }}>
      <div style={{ display: 'flex', width: 'max-content', animation: 'nb-marquee 40s linear infinite' }}>
      <div style={{ display: 'flex', gap: '56px', padding: '22px 28px', fontFamily: "'Literata', Georgia, serif", fontSize: '22px', whiteSpace: 'nowrap' }}>
      <span>Без двойно въвеждане</span><span aria-hidden="true" style={{ color: '#A39C8E' }}>✕</span>
      <span>Без ръчно копиране</span><span aria-hidden="true" style={{ color: '#A39C8E' }}>✕</span>
      <span>Без чакане за одобрение</span><span aria-hidden="true" style={{ color: '#A39C8E' }}>✕</span>
      <span style={{ color: `${accent}`, fontStyle: 'italic' }}>Повече време за важното</span><span aria-hidden="true" style={{ color: '#A39C8E' }}>✕</span>
      </div>
      <div aria-hidden="true" style={{ display: 'flex', gap: '56px', padding: '22px 28px', fontFamily: "'Literata', Georgia, serif", fontSize: '22px', whiteSpace: 'nowrap' }}>
      <span>Без двойно въвеждане</span><span style={{ color: '#A39C8E' }}>✕</span>
      <span>Без ръчно копиране</span><span style={{ color: '#A39C8E' }}>✕</span>
      <span>Без чакане за одобрение</span><span style={{ color: '#A39C8E' }}>✕</span>
      <span style={{ color: `${accent}`, fontStyle: 'italic' }}>Повече време за важното</span><span style={{ color: '#A39C8E' }}>✕</span>
      </div>
      </div>
      </section>
      
      <section id="results" aria-label="Резултати" style={{ maxWidth: '1200px', margin: '0 auto', padding: '88px 32px 0' }}>
      <p style={{ margin: '0 0 40px', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#55504A' }}>Какво печелите</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: '40px' }}>
      {STATS.map((s) => (
      <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid #1E1B16', paddingTop: '20px' }}>
      <span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: 'clamp(52px, 5.4vw, 76px)', lineHeight: '1', color: accent, whiteSpace: 'nowrap' }}>{s.prefix && <span style={{ fontSize: '0.36em', marginRight: '0.35em' }}>{s.prefix}</span>}<CountUp to={s.to} /><span style={{ fontSize: '0.5em' }}>{s.suffix}</span></span>
      <span style={{ color: '#3C3832' }}>{s.label}</span>
      </div>
      ))}
      </div>
      </section>
      
      <section id="automations" style={{ maxWidth: '1200px', margin: '0 auto', padding: '104px 32px 96px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px 64px', marginBottom: '48px' }}>
      <p style={{ flex: '1 1 220px', margin: '0', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#55504A' }}>Автоматизация на бизнес процеси · примери</p>
      <div style={{ flex: '999 1 600px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h2 style={{ margin: '0', fontFamily: "'Literata', Georgia, serif", fontWeight: '400', fontSize: 'clamp(32px, 3.8vw, 54px)', lineHeight: '1.1', letterSpacing: '-0.02em', textWrap: 'balance' }}>Часове работа днес. Минути утре.</h2>
      <p style={{ margin: '0', fontSize: '19px', color: '#3C3832', maxWidth: '640px' }}>Нещо се случва, системата го поема, вие получавате готов резултат.</p>
      </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '12px 24px', padding: '0 0 12px', fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#55504A', borderBottom: '1px solid #1E1B16' }}>
      <span>Когато…</span><span>системата…</span><span>и резултатът е</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '8px 24px', padding: '24px 0', borderBottom: '1px solid #C9C2B4' }}>
      <span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '22px', lineHeight: '1.3' }}>Пристигне фактура</span>
      <span style={{ color: '#3C3832' }}>я разчита, проверява и праща за одобрение</span>
      <span style={{ fontWeight: '500' }}>Осчетоводена за минути, не за дни</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '8px 24px', padding: '24px 0', borderBottom: '1px solid #C9C2B4' }}>
      <span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '22px', lineHeight: '1.3' }}>Клиент пише в 23:00</span>
      <span style={{ color: '#3C3832' }}>отговаря и записва запитването</span>
      <span style={{ fontWeight: '500' }}>Сутринта ви чака готов контакт</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '8px 24px', padding: '24px 0', borderBottom: '1px solid #C9C2B4' }}>
      <span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '22px', lineHeight: '1.3' }}>Приключи разговор</span>
      <span style={{ color: '#3C3832' }}>записва резюме и следващи стъпки</span>
      <span style={{ fontWeight: '500' }}>Нищо не се губи</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '8px 24px', padding: '24px 0', borderBottom: '1px solid #C9C2B4' }}>
      <span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '22px', lineHeight: '1.3' }}>Спечелите сделка</span>
      <span style={{ color: '#3C3832' }}>подготвя договора и задачите</span>
      <span style={{ fontWeight: '500' }}>Договорът е готов веднага</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '8px 24px', padding: '24px 0', borderBottom: '1px solid #C9C2B4' }}>
      <span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '22px', lineHeight: '1.3' }}>Дойде понеделник</span>
      <span style={{ color: '#3C3832' }}>събира данните в отчет</span>
      <span style={{ fontWeight: '500' }}>Виждате цялата картина без ръчна работа</span>
      </div>
      </div>
      </section>
      
      <section id="services" style={{ background: '#EBE6DB' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 32px', display: 'flex', flexWrap: 'wrap', gap: '40px 64px' }}>
      <div style={{ flex: '1 1 220px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h2 style={{ margin: '0', fontFamily: "'Literata', Georgia, serif", fontWeight: '400', fontSize: '36px', letterSpacing: '-0.015em' }}>AI решения за бизнеса</h2>
      <p style={{ margin: '0', color: '#55504A', fontSize: '15px' }}>Избираме според нуждите на фирмата ви.</p>
      <a href={PAGES.ai.href} style={{ fontSize: '15px', textUnderlineOffset: '4px', alignSelf: 'flex-start' }}>Изкуствен интелект за бизнеса →</a>
      </div>
      <ul style={{ flex: '999 1 600px', minWidth: '0', margin: '0', padding: '0', listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
      <li style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px', padding: '24px 0', borderTop: '1px solid #1E1B16' }}><span style={{ flex: '1 1 220px', fontFamily: "'Literata', Georgia, serif", fontSize: '23px' }}>CRM и ERP системи</span><span style={{ flex: '2 1 320px', color: '#3C3832' }}>Поръчки, склад, клиенти и продажби в една CRM и ERP система.</span></li>
      <li style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px', padding: '24px 0', borderTop: '1px solid #C9C2B4' }}><span style={{ flex: '1 1 220px', fontFamily: "'Literata', Georgia, serif", fontSize: '23px' }}>AI асистенти и чатбот за сайт</span><span style={{ flex: '2 1 320px', color: '#3C3832' }}>Отговарят на клиенти и служители денонощно, на български.</span></li>
      <li style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px', padding: '24px 0', borderTop: '1px solid #C9C2B4' }}><span style={{ flex: '1 1 220px', fontFamily: "'Literata', Georgia, serif", fontSize: '23px' }}>Автоматизация на бизнес процеси</span><span style={{ flex: '2 1 320px', color: '#3C3832' }}>Одобрения, документи и известия без ръчна работа.</span></li>
      <li style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px', padding: '24px 0', borderTop: '1px solid #C9C2B4' }}><span style={{ flex: '1 1 220px', fontFamily: "'Literata', Georgia, serif", fontSize: '23px' }}>Интеграция на системи</span><span style={{ flex: '2 1 320px', color: '#3C3832' }}>Програмите ви обменят данни сами.</span></li>
      <li style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px', padding: '24px 0', borderTop: '1px solid #C9C2B4' }}><span style={{ flex: '1 1 220px', fontFamily: "'Literata', Georgia, serif", fontSize: '23px' }}><a href={PAGES.training.href} style={{ textDecoration: 'none' }}>Обучение по изкуствен интелект</a></span><span style={{ flex: '2 1 320px', color: '#3C3832' }}>Екипът работи по-бързо с AI още на следващия ден.</span></li>
      <li style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px', padding: '24px 0', borderTop: '1px solid #C9C2B4' }}><span style={{ flex: '1 1 220px', fontFamily: "'Literata', Georgia, serif", fontSize: '23px' }}><a href={PAGES.geo.href} style={{ textDecoration: 'none' }}>Оптимизация за AI търсачки (GEO)</a></span><span style={{ flex: '2 1 320px', color: '#3C3832' }}>ChatGPT, Gemini и Perplexity да препоръчват вашата фирма, когато клиентите питат.</span></li>
      <li style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px', padding: '24px 0', borderTop: '1px solid #C9C2B4' }}><span style={{ flex: '1 1 220px', fontFamily: "'Literata', Georgia, serif", fontSize: '23px' }}>Отчети и анализи</span><span style={{ flex: '2 1 320px', color: '#3C3832' }}>Печалба по проект и клиент, винаги актуална.</span></li>
      <li style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px', padding: '24px 0', borderTop: '1px solid #C9C2B4', borderBottom: '1px solid #C9C2B4' }}><span style={{ flex: '1 1 220px', fontFamily: "'Literata', Georgia, serif", fontSize: '23px' }}>Документи и знания</span><span style={{ flex: '2 1 320px', color: '#3C3832' }}>Намирате нужния договор за секунди.</span></li>
      </ul>
      </div>
      </section>
      
      <section id="integration" style={{ maxWidth: '1200px', margin: '0 auto', padding: '104px 32px 96px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px 64px', marginBottom: '48px' }}>
      <p style={{ flex: '1 1 220px', margin: '0', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#55504A' }}>Интеграция</p>
      <div style={{ flex: '999 1 600px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h2 style={{ margin: '0', fontFamily: "'Literata', Georgia, serif", fontWeight: '400', fontSize: 'clamp(32px, 3.8vw, 54px)', lineHeight: '1.1', letterSpacing: '-0.02em', textWrap: 'balance' }}>Внедряваме, без да спирате работа</h2>
      <p style={{ margin: '0', fontSize: '19px', color: '#3C3832', maxWidth: '640px' }}>Екипът работи с познатите програми. Ние ги свързваме и внедряваме AI там, където спестява време.</p>
      </div>
      </div>
      <figure aria-label="Схема на интеграцията" style={{ margin: '0', borderTop: '1px solid #1E1B16', borderBottom: '1px solid #1E1B16', padding: '32px 0', display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center' }}>
      <div style={{ flex: '1 1 280px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      <span style={{ border: '1px solid #1E1B16', background: '#FBF9F4', padding: '10px 14px' }}>Имейл</span>
      <span style={{ border: '1px solid #1E1B16', background: '#FBF9F4', padding: '10px 14px' }}>Excel и таблици</span>
      <span style={{ border: '1px solid #1E1B16', background: '#FBF9F4', padding: '10px 14px' }}>Счетоводен софтуер</span>
      <span style={{ border: '1px solid #1E1B16', background: '#FBF9F4', padding: '10px 14px' }}>Телефония</span>
      <span style={{ border: '1px solid #1E1B16', background: '#FBF9F4', padding: '10px 14px' }}>Viber и чат</span>
      <span style={{ border: '1px solid #1E1B16', background: '#FBF9F4', padding: '10px 14px' }}>Облачни документи</span>
      <span style={{ border: '1px solid #1E1B16', background: '#FBF9F4', padding: '10px 14px' }}>Уебсайт и форми</span>
      </div>
      <span aria-hidden="true" style={{ flex: '0 1 72px', minWidth: '48px', height: '1px', background: '#1E1B16', position: 'relative' }}><span style={{ position: 'absolute', top: '-3px', width: '7px', height: '7px', borderRadius: '50%', background: `${accent}`, animation: 'nb-travel 2.2s linear infinite' }}></span></span>
      <div style={{ flex: '1 1 240px', background: `${accent}`, color: '#FFFFFF', padding: '28px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <span style={{ fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Всичко свързано</span>
      <span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '26px', lineHeight: '1.25' }}>Данни и автоматизации на едно място</span>
      </div>
      <span aria-hidden="true" style={{ flex: '0 1 72px', minWidth: '48px', height: '1px', background: '#1E1B16', position: 'relative' }}><span style={{ position: 'absolute', top: '-3px', width: '7px', height: '7px', borderRadius: '50%', background: `${accent}`, animation: 'nb-travel 2.2s linear 1.1s infinite' }}></span></span>
      <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <span style={{ borderBottom: '1px solid #C9C2B4', paddingBottom: '8px' }}>По-малко ръчна работа</span>
      <span style={{ borderBottom: '1px solid #C9C2B4', paddingBottom: '8px' }}>По-бързи решения</span>
      <span style={{ borderBottom: '1px solid #C9C2B4', paddingBottom: '8px' }}>Едни и същи данни навсякъде</span>
      </div>
      </figure>
      </section>
      
      <section id="training" style={{ background: '#1E1B16', color: '#F4F1EA' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '104px 32px', display: 'flex', flexWrap: 'wrap', gap: '48px 64px' }}>
      <div style={{ flex: '1 1 380px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <p style={{ margin: '0', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#BDB6A8' }}>Обучение</p>
      <h2 style={{ margin: '0', fontFamily: "'Literata', Georgia, serif", fontWeight: '400', fontSize: 'clamp(32px, 3.6vw, 50px)', lineHeight: '1.1', letterSpacing: '-0.02em', textWrap: 'balance' }}>Екип, който знае как да ползва изкуствен интелект</h2>
      <p style={{ margin: '0', color: '#D6D0C4', maxWidth: '520px' }}>Обучаваме с примери от вашата работа, не от учебник.</p>
      <a href={PAGES.training.href} style={{ color: '#F4F1EA', textUnderlineOffset: '4px', alignSelf: 'flex-start' }}>Обучение по изкуствен интелект за екипи →</a>
      </div>
      <div style={{ flex: '1 1 420px', minWidth: '0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '32px 28px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid #F4F1EA', paddingTop: '16px' }}><span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '40px', lineHeight: '1', color: '#E3B9AE' }}>1</span><span style={{ fontSize: '19px', fontWeight: '500' }}>Работилници за екипи</span><span style={{ color: '#D6D0C4', fontSize: '15px' }}>Упражнения върху реални задачи.</span></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid #F4F1EA', paddingTop: '16px' }}><span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '40px', lineHeight: '1', color: '#E3B9AE' }}>2</span><span style={{ fontSize: '19px', fontWeight: '500' }}>Обучение по роли</span><span style={{ color: '#D6D0C4', fontSize: '15px' }}>Отделно за продажби, финанси и ръководство.</span></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid #F4F1EA', paddingTop: '16px' }}><span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '40px', lineHeight: '1', color: '#E3B9AE' }}>3</span><span style={{ fontSize: '19px', fontWeight: '500' }}>Вътрешни експерти</span><span style={{ color: '#D6D0C4', fontSize: '15px' }}>Ваши хора, които помагат на останалите.</span></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid #F4F1EA', paddingTop: '16px' }}><span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '40px', lineHeight: '1', color: '#E3B9AE' }}>4</span><span style={{ fontSize: '19px', fontWeight: '500' }}>Правила и сигурност</span><span style={{ color: '#D6D0C4', fontSize: '15px' }}>Ясно е кои данни къде се ползват.</span></div>
      </div>
      </div>
      </section>
      
      <section id="method" style={{ maxWidth: '1200px', margin: '0 auto', padding: '104px 32px 96px' }}>
      <p style={{ margin: '0 0 48px', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#55504A' }}>Как работим</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', gap: '48px 40px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <div className="nb-step-head"><span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '64px', lineHeight: '1', color: `${accent}` }}>1</span><span className="nb-path" aria-hidden="true"><span className="nb-path-fill nb-seg-1" style={{ background: accent }}><span className="nb-path-dot" style={{ background: accent }} /></span></span></div>
      <h3 style={{ margin: '0', fontFamily: "'Literata', Georgia, serif", fontWeight: '500', fontSize: '24px', lineHeight: '1.25' }}>Анализ</h3>
      <p style={{ margin: '0', color: '#3C3832' }}>Намираме къде се губи време.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <div className="nb-step-head"><CountNumber n={2} color={accent} /><span className="nb-path" aria-hidden="true"><span className="nb-path-fill nb-seg-2" style={{ background: accent }}><span className="nb-path-dot" style={{ background: accent }} /></span></span></div>
      <h3 style={{ margin: '0', fontFamily: "'Literata', Georgia, serif", fontWeight: '500', fontSize: '24px', lineHeight: '1.25' }}>План и цена</h3>
      <p style={{ margin: '0', color: '#3C3832' }}>Ясен план с цена по етапи.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <div className="nb-step-head"><CountNumber n={3} color={accent} /><span className="nb-path" aria-hidden="true"><span className="nb-path-fill nb-seg-3" style={{ background: accent }}><span className="nb-path-dot" style={{ background: accent }} /></span></span></div>
      <h3 style={{ margin: '0', fontFamily: "'Literata', Georgia, serif", fontWeight: '500', fontSize: '24px', lineHeight: '1.25' }}>Внедряване</h3>
      <p style={{ margin: '0', color: '#3C3832' }}>Пускаме на етапи, без да спирате работа.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <CountNumber n={4} color={accent} />
      <h3 style={{ margin: '0', fontFamily: "'Literata', Georgia, serif", fontWeight: '500', fontSize: '24px', lineHeight: '1.25' }}>Обучение и развитие</h3>
      <p style={{ margin: '0', color: '#3C3832' }}>Обучаваме екипа и добавяме нови автоматизации.</p>
      </div>
      </div>
      </section>
      
      <section id="case" style={{ borderTop: '1px solid #1E1B16' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '104px 32px 96px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px 64px', marginBottom: '56px' }}>
      <p style={{ flex: '1 1 220px', margin: '0', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#55504A' }}>Казус · Строителство и имоти</p>
      <div style={{ flex: '999 1 600px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <h2 style={{ margin: '0', fontFamily: "'Literata', Georgia, serif", fontWeight: '400', fontSize: 'clamp(32px, 3.8vw, 54px)', lineHeight: '1.1', letterSpacing: '-0.02em', textWrap: 'balance' }}>Шест таблици, заменени от една система</h2>
      <p style={{ margin: '0', fontSize: '19px', color: '#3C3832', maxWidth: '640px' }}>Продажби, договори и строителство се водеха в отделни файлове. Сега всичко е в една CRM система за недвижими имоти.</p>
      </div>
      </div>
      <figure aria-label="Автоматизираният процес на продажба" style={{ margin: SHOW_TESTIMONIAL ? '0 0 64px' : '0', borderTop: '1px solid #1E1B16', borderBottom: '1px solid #1E1B16', padding: '32px 0' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'stretch' }}>
      <div style={{ flex: '1 1 150px', border: '1px solid #1E1B16', background: '#FBF9F4', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}><span style={{ fontSize: '13px', color: '#55504A' }}>AI асистент</span><span style={{ fontWeight: '500' }}>Запитване</span></div>
      <div style={{ flex: '1 1 150px', border: '1px solid #1E1B16', background: '#FBF9F4', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}><span style={{ fontSize: '13px', color: '#55504A' }}>Продажби</span><span style={{ fontWeight: '500' }}>Оглед и резервация</span></div>
      <div style={{ flex: '1 1 150px', border: '1px solid #1E1B16', background: '#FBF9F4', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}><span style={{ fontSize: '13px', color: '#55504A' }}>Автоматично</span><span style={{ fontWeight: '500' }}>Договор по шаблон</span></div>
      <div style={{ flex: '1 1 150px', border: '1px solid #1E1B16', background: '#FBF9F4', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}><span style={{ fontSize: '13px', color: '#55504A' }}>Автоматично</span><span style={{ fontWeight: '500' }}>Напомняния за плащане</span></div>
      <div style={{ flex: '1 1 150px', border: '1px solid #1E1B16', background: '#FBF9F4', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}><span style={{ fontSize: '13px', color: '#55504A' }}>Строителство</span><span style={{ fontWeight: '500' }}>Предаване на имота</span></div>
      <div style={{ flex: '1 1 150px', border: `1px solid ${accent}`, background: `${accent}`, color: '#FFFFFF', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}><span style={{ fontSize: '13px' }}>Ръководство</span><span style={{ fontWeight: '500' }}>Отчет в реално време</span></div>
      </div>
      <figcaption style={{ marginTop: '16px', fontSize: '14px', color: '#55504A' }}>Един запис за клиент, от запитването до ключа.</figcaption>
      </figure>
      {SHOW_TESTIMONIAL && (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px 64px' }}>
      <blockquote style={{ flex: '999 1 560px', minWidth: '0', margin: '0', fontFamily: "'Literata', Georgia, serif", fontSize: 'clamp(24px, 2.4vw, 32px)', lineHeight: '1.35' }}>„[ЦИТАТ ОТ КЛИЕНТА — едно изречение за това какво се промени.]“<footer style={{ marginTop: '20px', fontFamily: "'Golos Text', Arial, sans-serif", fontSize: '15px', color: '#55504A' }}>[ИМЕ], [ДЛЪЖНОСТ]</footer></blockquote>
      <dl style={{ flex: '1 1 260px', minWidth: '0', margin: '0', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '14px 0', borderTop: '1px solid #1E1B16', display: 'flex', justifyContent: 'space-between', gap: '16px' }}><dt style={{ color: '#55504A' }}>Автоматизирани стъпки</dt><dd style={{ margin: '0', fontWeight: '500' }}>[N]</dd></div>
      <div style={{ padding: '14px 0', borderTop: '1px solid #C9C2B4', display: 'flex', justifyContent: 'space-between', gap: '16px' }}><dt style={{ color: '#55504A' }}>Спестено време</dt><dd style={{ margin: '0', fontWeight: '500' }}>[X ч/седм.]</dd></div>
      <div style={{ padding: '14px 0', borderTop: '1px solid #C9C2B4', borderBottom: '1px solid #C9C2B4', display: 'flex', justifyContent: 'space-between', gap: '16px' }}><dt style={{ color: '#55504A' }}>Потребители</dt><dd style={{ margin: '0', fontWeight: '500' }}>[N]</dd></div>
      </dl>
      </div>
      )}
      </div>
      </section>
      
      <section id="contact" style={{ background: '#EBE6DB', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: '0', backgroundImage: 'linear-gradient(#DDD6C7 1px, transparent 1px), linear-gradient(90deg, #DDD6C7 1px, transparent 1px)', backgroundSize: '32px 32px', WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 40%)', maskImage: 'linear-gradient(to bottom, transparent, #000 40%)' }}></div>
      <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '112px 32px 104px', display: 'flex', flexWrap: 'wrap', gap: '40px 64px', alignItems: 'flex-end' }}>
      <h2 style={{ flex: '999 1 600px', minWidth: '0', margin: '0', fontFamily: "'Literata', Georgia, serif", fontWeight: '400', fontSize: 'clamp(36px, 4.6vw, 68px)', lineHeight: '1.05', letterSpacing: '-0.025em' }}>Кой процес ви отнема най-много време?</h2>
      <div style={{ flex: '1 1 280px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <p style={{ margin: '0', color: '#3C3832' }}>Разкажете ни. Ще ви покажем как изглежда автоматизиран.</p>
      <a href="mailto:office@getnimble.bg" data-consult style={{ textDecoration: 'none', background: `${accent}`, color: '#FFFFFF', padding: '16px 24px', fontWeight: '500', alignSelf: 'flex-start', minHeight: '24px', display: 'flex', alignItems: 'center' }}>Заявете консултация</a>
      <a href="mailto:office@getnimble.bg" style={{ fontSize: '15px', color: '#55504A' }}>office@getnimble.bg</a>
      </div>
      </div>
      </section>
      
      <SiteFooter />
      
      <ConsultDialog />
      </div>
  );
}
