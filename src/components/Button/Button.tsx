import { forwardRef, useId, ReactNode, ButtonHTMLAttributes } from 'react';

import * as S from './Button.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ fullWidth = true, children, ...rest }, ref) => {
    const buttonId = useId();

    return (
        <S.ButtonWrapper fullWidth={fullWidth} ref={ref} id={buttonId} {...rest}>
            <S.Label>{children}</S.Label>
        </S.ButtonWrapper>
    );
});

export default Button;
