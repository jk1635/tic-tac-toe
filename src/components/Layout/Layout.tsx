import { ReactNode } from 'react';

import * as S from './Layout.styled';

const Layout = ({ children }: { children: ReactNode }) => {
    return <S.LayoutContainer>{children}</S.LayoutContainer>;
};

export default Layout;
