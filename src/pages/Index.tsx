const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <section className="mb-20">
          <h1 className="text-[80px] md:text-[120px] leading-none font-bold mb-12 tracking-tight">
            CALL<br />
            OF<br />
            MEOW
          </h1>

          <div className="mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider mb-4">
              ИНФОРМАЦИЯ О НАС
            </h2>
            <p className="text-lg leading-relaxed text-foreground/80">
              На данном сайте вы сможете узнать немного про этот канал, его историю и админов
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-[48px] md:text-[64px] leading-none font-bold mb-8 tracking-tight">
            Приветствие
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Приветствуем вас на нашем канале "Call of Meow"!
            </p>
            <p>
              Меня зовут Бипбип, и я – его владелец. Здесь я вместе с другими админами создаем уникальных ботов, переписки, фанфики и хедканоны по таким фандомам, как Call of Duty и немного Mortal Kombat. Мы всегда рады новым людям!
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-[40px] md:text-[48px] leading-none font-bold mb-8 tracking-tight">
            Информация о взаимном пиаре (ВП)
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Мы рады предложить возможность взаимного пиара для каналов с <span className="font-semibold">800+</span> подписчиками.
            </p>

            <div>
              <p className="font-semibold mb-2">Как начать:</p>
              <p>
                Отправьте ссылку на ваш канал владельцу в личные сообщения. Это поможет нам ознакомиться с вашим контентом и принять решение о сотрудничестве.
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">Правила публикации:</p>
              <p>
                После согласования времени публикации обязательно разместите наш пост вовремя. Если в течение <span className="font-semibold">10</span> минут после договоренного времени пост не будет опубликован, мы оставляем за собой право удалить ваш пост у нас.
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">Связь:</p>
              <p>
                Все вопросы и предложения направляйте владельцу канала: <a href="https://t.me/Mee_and_yooy" target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:text-foreground transition-colors">@Mee_and_yooy</a>
              </p>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-muted-foreground pt-12 border-t border-border">
          <p>© 2024 Call of Meow</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;