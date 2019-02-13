import React from "react";
import Link from "next/link";

export default class ClientDesktop extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <article>
                    <header>
                        <h1 className="quote-title">GALERIE ZDJĘĆ ZABEZPIECZONE HASŁEM</h1>
                    </header>
                    {this.props.clients.map((client, key) => {
                        let fullPathImage1 = `/static/portfolio_dtp/${client.image1}`;
                        let fullPathImage2 = `/static/portfolio_dtp/${client.image2}`;
                        let fullPathImage3 = `/static/portfolio_dtp/${client.image3}`;
                        let fullPathUrl1 = `http://sk.99foto.pl/logowanie/${client.url1}.html`;
                        let fullPathUrl2 = `http://sk.99foto.pl/logowanie/${client.url2}.html`;
                        let fullPathUrl3 = `http://sk.99foto.pl/logowanie/${client.url3}.html`;

                        return (
                            <div>
                                <div style={{ display: "flex" }}>
                                    <Link>
                                        <a href={fullPathUrl1} target="_blank" rel="nofollow">
                                            <div className="porfolioImage">
                                                <img src={fullPathImage1} />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link>
                                        <a href={fullPathUrl2} target="_blank" rel="nofollow">
                                            <div className="porfolioImage">
                                                <img src={fullPathImage2} />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link>
                                        <a href={fullPathUrl3} target="_blank" rel="nofollow">
                                            <div className="porfolioImage">
                                                <img src={fullPathImage3} />
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <Link>
                                        <a href={fullPathUrl1} target="_blank" rel="nofollow">
                                            <div className="porfolioCaption">
                                                <p className="textCenter" dangerouslySetInnerHTML={{ __html: client.title1 }} />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link>
                                        <a href={fullPathUrl2} target="_blank" rel="nofollow">
                                            <div className="porfolioCaption">
                                                <p className="textCenter" dangerouslySetInnerHTML={{ __html: client.title2 }} />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link>
                                        <a href={fullPathUrl3} target="_blank" rel="nofollow">
                                            <div className="porfolioCaption">
                                                <p className="textCenter" dangerouslySetInnerHTML={{ __html: client.title3 }} />
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                    <div className="spacer_small" />
                    <Link>
                        <a href="http://sk.99foto.pl" className="btn" target="_blank" rel="nofollow">
                            LOGOWANIE DO STREFY KLIENTA
                        </a>
                    </Link>
                    <div className="spacer" />
                </article>

                <style jsx>{`
                    .btn {
                        width: 100%;
                    }
                    .textCenter {
                        text-align: center;
                    }
                    .porfolioImage {
                        position: relative;
                        width: 340px;
                        margin: 0 20px;
                        border: 2px solid transparent;
                        transition: border 0.5s;
                        cursor: pointer;
                    }
                    .porfolioImage:hover {
                        border: 2px solid #fff;
                    }
                    .porfolioImage:focus {
                        outline: none;
                    }
                    .porfolioCaption {
                        cursor: pointer;
                        position: relative;
                        width: 340px;
                        margin: 0 20px;
                    }
                    article {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        text-align: center;
                        font-family: "Oswald";
                        width: 1140px;
                    }
                    article h1 {
                        color: #fff;
                    }
                    .spacer_small {
                        height: 30px;
                    }
                    .spacer {
                        height: 60px;
                    }
                    p {
                        font-size: 16px;
                        margin: 10px 0;
                        text-align: justify;
                        padding: 0 20px 0 20px;
                    }

                    .quote-title::before,
                    .quote-title::after {
                        content: "";
                        display: block;
                        border: 1px solid #33b59a;
                    }

                    .quote-title {
                        display: flex;
                        align-items: center;
                        color: #ffffff;
                        padding: 10px 0 10px 0;
                    }

                    .quote-title::before,
                    .quote-title::after {
                        flex-grow: 1;
                        margin: 0 10px;
                    }
                `}</style>
            </div>
        );
    }
}
