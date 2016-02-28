class Footer extends React.Component {

    render(){
        return (
            <footer className="page-footer" style={{background: "black", opacity:0.6}}>
                <div className="container">
                    <div className="row">
                        <div className="col s4">

                            <h5 className="white-text">Help WeTravel Grow</h5>
                            <p className="grey-text text-lighten-4">We hope you have enjoyed using WeTravel! If you feel WeTravel has made your life colorful and want to support us, send us over a donation! Any amount would help support and continue development on this project and is greatly appreciated.</p>
                            <form id="paypal-donate" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input type="hidden" name="cmd" value="_s-xclick">
                                    <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
">
                                        <button className="blue waves-effect waves-light btn" type="submit" name="action" alt="PayPal - The safer, easier way to pay online!">Donate Now
                                        </button>
                                    </input>
                                </input>
                            </form>
                        </div>

                        <div className="col s4">
                            <h5 className="white-text">Be A Business Partner</h5>
                            <p className="grey-text text-lighten-4">Join WeTravel and be a business partner to extend your business. We have a Gitter chat room set up where you can talk about business directly with us.</p>
                            <a className="blue waves-effect waves-light btn" target="_blank" href="https://gitter.im/sophyzhou/HungryAsianBusiness">Chat</a>
                        </div>

                        <div className="col s4">
                            <h5 className="white-text">Connect</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="https://www.facebook.com">Facebook</a></li>
                                <li><a className="grey-text text-lighten-3" href="https://www.twitter.com">Twitter</a></li>
                                <li><a className="grey-text text-lighten-3" href="https://www.google.com">G+</a></li>
                                <li><a className="grey-text text-lighten-3" href="https://www.youtube.com">Youtube</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container"><center>
                        © 2016-2017 WeTravel, All rights reserved
                    </center>
                    </div>
                </div>
            </footer>
        );
    }

}
MyComponents.Footer = Footer