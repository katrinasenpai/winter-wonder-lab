# Примеры интеграции изображений в CSS

## Как заменить CSS-элементы на изображения

### 1. Фоновые изображения

```css
/* Стена */
.wall {
    background-image: url('../assets/images/background/wall-background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

/* Стол */
.desk {
    background-image: url('../assets/images/background/desk-surface.png');
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
}

/* Окно */
.window {
    background-image: url('../assets/images/background/window-frame.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    /* Убираем старые стили */
    background: transparent;
    border: none;
}
```

### 2. Интерактивные элементы

```css
/* Планшет с картой */
.map-tablet {
    background-image: url('../assets/images/interactive/map-tablet.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    /* Убираем старые стили */
    background-color: transparent;
    border: none;
}

/* Лупа */
.magnifying-glass {
    background-image: url('../assets/images/interactive/magnifying-glass.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 120px;
    height: 120px;
    /* Убираем старые стили */
    background-color: transparent;
    border: none;
}

/* Монитор */
.crt-monitor {
    background-image: url('../assets/images/interactive/crt-monitor.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.monitor-screen {
    background-image: url('../assets/images/interactive/monitor-screen.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
```

### 3. Алхимическая станция

```css
/* Колба */
.flask {
    background-image: url('../assets/images/alchemy/flask.png');
    background-size: contain;
    background-position: center bottom;
    background-repeat: no-repeat;
    width: 100px;
    height: 150px;
    /* Убираем старые стили */
    background-color: transparent;
    border: none;
}

/* Подставка */
.flask-stand {
    background-image: url('../assets/images/alchemy/flask-stand.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 80px;
    height: 20px;
    background-color: transparent;
}
```

### 4. Доска с анонсами

```css
/* Веревка/гирлянда */
.string {
    background-image: url('../assets/images/bulletin/garland-string.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 50px;
    background-color: transparent;
}

/* Фотокарточки */
.photo-card {
    background-image: url('../assets/images/bulletin/photo-card-template.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 200px;
    height: 250px;
    background-color: transparent;
    border: none;
}

/* Изображения внутри карточек */
.photo-card[data-event="0"] .photo-content {
    background-image: url('../assets/images/bulletin/events/event-concert.jpg');
    background-size: cover;
    background-position: center;
}

.photo-card[data-event="1"] .photo-content {
    background-image: url('../assets/images/bulletin/events/event-masterclass.jpg');
    background-size: cover;
    background-position: center;
}

.photo-card[data-event="2"] .photo-content {
    background-image: url('../assets/images/bulletin/events/event-literary.jpg');
    background-size: cover;
    background-position: center;
}

.photo-card[data-event="3"] .photo-content {
    background-image: url('../assets/images/bulletin/events/event-excursion.jpg');
    background-size: cover;
    background-position: center;
}
```

### 5. Декоративные элементы

```css
/* Лампа */
.lamp {
    background-image: url('../assets/images/decorative/lamp.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 150px;
    height: 200px;
}

/* Кружка */
.mug {
    background-image: url('../assets/images/decorative/mug.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 100px;
    height: 120px;
    background-color: transparent;
    border: none;
}

/* Мандарины */
.mandarins {
    background-image: url('../assets/images/decorative/mandarins.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 80px;
    height: 80px;
    background-color: transparent;
    border-radius: 0;
}

/* Печенье */
.cookies {
    background-image: url('../assets/images/decorative/cookies.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 60px;
    height: 60px;
    background-color: transparent;
}

/* Книги */
.books-stack {
    background-image: url('../assets/images/decorative/books-stack.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 100px;
    height: 120px;
    background-color: transparent;
}
```

### 6. Кнопки

```css
/* Кнопка синтеза */
.synthesize-btn {
    background-image: url('../assets/images/ui/synthesize-button.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 300px;
    height: 60px;
    background-color: transparent;
    border: none;
    color: var(--color-deep-blue);
    font-weight: bold;
    padding: 0;
    text-align: center;
}

.synthesize-btn:hover:not(:disabled) {
    filter: brightness(1.2);
    transform: scale(1.05);
}

.synthesize-btn:disabled {
    opacity: 0.5;
    filter: grayscale(50%);
}

/* Кнопки ингредиентов */
.ingredient {
    background-image: url('../assets/images/ui/ingredient-button.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 180px;
    height: 40px;
    background-color: transparent;
    border: none;
    padding: 8px 12px;
}

.ingredient:hover {
    background-image: url('../assets/images/ui/ingredient-button-hover.png');
}

.ingredient.selected {
    background-image: url('../assets/images/ui/ingredient-button-selected.png');
}
```

### 7. Retina-поддержка (для экранов высокого разрешения)

```css
/* Пример для планшета */
.map-tablet {
    background-image: url('../assets/images/interactive/map-tablet.png');
    background-size: contain;
}

/* Для Retina-экранов */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .map-tablet {
        background-image: url('../assets/images/interactive/map-tablet@2x.png');
    }
    
    .crt-monitor {
        background-image: url('../assets/images/interactive/crt-monitor@2x.png');
    }
    
    /* И так далее для всех важных элементов */
}
```

### 8. WebP с fallback

```css
/* Современные браузеры - WebP */
.map-tablet {
    background-image: url('../assets/images/interactive/map-tablet.webp');
}

/* Fallback для старых браузеров */
@supports not (background-image: url('*.webp')) {
    .map-tablet {
        background-image: url('../assets/images/interactive/map-tablet.png');
    }
}
```

### 9. Анимации спрайтами

```css
/* Пар над кружкой */
.mug-steam {
    background-image: url('../assets/images/animations/steam-sprite.png');
    background-size: auto 100%;
    width: 40px;
    height: 60px;
    animation: steamAnimation 2s steps(5) infinite;
}

@keyframes steamAnimation {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: -200px 0; /* 5 кадров × 40px */
    }
}

/* Пузырьки в колбе */
.flask-bubbles {
    background-image: url('../assets/images/animations/bubbles-sprite.png');
    background-size: auto 100%;
    animation: bubblesAnimation 1.5s steps(4) infinite;
}

@keyframes bubblesAnimation {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: -80px 0; /* 4 кадра × 20px */
    }
}
```

---

## Порядок действий при замене

1. **Создай папку `assets/images/`** с подпапками
2. **Добавь изображения** согласно структуре из IMAGES_SPEC.md
3. **Начни с фонов** (стена, стол) - они самые заметные
4. **Замени крупные элементы** (планшет, монитор, колба)
5. **Добавь декоративные элементы** (лампа, кружка, мандарины)
6. **Обнови кнопки и UI**
7. **Протестируй на разных разрешениях**

---

## Важные замечания

- **Сохраняй пропорции**: Если меняешь размеры в CSS, убедись что изображение не искажается
- **Проверяй z-index**: Изображения должны быть на правильных слоях
- **Тестируй hover-эффекты**: Они должны работать с новыми изображениями
- **Оптимизируй размеры**: Большие изображения замедляют загрузку

