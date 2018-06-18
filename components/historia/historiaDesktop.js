import React from "react";
import Link from "next/link";
import styled from "styled-components";
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
                        <Link href="/fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img alt="fotograf ślubny kraków" src={"/static/portfolio_dtp/fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice-1.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                        <Link href="/sala-weselna-nedan-pcim-reportaz-slubny">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img alt="reportaż ślubny jordanów" src={"/static/portfolio_dtp/sala_weselna_nedan_pcim_reportaz_slubny_portfolio.jpg"} />
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
                        <Link href="/fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice">
                            <div className="porfolioCaption">
                                <h4 style={{ textAlign: "center" }}>
                                    FOTOGRAF ŚLUBNY KRAKÓW <br />DAJANA i SYLWESTER
                                </h4>
                            </div>
                        </Link>
                        <Link href="/sala-weselna-nedan-pcim-reportaz-slubny">
                            <div className="porfolioCaption">
                                <p style={{ textAlign: "center" }}>
                                    REPORTAŻ ŚLUBNY JORDANÓW<br /> ANNA i KRZYSZTOF
                                </p>
                            </div>
                        </Link>
                        <Link href="/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso">
                            <div className="porfolioCaption">
                                <p style={{ textAlign: "center" }}>
                                    SESJA ZDJĘCIOWA W GÓRACH<br /> MAŁGORZATA i RAFAŁ
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link href="/sesja-slubna-krakow-rynek-glowny-wawel-kazimierz">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img alt="sesja ślubna kraków" src={"/static/portfolio_dtp/chan_kristina_sesja_slubna_krakow.jpg"} />
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
                        <Link href="/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img alt="wesele w góralskim klimacie" src={"/static/portfolio_dtp/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_portfolio.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link href="/sesja-slubna-krakow-rynek-glowny-wawel-kazimierz">
                            <div className="porfolioCaption">
                                <p style={{ textAlign: "center" }}>
                                    SESJA ŚLUBNA KRAKÓW<br /> CHAN i KATRINA
                                </p>
                            </div>
                        </Link>
                        <Link href="/hotel-margerita-magiczny-wystroj-sali-weselnej-w-krakowie">
                            <div className="porfolioCaption">
                                <p style={{ textAlign: "center" }}>
                                    MAGICZNY WYSTRÓJ SALI WESELNEJ<br />NATALIA i PIOTR
                                </p>
                            </div>
                        </Link>
                        <Link href="/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice">
                            <div className="porfolioCaption">
                                <p style={{ textAlign: "center" }}>
                                    WESELE W GÓRALSKIM KLIMACIE<br /> IWONA i MARCIN
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link href="/hotel-qubus-krakow-sesja-zdjeciowa">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img src={"/static/portfolio_dtp/hotel_qubus_krakow_sesja_zdjeciowa_portfolio.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                        <Link href="/slub-cywilny-i-wesele-w-plenerze-witkowa-chata-krakow">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img src={"/static/portfolio_dtp/slub_cywilny_i_wesele_w_plenerze_witkowa_chata_krakow_portfolio.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                        <Link href="/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img src={"/static/portfolio_dtp/sesja_zdjeciowa_dwor_tomaszowice_krakow_portfolio.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link href="/hotel-qubus-krakow-sesja-zdjeciowa">
                            <div className="porfolioCaption">
                                <p style={{ textAlign: "center" }}>
                                    SESJA ZDJĘCIOWA LAWENDOWE POLE<br />EWELINA i KAMIL
                                </p>
                            </div>
                        </Link>
                        <Link href="/slub-cywilny-i-wesele-w-plenerze-witkowa-chata-krakow">
                            <div className="porfolioCaption">
                                <p style={{ textAlign: "center" }}>
                                    ŚLUB CYWILNY i WESELE W PLENERZE<br />KINGA i JULIEN
                                </p>
                            </div>
                        </Link>
                        <Link href="/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz">
                            <div className="porfolioCaption">
                                <p style={{ textAlign: "center" }}>
                                    SESJA ZDJĘCIOWA W KRAKOWIE<br />KAROLINA i BARTEK
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link href="/sesja-slubna-krakow-rynek-glowny-wawel-kazimierz">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img src={"/static/portfolio_dtp/chan_kristina_sesja_slubna_krakow.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                        <Link href="/sesja-slubna-w-plenerze-park-krajobrazowy-w-ojcowie-i-okolice">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img src={"/static/portfolio_dtp/sesja_slubna_w_plenerze_park_krajobrazowy_w_ojcowie_i_okolice_portfolio.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                        <Link href="/hotel-margerita-magiczny-wystroj-sali-weselnej-w-krakowie">
                            <div className="porfolioImage">
                                <LazyLoad height={224} offsetVertical={300}>
                                    <img src={"/static/portfolio_dtp/hotel_margerita_krakow_magiczny_wystroj_sali_weselnej_w_krakowie.jpg"} />
                                </LazyLoad>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Link href="/sesja-slubna-krakow-rynek-glowny-wawel-kazimierz">
                            <div className="porfolioCaption">
                                <p style={{ textAlign: "center" }}>
                                    SESJA ŚLUBNA KRAKÓW<br />CHAN i KATRINA
                                </p>
                            </div>
                        </Link>
                        <Link href="/sesja-slubna-w-plenerze-park-krajobrazowy-w-ojcowie-i-okolice">
                            <div className="porfolioCaption">
                                <p style={{ textAlign: "center" }}>
                                    PARK KRAJOBRAZOWY W OJCOWIE<br />ALEKSANDRA i PAWEŁ
                                </p>
                            </div>
                        </Link>
                        <Link href="/hotel-margerita-magiczny-wystroj-sali-weselnej-w-krakowie">
                            <div className="porfolioCaption">
                                <p style={{ textAlign: "center" }}>
                                    MAGICZNY WYSTRÓJ SALI WESELNEJ<br />NATALIA i PIOTR
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
                        margin: 0 20px 0 20px;
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
                        margin: 0 20px 0 20px;
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
                        margin: 0 20px;
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
