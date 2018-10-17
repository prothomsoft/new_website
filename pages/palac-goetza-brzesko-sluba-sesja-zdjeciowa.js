import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/palac_goetza_brzesko.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0010.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0003.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0006.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0011.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0007.jpg", height: 402 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0004.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0018.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0008.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0005.jpg", height: 850 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0016.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0001.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0009.jpg", height: 851 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0012.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0013.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0017.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0014.jpg", height: 527 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0015.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0019.jpg", height: 805 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0020.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0021.jpg", height: 762 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0023.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0022.jpg", height: 763 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0024.jpg", height: 383 },
            { imageSrc: "http://99foto.pl/wp-content/uploads/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0002.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Pałac Goetza Brzesko, ślubna sesja zdjęciowa, Pałac Goetz"}
                    headDescription={"Pałac Goetza Brzesko, ślubna sesja zdjęciowa Magdaleny i Łukasza. Sala ślubna na wymarzone wesele pod Krakowem. Zapraszam do oglądania."}
                    headKeywords={"pałac goetz, pałac goetza brzesko, ślubna sesja zdjęcia, sala ślubna pałac goetz, wesele pod krakowem"}
                    headUrl={"http://99foto.pl/palac-goetza-brzesko-sluba-sesja-zdjeciowa/"}
                    entryContentP1={
                        'Pałac Goetza w Brzesku to miejsce niezwykłe, charakteryzujące się wspaniałą architekturą, utrzymane z dbałością o najmniejszy detal. To nie tylko wnętrza, ale i piękny ogród. Każdego tygodnia w sezonie ślubnym miejsce to zamienia się w ekskluzywną sale weselną, budząc zachwyt na twarzach zaproszonych gości. Wielu krakowskich i nie tylko fotografów stawiało w tym miejscu swoje pierwsze kroki w fotografii na <a href="https://warsztaty.adamtrzcionka.pl/warsztaty-z-pleneru.html" target="_blank"> warsztatach z pleneru</a> organizowanych pod okiem mistrza Adama Trzcionki. Do zrobienia pleneru w tym miejscu namawiałem już moje pary ślubne, jednak dla wielu osób koszty związane z trzygodzinnym pobytem w Pałacu Goetza na sesji zdjęciowej, równe niemalże miesięcznemu wynagrodzeniu za pracę pielęgniarki czy nauczyciela, były nie do zaakceptowania.'
                    }
                    entryContentP2={
                        "Magda i Łukasz, postanowili spełnić nie tylko swoje, ale i moje marzenie i odwiedzić to niezwykłe miejsce. Sesja ślubna jest raz w życiu, tak powiedziała Magda. Zawsze powtarzam, że warto ponieważ już chwilę później suknia wraca do szafy lub ląduje na allegro, my wracamy do swoich codziennych obowiązków zwanych prozą życia, a zdjęcia i wspomnienia przeżytych chwil zostają z nami na zawsze. Na koniec przyznam, że teraz każda otwarta zielona puszka złocistego napoju będzie przypominać mi o tej sesji zdjęciowej - same miłe wspomnienia. Zapraszam do oglądania."
                    }
                    slug={"palac-goetza-brzesko-sluba-sesja-zdjeciowa"}
                    title={"PAŁAC GOETZA BRZESKO, ŚLUBNA SESJA ZDJĘCIOWA - MAGDALENA i ŁUKASZ"}
                    tags={"pałac goetz, pałac goetza brzesko, ślubna sesja zdjęcia, sala ślubna pałac goetz, wesele pod krakowem"}
                    date={"19 lipca 2018"}
                    menuNames={"MAGDALENA i ŁUKASZ"}
                    menuTitle={"PAŁAC GOETZA BRZESKO, ŚLUBNA SESJA ZDJĘCIOWA"}
                    leadNames={"MARTA i MARCIN"}
                    leadTitle={"WESELE POD KRAKOWEM, FIRST LOOK NA DACHU WIEŻOWCA"}
                    leadUrl={"/tiffany-wola-filipowska-first-look-na-dachu-wiezowca"}
                    leadImage={"url(/static/restauracja_tiffany_wola_filpowska.jpg)"}
                />
            </div>
        );
    }
}
