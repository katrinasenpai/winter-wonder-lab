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
    const ingredientsPanel = document.querySelector('.ingredients-panel');
    const synthesizeBtn = document.getElementById('synthesizeBtn');
    const selectedCount = document.getElementById('selectedCount');
    const flask = document.querySelector('.flask');
    const flaskLiquid = document.getElementById('flaskLiquid');
    const predictionModal = document.getElementById('predictionModal');
    
    let selectedIngredients = [];
    
    // Функция обработки клика на ингредиент
    function handleIngredientClick(ingredient) {
        const category = ingredient.dataset.category;
        const id = ingredient.dataset.id;
        
        if (!category || !id) {
            return;
        }
        
        // Если ингредиент уже выбран, снимаем выбор
        if (ingredient.classList.contains('selected')) {
            ingredient.classList.remove('selected');
            selectedIngredients = selectedIngredients.filter(item => 
                item.category !== category || item.id !== id
            );
        } else {
            // Снимаем выбор с других ингредиентов той же категории
            const sameCategoryIngredients = document.querySelectorAll(
                `.ingredient[data-category="${category}"]`
            );
            sameCategoryIngredients.forEach(ing => {
                if (ing.classList.contains('selected')) {
                    ing.classList.remove('selected');
                    selectedIngredients = selectedIngredients.filter(item => 
                        item.category !== category
                    );
                }
            });
            
            // Добавляем новый выбор
            ingredient.classList.add('selected');
            selectedIngredients.push({ category, id });
        }
        
        // Обновляем счетчик
        if (selectedCount) selectedCount.textContent = selectedIngredients.length;
        
        // Активируем кнопку синтеза только если выбрано ровно 3 ингредиента из разных категорий
        const uniqueCategories = new Set(selectedIngredients.map(item => item.category));
        if (selectedIngredients.length === 3 && uniqueCategories.size === 3) {
            if (synthesizeBtn) synthesizeBtn.disabled = false;
        } else {
            if (synthesizeBtn) synthesizeBtn.disabled = true;
        }
    }
    
    // Добавляем прямые обработчики для всех кнопок
    const allIngredients = document.querySelectorAll('.ingredient');
    allIngredients.forEach((ingredient, index) => {
        ingredient.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Ingredient clicked:', index, ingredient.textContent, ingredient.dataset);
            handleIngredientClick(ingredient);
        });
    });
    
    // Делегирование событий отключено, так как используем прямые обработчики
    
    // Синтез предсказания
    if (synthesizeBtn) {
        synthesizeBtn.addEventListener('click', () => {
            if (selectedIngredients.length !== 3) {
                return;
            }
            
            // Анимация бурления
            if (flask) flask.classList.add('active');
            synthesizeBtn.disabled = true;
            
            // Блокируем все ингредиенты
            const allIngredients = document.querySelectorAll('.ingredient');
            allIngredients.forEach(ing => {
                ing.classList.add('disabled');
            });
            
            // Через 2 секунды показываем результат
            setTimeout(() => {
                if (!predictionsData || !predictionsData.predictions) {
                    console.error('Predictions data not found');
                    return;
                }
                
                const randomPrediction = predictionsData.predictions[
                    Math.floor(Math.random() * predictionsData.predictions.length)
                ];
                
                // Заполняем модальное окно
                const titleEl = document.getElementById('predictionTitle');
                const quoteEl = document.getElementById('predictionQuote');
                const authorEl = document.getElementById('predictionAuthor');
                const challengeEl = document.getElementById('predictionChallenge');
                
                if (titleEl) titleEl.textContent = randomPrediction.title;
                if (quoteEl) quoteEl.textContent = randomPrediction.quote;
                if (authorEl) authorEl.textContent = randomPrediction.author;
                if (challengeEl) challengeEl.textContent = randomPrediction.challenge;
                
                // Показываем модальное окно
                if (predictionModal) {
                    predictionModal.classList.add('active');
                }
                
                // Сбрасываем состояние
                if (flask) flask.classList.remove('active');
                selectedIngredients = [];
                if (selectedCount) selectedCount.textContent = '0';
                allIngredients.forEach(ing => {
                    ing.classList.remove('selected', 'disabled');
                });
                synthesizeBtn.disabled = true;
            }, 2000);
        });
    }
    
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

