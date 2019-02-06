import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/slub_w_zimie.jpg"
            }
        ];

        let images = [{ imageSrc: "https://99foto.pl/wp-content/uploads/2019/01/restauracja_nad_raba_brzesko_0009.jpg", height: 763 }];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Jak zaplanować i zorganizować wymarzony ślub w zimie"}
                    headDescription={"Odpowiedzi na pytania jak zaplanować ślub w zimie i jak taki wymarzony ślub zorganizować znajdziesz zaglądając na bloga. Zimowy ślub Marty i Michała. Zapraszam."}
                    headKeywords={"zdjecia slubne zima, zimowa suknia ślubna, zimowe dekoracje weselne, ślub w lutym"}
                    headUrl={"https://99foto.pl/jak-zaplanowac-i-zorganizowac-wymarzony-slub-w-zimie/"}
                    entryContentP1={
                        'Perfekcyjnie zorganizowany ślub Marty i Michała, który miałem przyjemność fotografować w ubiegłą sobotę w miejscu dość odległym od Krakowa zainspirował mnie do zanotowania kilku spostrzeżeń w temacie jak zaplanować ślub w zimie i jak taki wymarzony ślub zorganizować. Obserwując branże ślubną w Polsce zauważymy, że ślub w styczniu czy też ślub w lutym nie jest już niczym niezwykłym. Rosnąca liczba nowożeńców, którzy chcą powiedzieć sakramentalne "TAK" korzystając z zimowej i świątecznej aury coraz częściej powoduje konieczność organizacji ślubów nawet w miesiącu grudniu. Ślub Marty i Michała jako jeden z wielu udowadnia, że ślub zimą odpowiednio przygotowany może być fantastycznym przeżyciem, którego oprawę tworzą pełne świątecznych ozdób i ciepłych światełek choinki, biały puszysty śnieg, sople lodu mieniące się w słońcu tysiącem kolorów, a nawet mróz który maluje policzki zaproszonych gości.'
                    }
                    entryContentP2={
                        "Długo można wymieniać argumenty, które powinny przekonać każdego z Was do organizacji wymarzonego ślubu w zimie. Będą to oszczędności w Waszej kieszeni, bo przecież sala, zespół i fotograf oferują swoje usługi w znacznie niższych cenach. Kilka kresek poniżej zera pomoże zatrzymać gości weselnych na parkiecie i skrócić czas przerw na papieroska. Nie bez znaczenia jest też możliwość zorganizowania ekstra atrakcji takich jak ognisko w lesie, kulig saniami czy też sztuczne ognie - takie tam odniesienie do góralskich klimatów. Pozostają jeszcze pytania z cyklu - wesele zimą jak mam się ubrać? Otóż planując stylizacje na wesele zimą Pan Młody nie powinien zapomnieć o płaszczu,  który mogłyby być wełniany do kolan i oczywiście odpowiednio ciepłych butach. Podobne wymagania obowiązują podczas zimowych plenerów ślubnych. Sukienka na zimowe wesele to również długi temat, który z uwagi na jego złożoność pozostawię bez odpowiedzi. Warto na pewno pomyśleć o bolerku ślubnym na zimę i parze szpilek na zmianę, szpilek w których będziecie mogły przetańczyć całą noc.  Nie zapomnijcie też zadbać o zimowy wystrój sali weselnej, pamiętajcie o bukietach z kolorowych kwiatów i unikalnych dekoracjach na stołach przy których będą się bawić Wasi gości. Mam nadzieję, że Was przekonałem i spotkamy się na zimowym ślubie już w nadchodzącym sezonie. Tymczasem zapraszam do obejrzenia kilku zdjęć z zimowego ślubu Marty i Michała. Miłego oglądania."
                    }
                    slug={"jak-zaplanowac-i-zorganizowac-wymarzony-slub-w-zimie"}
                    title={"JAK ZAPLANOWAĆ I ZORGANIZOWAĆ WYMARZONY ŚLUB W ZIMIE - MARTA i MICHAŁ"}
                    tags={"zdjecia slubne zima, zimowa suknia ślubna, zimowe dekoracje weselne, ślub w lutym"}
                    date={"6 lutego 2019"}
                    menuNames={"MARTA i MICHAŁ"}
                    menuTitle={"JAK ZAPLANOWAĆ I ZORGANIZOWAĆ WYMARZONY ŚLUB W ZIMIE"}
                    leadNames={"NATALIA i ŁUKASZ"}
                    leadTitle={"POMYSŁ NA SESJĘ ZIMOWĄ W KRAKOWIE - DWÓR JANA MATEJKI"}
                    leadUrl={"/pomysl-na-sesje-zimowa-w-krakowie-dwor-jana-matejki"}
                    leadImage={"url(/static/pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg)"}
                />
            </div>
        );
    }
}
