import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/kinga_i_sebastian_reportaz_slubny_wadowice_chocznia_i_radocza_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_slubny_wadowice.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_na_wesele_wadowice_0001.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_na_wesele_wadowice_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_na_wesele_wadowice_0005.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_na_wesele_wadowice_0012.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_na_wesele_wadowice_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_na_wesele_wadowice_0006.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_na_wesele_wadowice_0003.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_na_wesele_wadowice_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_na_wesele_wadowice_0008.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/09/fotograf_na_wesele_wadowice_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0013.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0014.jpg", height: 852 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0015.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0016.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0017.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0018.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0019.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0020.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0022.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0028.jpg", height: 805 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0031.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0032.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0033.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0035.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0034.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0036.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0037.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0039.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0038.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0040.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0041.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0042.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0043.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0044.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0045.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0046.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0048.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0049.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0068.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0050.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0052.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0053.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0054.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0056.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0055.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0057.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0058.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0059.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0061.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0060.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0062.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0063.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0064.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0065.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0066.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0067.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0069.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0070.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0071.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0073.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0072.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0074.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0075.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0076.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0077.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0078.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0079.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0080.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0081.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0082.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0083.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0084.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0085.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0086.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0087.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0088.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0089.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0090.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0091.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0092.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0093.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0094.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0095.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0096.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0097.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0098.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0099.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0100.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0101.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0102.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0103.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0104.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0105.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0106.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0107.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0108.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0109.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0110.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0111.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0112.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0113.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0114.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0115.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0116.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0117.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0118.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0119.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0120.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0121.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0123.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0122.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0124.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0126.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0125.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0127.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0128.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0129.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0130.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0131.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0132.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0133.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0134.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0135.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0136.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0137.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0139.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0138.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0140.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0143.jpg", height: 382 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0144.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0141.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0142.jpg", height: 762 },
            { imageSrc: "https://99foto.pl/static/blog/2016/10/fotograf_na_wesele_wadowice_0145.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Reportaż ślubny Wadowice, zdjęcia ślubne OSP Chocznia"}
                    headDescription={"Przepiękne rodzinne wejście do kościoła podczas którego Antoś i Wiktor stanęli na wysokości zadania, pozytywna atmosfera i zabawa do białego rana. Zapraszam."}
                    headKeywords={"reportaż ślubny wadowice,zdjęcia ślubne chocznia"}
                    headUrl={"https://99foto.pl/kinga-i-sebastian-reportaz-slubny-wadowice-chocznia-i-radocza/"}
                    entryContentP1={
                        "Fotografem ślubnym Kingi i Sebastiana zostałem z polecenia Magdy i Lucjana, których pozdrawiam. Ich ślub i sesję plenerową możecie odnaleźć i pooglądać na moim blogu. Był to mój drugi raz w Hollywood Studio Leny Czechowicz i drugi raz w Wadowicach mieście Jana Pawła II. Przygotowania zaczęliśmy o godzinie 13. Lena i Kinga znają się od bardzo dawna i mieszkają po sąsiedzku, więc makijaż i włosy dotarły do poziomu Top Model z ramówki stacji TVN. Chwilkę później pojechaliśmy do Sebastiana, gdzie czekało nas sporo ubierania. Antoś i Wiktor dzieciaczki młodych założyli swoje marynarki w ekspresowym tempie, Sebastian poprawiał muchę i spinki na dole. Kinga w towarzystwie Moniki w pokoju obok dzielnie dopinały suknię na ostatni guzik. Panowała pozytywna atmosfera bez najmniejszych oznak stresu. Punktem kulminacyjnym było wzruszające błogosławieństwo udzielone przez rodziców."
                    }
                    entryContentP2={
                        'Ceremonia odbyła się w <a href="https://chocznia.pl/" target="_blank" rel="nofollow">Kościele pw. Narodzenia św. Jana Chrzciciela w Choczni</a>. Najpiękniejszy moment całego dnia, kiedy Wiktor i Antoś wprowadzają rodziców przed ołtarz, dzięki zdjęciom zostanie z nami już na zawsze (fajna ta fotografia). Piękne kazanie i wzruszenia podczas przysięgi małżeńskiej, wszystko w udekorowanym z dbałością o najmniejszy detal kościele. Po mszy świętej i zdjęciu grupowym, korzystając jeszcze z ostatnich promieni zachodzącego słońca udaliśmy na salę weselną do <a href="https://straz.tomice.pl/jednostki-osp/ochotnicza-straz-pozarna-w-radoczy/" target="_blank" rel="nofollow">OSP Radocza</a>. Zabawa trwała do samego rana, a zespół muzyczny swoim graniem gwarantował wysoką frekwencję osób na parkiecie. Jako gość specjalny wystąpiła Lena, która zachwyciła wszystkich swoim głosem. Bardzo dziękuję za ten wyjątkowy dzień, ciepłe przyjęcie i wspaniałą atmosferę. Miłego oglądania, a po więcej zdjęć zapraszam gości weselnych do strefy klienta z hasłem z mojej wizytówki.'
                    }
                    slug={"kinga-i-sebastian-reportaz-slubny-wadowice-chocznia-i-radocza"}
                    title={"REPORTAŻ ŚLUBNY WADOWICE, CHOCZNIA i RADOCZA - KINGA i SEBASTIAN"}
                    tags={"reportaż ślubny wadowice,zdjęcia ślubne chocznia"}
                    date={"20 października 2016"}
                    menuNames={"KINGA i SEBASTIAN"}
                    menuTitle={"REPORTAŻ ŚLUBNY WADOWICE, CHOCZNIA i RADOCZA"}
                    leadNames={"OLA i PAWEŁ"}
                    leadTitle={"DWÓR SZLACHECKI SIECIECHOWICE, REPORTAŻ ŚLUBNY MIECHÓW"}
                    leadUrl={"/dwor-szlachecki-sieciechowice-reportaz-slubny-miechow"}
                    leadImage={"url(/static/dwor_szlachecki_sieciechowice_reportaz_slubny_miechow_start.jpg)"}
                />
            </div>
        );
    }
}
