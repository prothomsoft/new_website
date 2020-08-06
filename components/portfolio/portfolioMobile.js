import React, { Component } from "react";
import styled from "styled-components";
import LazyLoad from "react-lazy-load";
import Link from "next/link";

const CaptionSectionWrapper = styled.div`
    margin: 0 auto;
    width: 1160px;
    text-align: justify;
    position: absolute;
    left: 0;
    top: 10%;
    width: 100%;
    text-align: center;
    @media (max-width: 1160px) {
        width: 100%;
        position: absolute;
        left: 0;
        top: 10%;
        width: 100%;
        text-align: center;
    }
`;

export default class PortfolioMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: "0",
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
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
                        przy odrobinie szczęscia stała się moim sposobem na życie. Uwielbiam fotografować szczęśliwych ludzi, odwiedzać nowe miejsca i poszukiwać idealnego światła. Fotografię ślubną
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
                        <h2 className="quote-title">POLECANE REPORTAŻE</h2>
                    </header>
                    <Link href="/wesele-w-zakopanem-hotel-mercure-kasprowy-ich-troje">
                        <div className="porfolioImage">
                            <LazyLoad offsetVertical={300}>
                                <img alt="wesele w zakopanem, hotel mercury kasprowy, zespół ich troje na weselu" src={"/static/portfolio/hotel_mercure_kasprowy_zakopane.jpg"} />
                            </LazyLoad>
                        </div>
                    </Link>
                    <Link href="/wesele-w-zakopanem-hotel-mercure-kasprowy-ich-troje">
                        <div className="porfolioCaption">
                            <p style={{ textAlign: "center" }}>
                                WESELE W ZAKOPANEM HOTEL KASPROWY <br /> PATRYCJA i TOMASZ
                            </p>
                        </div>
                    </Link>
                    <Link href="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny">
                        <div className="porfolioImage">
                            <LazyLoad offsetVertical={300}>
                                <img alt="fotograf ślubny Kraków" src={"/static/portfolio/bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg"} />
                            </LazyLoad>
                        </div>
                    </Link>
                    <Link href="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny">
                        <div className="porfolioCaption">
                            <h3 style={{ textAlign: "center" }}>
                                FOTOGRAF ŚLUBNY KRAKÓW <br />
                                ANNA i PIOTR
                            </h3>
                        </div>
                    </Link>
                    <Link href="/sesja-slubna-jesienia-palac-goetzow-okocimskich">
                        <div className="porfolioImage">
                            <LazyLoad offsetVertical={300}>
                                <img alt="sesja zdjęciowa pałac goetzów brzesko" src={"/static/portfolio/plener_slubny_palac_goetzow_brzesko.jpg"} />
                            </LazyLoad>
                        </div>
                    </Link>
                    <Link href="/sesja-slubna-jesienia-palac-goetzow-okocimskich">
                        <div className="porfolioCaption">
                            <p style={{ textAlign: "center" }}>
                                SESJA ŚLUBNA JESIENIĄ - PAŁAC GOETZÓW
                                <br /> IZABELA i ARKADIUSZ
                            </p>
                        </div>
                    </Link>
                    <Link href="/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour">
                        <div className="porfolioImage">
                            <LazyLoad offsetVertical={300}>
                                <img alt="dekoracja sali w stylu rustykalnym" src={"/static/portfolio/dworek_fantazja_skomielna_biala_fotograf.jpg"} />
                            </LazyLoad>
                        </div>
                    </Link>
                    <Link href="/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour">
                        <div className="porfolioCaption">
                            <p style={{ textAlign: "center" }}>
                                ŚLUB W STYLU GLAMOUR
                                <br /> PATRYCJA i KRZYSZTOF
                            </p>
                        </div>
                    </Link>
                    <Link href="/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso">
                        <div className="porfolioImage">
                            <LazyLoad offsetVertical={300}>
                                <img alt="sesja zdjęciowa w górach" src={"/static/portfolio/plener_slubny_slowacja.jpg"} />
                            </LazyLoad>
                        </div>
                    </Link>
                    <Link href="/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso">
                        <div className="porfolioCaption">
                            <p style={{ textAlign: "center" }}>
                                SESJA ZDJĘCIOWA W GÓRACH
                                <br /> MAŁGORZATA i RAFAŁ
                            </p>
                        </div>
                    </Link>
                    <Link href="/wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne">
                        <div className="porfolioImage">
                            <LazyLoad offsetVertical={300}>
                                <img alt="wesele międzynarodowe kraków" src={"/static/portfolio/sala_weselna_biala_wilczyca_kocmyrzow.jpg"} />
                            </LazyLoad>
                        </div>
                    </Link>
                    <Link href="/wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne">
                        <div className="porfolioCaption">
                            <p style={{ textAlign: "center" }}>
                                WESELE MIĘDZYNARODOWE KRAKÓW
                                <br />
                                MONIKA i MARTIN
                            </p>
                        </div>
                    </Link>
                    <Link href="/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa">
                        <div className="porfolioImage">
                            <LazyLoad offsetVertical={300}>
                                <img alt="fotograf na wesele kraków" src={"/static/portfolio/ogrod_botaniczny.jpg"} />
                            </LazyLoad>
                        </div>
                    </Link>
                    <Link href="/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa">
                        <div className="porfolioCaption">
                            <h4 style={{ textAlign: "center" }}>
                                FOTOGRAF NA WESELE KRAKÓW <br />
                                DAJANA i SYLWESTER
                            </h4>
                        </div>
                    </Link>
                    <Link href="/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach">
                        <div className="porfolioImage">
                            <LazyLoad offsetVertical={300}>
                                <img alt="wesele w góralskim klimacie" src={"/static/portfolio/wesele_w_goralskim_klimacie_willa_orchidea_waksmund_portfolio.jpg"} />
                            </LazyLoad>
                        </div>
                    </Link>
                    <Link href="/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach">
                        <div className="porfolioCaption">
                            <p style={{ textAlign: "center" }}>
                                WESELE W GÓRALSKIM KLIMACIE
                                <br /> NATALIA i KAMIL
                            </p>
                        </div>
                    </Link>
                    <Link href="/plener-slubny-na-rynku-w-krakowie">
                        <div className="porfolioImage">
                            <LazyLoad offsetVertical={300}>
                                <img alt="Plener ślubny na Rynku w Krakowie" src={"/static/portfolio/plener_0002.jpg"} />
                            </LazyLoad>
                        </div>
                    </Link>
                    <Link href="/plener-slubny-na-rynku-w-krakowie">
                        <div className="porfolioCaption">
                            <p style={{ textAlign: "center" }}>
                                PLENER ŚLUBNY NA RYNKU W KRAKOWIE <br /> PATRYCJA i KRZYSZTOF
                            </p>
                        </div>
                    </Link>
                    <Link href="/park-mogilany-i-moc-buziakow-skapanych-w-promieniach-slonca">
                        <div className="porfolioImage">
                            <LazyLoad offsetVertical={300}>
                                <img alt="sesja zdjęciowa w Krakowie" src={"/static/portfolio/sesja_narzeczenska_klasztor_w_tyncu.jpg"} />
                            </LazyLoad>
                        </div>
                    </Link>
                    <Link href="/park-mogilany-i-moc-buziakow-skapanych-w-promieniach-slonca">
                        <div className="porfolioCaption">
                            <p style={{ textAlign: "center" }}>
                                SESJA ŚLUBNA KRAKÓW
                                <br />
                                TERESA i ANDRZEJ
                            </p>
                        </div>
                    </Link>
                </article>

                <style jsx>{`

            .porfolioImage {
                cursor: pointer;
            }

            .porfolioCaption {
                cursor: pointer;
                margin: 0 10px;
            }

            .porfolioCaption h3 {
                font-family:Oswald;
                font-style:normal;
                font-weight:normal;
                line-height:1.4;
                text-rendering: optimizelegibility;
                font-size: 16px;
                padding: 0 20px 0 20px;
                margin: 10px 0;
            }

            .porfolioCaption h4 {
                font-family:Oswald;
                font-style:normal;
                font-weight:normal;
                line-height:1.4;
                text-rendering: optimizelegibility;
                font-size: 16px;
                padding: 0 20px 0 20px;
                margin: 10px 0;
            }

            article {
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
                font-family: 'Oswald';
                width: 100%;
                color #BEBEBE;
                margin: 20px 0 0 0;
            }
            article h1 {
                font-size: 1.5em;
            }
            article h2 {
                font-size: 1.5em;
            }

            .spacer {
                height: 50px;
            }

            .spacer_small {
                height: 10px;
            }

            p {
                font-size: 16px;
                margin: 10px 0;
                text-align: justify;
            }

            .quote-title::before,
            .quote-title::after {
                content: '';
                display: block;
                border: 1px solid #33B59A;
            }

            .quote-title {
                display: flex;
                align-items: center;
                color: #FFFFFF;
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
