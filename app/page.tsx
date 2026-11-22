import { ACCENT as accent } from "./accent";
import RotatingWord from "./components/RotatingWord";
import LiveLog from "./components/LiveLog";
import LogoMark from "./components/LogoMark";

export default function Home() {
  return (
      <div style={{ background: '#F4F1EA', color: '#1E1B16', fontFamily: "'Golos Text', 'Segoe UI', Arial, sans-serif", fontSize: '17px', lineHeight: '1.6' }}>
      
      <header style={{ maxWidth: '1200px', margin: '0 auto', padding: '28px 32px', display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1E1B16' }}>
      <a href="#top" aria-label="Nimble — начало" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px', fontFamily: "'Literata', Georgia, serif", fontSize: '26px', letterSpacing: '-0.01em' }}><LogoMark size={30} />Nimble</a>
      <nav aria-label="Основно меню" style={{ display: 'flex', flexWrap: 'wrap', gap: '28px', fontSize: '15px', alignItems: 'center' }}>
      <a href="#automations" style={{ textDecoration: 'none' }}>Автоматизации</a>
      <a href="#services" style={{ textDecoration: 'none' }}>Решения</a>
      <a href="#integration" style={{ textDecoration: 'none' }}>Интеграция</a>
      <a href="#training" style={{ textDecoration: 'none' }}>Обучение</a>
      <a href="#case" style={{ textDecoration: 'none' }}>Казус</a>
      <a href="#contact" style={{ textDecoration: 'underline', textUnderlineOffset: '4px', color: `${accent}`, minHeight: '44px', display: 'flex', alignItems: 'center' }}>Заявете консултация</a>
      </nav>
      </header>
      
      <section id="top" style={{ position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: '0', backgroundImage: 'linear-gradient(#E2DCCF 1px, transparent 1px), linear-gradient(90deg, #E2DCCF 1px, transparent 1px)', backgroundSize: '32px 32px', backgroundPosition: 'center top', WebkitMaskImage: 'radial-gradient(ellipse 75% 70% at 50% 35%, #000 35%, transparent 80%)', maskImage: 'radial-gradient(ellipse 75% 70% at 50% 35%, #000 35%, transparent 80%)' }}></div>
      <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '104px 32px 88px' }}>
      <span aria-hidden="true" style={{ position: 'absolute', top: '72px', left: '32px', width: '14px', height: '14px', borderTop: '1px solid #1E1B16', borderLeft: '1px solid #1E1B16' }}></span>
      <span aria-hidden="true" style={{ position: 'absolute', top: '72px', right: '32px', width: '14px', height: '14px', borderTop: '1px solid #1E1B16', borderRight: '1px solid #1E1B16' }}></span>
      <span aria-hidden="true" style={{ position: 'absolute', bottom: '56px', left: '32px', width: '14px', height: '14px', borderBottom: '1px solid #1E1B16', borderLeft: '1px solid #1E1B16' }}></span>
      <span aria-hidden="true" style={{ position: 'absolute', bottom: '56px', right: '32px', width: '14px', height: '14px', borderBottom: '1px solid #1E1B16', borderRight: '1px solid #1E1B16' }}></span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px 64px', alignItems: 'flex-end', padding: '0 24px' }}>
      <h1 style={{ flex: '999 1 640px', minWidth: '0', margin: '0', fontFamily: "'Literata', Georgia, serif", fontWeight: '400', fontSize: 'clamp(44px, 6vw, 92px)', lineHeight: '1.04', letterSpacing: '-0.025em' }}>Умни системи, които поемат <RotatingWord /> вместо екипа ви.</h1>
      <div style={{ flex: '1 1 280px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '20px', borderTop: '1px solid #1E1B16' }}>
      <p style={{ margin: '0', color: '#3C3832' }}>Внедряваме AI асистенти, автоматизирани работни процеси и AI-задвижвани ERP и CRM системи, които се вграждат в начина, по който фирмата ви вече работи.</p>
      <a href="#contact" style={{ textDecoration: 'none', background: '#1E1B16', color: '#F4F1EA', padding: '15px 22px', alignSelf: 'flex-start', minHeight: '24px', display: 'flex', alignItems: 'center', fontWeight: '500' }}>Заявете консултация</a>
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
      
      <section id="automations" style={{ maxWidth: '1200px', margin: '0 auto', padding: '104px 32px 96px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px 64px', marginBottom: '48px' }}>
      <p style={{ flex: '1 1 220px', margin: '0', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#55504A' }}>Автоматизации · примери</p>
      <div style={{ flex: '999 1 600px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h2 style={{ margin: '0', fontFamily: "'Literata', Georgia, serif", fontWeight: '400', fontSize: 'clamp(32px, 3.8vw, 54px)', lineHeight: '1.1', letterSpacing: '-0.02em', textWrap: 'balance' }}>Работа, която днес отнема часове, а утре се случва сама</h2>
      <p style={{ margin: '0', fontSize: '19px', color: '#3C3832', maxWidth: '640px' }}>Всяка автоматизация започва със събитие, минава през умна система и завършва с готов резултат — без някой да натиска бутони.</p>
      </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '12px 24px', padding: '0 0 12px', fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#55504A', borderBottom: '1px solid #1E1B16' }}>
      <span>Когато…</span><span>системата…</span><span>и резултатът е</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '8px 24px', padding: '24px 0', borderBottom: '1px solid #C9C2B4' }}>
      <span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '22px', lineHeight: '1.3' }}>Пристигне фактура по имейл</span>
      <span style={{ color: '#3C3832' }}>разчита я с AI, проверява сумите и я праща за одобрение</span>
      <span style={{ fontWeight: '500' }}>Осчетоводена фактура за минути, не за дни</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '8px 24px', padding: '24px 0', borderBottom: '1px solid #C9C2B4' }}>
      <span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '22px', lineHeight: '1.3' }}>Клиент попита нещо в 23:00</span>
      <span style={{ color: '#3C3832' }}>AI асистентът отговаря, събира данните и създава запитване в CRM</span>
      <span style={{ fontWeight: '500' }}>Търговецът започва деня с готов контакт</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '8px 24px', padding: '24px 0', borderBottom: '1px solid #C9C2B4' }}>
      <span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '22px', lineHeight: '1.3' }}>Приключи телефонен разговор</span>
      <span style={{ color: '#3C3832' }}>записва резюме и следващи стъпки към клиента в системата</span>
      <span style={{ fontWeight: '500' }}>Нищо казано по телефона не се губи</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '8px 24px', padding: '24px 0', borderBottom: '1px solid #C9C2B4' }}>
      <span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '22px', lineHeight: '1.3' }}>Сделка бъде спечелена</span>
      <span style={{ color: '#3C3832' }}>генерира договор по шаблон и задачи за всеки отдел</span>
      <span style={{ fontWeight: '500' }}>Договорът е готов, преди клиентът да си тръгне</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '8px 24px', padding: '24px 0', borderBottom: '1px solid #C9C2B4' }}>
      <span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '22px', lineHeight: '1.3' }}>Стане понеделник сутрин</span>
      <span style={{ color: '#3C3832' }}>събира данните от всички системи в седмичен отчет</span>
      <span style={{ fontWeight: '500' }}>Ръководството вижда цялата картина без ръчна работа</span>
      </div>
      </div>
      </section>
      
      <section id="services" style={{ background: '#EBE6DB' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 32px', display: 'flex', flexWrap: 'wrap', gap: '40px 64px' }}>
      <div style={{ flex: '1 1 220px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h2 style={{ margin: '0', fontFamily: "'Literata', Georgia, serif", fontWeight: '400', fontSize: '36px', letterSpacing: '-0.015em' }}>Решения</h2>
      <p style={{ margin: '0', color: '#55504A', fontSize: '15px' }}>Комбинираме ги според процесите на всяка фирма.</p>
      </div>
      <ul style={{ flex: '999 1 600px', minWidth: '0', margin: '0', padding: '0', listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
      <li style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px', padding: '24px 0', borderTop: '1px solid #1E1B16' }}><span style={{ flex: '1 1 220px', fontFamily: "'Literata', Georgia, serif", fontSize: '23px' }}>AI ERP и CRM системи</span><span style={{ flex: '2 1 320px', color: '#3C3832' }}>Поръчки, склад, проекти, клиенти и продажби в системи, които сами предлагат следващата стъпка и откриват отклоненията.</span></li>
      <li style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px', padding: '24px 0', borderTop: '1px solid #C9C2B4' }}><span style={{ flex: '1 1 220px', fontFamily: "'Literata', Georgia, serif", fontSize: '23px' }}>AI асистенти</span><span style={{ flex: '2 1 320px', color: '#3C3832' }}>Асистенти за клиенти и за служители — отговарят на въпроси, търсят в документите и изпълняват задачи 24/7.</span></li>
      <li style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px', padding: '24px 0', borderTop: '1px solid #C9C2B4' }}><span style={{ flex: '1 1 220px', fontFamily: "'Literata', Georgia, serif", fontSize: '23px' }}>Автоматизация на работни процеси</span><span style={{ flex: '2 1 320px', color: '#3C3832' }}>Одобрения, документи, известия и прехвърляне на данни, които се случват сами.</span></li>
      <li style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px', padding: '24px 0', borderTop: '1px solid #C9C2B4' }}><span style={{ flex: '1 1 220px', fontFamily: "'Literata', Georgia, serif", fontSize: '23px' }}>Интеграция на системи</span><span style={{ flex: '2 1 320px', color: '#3C3832' }}>Свързваме новите и съществуващите ви инструменти, така че данните текат между тях без прекъсване.</span></li>
      <li style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px', padding: '24px 0', borderTop: '1px solid #C9C2B4' }}><span style={{ flex: '1 1 220px', fontFamily: "'Literata', Georgia, serif", fontSize: '23px' }}>Обучение на екипа за AI</span><span style={{ flex: '2 1 320px', color: '#3C3832' }}>Практически обучения, с които всеки служител работи по-бързо с AI инструментите още на следващия ден.</span></li>
      <li style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px', padding: '24px 0', borderTop: '1px solid #C9C2B4' }}><span style={{ flex: '1 1 220px', fontFamily: "'Literata', Georgia, serif", fontSize: '23px' }}>Отчети и бизнес анализи</span><span style={{ flex: '2 1 320px', color: '#3C3832' }}>Рентабилност по проект, отдел и клиент — обновява се автоматично.</span></li>
      <li style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px', padding: '24px 0', borderTop: '1px solid #C9C2B4', borderBottom: '1px solid #C9C2B4' }}><span style={{ flex: '1 1 220px', fontFamily: "'Literata', Georgia, serif", fontSize: '23px' }}>Документи и знания</span><span style={{ flex: '2 1 320px', color: '#3C3832' }}>Архив, в който AI намира нужния договор или отговор за секунди.</span></li>
      </ul>
      </div>
      </section>
      
      <section id="integration" style={{ maxWidth: '1200px', margin: '0 auto', padding: '104px 32px 96px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px 64px', marginBottom: '48px' }}>
      <p style={{ flex: '1 1 220px', margin: '0', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#55504A' }}>Интеграция</p>
      <div style={{ flex: '999 1 600px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h2 style={{ margin: '0', fontFamily: "'Literata', Georgia, serif", fontWeight: '400', fontSize: 'clamp(32px, 3.8vw, 54px)', lineHeight: '1.1', letterSpacing: '-0.02em', textWrap: 'balance' }}>Новата технология влиза в работата ви, без да я спира</h2>
      <p style={{ margin: '0', fontSize: '19px', color: '#3C3832', maxWidth: '640px' }}>Екипът продължава да работи в познатите инструменти. Ние ги свързваме и добавяме интелигентност отгоре.</p>
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
      <span style={{ fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Един свързан слой</span>
      <span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '26px', lineHeight: '1.25' }}>AI, автоматизации и данни на едно място</span>
      </div>
      <span aria-hidden="true" style={{ flex: '0 1 72px', minWidth: '48px', height: '1px', background: '#1E1B16', position: 'relative' }}><span style={{ position: 'absolute', top: '-3px', width: '7px', height: '7px', borderRadius: '50%', background: `${accent}`, animation: 'nb-travel 2.2s linear 1.1s infinite' }}></span></span>
      <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <span style={{ borderBottom: '1px solid #C9C2B4', paddingBottom: '8px' }}>По-малко ръчна работа</span>
      <span style={{ borderBottom: '1px solid #C9C2B4', paddingBottom: '8px' }}>По-бързи решения</span>
      <span style={{ borderBottom: '1px solid #C9C2B4', paddingBottom: '8px' }}>Една версия на истината</span>
      </div>
      </figure>
      </section>
      
      <section id="training" style={{ background: '#1E1B16', color: '#F4F1EA' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '104px 32px', display: 'flex', flexWrap: 'wrap', gap: '48px 64px' }}>
      <div style={{ flex: '1 1 380px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <p style={{ margin: '0', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#BDB6A8' }}>Обучение</p>
      <h2 style={{ margin: '0', fontFamily: "'Literata', Georgia, serif", fontWeight: '400', fontSize: 'clamp(32px, 3.6vw, 50px)', lineHeight: '1.1', letterSpacing: '-0.02em', textWrap: 'balance' }}>Технологията работи, когато хората знаят как да я ползват</h2>
      <p style={{ margin: '0', color: '#D6D0C4', maxWidth: '520px' }}>Обучаваме екипите ви да използват AI в ежедневната си работа — с примери от вашите процеси, не от учебник.</p>
      </div>
      <div style={{ flex: '1 1 420px', minWidth: '0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '32px 28px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid #F4F1EA', paddingTop: '16px' }}><span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '40px', lineHeight: '1', color: '#E3B9AE' }}>1</span><span style={{ fontSize: '19px', fontWeight: '500' }}>Работилници за екипи</span><span style={{ color: '#D6D0C4', fontSize: '15px' }}>Практически сесии върху реални задачи на отдела.</span></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid #F4F1EA', paddingTop: '16px' }}><span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '40px', lineHeight: '1', color: '#E3B9AE' }}>2</span><span style={{ fontSize: '19px', fontWeight: '500' }}>Обучение по роли</span><span style={{ color: '#D6D0C4', fontSize: '15px' }}>Различни умения за продажби, финанси, операции и ръководство.</span></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid #F4F1EA', paddingTop: '16px' }}><span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '40px', lineHeight: '1', color: '#E3B9AE' }}>3</span><span style={{ fontSize: '19px', fontWeight: '500' }}>Вътрешни AI шампиони</span><span style={{ color: '#D6D0C4', fontSize: '15px' }}>Подготвяме хора, които водят промяната отвътре.</span></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid #F4F1EA', paddingTop: '16px' }}><span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '40px', lineHeight: '1', color: '#E3B9AE' }}>4</span><span style={{ fontSize: '19px', fontWeight: '500' }}>Правила и сигурност</span><span style={{ color: '#D6D0C4', fontSize: '15px' }}>Ясни правила какви данни къде се ползват.</span></div>
      </div>
      </div>
      </section>
      
      <section id="method" style={{ maxWidth: '1200px', margin: '0 auto', padding: '104px 32px 96px' }}>
      <p style={{ margin: '0 0 48px', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#55504A' }}>Как работим</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', gap: '48px 40px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '64px', lineHeight: '1', color: `${accent}` }}>1</span>
      <h3 style={{ margin: '0', fontFamily: "'Literata', Georgia, serif", fontWeight: '500', fontSize: '24px', lineHeight: '1.25' }}>Анализ на процесите</h3>
      <p style={{ margin: '0', color: '#3C3832' }}>Откриваме къде се губи време и кое си струва да се автоматизира първо.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '64px', lineHeight: '1', color: `${accent}` }}>2</span>
      <h3 style={{ margin: '0', fontFamily: "'Literata', Georgia, serif", fontWeight: '500', fontSize: '24px', lineHeight: '1.25' }}>Дизайн на решението</h3>
      <p style={{ margin: '0', color: '#3C3832' }}>Карта на автоматизациите, системите и интеграциите, с ясна цена по етапи.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '64px', lineHeight: '1', color: `${accent}` }}>3</span>
      <h3 style={{ margin: '0', fontFamily: "'Literata', Georgia, serif", fontWeight: '500', fontSize: '24px', lineHeight: '1.25' }}>Внедряване и интеграция</h3>
      <p style={{ margin: '0', color: '#3C3832' }}>Пускаме на етапи, без да спираме работата, и измерваме резултата.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <span style={{ fontFamily: "'Literata', Georgia, serif", fontSize: '64px', lineHeight: '1', color: `${accent}` }}>4</span>
      <h3 style={{ margin: '0', fontFamily: "'Literata', Georgia, serif", fontWeight: '500', fontSize: '24px', lineHeight: '1.25' }}>Обучение и развитие</h3>
      <p style={{ margin: '0', color: '#3C3832' }}>Обучаваме екипа и добавяме нови автоматизации, докато фирмата расте.</p>
      </div>
      </div>
      </section>
      
      <section id="case" style={{ borderTop: '1px solid #1E1B16' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '104px 32px 96px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px 64px', marginBottom: '56px' }}>
      <p style={{ flex: '1 1 220px', margin: '0', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#55504A' }}>Казус · Строителство и имоти</p>
      <div style={{ flex: '999 1 600px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <h2 style={{ margin: '0', fontFamily: "'Literata', Georgia, serif", fontWeight: '400', fontSize: 'clamp(32px, 3.8vw, 54px)', lineHeight: '1.1', letterSpacing: '-0.02em', textWrap: 'balance' }}>Шест таблици, заменени от една умна система</h2>
      <p style={{ margin: '0', fontSize: '19px', color: '#3C3832', maxWidth: '640px' }}>Компания с [N] служители управляваше продажби, договори и строителство в отделни файлове. Свързахме всичко в една система с автоматизирани стъпки между отделите.</p>
      </div>
      </div>
      <figure aria-label="Автоматизираният процес на продажба" style={{ margin: '0 0 64px', borderTop: '1px solid #1E1B16', borderBottom: '1px solid #1E1B16', padding: '32px 0' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'stretch' }}>
      <div style={{ flex: '1 1 150px', border: '1px solid #1E1B16', background: '#FBF9F4', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}><span style={{ fontSize: '13px', color: '#55504A' }}>AI асистент</span><span style={{ fontWeight: '500' }}>Запитване</span></div>
      <div style={{ flex: '1 1 150px', border: '1px solid #1E1B16', background: '#FBF9F4', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}><span style={{ fontSize: '13px', color: '#55504A' }}>Продажби</span><span style={{ fontWeight: '500' }}>Оглед и резервация</span></div>
      <div style={{ flex: '1 1 150px', border: '1px solid #1E1B16', background: '#FBF9F4', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}><span style={{ fontSize: '13px', color: '#55504A' }}>Автоматично</span><span style={{ fontWeight: '500' }}>Договор по шаблон</span></div>
      <div style={{ flex: '1 1 150px', border: '1px solid #1E1B16', background: '#FBF9F4', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}><span style={{ fontSize: '13px', color: '#55504A' }}>Автоматично</span><span style={{ fontWeight: '500' }}>Напомняния за плащане</span></div>
      <div style={{ flex: '1 1 150px', border: '1px solid #1E1B16', background: '#FBF9F4', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}><span style={{ fontSize: '13px', color: '#55504A' }}>Строителство</span><span style={{ fontWeight: '500' }}>Предаване на имота</span></div>
      <div style={{ flex: '1 1 150px', border: `1px solid ${accent}`, background: `${accent}`, color: '#FFFFFF', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}><span style={{ fontSize: '13px' }}>Ръководство</span><span style={{ fontWeight: '500' }}>Отчет в реално време</span></div>
      </div>
      <figcaption style={{ marginTop: '16px', fontSize: '14px', color: '#55504A' }}>Един запис за всеки клиент — от първото запитване до предаването на ключа.</figcaption>
      </figure>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px 64px' }}>
      <blockquote style={{ flex: '999 1 560px', minWidth: '0', margin: '0', fontFamily: "'Literata', Georgia, serif", fontSize: 'clamp(24px, 2.4vw, 32px)', lineHeight: '1.35' }}>„[ЦИТАТ ОТ КЛИЕНТА — едно изречение за това какво се промени.]“<footer style={{ marginTop: '20px', fontFamily: "'Golos Text', Arial, sans-serif", fontSize: '15px', color: '#55504A' }}>[ИМЕ], [ДЛЪЖНОСТ]</footer></blockquote>
      <dl style={{ flex: '1 1 260px', minWidth: '0', margin: '0', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '14px 0', borderTop: '1px solid #1E1B16', display: 'flex', justifyContent: 'space-between', gap: '16px' }}><dt style={{ color: '#55504A' }}>Автоматизирани стъпки</dt><dd style={{ margin: '0', fontWeight: '500' }}>[N]</dd></div>
      <div style={{ padding: '14px 0', borderTop: '1px solid #C9C2B4', display: 'flex', justifyContent: 'space-between', gap: '16px' }}><dt style={{ color: '#55504A' }}>Спестено време</dt><dd style={{ margin: '0', fontWeight: '500' }}>[X ч/седм.]</dd></div>
      <div style={{ padding: '14px 0', borderTop: '1px solid #C9C2B4', borderBottom: '1px solid #C9C2B4', display: 'flex', justifyContent: 'space-between', gap: '16px' }}><dt style={{ color: '#55504A' }}>Потребители</dt><dd style={{ margin: '0', fontWeight: '500' }}>[N]</dd></div>
      </dl>
      </div>
      </div>
      </section>
      
      <section id="contact" style={{ background: '#EBE6DB', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: '0', backgroundImage: 'linear-gradient(#DDD6C7 1px, transparent 1px), linear-gradient(90deg, #DDD6C7 1px, transparent 1px)', backgroundSize: '32px 32px', WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 40%)', maskImage: 'linear-gradient(to bottom, transparent, #000 40%)' }}></div>
      <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '112px 32px 104px', display: 'flex', flexWrap: 'wrap', gap: '40px 64px', alignItems: 'flex-end' }}>
      <h2 style={{ flex: '999 1 600px', minWidth: '0', margin: '0', fontFamily: "'Literata', Georgia, serif", fontWeight: '400', fontSize: 'clamp(36px, 4.6vw, 68px)', lineHeight: '1.05', letterSpacing: '-0.025em' }}>Кой процес отнема най-много време на екипа ви?</h2>
      <div style={{ flex: '1 1 280px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <p style={{ margin: '0', color: '#3C3832' }}>Разкажете ни и ще ви покажем как би изглеждал автоматизиран.</p>
      <a href="mailto:[ИМЕЙЛ]" style={{ textDecoration: 'none', background: `${accent}`, color: '#FFFFFF', padding: '16px 24px', fontWeight: '500', alignSelf: 'flex-start', minHeight: '24px', display: 'flex', alignItems: 'center' }}>Заявете консултация</a>
      <span style={{ fontSize: '15px', color: '#55504A' }}>[ИМЕЙЛ] · [ТЕЛЕФОН]</span>
      </div>
      </div>
      </section>
      
      <footer style={{ maxWidth: '1200px', margin: '0 auto', padding: '28px 32px', borderTop: '1px solid #1E1B16', display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', color: '#55504A' }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><LogoMark size={20} />© 2026 Нимбъл ЕООД · ЕИК [ЕИК] · София</span>
      <span>getnimble.bg</span>
      </footer>
      
      </div>
  );
}
