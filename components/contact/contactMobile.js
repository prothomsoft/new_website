import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Fetch from "isomorphic-unfetch";
import LazyLoad from "react-lazy-load";

export default class ContactMobile extends React.Component {
    constructor() {
        super();

        this.state = {
            sender: "",
            senderUsed: "form-input",
            email: "",
            emailUsed: "form-input",
            message: "",
            messageUsed: "form-input",
            messageSent: false
        };
    }

    handleChange = e => {
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    };

    handleBlur = e => {
        if (e.target.name === "sender") {
            e.target.value === "" ? this.setState({ senderUsed: "form-input" }) : this.setState({ senderUsed: "form-input used" });
        }
        if (e.target.name === "email") {
            e.target.value === "" ? this.setState({ emailUsed: "form-input" }) : this.setState({ emailUsed: "form-input used" });
        }
        if (e.target.name === "message") {
            e.target.value === "" ? this.setState({ messageUsed: "form-input" }) : this.setState({ messageUsed: "form-input used" });
        }
    };

    handleSubmit = e => {
        e.preventDefault();

        let formData = {
            formSender: this.state.sender,
            formEmail: this.state.email,
            formMessage: this.state.message
        };

        if (formData.formSender.length < 1 || formData.formEmail.length < 1 || formData.formMessage.length < 1) {
            return false;
        }

        var esc = encodeURIComponent;
        var query = Object.keys(formData)
            .map(k => esc(k) + "=" + esc(formData[k]))
            .join("&");

        var sUrlWithParams = "http://prothomsoft.com/test.php" + "?" + query;
        Fetch(sUrlWithParams, {
            method: "GET",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });

        this.setState({
            sender: "",
            senderUsed: "form-input",
            email: "",
            emailUsed: "form-input",
            message: "",
            messageUsed: "form-input",
            messageSent: true
        });
    };

