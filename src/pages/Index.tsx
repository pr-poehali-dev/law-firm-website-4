import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import BlogArticle from '@/components/BlogArticle';
import ConsumerRights from '@/components/blog/ConsumerRights';
import PropertyDivision from '@/components/blog/PropertyDivision';
import TaxInspection from '@/components/blog/TaxInspection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentArticle, setCurrentArticle] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Scale',
      title: 'Гражданские споры',
      description: 'Взыскание долгов, оспаривание сделок, защита прав потребителей'
    },
    {
      icon: 'Heart',
      title: 'Семейное право',
      description: 'Развод, раздел имущества, алименты, определение места жительства детей'
    },
    {
      icon: 'Shield',
      title: 'Уголовная защита',
      description: 'Представительство на следствии и в суде, защита на всех стадиях процесса'
    },
    {
      icon: 'Briefcase',
      title: 'Корпоративное право',
      description: 'Регистрация и реорганизация бизнеса, сопровождение сделок, разрешение корпоративных конфликтов'
    },
    {
      icon: 'Home',
      title: 'Недвижимость',
      description: 'Сделки с недвижимостью, оспаривание прав, споры с застройщиками'
    },
    {
      icon: 'Users',
      title: 'Трудовые споры',
      description: 'Защита прав работников и работодателей, восстановление на работе, взыскание компенсаций'
    },
    {
      icon: 'FileText',
      title: 'Налоговое право',
      description: 'Консультации, защита при налоговых проверках, обжалование решений ФНС'
    }
  ];

  const workSteps = [
    {
      number: '01',
      title: 'Бесплатная консультация',
      description: 'Оцениваем ситуацию и определяем возможные пути решения'
    },
    {
      number: '02',
      title: 'Разработка стратегии',
      description: 'Составляем план действий с учётом ваших целей и рисков'
    },
    {
      number: '03',
      title: 'Заключение договора',
      description: 'Фиксируем объём услуг, сроки и стоимость'
    },
    {
      number: '04',
      title: 'Реализация',
      description: 'Ведём дело до достижения результата'
    },
    {
      number: '05',
      title: 'Отчёт и рекомендации',
      description: 'Подводим итоги и даём советы по предотвращению подобных ситуаций'
    }
  ];

  const blogPosts = [
    {
      id: 'consumer-rights',
      title: 'Защита прав потребителей: что важно знать',
      date: '15 декабря 2024',
      excerpt: 'Основные права потребителей и способы их защиты в различных ситуациях'
    },
    {
      id: 'property-division',
      title: 'Раздел имущества при разводе: практические советы',
      date: '10 декабря 2024',
      excerpt: 'Как правильно разделить совместно нажитое имущество и избежать типичных ошибок'
    },
    {
      id: 'tax-inspection',
      title: 'Налоговые проверки: как подготовиться',
      date: '5 декабря 2024',
      excerpt: 'Пошаговая инструкция для бизнеса по подготовке к проверке ФНС'
    }
  ];

  if (currentArticle === 'consumer-rights') {
    return (
      <div className="min-h-screen">
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'Cormorant, serif' }}>
              Ерещенко и Партнёры
            </div>
          </div>
        </nav>
        <BlogArticle title="Защита прав потребителей: что важно знать" onBack={() => setCurrentArticle(null)}>
          <ConsumerRights />
        </BlogArticle>
      </div>
    );
  }

  if (currentArticle === 'property-division') {
    return (
      <div className="min-h-screen">
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'Cormorant, serif' }}>
              Ерещенко и Партнёры
            </div>
          </div>
        </nav>
        <BlogArticle title="Раздел имущества при разводе: практические советы" onBack={() => setCurrentArticle(null)}>
          <PropertyDivision />
        </BlogArticle>
      </div>
    );
  }

  if (currentArticle === 'tax-inspection') {
    return (
      <div className="min-h-screen">
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'Cormorant, serif' }}>
              Ерещенко и Партнёры
            </div>
          </div>
        </nav>
        <BlogArticle title="Налоговые проверки: как подготовиться" onBack={() => setCurrentArticle(null)}>
          <TaxInspection />
        </BlogArticle>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'Cormorant, serif' }}>
              Ерещенко и Партнёры
            </div>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors">
                О бюро
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('work')} className="text-gray-700 hover:text-primary transition-colors">
                Как мы работаем
              </button>
              <button onClick={() => scrollToSection('practice')} className="text-gray-700 hover:text-primary transition-colors">
                Наша практика
              </button>
              <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-primary transition-colors">
                Блог
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://cdn.poehali.dev/projects/8ed39914-0404-43b5-bf19-eb980f234e7e/files/455a795c-62cb-4e9f-b7bb-81aaa970bba0.jpg")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: 0.15
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" style={{ opacity: 0.85 }} />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl mb-6 animate-fade-in" style={{ fontFamily: 'Cormorant, serif' }}>
            Юридическое бюро<br />«Ерещенко и Партнёры»
          </h1>
          <p className="text-xl md:text-2xl mb-4 animate-fade-in">
            Ростов-на-Дону — защита ваших прав и интересов
          </p>
          <p className="text-lg md:text-xl mb-8 animate-fade-in">
            Мы решаем сложные юридические задачи
          </p>
          <Button size="lg" onClick={() => scrollToSection('contacts')} className="animate-scale-in bg-secondary hover:bg-secondary/90">
            Получить консультацию
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ fontFamily: 'Cormorant, serif' }}>
            О нашем бюро
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6 leading-relaxed">
              Мы — команда опытных юристов и адвокатов, которые более 15 лет помогают физическим и юридическим лицам находить выход из самых непростых правовых ситуаций.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Наша цель — обеспечить вам надёжную юридическую защиту и максимально эффективное решение ваших вопросов.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="text-center hover-scale">
                <CardContent className="pt-6">
                  <div className="text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                    15+
                  </div>
                  <p className="text-gray-600">лет опыта</p>
                </CardContent>
              </Card>
              <Card className="text-center hover-scale">
                <CardContent className="pt-6">
                  <div className="text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                    90%
                  </div>
                  <p className="text-gray-600">успешных дел</p>
                </CardContent>
              </Card>
              <Card className="text-center hover-scale">
                <CardContent className="pt-6">
                  <div className="text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                    500+
                  </div>
                  <p className="text-gray-600">довольных клиентов</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ fontFamily: 'Cormorant, serif' }}>
            Чем мы можем помочь?
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Мы предоставляем полный спектр юридических услуг
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale transition-all duration-300 hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary">
                    <Icon name={service.icon} size={48} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ fontFamily: 'Cormorant, serif' }}>
            Почему выбирают нас?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <Icon name="Award" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                Опыт и профессионализм
              </h3>
              <p className="leading-relaxed">
                В нашем бюро работают юристы с профильной специализацией и многолетней практикой
              </p>
            </div>
            <div className="text-center">
              <Icon name="Target" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                Индивидуальный подход
              </h3>
              <p className="leading-relaxed">
                Мы внимательно изучаем каждую ситуацию и разрабатываем персональную стратегию защиты
              </p>
            </div>
            <div className="text-center">
              <Icon name="Eye" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                Прозрачность
              </h3>
              <p className="leading-relaxed">
                Чёткие сроки, понятная стоимость услуг, регулярные отчёты о проделанной работе
              </p>
            </div>
            <div className="text-center">
              <Icon name="Lock" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                Конфиденциальность
              </h3>
              <p className="leading-relaxed">
                Все сведения, полученные от клиента, строго защищены адвокатской тайной
              </p>
            </div>
            <div className="text-center">
              <Icon name="TrendingUp" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                Результативность
              </h3>
              <p className="leading-relaxed">
                Более 90 % дел завершаются в пользу наших клиентов
              </p>
            </div>
            <div className="text-center">
              <Icon name="CheckCircle" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                Гарантии качества
              </h3>
              <p className="leading-relaxed">
                Соблюдение сроков и прозрачное ценообразование без скрытых платежей
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="work" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ fontFamily: 'Cormorant, serif' }}>
            Как мы работаем?
          </h2>
          <div className="max-w-4xl mx-auto">
            {workSteps.map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 items-start">
                <div className="text-5xl font-bold text-primary/20 min-w-[80px]" style={{ fontFamily: 'Cormorant, serif' }}>
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section id="practice" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ fontFamily: 'Cormorant, serif' }}>
            Наша практика
          </h2>
          
          {/* Court Decisions */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
              Судебные решения
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="hover-scale cursor-pointer">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <Icon name="FileText" size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg">Взыскание долга</h4>
                      <p className="text-sm text-gray-500">Дело №2-1234/2024</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Успешное взыскание задолженности в размере 2,5 млн рублей в пользу клиента
                  </p>
                  <Button variant="outline" className="w-full">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-scale cursor-pointer">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <Icon name="FileText" size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg">Раздел имущества</h4>
                      <p className="text-sm text-gray-500">Дело №2-5678/2024</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Раздел совместно нажитого имущества с учётом интересов несовершеннолетних детей
                  </p>
                  <Button variant="outline" className="w-full">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-scale cursor-pointer">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <Icon name="FileText" size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg">Трудовой спор</h4>
                      <p className="text-sm text-gray-500">Дело №2-9012/2024</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Восстановление на работе с взысканием компенсации за вынужденный прогул
                  </p>
                  <Button variant="outline" className="w-full">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="bg-muted py-12 px-4 rounded-2xl">
            <h3 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
              Отзывы наших клиентов
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      АИ
                    </div>
                    <div>
                      <h4 className="font-bold">Анна Иванова</h4>
                      <p className="text-sm text-gray-500">Клиент с 2023 года</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    "Огромная благодарность за профессиональную помощь в разделе имущества. Всё прошло быстро и без лишних нервов."
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      ДС
                    </div>
                    <div>
                      <h4 className="font-bold">Дмитрий Соколов</h4>
                      <p className="text-sm text-gray-500">Клиент с 2022 года</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    "Отличные специалисты! Помогли взыскать долг с контрагента. Рекомендую всем, кто ищет надёжных юристов."
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      ЕМ
                    </div>
                    <div>
                      <h4 className="font-bold">Елена Михайлова</h4>
                      <p className="text-sm text-gray-500">Клиент с 2024 года</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    "Защитили мои права как потребителя. Спасибо за компетентность и внимательное отношение!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ fontFamily: 'Cormorant, serif' }}>
            Блог
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover-scale cursor-pointer" onClick={() => setCurrentArticle(post.id)}>
                <CardContent className="pt-6">
                  <div className="text-sm text-gray-500 mb-3">{post.date}</div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Button variant="link" className="p-0 text-primary">
                    Читать далее →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center mb-12" style={{ fontFamily: 'Cormorant, serif' }}>
            Свяжитесь с нами
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
                Получите профессиональную консультацию уже сегодня
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={24} className="text-primary" />
                  <a href="tel:+79282798078" className="text-lg hover:text-primary transition-colors">
                    +7 928 279-80-78
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MessageCircle" size={24} className="text-secondary" />
                  <a href="https://wa.me/79282798078" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-secondary transition-colors">
                    WhatsApp: +7 928 279-80-78
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={24} className="text-primary" />
                  <a href="mailto:2798078@mail.ru" className="text-lg hover:text-primary transition-colors">
                    2798078@mail.ru
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div className="text-lg">
                    г. Ростов-на-Дону,<br />
                    ул. Островского, 22, офис 408
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div className="text-lg">
                    пн–пт: 09:00–18:00<br />
                    сб: 10:00–14:00
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                  Оставьте заявку
                </h3>
                <form className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input type="tel" placeholder="Телефон" />
                  <Input type="email" placeholder="Email" />
                  <Textarea placeholder="Опишите вашу ситуацию" rows={5} />
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                Ерещенко и Партнёры
              </h3>
              <p className="text-gray-400">
                Юридическое бюро в Ростове-на-Дону
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Контакты</h4>
              <p className="text-gray-400 mb-2">+7 928 279-80-78</p>
              <p className="text-gray-400">2798078@mail.ru</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Адрес</h4>
              <p className="text-gray-400">
                г. Ростов-на-Дону,<br />
                ул. Островского, 22, офис 408
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © 2024 Юридическое бюро «Ерещенко и Партнёры». Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;