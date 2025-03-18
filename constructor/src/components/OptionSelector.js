import React from 'react';
import '../styles/Constructor.css';

const OptionSelector = ({ title, options, selected, onSelect, type }) => {
    if (type === 'radio') {
        return (
            <div className="option-group">
                <h3>{title}</h3>
                {options.map((option) => (
                    <label key={option} className="radio-label">
                        <input
                            type="radio"
                            name={title.toLowerCase()}
                            value={option}
                            checked={selected === option}
                            onChange={() => onSelect(option)}
                            className="radio-input"
                        />
                        <span className="radio-text">{option}</span>
                    </label>
                ))}
            </div>
        );
    }

    if (type === 'dropdown') {
        return (
            <div className="option-group">
                <h3>{title}</h3>
                <select
                    value={selected}
                    onChange={(e) => onSelect(e.target.value)}
                    className="dropdown"
                >
                    <option value="">Выберите {title.toLowerCase()}</option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        );
    }

    if (type === 'checkbox') {
        return (
            <div className="option-group">
                <h3>{title}</h3>
                {options.map((option) => (
                    <label key={option} className="checkbox-label">
                        <input
                            type="checkbox"
                            checked={selected[option] || false}
                            onChange={(e) => onSelect(option, e.target.checked)}
                        />
                        <span className="checkbox-text">{option}</span>
                    </label>
                ))}
            </div>
        );
    }

    return null;
};

export default OptionSelector;