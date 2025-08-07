export const translations = {
  ru: {
    hero: {
      badge: "Новое: AI-инсайты для фаундеров",
      brand: "Mentorio",
      title: "Построй свой стартап с персональным AI-ментором",
      description: "Получай задачи, расти как фаундер, развивай стартап — шаг за шагом. Mentorio — это не просто чат, а полноценная система развития с персональным AI-ментором, который знает твой путь от идеи до масштабирования.",
      cta1: "Начать бесплатно",
      cta2: "Смотреть демо"
    },
    features: {
      title: "Что умеет Mentorio?",
      subtitle: "Полноценная система развития стартапа",
      items: [
        { title: "AI-фидбэк", desc: "Персональный разбор твоих идей, питчей и стратегий" },
        { title: "Реальные задания", desc: "Проверяемые домашки для развития навыков фаундера" },
        { title: "Трекер как в акселераторе", desc: "Следи за прогрессом и метриками в одном месте" },
        { title: "Анализ документов", desc: "Загружай питчи, финмодели — получай детальный разбор" },
        { title: "Генерация по шаблонам YC", desc: "BMC, Go-to-Market, письма инвесторам" },
        { title: "Командная работа", desc: "Развивайся вместе с co-founder'ами" }
      ]
    },
    difference: {
      title: "Чем Mentorio отличается от обычного AI-чата?",
      subtitle: "Это не просто GPT в красивой обертке",
      items: [
        { title: "Знает путь стартапа", desc: "Обучен на кейсах YC, 500 Startups и других акселераторов" },
        { title: "Держит контекст", desc: "Помнит твою историю, задачи и прогресс месяцами" },
        { title: "Ставит задачи", desc: "Не просто отвечает, а ведет тебя по чек-листу роста" },
        { title: "Проверяет выполнение", desc: "Дает фидбэк на домашки и следит за прогрессом" }
      ]
    },
    examples: {
      title: "Как это работает на практике",
      subtitle: "Реальные примеры работы с AI-ментором",
      tabs: [
        { id: "feedback", label: "AI-фидбэк" },
        { id: "task", label: "Задание" },
        { id: "analysis", label: "Анализ питча" }
      ],
      feedback: {
        title: "Пример фидбэка на идею",
        user: "Хочу сделать маркетплейс для поиска ментора",
        ai: "Сильная идея! Боль реальная — я вижу это по 1000+ запросов в месяц. Но есть риски:\n\n1. Unit-экономика: средний чек $50-100, но CAC может быть $200+\n2. Конкуренты: MentorCruise берет 82% рынка\n3. Защита: что мешает ментору уйти напрямую?\n\nРекомендую: начни с узкой ниши (например, только Web3 фаундеры) и протестируй через Telegram-бота за выходные."
      },
      task: {
        title: "Пример задания",
        level: "Уровень: Pre-seed",
        task: "Customer Development Sprint",
        description: "Проведи 15 интервью с целевой аудиторией за неделю",
        steps: [
          "Составь список из 30 потенциальных клиентов",
          "Напиши скрипт из 5 открытых вопросов",
          "Проведи минимум 15 звонков по 20 минут",
          "Задокументируй инсайты в Notion",
          "Найди 3 главные боли и приоритизируй"
        ]
      },
      analysis: {
        title: "Анализ питч-дека",
        score: "7.2 из 10",
        feedback: "Сильные стороны:\n• Четкая проблема (слайд 2)\n• Хороший размер рынка $2.3B\n• Есть early traction - 120 пользователей\n\nЧто улучшить:\n• Слайд 5: добавь конкретные метрики роста (WoW)\n• Слайд 8: конкуренты описаны слабо, добавь матрицу\n• Слайд 11: не показан путь к $1M ARR\n• Нет слайда 'Why now?' - критично для инвесторов"
      }
    },
    testimonials: {
      title: "Что говорят фаундеры",
      subtitle: "Реальные отзывы от пользователей Mentorio",
      items: [
        {
          name: "Алексей Петров",
          role: "Founder, TechBot",
          text: "AI дал очень точный совет по BMC. За 2 недели мы переупаковали продукт и получили первых 10 клиентов. Это лучше, чем советы 90% живых менторов.",
          avatar: "AP"
        },
        {
          name: "Мария Иванова", 
          role: "CEO, EduSpace",
          text: "Мой трекер выглядит как у YC, но только для меня одного. Каждую неделю получаю персональные задания и вижу прогресс. Подняли pre-seed через 3 месяца!",
          avatar: "МИ"
        },
        {
          name: "Дмитрий Ким",
          role: "Co-founder, DataFlow",
          text: "Загрузил питч — получил 15 страниц разбора с примерами. AI показал, почему инвесторы отказывали. Переделал — получил 3 оффера. Это магия!",
          avatar: "ДК"
        }
      ]
    },
    pricing: {
      title: "Тарифы",
      subtitle: "Выбери подходящий план для твоего стартапа",
      popular: "Популярный выбор",
      cta: "Выбрать план",
      ctaPreorder: "Предзаказ $19",
      ctaWaitlist: "Записаться",
      yearly: "Годовая подписка",
      monthly: "Месячная подписка",
      save: "Экономия",
      plans: [
        {
          name: "Free",
          price: "$0",
          yearlyPrice: "$0",
          desc: "Попробуй возможности",
          features: ["3 задания в месяц", "1 AI-фидбэк", "Базовый чат", "История на 7 дней"],
          available: false
        },
        {
          name: "Solo",
          price: "$19",
          yearlyPrice: "$190",
          savings: "$38",
          desc: "Для соло-фаундера",
          features: ["Безлимит заданий", "20 AI-фидбэков/мес", "Анализ документов", "GPT-5 модель", "Полная история", "Экспорт данных"],
          available: true,
          badge: "Доступен предзаказ"
        },
        {
          name: "Pro Team",
          price: "$49",
          yearlyPrice: "$490",
          savings: "$98",
          desc: "Для команды до 3 человек",
          features: ["Всё из Solo", "Командный workspace", "Общий трекер прогресса", "Приоритетная поддержка", "API доступ"],
          available: false
        },
        {
          name: "Accelerator",
          price: "$199",
          yearlyPrice: "$1990",
          savings: "$398",
          desc: "Для акселераторов",
          features: ["До 10 стартапов", "White-label брендинг", "Аналитика и отчеты", "Dedicated success manager", "Кастомные интеграции"],
          available: false
        }
      ]
    },
    faq: {
      title: "Частые вопросы",
      items: [
        {
          question: "Это просто обертка над ChatGPT?",
          answer: "Нет. Mentorio — это специализированная система с обученной моделью на данных акселераторов, системой заданий, трекером прогресса и анализом документов. GPT — это только движок, а не продукт."
        },
        {
          question: "Чем отличается от обычного акселератора?",
          answer: "Доступность 24/7, персонализация под твой кейс, цена в 100 раз ниже, нет необходимости отдавать equity. При этом ты получаешь проверенные методологии Y Combinator и 500 Startups."
        },
        {
          question: "Можно использовать командой?",
          answer: "Да! Тариф Pro Team позволяет работать втроем над одним стартапом с общим трекером и заданиями. Каждый видит прогресс команды."
        },
        {
          question: "Что входит в бесплатную версию?",
          answer: "3 задания в месяц, 1 детальный AI-фидбэк, доступ к базовому чату и история на 7 дней. Этого достаточно, чтобы понять ценность продукта."
        },
        {
          question: "Данные защищены?",
          answer: "Да. Используем шифрование AES-256, серверы в ЕС, соответствие GDPR. Твои идеи и документы никогда не используются для обучения моделей."
        },
        {
          question: "Можно отменить подписку?",
          answer: "В любой момент без вопросов. При отмене сохраняется доступ до конца оплаченного периода."
        }
      ]
    },
    howItWorks: {
      title: "Как начать?",
      subtitle: "Три простых шага к твоему AI-ментору",
      steps: [
        { title: "Расскажи о стартапе", desc: "AI поймет твой контекст, стадию и цели" },
        { title: "Получи план развития", desc: "Персональные задания и чек-листы на неделю" },
        { title: "Выполняй и получай фидбэк", desc: "AI проверяет прогресс и корректирует путь" }
      ]
    },
    waitlist: {
      title: "Получи ранний доступ",
      subtitle: "Стань одним из первых пользователей и получи 50% скидку на первые 3 месяца",
      name: "Имя",
      email: "Email",
      startup: "Стартап",
      namePlaceholder: "Твоё имя",
      emailPlaceholder: "email@example.com",
      startupPlaceholder: "Название",
      submit: "Получить доступ"
    },
    whyItWorks: {
      title: "Почему это работает?",
      reasons: [
        "98% фаундеров не имеют доступа к качественному менторству",
        "AI доступен 24/7",
        "Методология проверена на 1000+ успешных стартапах",
        "Персонализация под твой кейс"
      ]
    },
    footer: {
      tagline: "AI-ментор для амбициозных фаундеров",
      about: "О нас",
      blog: "Блог",
      contacts: "Контакты",
      privacy: "Политика конфиденциальности",
      rights: "© 2024 Mentorio. Все права защищены.",
      email: "Связаться: sarvarbeksultonbekov@gmail.com"
    }
  },
  en: {
    hero: {
      badge: "New: AI insights for founders",
      brand: "Mentorio",
      title: "Build your startup with your personal AI mentor",
      description: "Get tasks, grow as a founder, develop your startup — step by step. Mentorio is not just a chat, but a complete development system with a personal AI mentor who knows your path from idea to scale.",
      cta1: "Start for free",
      cta2: "Watch demo"
    },
    features: {
      title: "What can Mentorio do?",
      subtitle: "A complete startup development system",
      items: [
        { title: "AI feedback", desc: "Personal analysis of your ideas, pitches and strategies" },
        { title: "Real assignments", desc: "Verifiable homework to develop founder skills" },
        { title: "Tracker like in accelerator", desc: "Track progress and metrics in one place" },
        { title: "Document analysis", desc: "Upload pitches, financial models — get detailed analysis" },
        { title: "YC-template generation", desc: "BMC, Go-to-Market, investor emails" },
        { title: "Team collaboration", desc: "Grow together with co-founders" }
      ]
    },
    difference: {
      title: "How is Mentorio different from a regular AI chat?",
      subtitle: "It's not just GPT in a nice wrapper",
      items: [
        { title: "Knows the startup path", desc: "Trained on YC, 500 Startups and other accelerator cases" },
        { title: "Keeps context", desc: "Remembers your history, tasks and progress for months" },
        { title: "Sets tasks", desc: "Doesn't just answer, but guides you through a growth checklist" },
        { title: "Checks completion", desc: "Gives feedback on homework and tracks progress" }
      ]
    },
    examples: {
      title: "How it works in practice",
      subtitle: "Real examples of working with an AI mentor",
      tabs: [
        { id: "feedback", label: "AI Feedback" },
        { id: "task", label: "Assignment" },
        { id: "analysis", label: "Pitch Analysis" }
      ],
      feedback: {
        title: "Example feedback on an idea",
        user: "I want to make a marketplace for finding mentors",
        ai: "Strong idea! The pain is real — I see 1000+ requests per month. But there are risks:\n\n1. Unit economics: average check $50-100, but CAC can be $200+\n2. Competitors: MentorCruise takes 82% of the market\n3. Protection: what stops the mentor from going direct?\n\nI recommend: start with a narrow niche (e.g., only Web3 founders) and test via Telegram bot over the weekend."
      },
      task: {
        title: "Example assignment",
        level: "Level: Pre-seed",
        task: "Customer Development Sprint",
        description: "Conduct 15 interviews with target audience in a week",
        steps: [
          "Make a list of 30 potential customers",
          "Write a script with 5 open questions",
          "Conduct at least 15 calls of 20 minutes",
          "Document insights in Notion",
          "Find 3 main pains and prioritize"
        ]
      },
      analysis: {
        title: "Pitch deck analysis",
        score: "7.2 out of 10",
        feedback: "Strengths:\n• Clear problem (slide 2)\n• Good market size $2.3B\n• Early traction - 120 users\n\nWhat to improve:\n• Slide 5: add specific growth metrics (WoW)\n• Slide 8: competitors poorly described, add matrix\n• Slide 11: path to $1M ARR not shown\n• No 'Why now?' slide - critical for investors"
      }
    },
    testimonials: {
      title: "What founders say",
      subtitle: "Real reviews from Mentorio users",
      items: [
        {
          name: "Alex Petrov",
          role: "Founder, TechBot",
          text: "AI gave very accurate BMC advice. In 2 weeks we repackaged the product and got our first 10 customers. Better than 90% of human mentors.",
          avatar: "AP"
        },
        {
          name: "Maria Ivanova",
          role: "CEO, EduSpace",
          text: "My tracker looks like YC's, but just for me. Every week I get personal assignments and see progress. Raised pre-seed in 3 months!",
          avatar: "MI"
        },
        {
          name: "Dmitry Kim",
          role: "Co-founder, DataFlow",
          text: "Uploaded pitch — got 15 pages of analysis with examples. AI showed why investors were rejecting. Redid it — got 3 offers. It's magic!",
          avatar: "DK"
        }
      ]
    },
    pricing: {
      title: "Pricing",
      subtitle: "Choose the right plan for your startup",
      popular: "Popular choice",
      cta: "Choose plan",
      ctaPreorder: "Pre-order $19",
      ctaWaitlist: "Join waitlist",
      yearly: "Yearly subscription",
      monthly: "Monthly subscription",
      save: "Save",
      plans: [
        {
          name: "Free",
          price: "$0",
          yearlyPrice: "$0",
          desc: "Try the features",
          features: ["3 tasks per month", "1 AI feedback", "Basic chat", "7-day history"],
          available: false
        },
        {
          name: "Solo",
          price: "$19",
          yearlyPrice: "$190",
          savings: "$38",
          desc: "For solo founder",
          features: ["Unlimited tasks", "20 AI feedbacks/month", "Document analysis", "GPT-5 model", "Full history", "Data export"],
          available: true,
          badge: "Pre-order available"
        },
        {
          name: "Pro Team",
          price: "$49",
          yearlyPrice: "$490",
          savings: "$98",
          desc: "For teams up to 3",
          features: ["Everything from Solo", "Team workspace", "Shared progress tracker", "Priority support", "API access"],
          available: false
        },
        {
          name: "Accelerator",
          price: "$199",
          yearlyPrice: "$1990",
          savings: "$398",
          desc: "For accelerators",
          features: ["Up to 10 startups", "White-label branding", "Analytics and reports", "Dedicated success manager", "Custom integrations"],
          available: false
        }
      ]
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "Is this just a wrapper over ChatGPT?",
          answer: "No. Mentorio is a specialized system with a model trained on accelerator data, task system, progress tracker and document analysis. GPT is just the engine, not the product."
        },
        {
          question: "How is it different from a regular accelerator?",
          answer: "24/7 availability, personalization for your case, 100x lower price, no need to give up equity. You still get proven Y Combinator and 500 Startups methodologies."
        },
        {
          question: "Can teams use it?",
          answer: "Yes! Pro Team plan allows three people to work on one startup with shared tracker and tasks. Everyone sees team progress."
        },
        {
          question: "What's included in the free version?",
          answer: "3 tasks per month, 1 detailed AI feedback, access to basic chat and 7-day history. Enough to understand the product value."
        },
        {
          question: "Is data protected?",
          answer: "Yes. We use AES-256 encryption, EU servers, GDPR compliance. Your ideas and documents are never used for model training."
        },
        {
          question: "Can I cancel subscription?",
          answer: "Anytime without questions. Upon cancellation, access remains until the end of the paid period."
        }
      ]
    },
    howItWorks: {
      title: "How to start?",
      subtitle: "Three simple steps to your AI mentor",
      steps: [
        { title: "Tell about your startup", desc: "AI will understand your context, stage and goals" },
        { title: "Get development plan", desc: "Personal tasks and checklists for the week" },
        { title: "Execute and get feedback", desc: "AI checks progress and adjusts the path" }
      ]
    },
    waitlist: {
      title: "Get early access",
      subtitle: "Become one of the first users and get 50% off for the first 3 months",
      name: "Name",
      email: "Email",
      startup: "Startup",
      namePlaceholder: "Your name",
      emailPlaceholder: "email@example.com",
      startupPlaceholder: "Name",
      submit: "Get access"
    },
    whyItWorks: {
      title: "Why it works?",
      reasons: [
        "98% of founders don't have access to quality mentorship",
        "AI is available 24/7",
        "Methodology proven on 1000+ successful startups",
        "Personalization for your case"
      ]
    },
    footer: {
      tagline: "AI mentor for ambitious founders",
      about: "About",
      blog: "Blog",
      contacts: "Contacts",
      privacy: "Privacy Policy",
      rights: "© 2024 Mentorio. All rights reserved.",
      email: "Contact: sarvarbeksultonbekov@gmail.com"
    }
  }
} as const;

export type Language = keyof typeof translations;
export type Translations = typeof translations[Language]; 