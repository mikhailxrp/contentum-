function MainPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="section"
        style={{
          background:
            "linear-gradient(135deg, var(--light-cream) 0%, var(--white) 100%)",
        }}
      >
        <div className="container">
          <div
            className="grid grid-2"
            style={{ alignItems: "center", gap: "4rem" }}
          >
            <div>
              <h1>Контентум+ — ваш персональный контент-завод</h1>
              <p style={{ fontSize: "1.3rem", marginBottom: "2rem" }}>
                Из одного описания продукта получайте контент-план, готовые
                статьи и посты. Редактируйте и публикуйте в пару кликов.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "3rem",
                  flexWrap: "wrap",
                }}
              >
                <a href="#" className="btn btn-primary">
                  Начать бесплатно
                </a>
                <a href="#" className="btn btn-outline">
                  Посмотреть демо (2 мин)
                </a>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div className="icon">⚡</div>
                  <span>Контент-план за 60 секунд</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div className="icon">✏️</div>
                  <span>Черновики статей и постов сразу в редакторе</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div className="icon">🚀</div>
                  <span>Публикация в VK, Telegram и блог в один клик</span>
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  background: "var(--white)",
                  borderRadius: "20px",
                  padding: "2rem",
                  boxShadow: "0 20px 40px rgba(0, 2, 1, 0.1)",
                  border: "1px solid var(--light-cream)",
                }}
              >
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🏭</div>
                <p style={{ color: "var(--medium-gray)", fontSize: "1rem" }}>
                  Мокап интерфейса кабинета
                </p>
                <div
                  style={{
                    background: "var(--light-cream)",
                    height: "200px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "1rem",
                    color: "var(--medium-gray)",
                  }}
                >
                  Интерфейс контент-завода
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2>От идеи к публикации — за три шага</h2>
          </div>

          <div className="grid grid-3">
            <div className="card step-card">
              <div className="icon" style={{ margin: "0 auto" }}>
                📝
              </div>
              <h3>Шаг 1. Описываете продукт</h3>
              <p>Короткая форма: задача продукта, аудитория, боли, выгоды.</p>
              <div className="badge">AI</div>
              <p style={{ fontSize: "0.9rem", color: "var(--medium-gray)" }}>
                Можно добавить несколько продуктов и быстро переключаться между
                ними.
              </p>
            </div>

            <div className="card step-card">
              <div className="icon" style={{ margin: "0 auto" }}>
                📋
              </div>
              <h3>Шаг 2. Получаете контент-план</h3>
              <p>
                Генерируем темы, статусы и приоритеты. Массовый выбор, бриф по
                каждой теме.
              </p>
              <div className="badge">AI</div>
              <p style={{ fontSize: "0.9rem", color: "var(--medium-gray)" }}>
                Выберите темы и создайте брифы одним нажатием.
              </p>
            </div>

            <div className="card step-card">
              <div className="icon" style={{ margin: "0 auto" }}>
                ✏️
              </div>
              <h3>Шаг 3. Редактируете и публикуете</h3>
              <p>
                Открывайте тему в редакторе: редактируйте текст, выберите формат
                и публикуйте.
              </p>
              <div className="badge">AI</div>
              <p style={{ fontSize: "0.9rem", color: "var(--medium-gray)" }}>
                Автосохранение, предпросмотр, история изменений.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editor and Formats Section */}
      <section className="section">
        <div className="container">
          <div
            className="grid grid-2"
            style={{ alignItems: "center", gap: "4rem" }}
          >
            <div>
              <h2>Один текст — три формата</h2>
              <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
                Статья, пост для VK и пост для Telegram — переключение в один
                клик.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div className="icon" style={{ flexShrink: 0 }}>
                    🎨
                  </div>
                  <div>
                    <h4>Редактор на базе современных компонентов</h4>
                    <p>Заголовки, списки, цитаты, изображения</p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div className="icon" style={{ flexShrink: 0 }}>
                    💾
                  </div>
                  <div>
                    <h4>Автосохранение и предупреждения</h4>
                    <p>Предупреждение о несохранённых изменениях</p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div className="icon" style={{ flexShrink: 0 }}>
                    🤖
                  </div>
                  <div>
                    <h4>AI-подсказки</h4>
                    <p>
                      Расширить раздел, упростить, сделать перечисление,
                      добавить примеры
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div className="icon" style={{ flexShrink: 0 }}>
                    📊
                  </div>
                  <div>
                    <h4>Версионность и статусы</h4>
                    <p>Бриф → Черновик → Готово → Опубликовано</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  background: "var(--white)",
                  borderRadius: "20px",
                  padding: "2rem",
                  boxShadow: "0 20px 40px rgba(0, 2, 1, 0.1)",
                  border: "1px solid var(--light-cream)",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📝</div>
                <p
                  style={{
                    color: "var(--medium-gray)",
                    fontSize: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  Сплит-мокап редактора
                </p>
                <div
                  style={{
                    background: "var(--light-cream)",
                    height: "250px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--medium-gray)",
                  }}
                >
                  Редактор с переключателем форматов
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publication and Integrations Section */}
      <section className="section section-alt">
        <div className="container">
          <div
            className="grid grid-2"
            style={{ alignItems: "center", gap: "4rem" }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  background: "var(--white)",
                  borderRadius: "20px",
                  padding: "2rem",
                  boxShadow: "0 20px 40px rgba(0, 2, 1, 0.1)",
                  border: "1px solid var(--light-cream)",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📱</div>
                <p
                  style={{
                    color: "var(--medium-gray)",
                    fontSize: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  Линия времени публикаций
                </p>
                <div
                  style={{
                    background: "var(--light-cream)",
                    height: "200px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--medium-gray)",
                  }}
                >
                  VK • Telegram • Блог
                </div>
              </div>
            </div>

            <div>
              <h2>Публикуйте туда, где вас читают</h2>
              <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
                VK, Telegram и блог — синхронизировано и под контролем.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div className="icon" style={{ flexShrink: 0 }}>
                    🔄
                  </div>
                  <div>
                    <h4>Публикация и републикация</h4>
                    <p>Из редактора в один клик</p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div className="icon" style={{ flexShrink: 0 }}>
                    📈
                  </div>
                  <div>
                    <h4>Отслеживание статуса</h4>
                    <p>Ссылки на опубликованные материалы</p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div className="icon" style={{ flexShrink: 0 }}>
                    ⏰
                  </div>
                  <div>
                    <h4>Планирование публикаций</h4>
                    <p>По времени и расписанию</p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div className="icon" style={{ flexShrink: 0 }}>
                    ⚙️
                  </div>
                  <div>
                    <h4>Единые настройки</h4>
                    <p>Интеграций в профиле</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Studio Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2>Генерация контента на полный цикл</h2>
            <p style={{ fontSize: "1.2rem" }}>
              Тексты, изображения и ролики — по вашему описанию.
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card" style={{ textAlign: "center" }}>
              <div className="icon" style={{ margin: "0 auto" }}>
                📝
              </div>
              <h3>Тексты</h3>
              <p>
                Контент-план, брифы, статьи и короткие посты для Ваших каналов
              </p>
              <div className="badge">AI</div>
            </div>

            <div className="card" style={{ textAlign: "center" }}>
              <div className="icon" style={{ margin: "0 auto" }}>
                🎨
              </div>
              <h3>Изображения</h3>
              <p>Генерация иллюстраций по промпту (обложки, врезки, превью)</p>
              <div className="badge">AI</div>
            </div>

            <div className="card" style={{ textAlign: "center" }}>
              <div className="icon" style={{ margin: "0 auto" }}>
                🎬
              </div>
              <h3>Видео</h3>
              <p>Сценарии и короткие ролики для YouTube, TikTok, Reels</p>
              <div className="badge">AI</div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <div
              className="card"
              style={{ maxWidth: "600px", margin: "0 auto" }}
            >
              <div className="icon" style={{ margin: "0 auto" }}>
                💬
              </div>
              <h3>Чат с нейросетями</h3>
              <p>Быстрые правки, идеи и варианты заголовков</p>
              <div className="badge">AI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section section-alt">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "2rem" }}>
            Готовы создать первый контент-план?
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "3rem" }}>
            Присоединяйтесь к тысячам предпринимателей, которые уже экономят
            время на создании контента
          </p>
          <a
            href="#"
            className="btn btn-primary"
            style={{ fontSize: "1.3rem", padding: "1.2rem 3rem" }}
          >
            Создать первый контент-план
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "var(--dark-charcoal)",
          color: "var(--white)",
          padding: "3rem 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h3 style={{ color: "var(--white)", marginBottom: "1rem" }}>
            Контентум+
          </h3>
          <p style={{ color: "var(--light-cream)", marginBottom: "2rem" }}>
            Ваш персональный контент-завод
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#"
              style={{ color: "var(--light-cream)", textDecoration: "none" }}
            >
              О сервисе
            </a>
            <a
              href="#"
              style={{ color: "var(--light-cream)", textDecoration: "none" }}
            >
              Тарифы
            </a>
            <a
              href="#"
              style={{ color: "var(--light-cream)", textDecoration: "none" }}
            >
              Поддержка
            </a>
            <a
              href="#"
              style={{ color: "var(--light-cream)", textDecoration: "none" }}
            >
              Контакты
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainPage;
