// --- КОНФИГУРАЦИЯ И ДАННЫЕ ---

const PREDICTIONS = [
    { id: 1, title: "Эликсир Уютной Тишины", quote: "И всё-таки, как хорошо дома! Так тепло, уютно, нет лучше места на земле.", author: "Рэй Брэдбери", challenge: "В выходные устрой цифровой детокс на 3 часа: только ты, плед и книга." },
    { id: 2, title: "Сыворотка Северного Сияния", quote: "Зима — это не время года, это сказка, написанная холодным ветром на стекле.", author: "Народная мудрость", challenge: "Найди и прочитай сказку Андерсена, которую не читал(а) в детстве." },
    { id: 3, title: "Кристалл Храброго Сердца", quote: "Надо только выучиться ждать, надо быть спокойным и упрямым...", author: "Анна Герман", challenge: "Прочитай книгу в жанре приключения, где герои идут сквозь снега." },
    { id: 4, title: "Микстура Внезапной Радости", quote: "Всякий раз, когда мы перешагиваем через страх, мы чувствуем себя немного свободнее.", author: "Нил Гейман", challenge: "Начни читать книгу автора, которого раньше никогда не открывал(а)." },
    { id: 5, title: "Эссенция Старого Фонаря", quote: "Никогда не бойся теней. Они лишь означают, что где-то рядом есть свет.", author: "Джон Р.Р. Толкин", challenge: "Прогуляйся вечером, найди красивый фонарь и сделай фото." },
    { id: 14, title: "Квинтэссенция Перемен", quote: "Даже самый маленький человек способен изменить ход будущего.", author: "Властелин Колец", challenge: "Сделай одно маленькое доброе дело анонимно." },
];

const INGREDIENTS = [
    { id: 'mandarin', name: 'Мандарин', icon: '🍊', type: 'base' },
    { id: 'snow', name: 'Снежинка', icon: '❄️', type: 'base' },
    { id: 'star', name: 'Звезда', icon: '✨', type: 'magic' },
    { id: 'pine', name: 'Хвоя', icon: '🌲', type: 'base' },
    { id: 'scroll', name: 'Свиток', icon: '📜', type: 'magic' },
    { id: 'potion', name: 'Эфир', icon: '🧪', type: 'magic' },
];

