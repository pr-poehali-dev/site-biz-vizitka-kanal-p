import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const platforms = [
    {
      name: "Character AI",
      icon: "Bot",
      description: "Создаём умных персонажей для глубоких диалогов",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Moescape",
      icon: "Sparkles",
      description: "Аниме-персонажи с уникальными характерами",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      name: "Janitor",
      icon: "Zap",
      description: "Боты с продвинутым ИИ и реалистичными диалогами",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      name: "Hi Waifu",
      icon: "Heart",
      description: "Персональные компаньоны для ролевых игр",
      gradient: "from-purple-600 to-violet-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-950/20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-2 mb-6">
            <Icon name="Sparkles" size={20} className="text-purple-400" />
            <span className="text-purple-300 font-semibold">Боты для ролплея</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent leading-tight">
            Создаём Ботов<br />Для Любых Платформ
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Профессиональная разработка AI-персонажей для ролевых игр и интерактивных диалогов
          </p>

          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all"
          >Подписаться на тгк</Button>
        </header>

        <section className="mb-20 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Платформы, на которых мы работаем
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Создаём качественных ботов для всех популярных сервисов
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 p-6 hover-lift cursor-pointer group overflow-hidden relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${platform.gradient} mb-4 shadow-lg`}>
                    <Icon name={platform.icon} size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {platform.name}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {platform.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-3xl p-12 border border-purple-500/20 animate-fade-in">
          <Icon name="MessageCircle" size={48} className="mx-auto mb-6 text-purple-400" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы создать своего бота?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Следите за нашим каналом, чтобы не пропустить новые релизы, обучающие материалы и эксклюзивный контент
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-8 rounded-full"
            >
              <Icon name="Youtube" size={20} className="mr-2" />
              Перейти на канал
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-purple-500/50 hover:bg-purple-500/10 font-bold px-8 rounded-full"
            >
              <Icon name="Bell" size={20} className="mr-2" />
              Включить уведомления
            </Button>
          </div>
        </section>

        <footer className="text-center mt-20 text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Sparkles" size={20} className="text-purple-400" />
            <p>© 2024 Боты для ролплея</p>
          </div>
          <p className="text-sm">Создаём персонажей, которые оживают в диалоге</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;