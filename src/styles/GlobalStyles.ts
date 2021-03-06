import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: var(--primary);
        
    }

    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;

        height: 100%;
        width: 100%;
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: -apple-system, system-ui, Roboto, Ubuntu, sans-serif;
    }

    html {
        background: var(--white)
    }

    :root {
        --primary: #000;
        --secondary: #15181c;
        --search: #202327;
        --white: #FFFFFF;
        --gray: #7a7a7a;
        --outline: #2f3336;
        --retweet: #00c06b;
        --like: #E8265E;
        --twitter: #33a1f2;
        --twitter-dark-hover: #011017;
        --twitter-light-hover: #2c8ed6;
        --twitter-button-hover: #8ECDF8;
    }


`;
