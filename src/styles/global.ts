import { css } from '@emotion/react';

const global = css`
    * {
        box-sizing: border-box;
    }

    html {
        -webkit-text-size-adjust: 100%;
    }

    body {
        font-family: Arial, sans-serif;
    }

    html,
    body {
        height: 100%;
    }
`;

export default global;
