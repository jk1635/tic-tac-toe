import React from 'react';

interface SelectOptionProps {
    label: string;
    id: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
}

const Select: React.FC<SelectOptionProps> = ({ label, id, value, onChange, options }) => (
    <div>
        <label htmlFor={id}>{label}: </label>
        <select id={id} value={value} onChange={onChange}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);

export default Select;