const EVENTS = [
    { 
        id: 0, 
        title: "Мастер-класс «Лошадка из фетра»", 
        date: "27 Дек, 16:00", 
        desc: "🎄 Сделаем очаровательную лошадку из мягкого разноцветного фетра.\n\n🎄 Научимся простым и аккуратным швам, которые под силу даже новичкам.\n\n🎄 Украсим свои творения стежками, лентами и пайетками— каждая игрушка получится уникальной!\n\n👉 Цена мастер-класса 350 рублей. Оплата при входе на кассе. Мы предоставляем все расходники 😊 Количество мест ограничено!",
        registrationUrl: "https://forms.yandex.ru/u/6949172984227c4ac6d38802/",
        imageName: "felt-horse-masterclass.jpg"
    },
    { 
        id: 1, 
        title: "Час поэзии Эдит Сёдергран", 
        date: "27 Дек, 17:00", 
        desc: "📖 Петербургский поэт и переводчик Алексей Дмитриенко проведёт для вас час поэзии. Он прочитает стихи Эдит Сёдергран, расскажет об особенностях перевода её поэзии со шведского языка и презентует второе издания книги «Страна, которой нет» (1‑е изд. — 2023 г., 2‑е изд. — 2025 г.) со стихами Эдит Сёдергран.\n\n🎨 К нашему гостю присоединится иллюстратор Стася Малаховская. Она расскажет об иллюстрациях к сборнику и поиграет на арфе во время чтения стихов.\n\n🖼️ Также для посетителей будет организована выставка её иллюстраций.",
        registrationUrl: "https://biblioteka-rzhevskaya.timepad.ru/event/3721620/"
    },
    { 
        id: 2, 
        title: "Концерт «За час до Нового года»", 
        date: "28 Дек, 15:00", 
        desc: "🎵 Создавать новогодне‑рождественское настроение с помощью песен будет для вас Анастасия Земляницкая — солистка, автор‑исполнитель и просто человек, горящий музыкой.\n\n💫 Она не может ни дня прожить без песни и без того, чтобы не поделиться ею со зрителями. Поёт душой, проживая каждую песню.\n\n🎶 Мы услышим и споём вместе любимые зимние песни советской эстрады, песни из кинофильмов, песни‑ностальгию каждого и некоторые, возможно, забытые мелодии.",
        registrationUrl: "https://biblioteka-rzhevskaya.timepad.ru/event/3730631/"
    },
    { 
        id: 3, 
        title: "Мастер-класс для видеокриейторов", 
        date: "28 Дек, 16:00", 
        desc: "🎬 Устали от творческого кризиса? Не знаете, с чего начать? Или, наоборот, есть идея, но вы не понимаете, как воплотить её в жизнь? Этот мастер-класс — для вас!\n\nЧто будет на мастер-классе:\n✔ С чего начать? Практические шаги, которые помогут вам сделать первый кадр — даже если вы никогда не снимали раньше.\n✔ Что делать, если нет идей? Лайфхаки, как находить вдохновение в повседневности и превращать обычное в искусство.\n✔ Что делать, если идея есть? Как структурировать замысел, подобрать локацию, свет и ракурс, чтобы реализовать задуманное.\n✔ Как развивать насмотренность. Куда смотреть, чтобы научиться снимать как профессионал, даже если вы начинающий.",
        registrationUrl: "https://biblioteka-rzhevskaya.timepad.ru/event/3716422/"
    },
    { 
        id: 4, 
        title: "Лекция «О районе с любовью»", 
        date: "28 Дек, 17:00", 
        desc: "❤️ Приглашаем вас на уютную и очень важную встречу! Давайте вместе оглянемся на уходящий год глазами краеведов.\n\nПоделимся с вами:\n- Главными открытиями и находками краеведческого сектора — что нового мы узнали о нашем любимом Красногвардейском районе?\n- Яркой хроникой самых важных событий — что изменило облик района, запомнилось жителям и стало частью его истории?\n- Планами на будущее — куда мы отправимся в поисках историй в новом году?\n\n🎁 А ещё мы приготовили для всех участников особенный праздничный сюрприз — краеведческие подарки от библиотеки, которые останутся вам на память!\n\n✨ Ждём каждого, кто любит наш район, ценит его историю и верит, что самое интересное — всегда рядом. Приходите за новыми знаниями, теплым общением и предновогодним настроением!",
        registrationUrl: "https://biblioteka-rzhevskaya.timepad.ru/event/3719716/"
    },
    { 
        id: 5, 
        title: "Мастер-класс «Сказочный символ района»", 
        date: "28 Дек, 17:30", 
        desc: "🎄 Предлагаем окунуться в предпраздничную атмосферу главного зимнего праздника и создать из фетра новогоднюю игрушку на ёлку — уникальный символ любимого Красногвардейского район!\n\n🎨 Каждый участник сможет выбрать тот символ района, который ему больше всего пришёлся по душе. Для этого мы подготовили для вас:\n- Сказочных персонажей по мотивам «Охтинских сказок»: волшебного лося, смелого бобра и весёлую собачку Дусю;\n- Колоритного представителя местного промысла — охтенскую молочницу;\n- Знаковые архитектурные объекты: ротонду Ильинского храма и Александровские ворота в Ильинской слободе.\n\n✨ По окончании мастер-класса каждый унесёт с собой авторскую ёлочную игрушку, сделанную своими руками.",
        registrationUrl: "https://biblioteka-rzhevskaya.timepad.ru/event/3719204/"
    },
    { 
        id: 6, 
        title: "Лекция «Математические характеристики литературного стиля в романе \"Властелин колец\"»", 
        date: "3 Янв 2026, 15:30", 
        desc: "📚 В начале нового 2026 года в библиотеке «Ржевская» пройдёт цикл лекций, посвящённый применению математических методов к тексту романа замечательного писателя и учёного Джона Р.Р. Толкина «Властелин колец».\n\n🔬 Это хороший повод вспомнить, чем так привлекательно это произведение, и обсудить некоторые его удивительные и уникальные качества, особенно те, которые до сих пор остаются малоизученными.\n\n👨‍🏫 Лектор: Михаил Образцов, математик по образованию, кандидат экономических наук, горячий поклонник творчества Толкина, который последние 10 лет посвятил изучению романа «Властелин колец» и теперь поделится своими любопытными и неожиданными открытиями.\n\n📊 Уже 3 января, в День рождения Джона Толкина, состоится первая лекция, озаглавленная «Математические характеристики литературного стиля». Разберём эти характеристики и узнаем, почему именно «Властелин колец» позволяет выявить их. Будет показано, что разные части романа весьма сильно отличаются между собой стилям, что крайне редко встречается в мировой литературе в рамках одного художественного произведения.",
        registrationUrl: "https://biblioteka-rzhevskaya.timepad.ru/event/3717711/"
    },
    { 
        id: 7, 
        title: "Выставка «Праздник родом из детства»", 
        date: "21 Дек 2025 - 16 Янв 2026", 
        desc: "🎁 Предлагаем прикоснуться к волшебству и вспомнить о счастливом моменте родом из детства — украшению ёлки разноцветными игрушками и гирляндами в преддверии Нового года.\n\n✨ На выставке будут представлены как сами ёлочные игрушки из советского прошлого, так и атрибуты, которые сопутствуют главному празднику зимы.",
        registrationUrl: null
    },
];

