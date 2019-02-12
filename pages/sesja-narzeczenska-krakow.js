import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/sesja_narzeczenska_krakow_start.jpg"
            }
        ];

        let images = [
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0002.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_001.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0003.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0004.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0008.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0006.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0007.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0009.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0010.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0011.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0005.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0014.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0015.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0016.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0017.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0018.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0019.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0020.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0021.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0022.jpg", height: 850 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0023.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0024.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0025.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0026.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0027.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0029.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0028.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0030.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0031.jpg", height: 763 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0032.jpg", height: 383 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0033.jpg", height: 527 },
            { imageSrc: "https://99foto.pl/wp-content/uploads/2017/07/sesja_narzeczenska_krakow_0013.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Sesja narzeczeńska Kraków"}
                    headDescription={"Sesja narzeczeńska Kingi Maćka. Ciekawe i najlepsze miejsce plenerowe na sesję zdjęciową. Kraków i okolice. Serdecznie zapraszam."}
                    headKeywords={"sesja narzeczeńska w krakowie,zamek korzkiew,zamek pieskowa skała"}
                    headUrl={"https://99foto.pl/sesja-narzeczenska-krakow/"}
                    entryContentP1={
                        'Tym razem jeden wpis na blogu łączy sesję narzeczeńską i sesję ślubną Kingi i Maćka. Postanowiłem wybrać najlepsze kadry, które udało nam się stworzyć podczas blisko ośmiu godzin spacerowania i fotografowania miasta Krakowa i jego okolic. Kinga i Maciek bardzo dbali o detale na obu sesjach, przygotowując sobie <a href="https://koloryholi.pl/" target="_blank" rel="nofollow">kolorki holi</a>, strój strażacki, balony wypełnione helem i przepiękny wianek. Sesja narzeczeńska miała pokazać Kraków jako miasto i ograniczyć kolor zielony w kadrze,  wybraliśmy więc w pierwszej kolejności Kazimierz.'
                    }
                    entryContentP2={
                        'Rozległą łąkę, z której obserwowaliśmy zachód słońca znaleźliśmy w pobliżu Lasku Wolskiego. Po drodze do tego miejsca na chwilę zatrzymaliśmy się pod <a href="https://www.uziyada.krakow.pl/" target="_blank" rel="nofollow">Zamkiem w Przegorzałach</a>. Sesja ślubna to bardziej odległe okolice Krakowa, czyli <a href="https://korzkiew.pl/" target="_blank" rel="nofollow">Zamek w Korzkwi</a> i <a href="https://pieskowaskala.eu/" target="_blank" rel="nofollow">Zamek w Pieskowej Skale</a>. Dwa dni wspaniałej pogody, świetnie wykorzystany czas i prawdziwy przekrój miasta Krakowa. Mega podziękowania dla Kingi i Maćka za perfekcyjne przygotowanie do naszych sesji plenerowych. Serdecznie zapraszam na zdjęcia i życzę miłego oglądania.'
                    }
                    slug={"sesja-narzeczenska-krakow"}
                    title={"SESJA NARZECZEŃSKA KRAKÓW - KINGA i MACIEK"}
                    tags={"sesja narzeczeńska w krakowie,zamek korzkiew,zamek pieskowa skała"}
                    date={"2 lipca 2017"}
                    menuNames={"KINGA i MACIEK"}
                    menuTitle={"SESJA NARZECZEŃSKA KRAKÓW"}
                    leadNames={"KAROLINA i DAWID"}
                    leadTitle={"LAWENDOWE POLE POD KRAKOWEM, SESJA ŚLUBNA W OSTROWIE"}
                    leadUrl={"/lawendowe-pole-pod-krakowem-sesja-slubna-w-ostrowie"}
                    leadImage={"url(/static/lawendowe_pole_pod_krakowem_sesja_slubna_w_ostrowie_start.jpg)"}
                />
            </div>
        );
    }
}
