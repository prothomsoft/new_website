import React from "react";
import Link from "next/link";
import LazyLoad from "react-lazy-load";

export default class HistoriaDesktop extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <article>
                    <header>
                        <h1 className="quote-title">KILKA HISTORII</h1>
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
                                    <img alt="wesele międzynarodowe kraków, polskie tradycje weselne" src={"/static/portfolio_dtp/sala_weselna_biala_wilczyca_kocmyrzow.jpg"} />
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
                                    WESELE MIęDZYNARODOWE KRAKÓW
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
                                    <img alt="fotograf na wesele KrakÃ³w" src={"/static/portfolio_dtp/restauracja_karolinka_bystra_podhalanska.jpg"} />
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
                                    <img alt="reportaż ślubny kraków" src={"/static/portfolio_dtp/fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice-1.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link href="/sala-weselna-karolinka-bystra-podhalanska">
                            <div className="porfolioCaption">
                                <h3 style={{ textAlign: "center" }}>
                                    FOTOGRAF NA WESELE KRAKÃ“W <br /> MARLENA i MACIEJ
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
                                    REPORTAŻ ŚLUBNY KRAKÓW <br />
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
                    <div className="spacer">&nbsp;</div>
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

                    .spacer {
                        height: 40px;
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
                `}</style>
            </div>
        );
    }
}