const LIBRARY_LETTER = {
    title: "Новогоднее послание 2026",
    greeting: "Дорогие друзья!",
    body: [
        "Библиотека «Ржевская» поздравляет вас с наступающим Новым 2026 годом! 🎄✨",
        "Пусть этот год принесёт вам множество удивительных открытий, вдохновляющих встреч с книгами и незабываемых моментов. Мы желаем вам, чтобы каждый день был наполнен радостью чтения, новыми знаниями и тёплым общением.",
        "В новом году мы продолжим радовать вас интересными мероприятиями, увлекательными лекциями, творческими мастер-классами и, конечно же, новыми книгами. Наша библиотека всегда открыта для вас!"
    ],
    signature: "С любовью, Команда библиотеки «Ржевская» ❄️"
};

const ROUTE_DETAILS = [
    {
        category: "Световые акценты и набережные",
        items: [
            "Мост Александра Невского: 200 световых елей.",
            "Большеохтинский мост: праздничная звезда и сияющие арки.",
            "Свердловская набережная: новые зоны отдыха и парк скульптур."
        ]
    },
    {
        category: "Праздничные ёлки",
        items: [
            "Среднеохтинский проспект / шоссе Революции",
            "Театр «Буфф» (Заневский пр.)",
            "ТЦ «Июнь» (Индустриальный пр.)"
        ]
    },
    {
        category: "Зимние активности",
        items: [
            "Ржевский лесопарк: лыжня и всесезонная горка.",
            "Полюстровский парк: лыжная трасса у прудов.",
            "Катки: ул. Металлистов 66, Заневский 53."
        ]
    }
];

// --- ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ---

let selectedIngredients = [];
let isMixing = false;
let magicParticles = [];

// --- ИНИЦИАЛИЗАЦИЯ ---

document.addEventListener('DOMContentLoaded', function() {
    console.log('Инициализация сайта...');
    
    initSnowfall();
    initMagicParticles();
    initTwinklingStars();
    initInteractivity();
    initAlchemyStation();
    initGarland();
    
    console.log('Инициализация завершена');
});

// --- СНЕГ В ОКНЕ ---

