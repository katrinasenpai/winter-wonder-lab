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
    { id: 1, title: "Час поэзии", date: "24 Дек, 18:00", desc: "Уютные чтения зимних стихов при свечах." },
    { id: 2, title: "Новогодний Концерт", date: "26 Дек, 19:30", desc: "Живая музыка и праздничная атмосфера." },
    { id: 3, title: "Мастер-класс", date: "28 Дек, 14:00", desc: "Создаем елочные игрушки своими руками." },
    { id: 4, title: "Лекция: История Ёлки", date: "29 Дек, 16:00", desc: "Узнайте всё о традициях Нового года." },
    { id: 5, title: "Зимняя Выставка", date: "30 Дек - 10 Янв", desc: "Экспозиция работ читателей библиотеки." },
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
    
    // Создаем 50 снежинок
    for (let i = 0; i < 50; i++) {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        
        const left = Math.random() * 100;
        const animationDuration = 5 + Math.random() * 10;
        const opacity = 0.3 + Math.random() * 0.7;
        const size = 2 + Math.random() * 4;
        
        flake.style.left = `${left}%`;
        flake.style.top = '-10px';
        flake.style.width = `${size}px`;
        flake.style.height = `${size}px`;
        flake.style.opacity = opacity;
        flake.style.animationDuration = `${animationDuration}s`;
        flake.style.animationDelay = `-${Math.random() * 5}s`;
        
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

function updateMagicParticles(isSynthesizing) {
    const container = document.getElementById('magicParticles');
    if (!container) return;
    
    if (isSynthesizing) {
        container.classList.add('synthesizing');
        magicParticles.forEach((particle, index) => {
            const orbitRadius = particle.getAttribute('data-orbit-radius') || '100';
            particle.style.left = '50%';
            particle.style.top = '80%';
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
    
    photoCards.forEach((card, index) => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (index < EVENTS.length) {
                openEventModal(EVENTS[index]);
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

function openEventModal(event) {
    const eventModal = document.getElementById('eventModal');
    const eventTitle = document.getElementById('eventTitle');
    const eventDate = document.getElementById('eventDate');
    const eventDescription = document.getElementById('eventDescription');
    
    if (eventTitle) eventTitle.textContent = event.title;
    if (eventDate) eventDate.textContent = event.date;
    if (eventDescription) eventDescription.textContent = event.desc;
    
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
    
    if (garlandToggle && garland) {
        // Проверяем сохраненное состояние
        const savedState = localStorage.getItem('garlandActive');
        // По умолчанию гирлянда включена (если нет сохраненного состояния или оно true)
        const isActive = savedState === null || savedState === 'true';
        
        if (isActive) {
            garland.classList.add('active');
            garlandToggle.classList.add('active');
        } else {
            garland.classList.remove('active');
            garlandToggle.classList.remove('active');
        }
        
        garlandToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isNowActive = garland.classList.toggle('active');
            garlandToggle.classList.toggle('active');
            
            // Сохраняем состояние
            localStorage.setItem('garlandActive', isNowActive);
            
            console.log('Гирлянда', isNowActive ? 'включена' : 'выключена');
        });
    } else {
        console.error('garlandToggle или garland не найдены');
    }
}

