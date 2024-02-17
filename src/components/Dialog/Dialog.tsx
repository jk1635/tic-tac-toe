import React from 'react';

import { Button } from 'components/Button';

import * as S from './Dialog.styled';

interface DialogProps {
    text: string;
    isOpen: boolean;
    isClose: () => void;
}

const Dialog = ({ isOpen, isClose, text }: DialogProps) => {
    if (!isOpen) return null;

    return (
        <S.BackgroundContainer>
            <S.DialogWrapper>
                <S.Text>{text}</S.Text>
                <S.ButtonWrapper>
                    <Button style={{ width: '10rem', height: '2.75rem' }} onClick={isClose}>
                        확인
                    </Button>
                </S.ButtonWrapper>
            </S.DialogWrapper>
        </S.BackgroundContainer>
    );
};

export default Dialog;