function initSnowfall() {
    const snowContainer = document.getElementById('snowContainer');
    if (!snowContainer) return;
    
    // Очищаем контейнер
    snowContainer.innerHTML = '';
    
    // Создаем 150 снежинок разного размера
    for (let i = 0; i < 150; i++) {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        
        const left = Math.random() * 100;
        const animationDuration = 4 + Math.random() * 12;
        const opacity = 0.4 + Math.random() * 0.6;
        // Разные размеры: от маленьких (1px) до больших (8px)
        const size = 1 + Math.random() * 7;
        // Добавляем горизонтальное смещение для более естественного падения
        const horizontalDrift = -10 + Math.random() * 20;
        
        flake.style.left = `${left}%`;
        flake.style.top = '-10px';
        flake.style.width = `${size}px`;
        flake.style.height = `${size}px`;
        flake.style.opacity = opacity;
        flake.style.animationDuration = `${animationDuration}s`;
        flake.style.animationDelay = `-${Math.random() * 5}s`;
        // Добавляем переменную для горизонтального смещения
        flake.style.setProperty('--drift', `${horizontalDrift}px`);
        
        snowContainer.appendChild(flake);
    }
}

// --- МАГИЧЕСКИЕ ЧАСТИЦЫ ---

function initMagicParticles() {
    const container = document.getElementById('magicParticles');
    if (!container) return;
    
    // Очищаем контейнер
    container.innerHTML = '';
    magicParticles = [];
    
    // Создаем 30 частиц
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'magic-sparkle';
        
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const animationDuration = 3 + Math.random() * 5;
        const delay = Math.random() * 5;
        const orbitRadius = 50 + Math.random() * 150;
        
        particle.style.left = `${left}%`;
        particle.style.top = `${top}%`;
        particle.style.animation = `float ${animationDuration}s linear infinite`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.opacity = '0.6';
        particle.setAttribute('data-orbit-radius', orbitRadius);
        
        container.appendChild(particle);
        magicParticles.push(particle);
    }
}

// --- ЗВЁЗДОЧКИ ---

function initTwinklingStars() {
    const container = document.getElementById('twinklingStars');
    if (!container) return;
    
    // Очищаем контейнер
    container.innerHTML = '';
    
    // Создаем 40 звёздочек разных размеров
    const starEmojis = ['⭐', '🌟']; // Убрали ✨ и 💫 (с полукруглыми хвостами)
    
    for (let i = 0; i < 40; i++) {
        const star = document.createElement('div');
        star.className = 'twinkling-star';
        star.textContent = starEmojis[Math.floor(Math.random() * starEmojis.length)];
        
        // Случайная позиция по всему экрану
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        
        // Разные размеры
        const size = 12 + Math.random() * 20; // от 12px до 32px
        
        // Разная задержка анимации для более естественного эффекта
        const delay = Math.random() * 3;
        const duration = 2 + Math.random() * 2; // от 2 до 4 секунд
        
        star.style.left = `${left}%`;
        star.style.top = `${top}%`;
        star.style.fontSize = `${size}px`;
        star.style.animationDelay = `${delay}s`;
        star.style.animationDuration = `${duration}s`;
        
        container.appendChild(star);
    }
}

function updateMagicParticles(isSynthesizing) {
    const container = document.getElementById('magicParticles');
    if (!container) return;
    
    if (isSynthesizing) {
        container.classList.add('synthesizing');
        magicParticles.forEach((particle, index) => {
            const orbitRadius = particle.getAttribute('data-orbit-radius') || '100';
            particle.style.left = '50%';
            particle.style.top = '45%';
            particle.style.setProperty('--orbit-radius', `${orbitRadius}px`);
            particle.style.animation = `whirl 2s linear infinite`;
            particle.style.animationDelay = `${-index * 0.1}s`;
            particle.style.opacity = '0.8';
            particle.style.boxShadow = '0 0 10px 2px rgba(253, 224, 71, 0.5)';
        });
    } else {
        container.classList.remove('synthesizing');
        magicParticles.forEach((particle) => {
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const animationDuration = 3 + Math.random() * 5;
            const delay = Math.random() * 5;
            
            particle.style.left = `${left}%`;
            particle.style.top = `${top}%`;
            particle.style.animation = `float ${animationDuration}s linear infinite`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.opacity = '0.6';
            particle.style.boxShadow = 'none';
        });
    }
}

