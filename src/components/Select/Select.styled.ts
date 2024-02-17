import styled from '@emotion/styled';
import { StylesConfig } from 'react-select';

import { Option } from 'types';

const SelectWrapper = styled.div`
    position: relative;
    margin-bottom: 2rem;

    & > span {
        position: absolute;
        top: -0.438rem;
        left: 0.5rem;
        z-index: 99;
        padding: 0 0.25rem;
        background-color: white;
        font-size: 0.875rem;
    }
`;

const SelectStyle: StylesConfig<Option, false> = {
    control: baseStyles => ({
        ...baseStyles,
        paddingLeft: '0.5rem',
        minHeight: '48px',
        cursor: 'pointer',
        borderRadius: '0.75rem',
    }),
    option: baseStyles => ({
        ...baseStyles,
        paddingLeft: '1rem',
        minHeight: '48px',
        cursor: 'pointer',
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    menuPortal: baseStyles => ({
        ...baseStyles,
        zIndex: 9999,
    }),
};

export { SelectWrapper, SelectStyle };