    render() {
        let displayFormConfirmation = "";
        let displayForm = "";

        if (this.state.messageSent) {
            displayFormConfirmation = "block";
            displayForm = "none";
        } else {
            displayFormConfirmation = "none";
            displayForm = "block";
        }

        return (
            <article>
                <header>
                    <h2>KONTAKT</h2>
                </header>

                <div style={{ display: `${displayFormConfirmation}` }}>
                    <p>TWOJA WIADOMOŚĆ ZOSTAŁA WYSŁANA.</p>
                    <p>DZIĘKUJĘ ZA PYTANIE. ODPOWIEM BARDZO SZYBKO.</p>
                    <div className="spacer_confirmation" />
                </div>

                <div style={{ display: `${displayForm}` }}>
                    <p>ZAINTERESOWAŁA CIĘ MOJA OFERTA, CHCESZ POZNAĆ DOSTĘPNOŚĆ TERMINU i ZAPYTAĆ O CENĘ PAKIETU?</p>
                    <p>WYPEŁNIJ PROSZĘ PONIŻSZY FORMULARZ KONTAKTOWY i WYŚLIJ WIADOMOŚĆ</p>
                    <div className="spacer" />

                    <form className="react-form" onSubmit={this.handleSubmit}>
                        <div className="group">
                            <input
                                id="formSender"
                                className={this.state.senderUsed}
                                name="sender"
                                type="text"
                                required
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                value={this.state.sender}
                            />
                            <span className="highlight" />
                            <span className="bar" />
                            <label>Twoje imię i nazwisko</label>
                        </div>

                        <div className="group">
                            <input
                                id="formEmail"
                                className={this.state.emailUsed}
                                name="email"
                                type="text"
                                pattern="[a-zA-Z0-9_]+(?:\.[A-Za-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?!([a-zA-Z0-9]*\.[a-zA-Z0-9]*\.[a-zA-Z0-9]*\.))(?:[A-Za-z0-9](?:[a-zA-Z0-9-]*[A-Za-z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?"
                                required
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                value={this.state.email}
                            />
                            <span className="highlight" />
                            <span className="bar" />
                            <label>Twój adres e-mail</label>
                        </div>

                        <div className="group">
                            <textarea id="formMessage" className={this.state.messageUsed} name="message" required onChange={this.handleChange} onBlur={this.handleBlur} value={this.state.message} />
                            <span className="highlight" />
                            <span className="bar" />
                            <label>Twoja wiadomość</label>
                        </div>

                        <div className="submitPad">
                            <input type="submit" value="WYŚLIJ WIADOMOŚĆ" />
                        </div>
                    </form>
                </div>
                <div className="spacer_large" />
                <div>
                    <p>
                        TOMASZ PROKOP -{" "}
                        <Link href="https://99foto.pl">
                            <a>FOTOGRAF ŚLUBNY</a>
                        </Link>
                    </p>
                    <p>ul. Bociana 4A/35, 31-231 Kraków</p>
                    <p>NIP: 8133336677 &nbsp; REGON: 369770278</p>
                    <p>
                        TELEFON:{" "}
                        <Link href="tel:+48663275222">
                            <a>663 275 222</a>
                        </Link>
                    </p>
                    <p>
                        EMAIL:{" "}
                        <Link href="mailto:tomasz@99foto.pl">
                            <a>TOMASZ@99FOTO.PL</a>
                        </Link>
                    </p>
                    <p>
                        <Link href="/polityka-prywatnosci-rodo">
                            <a>POLITYKA PRYWATNOŚCI - RODO</a>
                        </Link>
                    </p>
                    <div className="spacer_small" />
                    <p>OBSERWUJ MNIE:</p>
                    <div className="spacer_very_small" />
                    <div className="icon_container">
                        <div className="square">
                            <Link href="https://www.instagram.com/99foto.pl">
                                <a target="_blank">
                                    <svg width="60px" height="43px" viewBox="0 0 16 24">
                                        <g fill="white">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm1 16.852c0 1.738-1.41 3.148-3.148 3.148h-9.662c-1.739 0-3.19-1.41-3.19-3.148v-6.852h4.498c-.362.609-.581 1.313-.581 2.073 0 2.249 1.824 4.073 4.073 4.073 2.249 0 4.073-1.824 4.073-4.073 0-.76-.219-1.464-.58-2.073h4.517v6.852zm-11.148-4.779c0-.939.416-1.783 1.072-2.358.23-.202.49-.371.771-.499.395-.18.833-.28 1.294-.28.461 0 .899.101 1.293.28.283.128.543.297.773.499.654.575 1.07 1.419 1.07 2.358 0 1.73-1.406 3.138-3.137 3.138-1.728-.001-3.136-1.408-3.136-3.138zm11.148-2.74h-5.003c-.774-.85-1.859-1.333-3.007-1.333-1.142 0-2.23.479-3.008 1.333h-4.982v-2.185c0-1.052.532-1.978 1.333-2.549v2.735h.667v-3.103c.212-.084.436-.142.667-.18v3.282h.667v-3.333h.666v3.333h.667v-3.333h8.185c1.738 0 3.148 1.41 3.148 3.148v2.185zm-10.319 2.74c0-1.281 1.038-2.319 2.319-2.319s2.318 1.038 2.318 2.319-1.037 2.319-2.318 2.319c-1.281 0-2.319-1.038-2.319-2.319zm8.985-6.25v1.687c0 .271-.221.49-.496.49h-1.674c-.273 0-.496-.219-.496-.49v-1.687c0-.271.223-.49.496-.49h1.674c.275 0 .496.219.496.49z" />
                                        </g>
                                    </svg>
                                </a>
                            </Link>
                        </div>
                        <div className="square">
                            <Link href="https://facebook.com/99foto">
                                <a target="_blank">
                                    <svg width="60px" height="43px" viewBox="0 0 16 24">
                                        <g fill="white">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                                        </g>
                                    </svg>
                                </a>
                            </Link>
                        </div>
                        <div className="square">
                            <Link href="https://plus.google.com/+99fotoPl_fotograf_na_wesele_krakow">
                                <a target="_blank">
                                    <svg width="60px" height="43px" viewBox="0 0 16 24">
                                        <g fill="white">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-10.333 16.667c-2.581 0-4.667-2.087-4.667-4.667s2.086-4.667 4.667-4.667c1.26 0 2.313.46 3.127 1.22l-1.267 1.22c-.347-.333-.954-.72-1.86-.72-1.593 0-2.893 1.32-2.893 2.947s1.3 2.947 2.893 2.947c1.847 0 2.54-1.327 2.647-2.013h-2.647v-1.6h4.406c.041.233.074.467.074.773-.001 2.666-1.787 4.56-4.48 4.56zm11.333-4h-2v2h-1.334v-2h-2v-1.333h2v-2h1.334v2h2v1.333z" />
                                        </g>
                                    </svg>
                                </a>
                            </Link>
                        </div>
                        <div className="square_space">
                            <a target="_blank" href="https://www.slubnaglowie.pl/katalog/firma/tomasz-prokop_6663">
                                <div className="float_right">
                                    <LazyLoad offsetVertical={300}>
                                        <img src={"/static/icons/slub_na_glowie.jpg"} />
                                    </LazyLoad>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="spacer" />

                <style jsx>{`
                .icon_container {                    
                    width: 100%;
                    text-align:center;
                } 
                .float_right{
                    float: right;
                }
                .square {                    
                    width: 60px;                    
                    display:inline-block;
                }
                .square_space {
                    width: 57px;                    
                    display:inline-block;                     
                }

                .submitPad {
                    text-align: left;
                    padding: 20p 0 30px 0;
                }

                article {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;                    
                    font-family: 'Oswald';                    
                    width: 100%;
                    height: 900px;
                    color #FFF;
                    padding:40px;                    
                }

                p {
                    font-size: 16px;
                    margin: 5px 0;
                }                
                                
                .quote-title::before,
                .quote-title::after {
                    content: '';
                    display: block;
                    border: 1px solid #666666;                    
                }

                .quote-title {
                    display: flex;
                    align-items: center;
                    color: #FFFFFF;
                }

                .quote-title::before,
                .quote-title::after {
                    flex-grow: 1;
                    margin: 0 10px;
                }
                
                .spacer {
                    height: 40px;
                }

                .spacer_confirmation {
                    height: 360px;
                }

                .spacer_small {
                    height: 20px;
                }

                .spacer_very_small {
                    height: 5px;
                }

                .spacer_large {
                    height: 50px;
                }

                .header h1 {
                    padding: 10px 0 0 0;
                    margin :0px;
                    text-align: center;
                    color: #FFF;                    
                }


                .group { 
                    position:relative; 
                    margin-bottom:35px; 
                }

                label 				{
                  color:#FFF; 
                  font-size:16px;
                  font-weight:normal;
                  position:absolute;
                  pointer-events:none;
                  left:5px;
                  top:10px;
                  transition:0.2s ease all;
                }

                input[type=submit] {
                    position:relative;
                    vertical-align: middle;
                    color: #FFF;
                    display: inline-block;
                    height: 60px;
                    line-height: 40px;
                    text-align: center;
                    transition: 0.5s;
                    padding: 0 20px;
                    cursor: pointer;
                    border: 2px solid #FFF;
                    -webkit-transition:0.5s;
					-moz-transition:0.5s;
					-o-transition:0.5s;
					-ms-transition:0.5s;
                    font-family: 'Oswald';
                    background-color: #000;
                    width:100%;
                    font-size: 16px;
                  }

                  input[type=submit]:hover {
                    border: 2px solid #FFF;
                    background-color: #FFF;
                    color: #000;
                  }

                input[type=text] {
                    font-size:13px;
                    padding:10px 10px 10px 5px;
                    display:block;
                    width:100%;
                    border:none;
                    border-bottom:1px solid #757575;
                    background-color: #000;
                    color: #FFF;
                }
                input[type=text]:focus 		{ outline:none; }

                input[type=text] {                    
                    box-shadow:none;
                }
                
                input[type=text]:-moz-placeholder {
                    box-shadow:none !important;
                }
                                
                input[type=text]:valid { border-bottom: 1px solid #30A990;}

                textarea 				{
                    font-size:13px;
                    padding:10px 10px 10px 5px;
                    display:block;
                    width:100%;
                    border:none;
                    border-bottom:1px solid #757575;
                    background-color: #000;
                    color: #FFF;
                    line-height:1.42857;
                    font-family:Arial,Helvetica,sans-serif;
                    height:80px;
                }
                textarea:focus 		{ outline:none; }
                                
                textarea:valid { border-bottom: 1px solid #30A990;}

                textarea {                    
                    box-shadow:none;
                }
                
                textarea:-moz-placeholder {
                    box-shadow:none !important;
                }

                .bar 	{ position:relative; display:block; width:100%; }
                .bar:before, .bar:after 	{
                  content:'';
                  height:2px;
                  width:0;
                  bottom:1px; 
                  position:absolute;
                  background:#0DC0F5; 
                  transition:0.2s ease all;
                }
                .bar:before {
                  left:50%;
                }
                .bar:after {
                  right:50%; 
                }
                
                input[type=text]:valid ~ .bar:before, input[type=text]:valid ~ .bar:after{
                  background: #30A990 !important;
                }

                textarea:valid ~ .bar:before, textarea:valid ~ .bar:after{
                    background: #30A990 !important;
                }
                
                .highlight {
                  position:absolute;
                  height:60%; 
                  width:100px; 
                  top:25%; 
                  left:0;
                  pointer-events:none;
                  transition:0.2s ease all;
                  opacity:0.5;
                }
                                
                input[type=text]:focus ~ label, input[type=text].used ~ label 		{
                  top:-20px;
                  font-size:14px;
                  color:#FFF;
                }
                
                
                input[type=text]:valid ~ label , input[type=text]:valid.used ~ label{
                  color: #30A990;
                }
                
                input[type=text]:focus ~ .bar:before {
                  width:50%;
                }
                input[type=text]:focus ~ .bar:after {
                  width:50%;
                }
                
                input[type=text]:focus ~ .highlight {
                  -webkit-animation:inputHighlighter 0.3s ease;
                }
                
                input[type=text]:valid ~ .hightlight {
                    -webkit-animation:validHighlighter 0.3s ease;
                }


                textarea:focus ~ label, textarea.used ~ label 		{
                    top:-20px;
                    font-size:14px;
                    color:#FFF;
                }
                
                
                textarea:valid ~ label , textarea:valid.used ~ label{
                color: #30A990;
                }
                
                textarea:focus ~ .bar:before {
                width:50%;
                }
                textarea:focus ~ .bar:after {
                width:50%;
                }
                
                textarea:focus ~ .highlight {
                -webkit-animation:inputHighlighter 0.3s ease;
                }
                
                textarea:valid ~ .hightlight {
                    -webkit-animation:validHighlighter 0.3s ease;
                }
                                
                @-webkit-keyframes inputHighlighter {
                    from { background:#5264AE; }
                  to 	{ width:0; background:transparent; }
                }
                
                @-webkit-keyframes validHighlighter {
                    from { background:#30A990 !important; }
                  to 	{ width:0; background:transparent; }
                }
                
            `}</style>
            </article>
        );
    }
}
