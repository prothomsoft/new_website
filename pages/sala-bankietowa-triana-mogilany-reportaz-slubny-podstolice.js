import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sala_bankietowa_triana_mogilany.jpg"
            }
        ];

        let images = [{ imageSrc: "http://99foto.pl/wp-content/uploads/2018/09/sesja_slubna_zamek_pieskowa_skala_0001_1.jpg", height: 763 }];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sala Bankietowa Triana Mogilany, Reportaż ślubny Podstolice"}
                    headDescription={"Sala Bankietowa Triana Mogilany, reportaż ślubny Pauliny i Pawła Podstolice. Nowoczesna i jasna sala weselna w okolicach Krakowa. Zapraszam do oglądania."}
                    headKeywords={"Sala Bankietowa Triana Mogilany, Reportaż ślubny Podstolice, sala weselna okolice Krakowa"}
                    headUrl={"http://99foto.pl/sala-bankietowa-triana-mogilany-reportaz-slubny-podstolice/"}
                    entryContentP1={
                        'Końcówka sierpnia i początek września minęły błyskawicznie i na moim blogu zamieściłem relacje z kilku sesji plenerowych. Wrześniowa pogoda i rowerki moich dzieciaków odstawione do garażowej rezerwy pozwalają wrócić do cotygodniowych wpisów ślubnych. Nowe otwarcie rozpocznę od pokazania świetnie zorganizowanego ślubu Pauliny i Pawła, który odbył się w ubiegły piątek w przepięknej sali weselnej położonej w niedalekiej odległości od Krakowa - <a href="http://wesela.jurek-catering.pl/" target="_blank">Sali bankietowej Triana</a> w Mogilanach. Dzień rozpoczęliśmy od makijażu Pauliny, który wykonała Michalina Mikrut z <a href="https://www.facebook.com/allureofmakeup/ target="_blank">Allure of Make\'up</a>. Następnie, na krótką chwilę odwiedziłem dom rodzinny Pana Młodego. Poznałem przemiłych rodziców Pawła i przy okazji zrobiłem kilka zdjęć z przygotowań (krawacik, rowerowe spinki i takie tam). Paulina ubierała się korzystając z pomocy swojej Mamy oraz wielu innych pomocników. Dzięki temu przygotowania odbyły się sprawnie i nadszedł czas pełnego emocji błogosławieństwa. Naturalna kolej rzeczy doprowadziła nas do ceremonii zaślubin, która odbyła się w zabytkowym, drewnianym powstałym 1870 roku <a href="http://www.podstolice.diecezja.krakow.pl/" target="_blank">Kościele  p.w. Ducha Świętego w Podstolicach</a>.'
                    }
                    entryContentP2={
                        'Wirtuozeria skrzypiec i umiarkowana powaga księdza proboszcza nadały tym trzem kwadransom, niezwykły wymiar i przepiękne tło dla momentu najważniejszego, czyli sakramentalnego TAK. Przeprawa przez Zakopiankę, która w godzinach szczytu komunikacyjnego przypominała komputerową grę Frogger, była dodatkową atrakcją na trasie do wspomnianego już wcześniej miejsca imprezy. Gdy wszyscy goście weselni dotarli na miejsce <a href="http://wesela.jurek-catering.pl/" target="_blank">Sala bankietowa Triana</a> uznała imprezę za otwartą, rodzice tradycyjnie przywitali Parę Młodą chlebem i solą, poleciały kieliszki i po gorących życzeniach zaserwowano przepyszny obiad. Zespół Monaver z Jarosławia, który zachwycił mnie mistrzowskim wykonaniem utworu Pawła Domagały - "Weź nie pytaj" - grał świetnie i mocno pracował na kolejnych pochądzących z referencji klientów. Każdą minutę profesjonalnie filmował Łukasz Korzeniowski z <a href="https://www.facebook.com/filmartelukaszkorzeniowski/" target="_blank">Film Arte</a>. Zawsze miło spotkać filmowca z krwi i kości na fotograficznej ślubnej ścieżce. Goście bawili się świetnie, korzystając z foto budki i Sławomira unplugged. Długo mógłbym opisywać wszystko to co działo się na parkiecie tego wieczora. Paulino i Pawle, dziękuję za zaufanie i super dzień w Waszym towarzystwie. Zapraszam na zdjęcia blogowe i po więcej do strefy klienta, po wpisaniu hasła z mojej wizytówki. Miłego oglądania.'
                    }
                    slug={"sala-bankietowa-triana-mogilany-reportaz-slubny-podstolice"}
                    title={"SALA BANKIETOWA TRIANA MOGILANY, REPORTAŻ ŚLUBNY PODSTOLICE - PAULA i PAWEŁ"}
                    tags={"Sala Bankietowa Triana Mogilany, Reportaż ślubny Podstolice, sala weselna okolice Krakowa"}
                    date={"21 września 2018"}
                    menuNames={"PAULA i PAWEŁ"}
                    menuTitle={"SALA BANKIETOWA TRIANA MOGILANY, REPORTAŻ ŚLUBNY PODSTOLICE"}
                    leadNames={"KRISTINA i ALEKSANDR"}
                    leadTitle={"SESJA ŚLUBNA W PIESKOWEJ SKALE i ZAMEK KORZKIEW"}
                    leadUrl={"/sesja-slubna-w-pieskowej-skale-i-zamek-korzkiew"}
                    leadImage={"url(/static/plener_slubny_zamek_pieskowa_skala.jpg)"}
                />
            </div>
        );
    }
}
