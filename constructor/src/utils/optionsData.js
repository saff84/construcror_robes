// src/utils/optionsData.js

// Импорт изображений для верхних декораций (PNG остаются без изменений)
import above1 from '../assets/decorations/above1.png';
import above2 from '../assets/decorations/above2.png';
import above3 from '../assets/decorations/above3.png';
import above4 from '../assets/decorations/above4.png';
import above5 from '../assets/decorations/above5.png';
import above6 from '../assets/decorations/above6.png';
import above7 from '../assets/decorations/above7.png';
import above8 from '../assets/decorations/above8.png';
import above9 from '../assets/decorations/above9.png';
import above10 from '../assets/decorations/above10.png';

// Импорт изображений для нижних декораций (PNG остаются)
import below1 from '../assets/decorations/below1.png';
import below2 from '../assets/decorations/below2.png';
import below3 from '../assets/decorations/below3.png';
import below4 from '../assets/decorations/below4.png';
import below5 from '../assets/decorations/below5.png';
import below6 from '../assets/decorations/below6.png';
import below7 from '../assets/decorations/below7.png';
import below8 from '../assets/decorations/below8.png';
import below9 from '../assets/decorations/below9.png';
import below10 from '../assets/decorations/below10.png';

// Импорт изображений для халатов (базовые изображения с прозрачным фоном и белым цветом)
import robeTerryNoHood from '../assets/robes/robe-terry-no-hood.png';
import robeTerryWithHood from '../assets/robes/robe-terry-with-hood.png';
import robeWaffleNoHood from '../assets/robes/robe-waffle-no-hood.png';
import robeWaffleWithHood from '../assets/robes/robe-waffle-with-hood.png';

// Остальные данные
export const products = ['robe', 'towel']; // Халат/Полотенце
export const robeTypes = ['Махровый', 'Вафля']; // Типы халата
export const hoodOptions = ['Без капюшона', 'С капюшоном']; // Опции капюшона для халата
export const colors = ['#FFFFFF', '#000000', '#0000FF']; // Цвета ткани халата
export const sizes = [44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64]; // Размеры
export const fonts = [
    'Nautilus',
    'Amour 1',
    'Amour 2',
    'Georgia',
    'Boyarsky',
    'Renaissance',
    'Skazka',
    'Monotype Corsiva',
    'Kaisha',
    'Kitten',
    'Gotticus',
    'Mystical',
    'Heuristica',
    'Roboto',
    'Montserrat',
    'Lora',
    'Open Sans'
]; // Добавляем новые шрифты из скриншота и сохраняем существующие
export const textColors = ['#FFFFFF', '#000000', '#0000FF', '#FF0000', '#008000', '#ffd700', '#800080']; // Цвета текста остаются без изменений

// Пути к изображениям основного продукта (базовые изображения для халатов)
export const productImages = {
    robe: {
        'Махровый': {
            'Без капюшона': robeTerryNoHood,
            'С капюшоном': robeTerryWithHood,
        },
        'Вафля': {
            'Без капюшона': robeWaffleNoHood,
            'С капюшоном': robeWaffleWithHood,
        },
    },
    towel: {
        '#FFFFFF': require('../assets/towels/white-towel.jpg'),
        '#000000': require('../assets/towels/black-towel.jpg'),
        '#0000FF': require('../assets/towels/blue-towel.jpg'),
        '#FF0000': require('../assets/towels/red-towel.jpg'), // Оставляем для полотенца, если требуется
    },
};

// Данные для декораций (PNG остаются без изменений)
export const decorationImages = {
    above: [above1, above2, above3, above4, above5, above6, above7, above8, above9, above10],
    below: [below1, below2, below3, below4, below5, below6, below7, below8, below9, below10],
};