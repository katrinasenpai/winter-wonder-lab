// Упрощенный эффект курсора с брызгами (Canvas 2D вместо WebGL для надежности)
(function() {
    'use strict';

    const canvas = document.getElementById('splashCursor');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Настройки
    const config = {
        SPLAT_RADIUS: 30,
        SPLAT_FORCE: 15,
        FADE_SPEED: 0.95,
        PARTICLE_COUNT: 20
    };

    let particles = [];
    let snowflakes = [];
    let mouseX = 0;
    let mouseY = 0;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let isMouseDown = false;

    // Инициализация canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Генерация цвета
    function generateColor() {
        const hue = Math.random() * 360;
        return `hsl(${hue}, 100%, 60%)`;
    }

    // Создание снежинки
    function createSnowflake(x, y) {
        const size = Math.random() * 5 + 3; // Увеличиваем размер: от 3 до 8
        const speed = Math.random() * 1 + 0.5;
        const angle = Math.random() * Math.PI * 2;
        const rotationSpeed = (Math.random() - 0.5) * 0.1;
        
        snowflakes.push({
            x: x || Math.random() * canvas.width,
            y: y || -10,
            vx: Math.cos(angle) * speed * 0.5,
            vy: speed,
            size: size,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: rotationSpeed,
            life: 1.0,
            decay: 0.005 + Math.random() * 0.005,
            opacity: 0.6 + Math.random() * 0.4
        });
    }

    // Создание частицы
    function createParticle(x, y, dx, dy, color, isClick = false) {
        const force = isClick ? 5 : 1;
        const count = isClick ? config.PARTICLE_COUNT * 2 : config.PARTICLE_COUNT;
        
        // Добавляем снежинки вместе с брызгами
        if (isClick) {
            for (let i = 0; i < 5; i++) {
                createSnowflake(x + (Math.random() - 0.5) * 50, y + (Math.random() - 0.5) * 50);
            }
        } else {
            if (Math.random() > 0.7) {
                createSnowflake(x, y);
            }
        }
        
        for (let i = 0; i < count; i++) {
            const angle = isClick ? Math.random() * Math.PI * 2 : Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.5;
            const speed = (Math.random() * config.SPLAT_FORCE + 5) * force;
            const vx = Math.cos(angle) * speed;
            const vy = Math.sin(angle) * speed;
            const size = Math.random() * 4 + 2;
            const life = 1.0;
            const decay = 0.02 + Math.random() * 0.03;

            particles.push({
                x: x,
                y: y,
                vx: vx,
                vy: vy,
                size: size,
                color: color,
                life: life,
                decay: decay
            });
        }
    }

    // Обновление снежинок
    function updateSnowflakes() {
        for (let i = snowflakes.length - 1; i >= 0; i--) {
            const s = snowflakes[i];
            
            // Обновление позиции
            s.x += s.vx;
            s.y += s.vy;
            s.rotation += s.rotationSpeed;
            
            // Легкое покачивание
            s.vx += (Math.random() - 0.5) * 0.1;
            s.vx *= 0.99;
            
            // Уменьшение жизни
            s.life -= s.decay;
            
            // Удаление мертвых снежинок
            if (s.life <= 0 || s.y > canvas.height + 10 || s.x < -10 || s.x > canvas.width + 10) {
                snowflakes.splice(i, 1);
            }
        }
    }

    // Обновление частиц
    function updateParticles() {
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            
            // Обновление позиции
            p.x += p.vx * 0.1;
            p.y += p.vy * 0.1;
            
            // Замедление
            p.vx *= 0.98;
            p.vy *= 0.98;
            
            // Гравитация
            p.vy += 0.2;
            
            // Уменьшение жизни
            p.life -= p.decay;
            
            // Удаление мертвых частиц
            if (p.life <= 0 || p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
                particles.splice(i, 1);
            }
        }
    }

    // Отрисовка снежинок
    function drawSnowflakes() {
        snowflakes.forEach(s => {
            ctx.save();
            ctx.globalAlpha = s.life * s.opacity;
            ctx.translate(s.x, s.y);
            ctx.rotate(s.rotation);
            // Синий цвет для снежинок
            ctx.fillStyle = '#87CEEB'; // Небесно-голубой
            ctx.strokeStyle = '#4682B4'; // Стальной синий
            ctx.shadowBlur = 8;
            ctx.shadowColor = 'rgba(135, 206, 235, 0.8)';
            ctx.lineWidth = 1.5;
            
            // Рисуем простую снежинку
            const size = s.size;
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i;
                ctx.moveTo(0, 0);
                ctx.lineTo(Math.cos(angle) * size, Math.sin(angle) * size);
                ctx.moveTo(0, 0);
                ctx.lineTo(Math.cos(angle + Math.PI / 6) * size * 0.5, Math.sin(angle + Math.PI / 6) * size * 0.5);
            }
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(0, 0, size * 0.3, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        });
    }

    // Отрисовка частиц
    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Сначала рисуем снежинки
        drawSnowflakes();
        
        // Затем частицы
        particles.forEach(p => {
            ctx.save();
            ctx.globalAlpha = p.life;
            ctx.fillStyle = p.color;
            ctx.shadowBlur = 10;
            ctx.shadowColor = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        });
    }

    // Создание брызг при движении
    function splat(x, y, dx, dy, color) {
        createParticle(x, y, dx, dy, color, false);
    }

    // Создание брызг при клике
    function clickSplat(x, y) {
        const color = generateColor();
        createParticle(x, y, 0, 0, color, true);
    }

    // Обработчики событий
    window.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        mouseX = e.clientX;
        mouseY = e.clientY;
        prevMouseX = mouseX;
        prevMouseY = mouseY;
        clickSplat(mouseX, mouseY);
    });

    window.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    window.addEventListener('mousemove', (e) => {
        prevMouseX = mouseX;
        prevMouseY = mouseY;
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (isMouseDown || Math.abs(mouseX - prevMouseX) > 2 || Math.abs(mouseY - prevMouseY) > 2) {
            const dx = mouseX - prevMouseX;
            const dy = mouseY - prevMouseY;
            const speed = Math.sqrt(dx * dx + dy * dy);
            
            if (speed > 1) {
                const color = generateColor();
                splat(mouseX, mouseY, dx, dy, color);
            }
        }
    });

    // Создание случайных снежинок
    function createRandomSnowflakes() {
        if (Math.random() > 0.95) {
            createSnowflake();
        }
    }

    // Анимация
    function animate() {
        updateSnowflakes();
        updateParticles();
        createRandomSnowflakes();
        drawParticles();
        requestAnimationFrame(animate);
    }

    // Инициализация: создаем несколько снежинок при загрузке
    for (let i = 0; i < 10; i++) {
        setTimeout(() => createSnowflake(), i * 200);
    }

    animate();
})();