// --- ИНТЕРАКТИВНОСТЬ ---

function initInteractivity() {
    // Карта
    const mapTablet = document.getElementById('mapTablet');
    const mapModal = document.getElementById('mapModal');
    
    if (mapTablet && mapModal) {
        mapTablet.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openMapModal();
        });
    }
    
    // Позиционирование подсказки для карты
    if (mapTablet) {
        const mapTooltip = mapTablet.querySelector('.tooltip');
        if (mapTooltip) {
            mapTablet.addEventListener('mouseenter', function() {
                mapTooltip.style.opacity = '1';
                mapTooltip.style.visibility = 'visible';
                mapTooltip.style.transform = 'translateX(-50%) translateY(0)';
            });
            
            mapTablet.addEventListener('mouseleave', function() {
                mapTooltip.style.opacity = '0';
                mapTooltip.style.visibility = 'hidden';
                mapTooltip.style.transform = 'translateX(-50%) translateY(-5px)';
            });
        }
    }
    
    // Письмо
    const newYearEnvelope = document.getElementById('newYearEnvelope');
    const messageModal = document.getElementById('messageModal');
    
    if (newYearEnvelope && messageModal) {
        newYearEnvelope.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openLetterModal();
        });
    }
    
    // Монитор
    const crtMonitor = document.getElementById('crtMonitor');
    const monitorModal = document.getElementById('monitorModal');
    
    if (crtMonitor && monitorModal) {
        crtMonitor.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            monitorModal.classList.add('active');
        });
    }
    
    // Карточки событий
    const photoCards = document.querySelectorAll('.photo-card');
    const eventModal = document.getElementById('eventModal');
    
    photoCards.forEach((card) => {
        const eventIndex = parseInt(card.getAttribute('data-event'));
        
        // Заполняем дату на карточке
        if (eventIndex >= 0 && eventIndex < EVENTS.length) {
            const event = EVENTS[eventIndex];
            const dateElement = card.querySelector('.photo-date');
            if (dateElement && event.date) {
                dateElement.textContent = event.date;
            }
        }
        
        card.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (eventIndex >= 0 && eventIndex < EVENTS.length) {
                openEventModal(EVENTS[eventIndex]);
            }
        });
    });
    
    // Закрытие модальных окон
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-close');
    
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            modals.forEach(modal => modal.classList.remove('active'));
        });
    });
    
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
}

