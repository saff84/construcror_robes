import React, { useState } from 'react';
import Preview from '../components/Preview';
import { products, colors, sizes, fonts, textColors, decorationImages, robeTypes, hoodOptions } from '../utils/optionsData';
import '../styles/Constructor.css';

const ConstructorPage = () => {
    const [selectedOptions, setSelectedOptions] = useState({
        product: 'robe',
        robeType: 'Махровый',
        hood: 'Без капюшона',
        color: '#FFFFFF',
        size: 44,
        text: '',
        textColor: '#000000',
        font: 'Nautilus',
        textSize: 24,
        aboveDecoration: null,
        belowDecoration: null,
        isAboveModalOpen: false,
        isBelowModalOpen: false,
    });

    const handleSelect = (category, option) => {
        setSelectedOptions({ ...selectedOptions, [category]: option });
    };

    const handleTextChange = (e) => {
        setSelectedOptions({ ...selectedOptions, text: e.target.value });
    };

    const handleTextSizeChange = (e) => {
        setSelectedOptions({ ...selectedOptions, textSize: parseInt(e.target.value, 10) });
    };

    const handleFontChange = (e) => {
        setSelectedOptions({ ...selectedOptions, font: e.target.value });
    };

    const handleDecorationSelect = (position, index) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            [position === 'above' ? 'aboveDecoration' : 'belowDecoration']: index,
        }));
        toggleModal(position);
    };

    const handleClearDecoration = (position) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            [position === 'above' ? 'aboveDecoration' : 'belowDecoration']: null,
        }));
        toggleModal(position);
    };

    const toggleModal = (position) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            [position === 'above' ? 'isAboveModalOpen' : 'isBelowModalOpen']: !prevOptions[position === 'above' ? 'isAboveModalOpen' : 'isBelowModalOpen'],
        }));
    };

    return (
        <div className="constructor-page single-screen">
            <div className="constructor-container" style={{ maxWidth: '700px' }}>
                <div className="content-row" style={{ maxWidth: '700px' }}>
                    <div className="preview-section">
                        <Preview selectedOptions={selectedOptions} />
                    </div>
                    <div className="main-controls">
                        <div className="control-group product-buttons">
                            <h2 className="control-title">Продукт</h2>
                            <div className="button-group">
                                {products.map((product) => (
                                    <button
                                        key={product}
                                        className={`control-button ${selectedOptions.product === product ? 'active' : ''}`}
                                        onClick={() => handleSelect('product', product)}
                                    >
                                        {product === 'robe' ? 'Халат' : 'Полотенце'}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {selectedOptions.product === 'robe' && (
                            <div className="control-group">
                                <h2 className="control-title">Тип халата</h2>
                                <div className="toggle-group">
                                    {robeTypes.map((type) => (
                                        <label key={type} className="toggle-label">
                                            <input
                                                type="radio"
                                                name="robeType"
                                                value={type}
                                                checked={selectedOptions.robeType === type}
                                                onChange={() => handleSelect('robeType', type)}
                                                className="toggle-input"
                                            />
                                            <span className="toggle-text">{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}
                        {selectedOptions.product === 'robe' && (
                            <div className="control-group">
                                <h2 className="control-title">Капюшон</h2>
                                <div className="toggle-group">
                                    {hoodOptions.map((hood) => (
                                        <label key={hood} className="toggle-label">
                                            <input
                                                type="radio"
                                                name="hood"
                                                value={hood}
                                                checked={selectedOptions.hood === hood}
                                                onChange={() => handleSelect('hood', hood)}
                                                className="toggle-input"
                                            />
                                            <span className="toggle-text">{hood}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className="control-group">
                            <h2 className="control-title">Цвет ткани</h2>
                            <div className="color-buttons">
                                {colors.map((color) => (
                                    <button
                                        key={color}
                                        className={`color-button ${selectedOptions.color === color ? 'active' : ''}`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => handleSelect('color', color)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="control-group">
                            <h2 className="control-title">Размер</h2>
                            <div className="button-group">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        className={`control-button ${selectedOptions.size === size ? 'active' : ''}`}
                                        onClick={() => handleSelect('size', size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="embroidery-section" style={{ maxWidth: '700px' }}>
                    <div className="embroidery-row">
                        <div className="embroidery-part color-part">
                            <h2 className="control-title">Цвет текста</h2>
                            <div className="color-buttons">
                                {textColors.map((color) => (
                                    <button
                                        key={color}
                                        className={`color-button ${selectedOptions.textColor === color ? 'active' : ''}`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => handleSelect('textColor', color)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="embroidery-part text-part">
                            <div className="control-group">
                                <h2 className="control-title">Текст вышивки</h2>
                                <input
                                    type="text"
                                    value={selectedOptions.text}
                                    onChange={handleTextChange}
                                    placeholder="Введите текст"
                                    className="text-input"
                                />
                            </div>
                            <div className="control-group">
                                <h2 className="control-title">Шрифт</h2>
                                <select
                                    value={selectedOptions.font}
                                    onChange={handleFontChange}
                                    className="font-select"
                                >
                                    {fonts.map((font) => (
                                        <option key={font} value={font} style={{ fontFamily: font }}>
                                            {font}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="embroidery-part settings-part">
                            <div className="control-group">
                                <h2 className="control-title">Размер текста</h2>
                                <input
                                    type="range"
                                    min="12"
                                    max="48"
                                    value={selectedOptions.textSize}
                                    onChange={handleTextSizeChange}
                                    className="range-slider"
                                />
                                <span className="range-value">{selectedOptions.textSize}px</span>
                            </div>
                            <div className="control-group">
                                <h2 className="control-title">Декорации</h2>
                                <div className="button-group">
                                    <button
                                        className={`control-button ${selectedOptions.aboveDecoration !== null ? 'active' : ''}`}
                                        onClick={() => toggleModal('above')}
                                    >
                                        Верхняя декорация
                                    </button>
                                    <button
                                        className={`control-button ${selectedOptions.belowDecoration !== null ? 'active' : ''}`}
                                        onClick={() => toggleModal('below')}
                                    >
                                        Нижняя декорация
                                    </button>
                                </div>
                                {selectedOptions.isAboveModalOpen && (
                                    <div className="modal">
                                        <div className="modal-content">
                                            <h3>Выберите верхнюю декорацию</h3>
                                            <div className="decoration-options">
                                                {decorationImages.above.map((image, index) => (
                                                    <button
                                                        key={index}
                                                        className={`decoration-button ${selectedOptions.aboveDecoration === index ? 'active' : ''}`}
                                                        onClick={() => handleDecorationSelect('above', index)}
                                                    >
                                                        <img
                                                            src={image}
                                                            alt={`Decoration above ${index + 1}`}
                                                            className="decoration-preview"
                                                        />
                                                    </button>
                                                ))}
                                                <button
                                                    className="modal-clear"
                                                    onClick={() => handleClearDecoration('above')}
                                                >
                                                    Очистить
                                                </button>
                                            </div>
                                            <button
                                                className="modal-close"
                                                onClick={() => toggleModal('above')}
                                            >
                                                Закрыть
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {selectedOptions.isBelowModalOpen && (
                                    <div className="modal">
                                        <div className="modal-content">
                                            <h3>Выберите нижнюю декорацию</h3>
                                            <div className="decoration-options">
                                                {decorationImages.below.map((image, index) => (
                                                    <button
                                                        key={index}
                                                        className={`decoration-button ${selectedOptions.belowDecoration === index ? 'active' : ''}`}
                                                        onClick={() => handleDecorationSelect('below', index)}
                                                    >
                                                        <img
                                                            src={image}
                                                            alt={`Decoration below ${index + 1}`}
                                                            className="decoration-preview"
                                                        />
                                                    </button>
                                                ))}
                                                <button
                                                    className="modal-clear"
                                                    onClick={() => handleClearDecoration('below')}
                                                >
                                                    Очистить
                                                </button>
                                            </div>
                                            <button
                                                className="modal-close"
                                                onClick={() => toggleModal('below')}
                                            >
                                                Закрыть
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConstructorPage;