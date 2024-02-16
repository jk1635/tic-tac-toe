import { ReactNode, createContext, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';

const PortalContext = createContext<HTMLDivElement | null>(null);

interface PortalProps {
    children: ReactNode;
}

const PortalProvider = ({ children }: PortalProps) => {
    const [portalRef, setPortalRef] = useState<HTMLDivElement | null>(null);

    const handleRef = useCallback(
        (el: HTMLDivElement | null) => {
            if (portalRef !== null || el === null) return;
            setPortalRef(el);
        },
        [portalRef]
    );

    return (
        <PortalContext.Provider value={portalRef}>
            {children}
            <div id="portal-container" ref={handleRef} />
        </PortalContext.Provider>
    );
};

const PortalConsumer = ({ children }: PortalProps) => {
    return (
        <PortalContext.Consumer>
            {portalRef => {
                if (portalRef === null) {
                    return null;
                }

                return createPortal(children, portalRef);
            }}
        </PortalContext.Consumer>
    );
};

export const GlobalPortal = {
    Provider: PortalProvider,
    Consumer: PortalConsumer,
};
