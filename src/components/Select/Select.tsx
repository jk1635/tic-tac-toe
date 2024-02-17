import React from 'react';
import Select, { StylesConfig } from 'react-select';

import { Option } from 'types';

import * as S from './Select.styled';

interface SelectOptionProps {
    label: string;
    options: Option[];
    value: Option | null;
    onChange: (selectedOption: Option | null) => void;
    styles?: StylesConfig<Option, false>;
}

const SelectOption = ({ label, options, value, onChange }: SelectOptionProps) => {
    return (
        <S.SelectWrapper>
            <span>{label}</span>
            <Select
                options={options}
                value={value}
                onChange={onChange}
                styles={S.SelectStyle}
                menuPortalTarget={document.body}
            />
        </S.SelectWrapper>
    );
};

export default SelectOption;