function openMapModal() {
    const mapModal = document.getElementById('mapModal');
    const routeSections = document.getElementById('routeSections');
    
    if (routeSections) {
        routeSections.innerHTML = ROUTE_DETAILS.map((section, idx) => `
            <div class="route-section">
                <h4>${section.category}</h4>
                <ul>
                    ${section.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }
    
    mapModal.classList.add('active');
}

function openLetterModal() {
    const messageModal = document.getElementById('messageModal');
    const letterBody = document.getElementById('letterBody');
    
    if (letterBody) {
        letterBody.innerHTML = LIBRARY_LETTER.body.map(p => `<p>${p}</p>`).join('');
    }
    
    messageModal.classList.add('active');
}

function formatEventDescription(text) {
    if (!text) return '';
    
    let formatted = text;
    
    // Обрабатываем списки с маркерами ✔
    formatted = formatted.replace(/✔\s*([^\n]+)/g, '<li class="check-item">$1</li>');
    
    // Обрабатываем списки с дефисами в начале строки
    formatted = formatted.replace(/^-\s+([^\n]+)/gm, '<li>$1</li>');
    
    // Разбиваем на блоки по двойным переносам строк
    let blocks = formatted.split(/\n\n+/);
    let result = [];
    
    for (let block of blocks) {
        block = block.trim();
        if (!block) continue;
        
        // Разбиваем блок на строки
        let lines = block.split('\n');
        let blockContent = [];
        let currentList = [];
        let inList = false;
        let blockTitle = null;
        
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i].trim();
            if (!line) continue;
            
            // Если строка начинается с <li>, это элемент списка
            if (line.startsWith('<li')) {
                if (!inList) {
                    inList = true;
                    currentList = [];
                }
                currentList.push(line);
            } else {
                // Если были элементы списка, закрываем список
                if (inList && currentList.length > 0) {
                    blockContent.push('<ul>' + currentList.join('') + '</ul>');
                    currentList = [];
                    inList = false;
                }
                
                // Проверяем, является ли строка заголовком блока (начинается с эмоджи и короткая)
                if (i === 0 && line.length < 100 && /^[^\s]+\s/.test(line)) {
                    blockTitle = line;
                } else {
                    // Обрабатываем обычный текст
                    // Выделяем важные части (названия в кавычках)
                    line = line.replace(/«([^»]+)»/g, '<strong>«$1»</strong>');
                    line = line.replace(/"([^"]+)"/g, '<strong>"$1"</strong>');
                    
                    // Выделяем вопросы
                    line = line.replace(/([^.!?]+\?)/g, '<em>$1</em>');
                    
                    blockContent.push('<p>' + line + '</p>');
                }
            }
        }
        
        // Закрываем список, если он остался открытым
        if (inList && currentList.length > 0) {
            blockContent.push('<ul>' + currentList.join('') + '</ul>');
        }
        
        // Если есть заголовок или несколько элементов, оборачиваем в блок
        if (blockTitle || blockContent.length > 1) {
            let blockHtml = '<div class="event-block">';
            if (blockTitle) {
                blockHtml += '<div class="event-block-title">' + blockTitle + '</div>';
            }
            blockHtml += blockContent.join('');
            blockHtml += '</div>';
            result.push(blockHtml);
        } else {
            result.push(blockContent.join(''));
        }
    }
    
    return result.join('');
}

function openEventModal(event) {
    const eventModal = document.getElementById('eventModal');
    if (!eventModal) return;
    
    const eventTitle = document.getElementById('eventTitle');
    const eventDate = document.getElementById('eventDate');
    const eventDescription = document.getElementById('eventDescription');
    const eventRegisterBtn = document.getElementById('eventRegisterBtn');
    
    if (eventTitle) eventTitle.textContent = event.title;
    if (eventDate) eventDate.textContent = event.date;
    if (eventDescription) {
        eventDescription.innerHTML = formatEventDescription(event.desc);
    }
    
    // Обновляем кнопку регистрации
    if (eventRegisterBtn) {
        if (event.registrationUrl) {
            eventRegisterBtn.href = event.registrationUrl;
            eventRegisterBtn.style.display = 'block';
            eventRegisterBtn.textContent = 'Зарегистрироваться';
        } else {
            eventRegisterBtn.style.display = 'none';
        }
    }
    
    eventModal.classList.add('active');
}

// --- АЛХИМИЧЕСКАЯ СТАНЦИЯ ---

function initAlchemyStation() {
    const flaskContainer = document.getElementById('flaskContainer');
    const flaskLiquid = document.getElementById('flaskLiquid');
    const flaskStatus = document.getElementById('flaskStatus');
    const flaskSparkles = document.getElementById('flaskSparkles');
    const synthesizeBtn = document.getElementById('synthesizeBtn');
    const ingredientBtns = document.querySelectorAll('.ingredient-btn');
    const alchemyHint = document.getElementById('alchemyHint');
    
    // Показываем подсказку при загрузке
    showAlchemyHint();
    
    // Обработчики для кнопок ингредиентов
    ingredientBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (isMixing) return;
            
            const ingredientId = btn.getAttribute('data-id');
            toggleIngredient(ingredientId, btn);
            updateFlaskUI();
            updateAlchemyHint();
        });
    });
    
    // Обработчик для кнопки синтеза
    if (synthesizeBtn) {
        synthesizeBtn.addEventListener('click', function() {
            if (selectedIngredients.length === 3 && !isMixing) {
                hideAlchemyHint();
                synthesize();
            }
        });
    }
    
    // Обработчик клика на колбу
    if (flaskContainer) {
        flaskContainer.addEventListener('click', function() {
            if (selectedIngredients.length === 3 && !isMixing) {
                hideAlchemyHint();
                synthesize();
            }
        });
    }
    
    updateFlaskUI();
}

function showAlchemyHint() {
    const alchemyHint = document.getElementById('alchemyHint');
    if (alchemyHint && selectedIngredients.length < 3) {
        setTimeout(() => {
            alchemyHint.classList.add('show');
            alchemyHint.classList.remove('hide');
        }, 1000);
    }
}

function hideAlchemyHint() {
    const alchemyHint = document.getElementById('alchemyHint');
    if (alchemyHint) {
        alchemyHint.classList.remove('show');
        alchemyHint.classList.add('hide');
    }
}

function updateAlchemyHint() {
    const alchemyHint = document.getElementById('alchemyHint');
    if (!alchemyHint) return;
    
    const hintText = alchemyHint.querySelector('.hint-text');
    if (!hintText) return;
    
    if (selectedIngredients.length === 0) {
        hintText.textContent = 'Выбери три компонента и нажми "СИНТЕЗ"';
        showAlchemyHint();
    } else if (selectedIngredients.length < 3) {
        const remaining = 3 - selectedIngredients.length;
        hintText.textContent = `Выбрано: ${selectedIngredients.length}/3 ✨ Выбери ещё ${remaining}`;
        showAlchemyHint();
    } else {
        hintText.textContent = 'Готово! 🎄 Нажми "СИНТЕЗ" или кликни на колбу';
        showAlchemyHint();
    }
}

function toggleIngredient(id, btnElement) {
    const index = selectedIngredients.indexOf(id);
    
    if (index > -1) {
        // Убираем ингредиент
        selectedIngredients.splice(index, 1);
        btnElement.classList.remove('selected');
    } else {
        // Добавляем ингредиент (максимум 3)
        if (selectedIngredients.length < 3) {
            selectedIngredients.push(id);
            btnElement.classList.add('selected');
        }
    }
}

function updateFlaskUI() {
    const flaskLiquid = document.getElementById('flaskLiquid');
    const flaskStatus = document.getElementById('flaskStatus');
    const flaskSparkles = document.getElementById('flaskSparkles');
    const synthesizeBtn = document.getElementById('synthesizeBtn');
    const flaskContainer = document.getElementById('flaskContainer');
    
    const count = selectedIngredients.length;
    
    // Обновляем уровень жидкости
    if (flaskLiquid) {
        flaskLiquid.className = 'flask-liquid';
        if (count === 0) {
            flaskLiquid.classList.add('empty');
        } else {
            flaskLiquid.classList.add(`level-${count}`);
        }
    }
    
    // Обновляем статус
    if (flaskStatus) {
        flaskStatus.textContent = `${count}/3`;
    }
    
    // Обновляем кнопку синтеза
    if (synthesizeBtn) {
        if (count === 3 && !isMixing) {
            synthesizeBtn.disabled = false;
            synthesizeBtn.textContent = 'СИНТЕЗ';
        } else {
            synthesizeBtn.disabled = true;
            synthesizeBtn.textContent = 'СИНТЕЗ';
        }
    }
    
    // Обновляем подсказку
    updateAlchemyHint();
}

function synthesize() {
    if (selectedIngredients.length !== 3 || isMixing) return;
    
    isMixing = true;
    
    const flaskContainer = document.getElementById('flaskContainer');
    const flaskSparkles = document.getElementById('flaskSparkles');
    const magicCircle = document.getElementById('magicCircle');
    
    // Включаем анимацию смешивания
    if (flaskContainer) flaskContainer.classList.add('mixing');
    if (flaskSparkles) flaskSparkles.style.display = 'block';
    if (magicCircle) magicCircle.classList.add('active');
    
    // Включаем магический круг вокруг колбы
    const magicCircleFlask = document.getElementById('magicCircleFlask');
    if (magicCircleFlask) {
        magicCircleFlask.style.opacity = '0.6';
    }
    
    // Обновляем магические частицы
    updateMagicParticles(true);
    
    // Через 3 секунды показываем результат
    setTimeout(() => {
        const randomPred = PREDICTIONS[Math.floor(Math.random() * PREDICTIONS.length)];
        showPrediction(randomPred);
        
        // Сбрасываем состояние
        isMixing = false;
        selectedIngredients = [];
        
        // Сбрасываем UI
        if (flaskContainer) flaskContainer.classList.remove('mixing');
        if (flaskSparkles) flaskSparkles.style.display = 'none';
        if (magicCircle) magicCircle.classList.remove('active');
        
        // Скрываем магический круг вокруг колбы
        const magicCircleFlask = document.getElementById('magicCircleFlask');
        if (magicCircleFlask) {
            magicCircleFlask.style.opacity = '0';
        }
        
        // Сбрасываем кнопки
        document.querySelectorAll('.ingredient-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        updateFlaskUI();
        updateMagicParticles(false);
    }, 3000);
}

function showPrediction(prediction) {
    const predictionModal = document.getElementById('predictionModal');
    const predictionTitle = document.getElementById('predictionTitle');
    const predictionQuote = document.getElementById('predictionQuote');
    const predictionAuthor = document.getElementById('predictionAuthor');
    const predictionChallenge = document.getElementById('predictionChallenge');
    
    if (predictionTitle) predictionTitle.textContent = prediction.title;
    if (predictionQuote) predictionQuote.textContent = `"${prediction.quote}"`;
    if (predictionAuthor) predictionAuthor.textContent = `— ${prediction.author}`;
    if (predictionChallenge) predictionChallenge.textContent = prediction.challenge;
    
    if (predictionModal) {
        predictionModal.classList.add('active');
    }
}

// --- ГИРЛЯНДА ---

function initGarland() {
    const garlandToggle = document.getElementById('garlandToggle');
    const garland = document.getElementById('garland');
    const sideGarlands = document.querySelectorAll('.side-garland');
    
    if (garlandToggle && garland) {
        // Проверяем сохраненное состояние
        const savedState = localStorage.getItem('garlandActive');
        // По умолчанию гирлянда включена (если нет сохраненного состояния или оно true)
        const isActive = savedState === null || savedState === 'true';
        
        if (isActive) {
            garland.classList.add('active');
            garlandToggle.classList.add('active');
            // Включаем боковые гирлянды
            sideGarlands.forEach(sideGarland => sideGarland.classList.add('active'));
        } else {
            garland.classList.remove('active');
            garlandToggle.classList.remove('active');
            // Выключаем боковые гирлянды
            sideGarlands.forEach(sideGarland => sideGarland.classList.remove('active'));
        }
        
        garlandToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isNowActive = garland.classList.toggle('active');
            garlandToggle.classList.toggle('active');
            
            // Переключаем боковые гирлянды вместе с верхней
            sideGarlands.forEach(sideGarland => {
                if (isNowActive) {
                    sideGarland.classList.add('active');
                } else {
                    sideGarland.classList.remove('active');
                }
            });
            
            // Сохраняем состояние
            localStorage.setItem('garlandActive', isNowActive);
            
            console.log('Гирлянда', isNowActive ? 'включена' : 'выключена');
        });
    } else {
        console.error('garlandToggle или garland не найдены');
    }
}

