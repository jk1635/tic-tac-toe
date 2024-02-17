import styled from '@emotion/styled';

const BottomContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 50%;
    z-index: 500;
    width: 100%;
    min-width: var(--min-width);
    max-width: var(--max-width);
    padding: 1rem 1.5rem;
    background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 16px);
    transform: translateX(-50%);
`;

export { BottomContainer };
