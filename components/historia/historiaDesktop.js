import React from "react";
import Link from "next/link";
import Image from 'next/image';

export default class HistoriaDesktop extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <article>
                    <header>
                        <h1 className="quote-title">REPORTAŻE ŚLUBNE i SESJE PLENEROWE</h1>
                    </header>
                    <div style={{ display: "flex" }}>
                        <Link href="/wesele-w-zakopanem-hotel-mercure-kasprowy-ich-troje">
                            <div className="porfolioImage">
                                <Image alt="wesele w zakopanem, hotel mercury kasprowy, zespół ich troje na weselu" src={"/static/portfolio/hotel_mercure_kasprowy_zakopane.jpg"} width={336} height={225}/>
                            </div>
                        </Link>
                        <Link href="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny">
                            <div className="porfolioImage">
                                <Image alt="bazylika bożego ciała kraków fotoreportaż ślubny" src={"/static/portfolio/bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg"} width={336} height={225}/>
                            </div>
                        </Link>
                        <Link href="/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso">
                            <div className="porfolioImage">
                                <Image alt="sesja zdjęciowa w górach" src={"/static/portfolio/plener_slubny_slowacja.jpg"} width={336} height={225}/>
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
                                <Image alt="wesele w góralskim klimacie" src={"/static/portfolio/wesele_w_goralskim_klimacie_willa_orchidea_waksmund_portfolio.jpg"} width={336} height={225}/>
                              </div>
                        </Link>
                        <Link href="/sesja-slubna-jesienia-palac-goetzow-okocimskich">
                            <div className="porfolioImage">
                                <Image alt="sesja zdjęciowa pałac goetzów brzesko" src={"/static/portfolio/plener_slubny_palac_goetzow_brzesko.jpg"} width={336} height={225}/>
                              </div>
                        </Link>
                        <Link href="/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour">
                            <div className="porfolioImage">
                                <Image alt="ślub w stylu glamour" src={"/static/portfolio/dworek_fantazja_skomielna_biala_fotograf.jpg"} width={336} height={225}/>
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
                                <Image alt="fotograf na wesele kraków" src={"/static/portfolio/ogrod_botaniczny.jpg"} width={336} height={225}/>
                            </div>
                        </Link>
                        <Link href="/park-mogilany-i-moc-buziakow-skapanych-w-promieniach-slonca">
                            <div className="porfolioImage">
                                <Image alt="sesja ślubna kraków" src={"/static/portfolio/sesja_narzeczenska_klasztor_w_tyncu.jpg"} width={336} height={225}/>
                            </div>
                        </Link>
                        <Link href="/wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne">
                            <div className="porfolioImage">
                                <Image alt="wesele międzynarodowe, polskie tradycje weselne" src={"/static/portfolio/sala_weselna_biala_wilczyca_kocmyrzow.jpg"} width={336} height={225}/>
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
                    <div>
                        <header>
                            <h2 className="quote-title">ZNAJDŹMY CHWILĘ, ŚWIATŁO, KADR</h2>
                        </header>
                        <p>
                            Moja przygoda z fotografią ślubną rozpoczęła się blisko dziesięć lat temu. Mam nadzieję, że kilka poniższych akapitów pozwoli Wam zapoznać się z rzeczami, które uważam za
                            niezwykle ważne w fotografii ślubnej, które zainspirowały mnie do spędzenia ogromnej ilości czasu w moim życiu na fotografowania ślubów w mój własny, niepowtarzalny sposób.
                            Zdaję sobie sprawę, że kilka słów to często za mało, żeby napisać o ludziach, miłości, relacjach, fajnych miejscach i ciekawych rzeczach, które niesie ze sobą przygoda
                            zwana fotografią ślubną. Fotografując przez wiele lat zauważyłem, że każdy ślub jest inny czasem chaotyczny i pełen akcji, czasem zaplanowany co do sekundy i mega spokojny,
                            ale zawsze pełny emocji i niepowtarzalny. Pamiętajcie, że z przyjemnością rozpocznę z Wami przygodę fotografując Wasz dzień. Gwarantuję, że otrzymacie piękne zdjęcia, które
                            będą przywoływać Wasze wspomnienia przez wiele lat.
                        </p>
                        <p className="quote-title-noline">Kolor i światło</p>
                        <p>
                            Sposób, w jaki oddaję światło i kolor, jest rzeczą nad którą od początku bardzo ciężko pracuję. Zawsze było dla mnie bardzo ważne, aby rozwinąć moją wizję i styl w coś, co
                            naprawdę jest moje, co oznacza, że ​​zdjęcia ślubne wykonane przez innych fotografów nie będą wyglądać tak jak te zrobione przeze mnie na Waszym ślubie.
                        </p>
                        <p className="quote-title-noline">Magiczne wydarzenia zamknięte w kapsule czasu</p>
                        <p>
                            Czy zgodzicie się ze mną, że zdjęcia są magiczne. W swojej naturze w sposób szczególny służą przyszłym pokoleniom chroniąc i zachowując Wasz ślub i wspomnienia na zawsze.
                            Za każdym razem, gdy spojrzycie do albumu ślubnego, przypomnicie sobie obecne w dniu ślubu uczucia i emocje. Fotografie z tego najważniejszego dnia w życiu pomogą Wam
                            zachować pamięć o ślubie i przekazać ją przyszłym pokoleniom. Pamiętajcie, że album ślubny to niewątpliwie taka mała kapsuła czasu, która pozwala Wam wrócić do dnia ślubu
                            wtedy, kiedy tylko macie na to ochotę.
                        </p>
                        <p className="quote-title-noline">Emocje i energia</p>
                        <p>
                            Chcę dać Wam zdjęcia, które pokochacie na zawsze. Zdjęcia, które są znaczące, prawdziwe, pełne emocji i życia. Cieszcie się tym dniem z całego serca, dużo się uśmiechajcie,
                            a kwestie organizacyjne w dniu ślubu zostawcie w gestii zaufanych osób trzecich. Takie podejście znacznie ułatwi moją pracę i zagwarantuję Wam wspaniałe zdjęcia.
                        </p>
                        <p className="quote-title-noline">Niezapomniane chwile i nieoczekiwane momenty</p>
                        <p>
                            Wasz dzień ślubu jest jednym z najważniejszych dni w Waszynm życiu. Zapraszacie całą rodzinę, wszystkich ulubionych znajomych, a wśród nich prawdziwych przyjaciół w jednym
                            szczególnym miejscu, chcąc spędzić z nimi niesamowite chwile. Wszyscy wiemy o tym, że będą uściski, pocałunki, gorące życzenia, czasem wyciskające łzy z oczu przemówienia.
                            Najlepsze momenty dzieją się nieoczekiwanie i bardzo często są nie do opisania. Moja praca jako fotografa ślubnego, polega na wyszukiwaniu tych ulotnych chwil i uchwyceniu
                            ich na pięknych fotografiach.
                        </p>

                        <p className="quote-title-noline">Sztuka i kreatywność</p>
                        <p>
                            Dobre zdjęcie musi zawierać w sobie ogromną dawkę emocji i dlatego reportażowe podejście do fotografii ślubnej jest dla mnie szczególnie ważne. W trakcie reportażu nie
                            spędzam czasu na pozowaniu ludzi, wykonywaniu setek zdjęć grupowych lub powtarzaniu momentów, które już się wydarzyły. Podczas sesji plenerowych, które prawie zawsze
                            odbywają się w wybranym dniu po ślubie staram się zdobyć Wasze zaufanie, pomóc Wam odnaleźć pewność siebie przed obiektywem aparatu i przelać Wasze uczucia na fotografie w
                            sposób kreatywny i niebanalny.
                        </p>

                        <p className="quote-title-noline">Miłość i szczęście</p>
                        <p>
                            Jestem pewny, że chcecie mieć piękny wizualny zapis Waszego ślubu. Ślub zorganizowany przez Was jest szczególny, ponieważ został przecież zorganizowany według Waszego
                            pomysłu, a napędu nadchodzącym wydarzeniom nadadzą najbliższe Wam osoby. Tego dnia jako fotograf ślubny chcę być tam dla Was. Chcę, aby miłość i szczęście między Wami
                            zdominowało Wasze zdjęcia ślubne. Uchwycenie rzeczywistości, miłości i Waszego szczęścia w tym niezwykłym dniu jest dla mnie najważniejsze.
                        </p>
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
                        text-align:center;
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
                    article header h2 {
                        font-size: 2.5em;
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

                    .quote-title-noline::before,
                    .quote-title-noline::after {
                        content: "";
                        display: block;                        
                    }

                    .quote-title-noline {
                        display: flex;
                        align-items: center;
                        text-transform: uppercase;
                        color: #ffffff;
                        padding: 10px 0 10px 0;
                    }

                    .quote-title-noline::before,
                    .quote-title-noline::after {
                        flex-grow: 1;
                        margin: 0 10px;
                    }
                `}</style>
            </div>
        );
    }
}
