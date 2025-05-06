
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      {/* Навигация */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="font-bold text-xl flex items-center gap-2 text-indigo-700">
            <Icon name="Bot" size={24} className="text-indigo-500" />
            <span>АвтоПостер</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-700 hover:text-indigo-600">Возможности</a>
            <a href="#benefits" className="text-gray-700 hover:text-indigo-600">Преимущества</a>
            <a href="#pricing" className="text-gray-700 hover:text-indigo-600">Цены</a>
          </div>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <Icon name="MessageSquare" className="mr-2" size={16} />
            Написать нам
          </Button>
        </div>
      </nav>

      {/* Главный экран */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                <Icon name="Zap" size={16} className="mr-1" />
                Автоматизируй свой заработок
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Телеграм бот для <span className="text-indigo-600">автоматического постинга</span> контента
              </h1>
              <p className="text-lg text-gray-600">
                Увеличь свой доход с партнерских программ, автоматизируя публикацию статей, постов и видео для привлечения бесплатного трафика без лишних усилий.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 shadow-lg">
                  Начать зарабатывать
                </Button>
                <Button variant="outline" size="lg" className="border-indigo-200 text-indigo-600">
                  <Icon name="Play" size={16} className="mr-2" />
                  Посмотреть демо
                </Button>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Icon name="Shield" size={16} />
                <span>Бесплатная поддержка 24/7</span>
                <span className="mx-2">•</span>
                <Icon name="CheckCircle" size={16} />
                <span>Легкая настройка</span>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-indigo-300 rounded-lg opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80" 
                  alt="АвтоПостер в действии" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-indigo-500 rounded-lg opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section id="benefits" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Почему партнеры выбирают нас</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              АвтоПостер помогает тысячам партнеров увеличивать доход с минимальными усилиями
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Clock",
                title: "Экономия времени",
                description: "Настройте расписание постов один раз и забудьте - бот будет публиковать контент 24/7"
              },
              {
                icon: "TrendingUp",
                title: "Рост дохода",
                description: "Увеличение конверсии за счет постоянного присутствия в информационном поле"
              },
              {
                icon: "Users",
                title: "Больше подписчиков",
                description: "Регулярный постинг привлекает новую аудиторию и удерживает существующую"
              }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={24} className="text-indigo-600" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Возможности */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Функциональные возможности</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Всё необходимое для автоматизации постинга и заработка на партнерских программах
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Calendar",
                title: "Планирование публикаций",
                description: "Настройте детальное расписание по дням и времени"
              },
              {
                icon: "Repeat",
                title: "Циклическая публикация",
                description: "Повторное использование успешных постов для увеличения охвата"
              },
              {
                icon: "BarChart2",
                title: "Аналитика переходов",
                description: "Отслеживайте эффективность каждой ссылки в постах"
              },
              {
                icon: "FileText",
                title: "Генерация контента",
                description: "Автоматическое создание вариаций текста на основе шаблонов"
              },
              {
                icon: "Globe",
                title: "Мультиканальность",
                description: "Публикация в несколько каналов и групп одновременно"
              },
              {
                icon: "Link",
                title: "Сокращение ссылок",
                description: "Встроенный сократитель ссылок с UTM-метками"
              }
            ].map((item, index) => (
              <Card key={index} className="border border-gray-200 hover:border-indigo-200 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon name={item.icon} size={20} className="text-indigo-600" />
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Тарифы */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Доступные тарифы</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Выберите подходящий план для своего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Старт",
                price: "990",
                period: "месяц",
                description: "Идеально для начинающих партнеров",
                features: [
                  "1 канал для публикаций",
                  "До 30 постов в день",
                  "Базовая аналитика",
                  "Email поддержка"
                ],
                button: "Начать бесплатно",
                variant: "outline"
              },
              {
                name: "Про",
                price: "2490",
                period: "месяц",
                description: "Для активных партнеров",
                features: [
                  "До 5 каналов",
                  "Неограниченное количество постов",
                  "Расширенная аналитика",
                  "Приоритетная поддержка",
                  "API интеграция"
                ],
                button: "Выбрать тариф",
                variant: "default",
                popular: true
              },
              {
                name: "Бизнес",
                price: "5990",
                period: "месяц",
                description: "Для команд и агентств",
                features: [
                  "Неограниченное количество каналов",
                  "Все функции Про-тарифа",
                  "Персональный менеджер",
                  "Обучение команды",
                  "Индивидуальные доработки"
                ],
                button: "Связаться с нами",
                variant: "outline"
              }
            ].map((plan, index) => (
              <Card key={index} className={`border ${plan.popular ? 'border-indigo-500 shadow-lg shadow-indigo-100' : 'border-gray-200'} relative`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg rounded-tr-lg">
                    Популярный
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{plan.price} ₽</span>
                    <span className="text-gray-500">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant={plan.variant as "default" | "outline"} 
                    className={`w-full ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : ''}`}
                  >
                    {plan.button}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Часто задаваемые вопросы</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Как быстро я смогу начать зарабатывать с ботом?",
                answer: "Большинство наших клиентов видят первые результаты уже через 2-3 недели после начала использования бота. Всё зависит от выбранной ниши, качества контента и активности аудитории."
              },
              {
                question: "Нужно ли мне техническое образование для настройки бота?",
                answer: "Нет, наш интерфейс интуитивно понятен и не требует специальных знаний. Мы также предоставляем подробную документацию и видеоинструкции для всех функций."
              },
              {
                question: "Может ли бот публиковать посты в определенное время?",
                answer: "Да, вы можете настроить расписание публикаций с точностью до минуты, учитывая часовые пояса и активность вашей аудитории."
              },
              {
                question: "Как отслеживать эффективность публикаций?",
                answer: "В личном кабинете доступна подробная аналитика по каждому посту, включая количество просмотров, переходов по ссылкам и конверсий."
              }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    {item.question}
                    <Icon name="ChevronDown" size={20} />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы автоматизировать свой заработок?</h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-8">
            Присоединяйтесь к тысячам партнеров, которые уже увеличили свой доход с помощью нашего бота
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Попробовать бесплатно 7 дней
          </Button>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-xl flex items-center gap-2 text-white mb-4">
                <Icon name="Bot" size={24} className="text-indigo-400" />
                <span>АвтоПостер</span>
              </div>
              <p className="text-sm">
                Автоматизация публикаций для заработка на партнерских программах
              </p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Продукт</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Возможности</a></li>
                <li><a href="#" className="hover:text-white">Цены</a></li>
                <li><a href="#" className="hover:text-white">Примеры использования</a></li>
                <li><a href="#" className="hover:text-white">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Компания</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">О нас</a></li>
                <li><a href="#" className="hover:text-white">Блог</a></li>
                <li><a href="#" className="hover:text-white">Партнерам</a></li>
                <li><a href="#" className="hover:text-white">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Правовая информация</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Условия использования</a></li>
                <li><a href="#" className="hover:text-white">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-white">Обработка данных</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 АвтоПостер. Все права защищены.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white"><Icon name="Telegram" size={20} /></a>
              <a href="#" className="hover:text-white"><Icon name="Instagram" size={20} /></a>
              <a href="#" className="hover:text-white"><Icon name="Youtube" size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
