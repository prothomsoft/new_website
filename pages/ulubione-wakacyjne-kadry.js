import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/ulubione_wakacyjne_kadry_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0000.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0001.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0002.jpg", height: 790 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0003.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0004.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0005.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0006.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0007.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0008.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0009.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0010.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0011.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0012.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0013.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0014.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0015.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0016.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0017.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0018.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0019.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0020.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0021.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0022.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0023.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0024.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0025.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0026.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0027.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0028.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0029.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0030.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0031.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0032.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0033.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0034.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0035.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0036.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0037.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2014/09/ulubione_wakacyjne_kadry_0038.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Zdjęcia rodzinne Kraków"}
                    headDescription={"Kilka zdjęć z wakacji, na które w tym roku udaliśmy się do Wrocławia. Piękne miasto i mój ulubiony Ostrów Tumski oraz Ogród Japoński. Miłego oglądania."}
                    headKeywords={"fotograf rodzinny kraków, zdjęcia z wakacji"}
                    headUrl={"http://wp.99foto.pl/ulubione-wakacyjne-kadry/"}
                    entryContentP1={
                        "Pierwszy etap naszej wyprawy to Wrocław. Przez moment mieliśmy już nie jechać dalej, gdyż wujek zorganizował plażę w pokoju jadalnym &#8211; był namiot, woda i nawet słońce. Misio zmienił fryzurę, a my zwiedziliśmy Halę Ludową, gdzie trwały przygotowania do koncertu Męskie Granie, Politechnikę i Plac Grunwaldzki. Pierwszy przystanek kolejnego etapu podróży to Malta (ta w Poznaniu). Dalej pojechaliśmy na Stare Drawsko podziwiać jeziora, które wcześniej oglądałem na google i zapowiadały się very nice. Do Dąbek wjechaliśmy o 19:30 prosto na plażę i prosto na zachód słońca."
                    }
                    entryContentP2={
                        "Natomiast po ponad tygodniu poza domem, wyruszyliśmy liznąć wisienki na torcie, wydarzenia roku, ślubu Karoliny i Marka z wielką czekoladową fontanną. Po drodze, zatrzymaliśmy się w Borsku w restauracji Largo położonej nad brzegiem jeziora w lesie pełnym grzybów i prostych jak drut drzew. Wzruszenia, Michał świeczki w oczach non stop, dużo dobrej zabawy i dobrego masła z pierwszej ręki. I to już wszystkie zdjęcia z wakacji, dopiero za rok będzie więcej. Miłego oglądania."
                    }
                    slug={"ulubione-wakacyjne-kadry"}
                    title={"ULUBIONE WAKACYJNE KADRY - MICHAŁ i MARTUSIA"}
                    tags={"fotograf rodzinny kraków, zdjęcia z wakacji"}
                    date={"3 listopada 2017"}
                    menuNames={"MICHAŁ i MARTUSIA"}
                    menuTitle={"ULUBIONE WAKACYJNE KADRY"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"ZDJĘCIA ŚLUBNE RESTAURACJA STEK SKAWINA"}
                    leadUrl={"/zdjecia-slubne-restauracja-stek-skawina"}
                    leadImage={"url(/static/zdjecia_slubne_restauracja_stek_skawina_start.jpg)"}
                />
            </div>
        );
    }
}
