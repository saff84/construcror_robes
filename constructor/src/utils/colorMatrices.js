// src/utils/colorMatrices.js

// Функция для создания матрицы с предварительным преобразованием в оттенки серого
export const createColorMatrix = (r, g, b, alpha = 1) => {
    // Убрали console.log
    // Матрица для преобразования в оттенки серого (luminance)
    const desaturate = '0.333 0.333 0.333 0 0 0.333 0.333 0.333 0 0 0.333 0.333 0.333 0 0 0 0 0 1 0';
    // Матрица для умножения на целевой цвет
    const colorize = [
        r, 0, 0, 0, 0,
        0, g, 0, 0, 0,
        0, 0, b, 0, 0,
        0, 0, 0, alpha, 0
    ].join(' ');
    return { desaturate, colorize };
};

// Матрицы для основного цвета
export const colorMatrices = {
    '#23282B': createColorMatrix(35 / 255, 40 / 255, 43 / 255, 1.0), // Тёмно-серый
    '#122FAA': createColorMatrix(18 / 255, 47 / 255, 170 / 255, 1.0), // Глубокий синий
    '#000000': createColorMatrix(35 / 255, 40 / 255, 43 / 255, 1.0), // Чёрный (заменяем на #23282B)
    '#0000FF': createColorMatrix(18 / 255, 47 / 255, 170 / 255, 1.0), // Синий (заменяем на #122FAA)
    '#FFFFFF': {
        desaturate: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0',
        colorize: '1 0 0 0 0 0 1  U0 0 0 0 0 1 0 0 0 0 0 1 0'
    }
};

// Матрицы для текста
export const textColorMatrices = {
    '#122FAA': createColorMatrix(30 / 255, 70 / 255, 170 / 255, 1), // Королевский синий (#1E3A8A)
    '#FF0000': createColorMatrix(1, 0, 0, 1), // Красный
    '#008000': createColorMatrix(34 / 255, 139 / 255, 34 / 255, 1), // Лесной зелёный (#228B22)
    '#FFD700': createColorMatrix(218 / 255, 165 / 255, 32 / 255, 1), // Золотисто-жёлтый (#DAA520)
    '#800080': createColorMatrix(199 / 255, 21 / 255, 133 / 255, 1), // Средний розовый (#C71585)
    '#000000': createColorMatrix(0, 0, 0, 1), // Чёрный
    '#FFFFFF': {
        desaturate: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0',
        colorize: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'
    }
};

// Матрицы для нижнего декоратора
export const belowDecorationColorMatrices = {
    '#122FAA': createColorMatrix(18 / 255, 47 / 255, 170 / 255, 1), // Глубокий синий
    '#FF0000': createColorMatrix(1, 0, 0, 1), // Красный
    '#008000': createColorMatrix(34 / 255, 139 / 255, 34 / 255, 1), // Лесной зелёный
    '#800080': createColorMatrix(199 / 255, 21 / 255, 133 / 255, 1), // Средний розовый
    '#000000': createColorMatrix(0, 0, 0, 1), // Чёрный
    '#0000FF': createColorMatrix(0, 0, 1, 1), // Синий (заменяем на #122FAA)
    '#ffd700': createColorMatrix(1, 0.843, 0, 1), // Золотой
    '#FFFFFF': {
        desaturate: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0',
        colorize: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'
    }
};