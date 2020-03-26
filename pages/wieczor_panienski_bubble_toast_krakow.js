import Blogpage from "../components/blogpage";

export default class BlogPageComponent extends React.Component {
    render() {
        let slide = [
            {
                imageUrl: "/static/wieczor_panienski_bubble_toast_krakow.jpg"
            }
        ];

        let images = [
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0001.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0002.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0003.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0004.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0005.jpg", height: 527 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0006.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0007.jpg", height: 527 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0008.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0009.jpg", height: 527 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0010.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0011.jpg", height: 805 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0012.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0013.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0014.jpg", height: 806 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0015.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0016.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0017.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0018.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0019.jpg", height: 850 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0020.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0021.jpg", height: 850 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0022.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0023.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0024.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0025.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0026.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0027.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0028.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0029.jpg", height: 805 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0030.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0031.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0032.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0033.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0034.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0035.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0036.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0037.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0038.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0039.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0040.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0041.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0042.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0043.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0044.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0045.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0046.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0047.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0048.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0049.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0050.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0051.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0052.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0053.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0054.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0055.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0056.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0057.jpg", height: 762 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0058.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0059.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0060.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0061.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0062.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0063.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0064.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0065.jpg", height: 383 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0066.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0067.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0068.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0069.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0070.jpg", height: 763 },
            { imageSrc: "http://wp.99foto.pl/wp-content/uploads/2020/02/wieczor_panienski_martyna_0071.jpg", height: 763 }
        ];

        return (
            <div>
                <Blogpage
                    slide={slide}
                    images={images}
                    headTitle={"Wieczór panieński Bubble Toast Kraków"}
                    headDescription={
                        "Wieczór panieński Martyny. Zapraszam na zdjęcia."
                    }
                    headKeywords={"Wieczór panieński Bubble Toast Kraków"}
                    headUrl={"http://wp.99foto.pl/wieczor_panienski_bubble_toast_krakow/"}
                    entryContentP1={
                        "Zapraszam na kilka zdjęć z wieczoru panieńskiego Martyny. Kulki w Bubble Toast na Placu Szczepańskim w Krakowie i małe conieco w Restauracji Boccanera. Miłego oglądania."
                    }
                    entryContentP2={""}
                    slug={"wieczor_panienski_bubble_toast_krakow"}
                    title={"WIECZÓR PANIEŃSKI MARTYNY - BUBBLE TOAST KRAKÓW, RESTAURACJA BOCCANERA"}
                    tags={"Wieczór panieński Bubble Toast Kraków"}
                    date={"03 luty 2020"}
                    menuNames={"WIECZÓR PANIEŃSKI MARTYNY"}
                    menuTitle={"BUBBLE TOAST KRAKÓW, RESTAURACJA BOCCANERA"}
                    leadNames={"ANNA i PIOTR"}
                    leadTitle={"BAZYLIKA BOŻEGO CIAŁA KRAKÓW, FOTOREPORTAŻ ŚLUBNY"}
                    leadUrl={"/bazylika-bozego-ciala-krakow-fotoreportaz-slubny"}
                    leadImage={"url(/static/bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg)"}
                />
            </div>
        );
    }
}
