import React, { useEffect } from 'react';

class Header extends React.Component {
    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://embed.tawk.to/668d0087c3fb85929e3d2260/1i2bck4pr';
        script.async = true;
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');
        document.body.appendChild(script);
    }

    render() {
        return (
            <main >
                <div className="nav-root">
                    <div className="nav-section">
                        <div className="left-section">
                            <a href="/" className="title">
                                <img src="Gasyard Logo.51fe149c32742285e84df5fd5e103ec3.jpg" alt="Gasyard Logo" />
                            </a>
                            <a className="nav-transfer" href="/explorer">Explorer</a>
                            <a className="nav-history" href="/liquidity">Liquidity</a>
                        </div>
                        
                        <div className="right-section">
                            <w3m-button balance="show"></w3m-button>
                        </div>
                        
                        <div className="mobile-nav">
                            <button type="button" className="chakra-button">Connect Wallet
                                <svg width = "1" height = "1" viewBox="0 0 33 2" focusable="false" className="chakra-icon css-onkibi">
                                    {/* <path fill="currentColor" d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path> */}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Header;
