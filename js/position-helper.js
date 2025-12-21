/**
 * Скрипт для быстрой настройки позиций элементов относительно фона
 * 
 * Использование:
 * 1. Открой консоль браузера (F12)
 * 2. Запусти: positionHelper.start()
 * 3. Кликай на элементы - их позиции будут выводиться в консоль
 * 4. Копируй значения в CSS
 */

const positionHelper = {
    bgWidth: 1920,  // Измени на реальную ширину твоего фона
    bgHeight: 1080, // Измени на реальную высоту твоего фона
    
    start() {
        console.log('🎯 Режим позиционирования включен');
        console.log('Кликай на элементы для получения их позиций');
        console.log('Размер фона:', this.bgWidth + '×' + this.bgHeight);
        
        document.addEventListener('click', this.handleClick.bind(this), true);
        document.body.style.cursor = 'crosshair';
    },
    
    stop() {
        document.removeEventListener('click', this.handleClick.bind(this), true);
        document.body.style.cursor = '';
        console.log('🎯 Режим позиционирования выключен');
    },
    
    handleClick(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const element = e.target.closest('[class*="tablet"], [class*="monitor"], [class*="alchemy"], [class*="card"], [class*="window"], [class*="mug"]');
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        const container = document.querySelector('.lab-container');
        const containerRect = container.getBoundingClientRect();
        
        // Позиция относительно контейнера в процентах
        const leftPercent = ((rect.left - containerRect.left) / containerRect.width) * 100;
        const topPercent = ((rect.top - containerRect.top) / containerRect.height) * 100;
        const rightPercent = ((containerRect.right - rect.right) / containerRect.width) * 100;
        const bottomPercent = ((containerRect.bottom - rect.bottom) / containerRect.height) * 100;
        
        // Позиция в пикселях относительно фона (если фон 1920×1080)
        const leftPx = (leftPercent / 100) * this.bgWidth;
        const topPx = (topPercent / 100) * this.bgHeight;
        
        console.log('\n📍 Элемент:', element.className);
        console.log('Позиция в процентах:');
        console.log(`  left: ${leftPercent.toFixed(2)}%`);
        console.log(`  top: ${topPercent.toFixed(2)}%`);
        console.log(`  right: ${rightPercent.toFixed(2)}%`);
        console.log(`  bottom: ${bottomPercent.toFixed(2)}%`);
        console.log('Позиция в пикселях (для фона ' + this.bgWidth + '×' + this.bgHeight + '):');
        console.log(`  left: ${leftPx.toFixed(0)}px`);
        console.log(`  top: ${topPx.toFixed(0)}px`);
        console.log('Размеры:');
        console.log(`  width: ${rect.width.toFixed(0)}px (${(rect.width/containerRect.width*100).toFixed(2)}%)`);
        console.log(`  height: ${rect.height.toFixed(0)}px (${(rect.height/containerRect.height*100).toFixed(2)}%)`);
        console.log('\n📋 CSS для копирования:');
        console.log(`left: ${leftPercent.toFixed(2)}%;`);
        console.log(`top: ${topPercent.toFixed(2)}%;`);
        console.log(`width: ${(rect.width/containerRect.width*100).toFixed(2)}%;`);
        console.log(`height: ${(rect.height/containerRect.height*100).toFixed(2)}%;`);
    },
    
    // Установить размер фона
    setBgSize(width, height) {
        this.bgWidth = width;
        this.bgHeight = height;
        console.log('Размер фона установлен:', width + '×' + height);
    }
};

// Экспорт для использования в консоли
window.positionHelper = positionHelper;

