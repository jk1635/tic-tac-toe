import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { GlobalPortal } from 'GlobalPortal';

import { Button } from '../Button';

import * as S from './FixedBottom.styled';

type FixedBottomProps = ComponentPropsWithoutRef<typeof Button>;

const FixedBottom = forwardRef<HTMLButtonElement, FixedBottomProps>(({ children, ...rest }, ref) => {
    return (
        <GlobalPortal.Consumer>
            <S.BottomContainer>
                <Button {...rest} ref={ref}>
                    {children}
                </Button>
            </S.BottomContainer>
        </GlobalPortal.Consumer>
    );
});

export default FixedBottom;
