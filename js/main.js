// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initSnowfall();
    initInteractivity();
    initAlchemyStation();
    initGarland();
    initFlaskBubbles();
});

// Анимация снега
function initSnowfall() {
    const snowContainer = document.getElementById('snowContainer');
    const snowflakes = ['❄', '❅', '❆', '✻', '✼', '✽'];
    
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
        snowflake.style.left = Math.random() * 100 + '%';
        
        // Разные размеры снежинок (от 0.7 до 1.5)
        const size = Math.random() * 0.8 + 0.7;
        snowflake.style.fontSize = size + 'em';
        snowflake.style.transform = `scale(${size})`;
        
        // Медленное падение с постоянной скоростью
        snowflake.style.animationDuration = (Math.random() * 4 + 6) + 's';
        snowflake.style.animationDelay = Math.random() * 2 + 's';
        
        // Разная скорость горизонтального дрейфа для естественности
        const driftAmount = (Math.random() * 80 - 40) + 'px';
        snowflake.style.setProperty('--drift', driftAmount);
        
        snowContainer.appendChild(snowflake);
        
        setTimeout(() => {
            snowflake.remove();
        }, 15000);
    }
    
    // Создаем снежинки каждые 300мс
    setInterval(createSnowflake, 300);
    
    // Создаем начальные снежинки
    for (let i = 0; i < 20; i++) {
        setTimeout(() => createSnowflake(), i * 150);
    }
}

// Инициализация интерактивных элементов
function initInteractivity() {
    // Планшет с картой
    const mapTablet = document.getElementById('mapTablet');
    const mapModal = document.getElementById('mapModal');
    
    mapTablet.addEventListener('click', () => {
        mapModal.classList.add('active');
    });
    
    // ЭЛТ-монитор
    const crtMonitor = document.getElementById('crtMonitor');
    const monitorModal = document.getElementById('monitorModal');
    
    crtMonitor.addEventListener('click', () => {
        monitorModal.classList.add('active');
    });
    
    // Фото-карточки мероприятий
    const photoCards = document.querySelectorAll('.photo-card');
    const eventModal = document.getElementById('eventModal');
    
    // Устанавливаем даты в названия карточек
    photoCards.forEach((card, index) => {
        const event = eventsData[index];
        if (event && event.dateShort) {
            const labelElement = card.querySelector('.photo-label');
            if (labelElement) {
                labelElement.textContent = labelElement.textContent + ' ' + event.dateShort;
            }
        }
    });
    
    photoCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            const event = eventsData[index];
            if (event) {
                document.getElementById('eventTitle').textContent = event.title;
                document.getElementById('eventDate').textContent = event.date;
                // Сохраняем переносы строк в описании
                const descriptionElement = document.getElementById('eventDescription');
                descriptionElement.innerHTML = event.description.replace(/\n/g, '<br>');
                
                const registerBtn = document.getElementById('eventRegisterBtn');
                if (event.registerLink) {
                    registerBtn.href = event.registerLink;
                    registerBtn.style.display = 'inline-block';
                    registerBtn.textContent = 'Зарегистрироваться';
                } else {
                    registerBtn.style.display = 'none';
                }
                
                eventModal.classList.add('active');
            }
        });
    });
    
    // Закрытие модальных окон
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-close');
    
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modals.forEach(modal => modal.classList.remove('active'));
        });
    });
    
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
    
    // Ссылки на внешние ресурсы
    const telegramBtn = document.getElementById('telegramBtn');
    if (telegramBtn) {
        telegramBtn.href = 'https://t.me/probegirayon_bot';
    }
    
    const vkPlayBtn = document.getElementById('vkPlayBtn');
    if (vkPlayBtn) {
        vkPlayBtn.href = 'https://vk.com/away.php?to=https%3A%2F%2Fvkplay.ru%2Fplay%2Fgame%2Fkrasnocarstvoexe&utf=1';
    }
    
    // Новогодний конверт
    const newYearEnvelope = document.getElementById('newYearEnvelope');
    const messageModal = document.getElementById('messageModal');
    
    if (newYearEnvelope && messageModal) {
        newYearEnvelope.addEventListener('click', () => {
            messageModal.classList.add('active');
        });
    }
}

