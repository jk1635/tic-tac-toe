import { ReactNode } from 'react';

import * as S from './Layout.styled';

const Layout = ({ children }: { children: ReactNode }) => {
    return <S.Container>{children}</S.Container>;
};

export default Layout;
