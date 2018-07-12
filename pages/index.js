import Homepage from "../components/homepage";

export default class Index extends React.Component {
    render() {
        let slides = [
            {
                imageUrl: "/static/lomnicki_staw_portfolio_start.jpg"
            },
            {
                imageUrl: "/static/fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice-start.jpg"
            },
            {
                imageUrl: "/static/sala_weselna_nedan_pcim_reportaz_slubny_start.jpg"
            },
            {
                imageUrl: "/static/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.jpg"
            },
            {
                imageUrl: "/static/hotel_margerita_krakow_magiczny_wystroj_sali_weselnej_w_krakowie-start.jpg"
            },
            {
                imageUrl: "/static/dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.jpg"
            },
            {
                imageUrl: "/static/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg"
            },
            {
                imageUrl: "/static/natalia_marcin_i_maja_reportaz_slubny_gosciniec_branicki_start.jpg"
            }
        ];

        return (
            <div>
                <Homepage
                    slides={slides}
                    headTitle={"Fotograf ślubny Kraków: Tomasz Prokop"}
                    headDescription={"Fotograf ślubny Kraków. Piękne zdjęcia, pełne emocji reportaże ślubne. Sprawdź moją ofertę i portfolio. Album w cenie pakietu. Serdecznie zapraszam."}
                    headKeywords={"fotograf ślubny Kraków, fotograf na wesele"}
                    headUrl={"http://99foto.pl"}
                    backgroundImage={"url(/static/wesele_na_polu_golfowym_w_paczoltowicach_start.jpg)"}
                    leadNames={"NATALIA i KAMIL"}
                    leadTitle={"FOTOGRAF ŚLUBNY KRAKÓW I WESELE PO GÓRALSKU"}
                    leadUrl={"/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach"}
                    leadImage={"url(/static/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach-start.jpg)"}
                />
            </div>
        );
    }
}