// Алхимическая станция (Генератор предсказаний)
function initAlchemyStation() {
    const ingredients = document.querySelectorAll('.ingredient');
    const synthesizeBtn = document.getElementById('synthesizeBtn');
    const selectedCount = document.getElementById('selectedCount');
    const flask = document.querySelector('.flask');
    const flaskLiquid = document.getElementById('flaskLiquid');
    const predictionModal = document.getElementById('predictionModal');
    
    let selectedIngredients = [];
    
    ingredients.forEach(ingredient => {
        ingredient.addEventListener('click', () => {
            const category = ingredient.dataset.category;
            const id = ingredient.dataset.id;
            
            // Проверяем, не выбрано ли уже 3 ингредиента
            if (selectedIngredients.length >= 3 && !ingredient.classList.contains('selected')) {
                return;
            }
            
            // Переключаем выбор
            if (ingredient.classList.contains('selected')) {
                ingredient.classList.remove('selected');
                selectedIngredients = selectedIngredients.filter(item => 
                    item.category !== category || item.id !== id
                );
            } else {
                ingredient.classList.add('selected');
                selectedIngredients.push({ category, id });
            }
            
            // Обновляем счетчик
            selectedCount.textContent = selectedIngredients.length;
            
            // Активируем кнопку синтеза
            if (selectedIngredients.length === 3) {
                synthesizeBtn.disabled = false;
            } else {
                synthesizeBtn.disabled = true;
            }
        });
    });
    
    // Синтез предсказания
    synthesizeBtn.addEventListener('click', () => {
        if (selectedIngredients.length !== 3) {
            return;
        }
        
        // Анимация бурления
        flask.classList.add('active');
        synthesizeBtn.disabled = true;
        
        // Блокируем все ингредиенты
        ingredients.forEach(ing => {
            ing.classList.add('disabled');
        });
        
        // Через 2 секунды показываем результат
        setTimeout(() => {
            const randomPrediction = predictionsData.predictions[
                Math.floor(Math.random() * predictionsData.predictions.length)
            ];
            
            // Заполняем модальное окно
            document.getElementById('predictionTitle').textContent = randomPrediction.title;
            document.getElementById('predictionQuote').textContent = randomPrediction.quote;
            document.getElementById('predictionAuthor').textContent = randomPrediction.author;
            document.getElementById('predictionChallenge').textContent = randomPrediction.challenge;
            
            // Показываем модальное окно
            predictionModal.classList.add('active');
            
            // Сбрасываем состояние
            flask.classList.remove('active');
            selectedIngredients = [];
            selectedCount.textContent = '0';
            ingredients.forEach(ing => {
                ing.classList.remove('selected', 'disabled');
            });
            synthesizeBtn.disabled = true;
        }, 2000);
    });
    
    // Сохранение открытки (упрощенная версия - можно доработать)
}

// Закрытие модальных окон по Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
    }
});

// Управление гирляндой
function initGarland() {
    const garlandToggle = document.getElementById('garlandToggle');
    const garland = document.getElementById('garland');
    
    // Проверяем сохранённое состояние в localStorage
    const garlandState = localStorage.getItem('garlandState');
    const isActive = garlandState === 'true' || garlandState === null; // По умолчанию включена
    
    if (isActive) {
        garland.classList.add('active');
        garlandToggle.classList.add('active');
    }
    
    garlandToggle.addEventListener('click', () => {
        garland.classList.toggle('active');
        garlandToggle.classList.toggle('active');
        
        // Сохраняем состояние
        localStorage.setItem('garlandState', garland.classList.contains('active'));
    });
}

// Анимация пузырьков над колбой
function initFlaskBubbles() {
    const bubblesContainer = document.querySelector('.flask-bubbles-above');
    if (!bubblesContainer) return;
    
    const colors = [
        { main: 'rgba(138, 43, 226, 0.9)', secondary: 'rgba(75, 0, 130, 0.7)', glow1: 'rgba(138, 43, 226, 0.8)', glow2: 'rgba(75, 0, 130, 0.6)' },
        { main: 'rgba(148, 0, 211, 0.9)', secondary: 'rgba(138, 43, 226, 0.7)', glow1: 'rgba(148, 0, 211, 0.8)', glow2: 'rgba(138, 43, 226, 0.6)' },
        { main: 'rgba(123, 104, 238, 0.9)', secondary: 'rgba(75, 0, 130, 0.7)', glow1: 'rgba(123, 104, 238, 0.8)', glow2: 'rgba(75, 0, 130, 0.6)' }
    ];
    
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Случайный размер от 2 до 5px
        const size = Math.random() * 3 + 2;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        
        // Узкая область появления - сразу из горлышка (от -15px до 15px от центра)
        const startX = Math.random() * 30 - 15;
        bubble.style.left = `calc(50% + ${startX}px)`;
        bubble.style.bottom = '0';
        
        // Случайный цвет
        const colorSet = colors[Math.floor(Math.random() * colors.length)];
        bubble.style.background = `radial-gradient(circle, ${colorSet.main}, ${colorSet.secondary})`;
        bubble.style.boxShadow = `
            0 0 ${size * 0.5}px ${colorSet.glow1},
            0 0 ${size * 1}px ${colorSet.glow2},
            inset 0 0 ${size * 0.2}px rgba(255, 255, 255, 0.3)
        `;
        
        // Случайная длительность анимации (медленнее для плавного подъёма)
        const duration = Math.random() * 2 + 3.5; // от 3.5 до 5.5 секунд
        bubble.style.animationDuration = duration + 's';
        bubble.style.animationDelay = Math.random() * 0.5 + 's';
        bubble.style.animationName = 'bubbleRise';
        bubble.style.animationTimingFunction = 'ease-in-out';
        bubble.style.animationIterationCount = 'infinite';
        
        bubblesContainer.appendChild(bubble);
        
        // Удаляем пузырёк после завершения анимации
        setTimeout(() => {
            if (bubble.parentNode) {
                bubble.remove();
            }
        }, (duration + 0.5) * 1000);
    }
    
    // Создаём пузырьки каждые 200-400мс
    setInterval(createBubble, Math.random() * 200 + 200);
    
    // Создаём начальные пузырьки
    for (let i = 0; i < 8; i++) {
        setTimeout(() => createBubble(), i * 250);
    }
}

