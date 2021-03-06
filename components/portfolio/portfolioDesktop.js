import React, { Component } from "react";
import styled from "styled-components";
import Image from 'next/image';
import Link from "next/link";

const CaptionSectionWrapper = styled.div`
    margin: 0 auto;
    width: 1160px;
    text-align: justify;
    position: absolute;
    left: 0;
    top: 30%;
    width: 100%;
    text-align: center;

    @media (max-width: 1160px) {
        width: 100%;
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        text-align: center;
    }
`;

export default class PortfolioDesktop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: "1",
        };
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
    }

    onMouseOver(arg) {
        this.setState({ hover: "2" });
    }

    onMouseOut(arg) {
        this.setState({ hover: "1" });
    }

    render() {
        return (
            <div>
                <article>
                    <header>
                        <h1 className="quote-title">FOTOGRAF ŚLUBNY KRAKÓW</h1>
                    </header>
                    <p>
                        Mam na imię Tomek i jestem fotografem ślubnym. Mieszkam w Krakowie z moją żoną Anią i trójką kochanych dzieciaków. Fotografia ślubna od zawsze była moją największą pasją, która
                        przy odrobinie szczęścia stała się moim sposobem na życie. Uwielbiam fotografować szczęśliwych ludzi, odwiedzać nowe miejsca i poszukiwać idealnego światła. Fotografię ślubną
                        traktuję jako niesamowitą przygodę, która pozwala mi spełniać marzenia. Jestem przekonany, że najlepsze zdjęcia są jeszcze przede mną.
                    </p>
                    <p>
                        Serdecznie zapraszam do odwiedzenia{" "}
                        <Link href="/blog">
                            <a>mojego bloga</a>
                        </Link>{" "}
                        i obejrzenia pełnych reportaży ślubnych, sesji zdjęciowych, zdjęć pełnych kolorów i autentycznych emocji. Moje prace wyróżnia reporterskie podejście do fotografii czyli jak
                        najmniej ustawianych, reżyserowanych zdjęć, jak najwięcej kadrów przedstawiających emocje i spontaniczne reakcje. Oglądając moje prace sami ocenicie czy moje zdjęcia się Wam
                        spodobają. Fotografuję w Krakowie i bliskich okolicach. Wspólnie znajdźmy chwilę, światło, kadr, zachowajmy je na zawsze.
                    </p>
                    <div className="spacer_small" />
                </article>
                <article>
                    <header>
                        <h2 className="quote-title">POLECANE REPORTAŻE I SESJE ŚLUBNE</h2>
                    </header>
                    <div style={{ display: "flex" }}>
                        <Link href="/wesele-w-zakopanem-hotel-mercure-kasprowy-ich-troje">
                            <div className="porfolioImage">
                                <Image alt="wesele w zakopanem, hotel mercury kasprowy, zespół ich troje na weselu" src={"/static/portfolio/hotel_mercure_kasprowy_zakopane.jpg"} width={336} height={225} placeholder="blur" blurDataURL="/static/portfolio/hotel_mercure_kasprowy_zakopane.jpg"/>
                            </div>
                        </Link>
                        <Link href="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny">
                            <div className="porfolioImage">
                                <Image alt="bazylika bożego ciała kraków fotoreportaż ślubny" src={"/static/portfolio/bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg"} width={336} height={225} placeholder="blur" blurDataURL="/static/portfolio/bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg"/>
                            </div>
                        </Link>
                        <Link href="/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso">
                            <div className="porfolioImage">
                                <Image alt="sesja zdjęciowa w górach" src={"/static/portfolio/plener_slubny_slowacja.jpg"} width={336} height={225} placeholder="blur" blurDataURL="/static/portfolio/plener_slubny_slowacja.jpg"/>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link href="/wesele-w-zakopanem-hotel-mercure-kasprowy-ich-troje">
                            <div className="porfolioCaption">
                                <h3>
                                    WESELE W ZAKOPANEM HOTEL KASPROWY
                                    <br />PATRYCJA i TOMASZ
                                </h3>
                            </div>
                        </Link>
                        <Link href="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny">
                            <div className="porfolioCaption">
                                <p>
                                    REPORTAŻ ŚLUBNY KRAKÓW
                                    <br />ANNA i PIOTR
                                </p>
                            </div>
                        </Link>
                        <Link href="/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso">
                            <div className="porfolioCaption">
                                <p>
                                    SESJA ZDJĘCIOWA W GÓRACH
                                    <br />MAŁGORZATA i RAFAŁ
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link href="/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach">
                            <div className="porfolioImage">
                                <Image alt="wesele w góralskim klimacie" src={"/static/portfolio/wesele_w_goralskim_klimacie_willa_orchidea_waksmund_portfolio.jpg"} width={336} height={225} placeholder="blur" blurDataURL="/static/portfolio/wesele_w_goralskim_klimacie_willa_orchidea_waksmund_portfolio.jpg"/>
                              </div>
                        </Link>
                        <Link href="/sesja-slubna-jesienia-palac-goetzow-okocimskich">
                            <div className="porfolioImage">
                                <Image alt="sesja zdjęciowa pałac goetzów brzesko" src={"/static/portfolio/plener_slubny_palac_goetzow_brzesko.jpg"} width={336} height={225} placeholder="blur" blurDataURL="/static/portfolio/plener_slubny_palac_goetzow_brzesko.jpg"/>
                              </div>
                        </Link>
                        <Link href="/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour">
                            <div className="porfolioImage">
                                <Image alt="ślub w stylu glamour" src={"/static/portfolio/dworek_fantazja_skomielna_biala_fotograf.jpg"} width={336} height={225} placeholder="blur" blurDataURL="/static/portfolio/dworek_fantazja_skomielna_biala_fotograf.jpg"/>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link href="/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach">
                            <div className="porfolioCaption">
                                <p>
                                    WESELE W GÓRALSKIM KLIMACIE
                                    <br />NATALIA i KAMIL
                                </p>
                            </div>
                        </Link>
                        <Link href="/sesja-slubna-jesienia-palac-goetzow-okocimskich">
                            <div className="porfolioCaption">
                                <p>
                                    SESJA ŚLUBNA JESIENIĄ - PAŁAC GOETZÓW
                                    <br />IZABELA i ARKADIUSZ
                                </p>
                            </div>
                        </Link>
                        <Link href="/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour">
                            <div className="porfolioCaption">
                                <p>
                                    ŚLUB W STYLU GLAMOUR
                                    <br />PATRYCJA i KRZYSZTOF
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link href="/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa">
                            <div className="porfolioImage">
                                <Image alt="fotograf na wesele kraków" src={"/static/portfolio/ogrod_botaniczny.jpg"} width={336} height={225} placeholder="blur" blurDataURL="/static/portfolio/ogrod_botaniczny.jpg"/>
                            </div>
                        </Link>
                        <Link href="/park-mogilany-i-moc-buziakow-skapanych-w-promieniach-slonca">
                            <div className="porfolioImage">
                                <Image alt="sesja ślubna kraków" src={"/static/portfolio/sesja_narzeczenska_klasztor_w_tyncu.jpg"} width={336} height={225} placeholder="blur" blurDataURL="/static/portfolio/sesja_narzeczenska_klasztor_w_tyncu.jpg"/>
                            </div>
                        </Link>
                        <Link href="/wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne">
                            <div className="porfolioImage">
                                <Image alt="wesele międzynarodowe, polskie tradycje weselne" src={"/static/portfolio/sala_weselna_biala_wilczyca_kocmyrzow.jpg"} width={336} height={225} placeholder="blur" blurDataURL="/static/portfolio/sala_weselna_biala_wilczyca_kocmyrzow.jpg"/>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link href="/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa">
                            <div className="porfolioCaption">
                                <h4>
                                    FOTOGRAF NA WESELE KRAKÓW 
                                    <br />DAJANA i SYLWESTER
                                </h4>
                            </div>
                        </Link>
                        <Link href="/park-mogilany-i-moc-buziakow-skapanych-w-promieniach-slonca">
                            <div className="porfolioCaption">
                                <p>
                                    SESJA ŚLUBNA KRAKÓW
                                    <br />TERESA i ANDRZEJ
                                </p>
                            </div>
                        </Link>
                        <Link href="/wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne">
                            <div className="porfolioCaption">
                                <p>
                                    WESELE MIĘDZYNARODOWE KRAKÓW
                                    <br />MONIKA i MARTIN
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="spacer" />
                </article>
                <style jsx>{`
                    .porfolioImage {
                        position: relative;
                        width: 420px;
                        height: 229px;
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
                        width: 420px;
                        margin: 0 20px;
                    }

                    .porfolioCaption p {
                        text-align: center;
                    }

                    .porfolioCaption h3 {
                        font-family: Oswald;
                        font-style: normal;
                        font-weight: normal;
                        line-height: 1.4;
                        text-rendering: optimizelegibility;
                        font-size: 16px;
                        padding: 0 20px 0 20px;
                        margin: 10px 0;
                        text-align: center;
                    }

                    .porfolioCaption h4 {
                        font-family: Oswald;
                        font-style: normal;
                        font-weight: normal;
                        line-height: 1.4;
                        text-rendering: optimizelegibility;
                        font-size: 16px;
                        padding: 0 20px 0 20px;
                        margin: 10px 0;
                        text-align: center;
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
                        font-size: 1.5em;
                    }

                    article h2 {
                        font-size: 1.5em;
                    }

                    .spacer {
                        height: 40px;
                    }

                    .spacer_small {
                        height: 10px;
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
