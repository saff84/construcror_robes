import React from 'react';
import { decorationImages } from '../utils/optionsData';
import { colorMatrices, textColorMatrices, belowDecorationColorMatrices } from '../utils/colorMatrices';
import './Preview.css';
import robeTerryNoHood from '../assets/robes/robe-terry-no-hood.png';
import robeTerryWithHood from '../assets/robes/robe-terry-with-hood.png';
import robeWaffleNoHood from '../assets/robes/robe-waffle-no-hood.png';
import robeWaffleWithHood from '../assets/robes/robe-waffle-with-hood.png';
import towel from '../assets/towels/white-towel.jpg';

// Сопоставление цветов для текста (чтобы соответствовать результату фильтра)
const textColorMapping = {
    '#122FAA': '#1E3A8A', // Королевский синий
    '#FF0000': '#FF0000', // Красный
    '#008000': '#228B22', // Лесной зелёный
    '#FFD700': '#DAA520', // Золотисто-жёлтый
    '#800080': '#C71585', // Средний розовый
    '#000000': '#000000', // Чёрный
    '#FFFFFF': '#FFFFFF'  // Белый
};

const Preview = ({ selectedOptions }) => {
    const getImageSource = () => {
        if (selectedOptions.product === 'robe') {
            if (selectedOptions.robeType === 'Махровый') {
                return selectedOptions.hood === 'С капюшоном'
                    ? robeTerryWithHood
                    : robeTerryNoHood;
            } else {
                return selectedOptions.hood === 'С капюшоном'
                    ? robeWaffleWithHood
                    : robeWaffleNoHood;
            }
        }
        return towel;
    };

    const getColorMatrix = (color) => {
        const matrix = colorMatrices[color] || colorMatrices['#FFFFFF'];
        return matrix;
    };

    const getTextColorMatrix = (color) => {
        const matrix = textColorMatrices[color] || textColorMatrices['#FFFFFF'];
        return matrix;
    };

    const getBelowDecorationColorMatrix = (color) => {
        const matrix = belowDecorationColorMatrices[color] || belowDecorationColorMatrices['#FFFFFF'];
        return matrix;
    };

    const colorMatrix = getColorMatrix(selectedOptions.color);
    const textColorMatrix = getTextColorMatrix(selectedOptions.textColor);
    const belowDecorationColorMatrix = getBelowDecorationColorMatrix(selectedOptions.textColor);
    const textColor = textColorMapping[selectedOptions.textColor] || selectedOptions.textColor;

    return (
        <div className="preview">
            <div className="preview-content">
                <div className={`preview-image-container ${selectedOptions.hood === 'С капюшоном' ? 'with-hood' : ''}`}>
                    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                        <filter id="colorFilter" colorInterpolationFilters="sRGB">
                            <feColorMatrix
                                type="matrix"
                                values={colorMatrix.desaturate}
                            />
                            <feColorMatrix
                                type="matrix"
                                values={colorMatrix.colorize}
                            />
                        </filter>
                        <filter id="textColorFilter" colorInterpolationFilters="sRGB">
                            <feColorMatrix
                                type="matrix"
                                values={textColorMatrix.desaturate}
                            />
                            <feColorMatrix
                                type="matrix"
                                values={textColorMatrix.colorize}
                            />
                        </filter>
                        <filter id="belowDecorationColorFilter" colorInterpolationFilters="sRGB">
                            <feColorMatrix
                                type="matrix"
                                values={belowDecorationColorMatrix.desaturate}
                            />
                            <feColorMatrix
                                type="matrix"
                                values={belowDecorationColorMatrix.colorize}
                            />
                        </filter>
                    </svg>
                    <img
                        src={getImageSource()}
                        alt="Preview"
                        className="preview-image"
                        style={{ filter: `url(#colorFilter)` }}
                        loading="lazy"
                        decoding="async"
                    />
                    <div className={`decoration-and-text-container ${selectedOptions.hood === 'С капюшоном' ? 'with-hood' : ''}`}>
                        <div className="above-decoration-wrapper">
                            {selectedOptions.aboveDecoration !== null && (
                                <img
                                    src={decorationImages.above[selectedOptions.aboveDecoration]}
                                    alt="Decoration above"
                                    className="decoration-image above"
                                />
                            )}
                        </div>
                        <div className="text-wrapper">
                            {selectedOptions.text && (
                                <div
                                    className="text-container"
                                    style={{
                                        fontFamily: selectedOptions.font,
                                        fontSize: `${selectedOptions.textSize}px`,
                                        color: textColor,
                                    }}
                                >
                                    {selectedOptions.text}
                                </div>
                            )}
                        </div>
                        <div className="below-decoration-wrapper">
                            {selectedOptions.belowDecoration !== null && (
                                <>
                                    <img
                                        src={decorationImages.below[selectedOptions.belowDecoration]}
                                        alt="Decoration below"
                                        className="decoration-image below"
                                        style={{ filter: `url(#belowDecorationColorFilter)` }}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;