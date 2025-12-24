// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initSnowfall();
    initInteractivity();
    initAlchemyStation();
    initGarland();
    initMagicParticles();
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
            
            // Блокируем кнопку синтеза
            synthesizeBtn.disabled = true;
            
            // Блокируем все ингредиенты
            const allIngredients = document.querySelectorAll('.ingredient');
            allIngredients.forEach(ing => {
                ing.classList.add('disabled');
            });
            
            // Ускоряем и закручиваем частицы
            const particlesContainer = document.getElementById('magicParticles');
            if (particlesContainer) {
                // Увеличиваем яркость всех искорок
                const sparkles = particlesContainer.querySelectorAll('.magic-sparkle');
                sparkles.forEach(sparkle => {
                    const currentSize = parseFloat(sparkle.style.width) || 3;
                    const colors = [
                        { bg: 'rgba(255, 100, 100, 1)', shadow: 'rgba(255, 100, 100, 1)' },
                        { bg: 'rgba(100, 200, 255, 1)', shadow: 'rgba(100, 200, 255, 1)' },
                        { bg: 'rgba(100, 255, 100, 1)', shadow: 'rgba(100, 255, 100, 1)' },
                        { bg: 'rgba(255, 255, 100, 1)', shadow: 'rgba(255, 255, 100, 1)' },
                        { bg: 'rgba(255, 150, 255, 1)', shadow: 'rgba(255, 150, 255, 1)' },
                        { bg: 'rgba(150, 255, 255, 1)', shadow: 'rgba(150, 255, 255, 1)' },
                        { bg: 'rgba(255, 200, 100, 1)', shadow: 'rgba(255, 200, 100, 1)' },
                        { bg: 'rgba(200, 100, 255, 1)', shadow: 'rgba(200, 100, 255, 1)' }
                    ];
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    sparkle.style.background = `radial-gradient(circle, ${color.bg}, ${color.bg.replace('1)', '0.5)')})`;
                    sparkle.style.boxShadow = `0 0 ${currentSize * 4}px ${color.shadow}, 0 0 ${currentSize * 8}px ${color.shadow}, 0 0 ${currentSize * 12}px ${color.shadow}`;
                });
                particlesContainer.classList.add('synthesizing');
            }
            
            // Через 2 секунды показываем результат
            setTimeout(() => {
                // Возвращаем нормальную анимацию частиц
                if (particlesContainer) {
                    particlesContainer.classList.remove('synthesizing');
                    // Восстанавливаем обычное свечение
                    const sparkles = particlesContainer.querySelectorAll('.magic-sparkle');
                    sparkles.forEach(sparkle => {
                        const currentSize = parseFloat(sparkle.style.width) || 3;
                        const colors = [
                            { bg: 'rgba(255, 100, 100, 1)', shadow: 'rgba(255, 100, 100, 0.9)' },
                            { bg: 'rgba(100, 200, 255, 1)', shadow: 'rgba(100, 200, 255, 0.9)' },
                            { bg: 'rgba(100, 255, 100, 1)', shadow: 'rgba(100, 255, 100, 0.9)' },
                            { bg: 'rgba(255, 255, 100, 1)', shadow: 'rgba(255, 255, 100, 0.9)' },
                            { bg: 'rgba(255, 150, 255, 1)', shadow: 'rgba(255, 150, 255, 0.9)' },
                            { bg: 'rgba(150, 255, 255, 1)', shadow: 'rgba(150, 255, 255, 0.9)' },
                            { bg: 'rgba(255, 200, 100, 1)', shadow: 'rgba(255, 200, 100, 0.9)' },
                            { bg: 'rgba(200, 100, 255, 1)', shadow: 'rgba(200, 100, 255, 0.9)' }
                        ];
                        const color = colors[Math.floor(Math.random() * colors.length)];
                        sparkle.style.background = `radial-gradient(circle, ${color.bg}, ${color.bg.replace('1)', '0.3)')})`;
                        sparkle.style.boxShadow = `0 0 ${currentSize * 2}px ${color.shadow}, 0 0 ${currentSize * 4}px ${color.shadow}`;
                    });
                }
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

// Инициализация магических частиц (разноцветные искорки)
function initMagicParticles() {
    const container = document.getElementById('magicParticles');
    if (!container) return;
    
    // Создаем разноцветные искорки
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            createSparkle(container);
        }, i * 100);
    }
    
    // Периодически добавляем новые искорки
    setInterval(() => {
        if (container.children.length < 50) {
            createSparkle(container);
        }
    }, 2000);
}

function createSparkle(container) {
    const sparkle = document.createElement('div');
    sparkle.className = 'magic-sparkle';
    
    // Случайный размер от 2px до 5px
    const size = Math.random() * 3 + 2;
    sparkle.style.width = size + 'px';
    sparkle.style.height = size + 'px';
    
    // Случайная начальная позиция
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    
    // Случайная задержка анимации
    sparkle.style.animationDelay = Math.random() * 4 + 's';
    sparkle.style.animationDuration = (Math.random() * 8 + 8) + 's';
    
    // Случайный цвет из палитры
    const colors = [
        { bg: 'rgba(255, 100, 100, 1)', shadow: 'rgba(255, 100, 100, 0.9)' }, // Красный
        { bg: 'rgba(100, 200, 255, 1)', shadow: 'rgba(100, 200, 255, 0.9)' }, // Синий
        { bg: 'rgba(100, 255, 100, 1)', shadow: 'rgba(100, 255, 100, 0.9)' }, // Зеленый
        { bg: 'rgba(255, 255, 100, 1)', shadow: 'rgba(255, 255, 100, 0.9)' }, // Желтый
        { bg: 'rgba(255, 150, 255, 1)', shadow: 'rgba(255, 150, 255, 0.9)' }, // Розовый
        { bg: 'rgba(150, 255, 255, 1)', shadow: 'rgba(150, 255, 255, 0.9)' }, // Голубой
        { bg: 'rgba(255, 200, 100, 1)', shadow: 'rgba(255, 200, 100, 0.9)' }, // Оранжевый
        { bg: 'rgba(200, 100, 255, 1)', shadow: 'rgba(200, 100, 255, 0.9)' }  // Фиолетовый
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    sparkle.style.background = `radial-gradient(circle, ${color.bg}, ${color.bg.replace('1)', '0.3)')})`;
    sparkle.style.boxShadow = `0 0 ${size * 2}px ${color.shadow}, 0 0 ${size * 4}px ${color.shadow}`;
    
    container.appendChild(sparkle);
    
    // Удаляем через 25 секунд
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.remove();
        }
    }, 25000);
}

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

