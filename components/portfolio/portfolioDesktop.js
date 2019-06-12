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
            hover: "1"
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
                        Zaczynając studia grałem na gitarze elektrycznej i planowałem zostać inżynierem dźwięku. Rynek pracy zweryfikował te plany i w ten sposób zostałem zawodowym programistą. Kilka
                        lat temu pomyślałem, że aby być szczęśliwym człowiekiem nie tylko w domu ale i w pracy, muszę odpowiedzieć sobie na pytanie co lubię w życiu robić i zacząć to robić. W ten oto
                        prosty sposób narodziła się moja pasja do fotografowania. Mam na imię Tomek i jako fotograf ślubny chciałbym móc moimi zdjęciami opowiedzieć Waszą historię ślubną.
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
                        <Link href="/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img alt="wesele w góralskim klimacie" src={"/static/portfolio_dtp/wesele_w_goralskim_klimacie_willa_orchidea_waksmund_portfolio.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                        <Link href="/wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img alt="wesele międzynarodowe, polskie tradycje weselne" src={"/static/portfolio_dtp/sala_weselna_biala_wilczyca_kocmyrzow.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                        <Link href="/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img alt="sesja zdjęciowa w górach" src={"/static/portfolio_dtp/plener_slubny_slowacja.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link href="/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach">
                            <div className="porfolioCaption">
                                <p style={{ textAlign: "center" }}>
                                    WESELE W GÓRALSKIM KLIMACIE
                                    <br /> NATALIA i KAMIL
                                </p>
                            </div>
                        </Link>
                        <Link href="/wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne">
                            <div className="porfolioCaption">
                                <p style={{ textAlign: "center" }}>
                                    WESELE MIĘDZYNARODOWE KRAKÓW
                                    <br /> MONIKA i MARTIN
                                </p>
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
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link href="/sala-weselna-karolinka-bystra-podhalanska">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img alt="fotograf na wesele Kraków" src={"/static/portfolio_dtp/restauracja_karolinka_bystra_podhalanska.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                        <Link href="/sesja-slubna-jesienia-palac-goetzow-okocimskich">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img alt="sesja zdjęciowa pałac goetzów brzesko" src={"/static/portfolio_dtp/plener_slubny_palac_goetzow_brzesko.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                        <Link href="/fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img alt="fotograf na wesele kraków" src={"/static/portfolio_dtp/fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice-1.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link href="/sala-weselna-karolinka-bystra-podhalanska">
                            <div className="porfolioCaption">
                                <h3 style={{ textAlign: "center" }}>
                                    FOTOGRAF NA WESELE KRAKÓW <br /> MARLENA i MACIEJ
                                </h3>
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
                        <Link href="/fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice">
                            <div className="porfolioCaption">
                                <h4 style={{ textAlign: "center" }}>
                                    FOTOGRAF NA WESELE KRAKÓW <br />
                                    DAJANA i SYLWESTER
                                </h4>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link href="/fotograf-slubny-krzeszowice-cztery-pory-roku-alwernia">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img alt="dekoracja sali w stylu rustykalnym" src={"/static/portfolio_dtp/fotograf_slubny_krzeszowice_start.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                        <Link href="/hotel-margerita-magiczny-wystroj-sali-weselnej-w-krakowie">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img alt="sesja zdjęciowa w Krakowie" src={"/static/portfolio_dtp/hotel_margerita_krakow_magiczny_wystroj_sali_weselnej_w_krakowie.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>

                        <Link href="/sesja-slubna-krakow-rynek-glowny-wawel-kazimierz">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img alt="sesja ślubna kraków" src={"/static/portfolio_dtp/chan_kristina_sesja_slubna_krakow.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link href="/fotograf-slubny-krzeszowice-cztery-pory-roku-alwernia">
                            <div className="porfolioCaption">
                                <p style={{ textAlign: "center" }}>
                                    CZTERY PORY ROKU ALWERNIA
                                    <br /> OLA i GRZEGORZ
                                </p>
                            </div>
                        </Link>
                        <Link href="/hotel-margerita-magiczny-wystroj-sali-weselnej-w-krakowie">
                            <div className="porfolioCaption">
                                <p style={{ textAlign: "center" }}>
                                    MAGICZNY WYSTRÓJ SALI WESELNEJ
                                    <br />
                                    NATALIA i PIOTR
                                </p>
                            </div>
                        </Link>
                        <Link href="/sesja-slubna-krakow-rynek-glowny-wawel-kazimierz">
                            <div className="porfolioCaption">
                                <p style={{ textAlign: "center" }}>
                                    SESJA ŚLUBNA KRAKÓW
                                    <br /> CHAN i KATRINA
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

                    .porfolioCaption h3 {
                        font-family: Oswald;
                        font-style: normal;
                        font-weight: normal;
                        line-height: 1.4;
                        text-rendering: optimizelegibility;
                        font-size: 16px;
                        padding: 0 20px 0 20px;
                        margin: 10px 0;
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
