import React from "react";

class Home extends React.Component{
    render() {
        return (
        <main>
            <div id="root">
                <div class="App">
                    
                    
                    <div class="BridgeRoot">
                        <div class="BridgeApp">
                            <div class="headline">
                                Bridge
                            </div>
                            
                            <div class="from-chain">
                                <div class="labels">
                                    <span class="tagline">From</span>
                                    <span class="balance">Balance:-
                                        <span></span>
                                    </span></div>
                                    <button class="chain1-btn">
                                        <img class="logo" src="base.210a1e1c13005b51c7d8f4e114666b41.jpg" />
                                        Base Sepolia
                                        <img class="downArrow" src="SVG-black.35862eaeb541efa9579a3f2031f616c5.jpg" />
                                    </button>
                                    
                                    <div class="token-container">
                                        <input type="text" placeholder="0.0" class="inputToken" value="" />
                                        
                                        <div class="tokenInUSD">
                                            $0.00
                                        </div>
                                    </div>
                                    
                                    <button class="max-btn">
                                        Max
                                    </button>

                                    <img src="reverse.4717e9ec0cf72c24b78d3a2afe049a63.jpg" class="reverse-chain" />
                            </div>
                            
                            <div class="to-chain">
                                <div class="labels">
                                    <span class="tagline">
                                        To
                                    </span>
                                </div>
                                
                                <button class="chain2-btn">
                                    <img class="logo" src="arbitrum.fe7cc783988779f71573ee5a37e02756.jpg" />
                                    Arbitrum Sepolia
                                    <img src="SVG-black.35862eaeb541efa9579a3f2031f616c5.jpg" class="downArrow" />
                                </button>
                                
                                <input type="text" placeholder="0.0" class="outputToken" readonly="" value="" />
                            </div>
                            
                            <div class="review">
                                <div>
                                    <div class="AddAddress">
                                        <img src="addAddress.344f2d598ba84ba2f6f0d8b9af265fc4.jpg" />
                                        Add Receipent Address
                                    </div>
                                </div>
                                <button class="review-btn">
                                    Connect Wallet
                                </button>
                            </div>
                        </div>
                        
                        <div class="TransactionPopupRoot">

                        </div>
                    </div>
                </div>
                <span id="__chakra_env" hidden="">

                </span>
            </div>
            

{/* <script type="text/javascript">
        var Tawk_API = Tawk_API || {},
            Tawk_LoadStart = new Date;
        ! function() {
            var e = document.createElement("script"),
                t = document.getElementsByTagName("script")[0];
            e.async = !0, e.src = "https://embed.tawk.to/668d0087c3fb85929e3d2260/1i2bck4pr", e.charset = "UTF-8", e.setAttribute("crossorigin", "*"), t.parentNode.insertBefore(e, t)
        }()
    </script><noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div> */}
        </main>
        );
    }
}
export default Home;