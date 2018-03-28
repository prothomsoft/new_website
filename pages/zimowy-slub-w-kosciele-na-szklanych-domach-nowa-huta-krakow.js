import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {

    
    

    let slide = [{
      imageUrl: "/static/zimowy-slub-w-kosciele-na-szklanych-domach-nowa-huta-krakow-start.jpg"
    }];

    let images = [
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0001.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0002.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0003.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0004.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0005.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0006.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0007.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0008.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0009.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0010.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0011.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0012.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0013.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0014.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0015.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0016.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0017.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0018.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0019.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0020.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0021.jpg", height: 766 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0022.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0023.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0024.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0025.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0026.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0027.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0028.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0029.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0030.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0031.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0032.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0033.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0034.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0035.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0036.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0037.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0038.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0039.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0040.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0041.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0042.jpg", height: 806 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0043.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0044.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0045.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0046.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0047.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0048.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0049.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0050.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0051.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0052.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0053.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0054.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0055.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0056.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0057.jpg", height: 806 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0058.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0059.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0060.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0061.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0062.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0063.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0064.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0065.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0066.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0067.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0068.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0069.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0070.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0071.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0072.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0073.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0074.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0075.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0076.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0077.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0078.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0079.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0080.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0081.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0082.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0083.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0084.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0085.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0086.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0087.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0088.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0089.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0090.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0091.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0092.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0093.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0094.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0095.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0096.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0097.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0098.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0099.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0100.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0101.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0104.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0102.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0103.jpg", height: 383 },      
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0105.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0106.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0107.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0108.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0109.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0110.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0111.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0112.jpg", height: 763 }        
    ];

    return (
      <div>
        <Blogpage slide={slide}
          images={images}          

          headTitle={'Zimowy ślub w Kościele na Szklanych Domach, Nowa Huta, Kraków'}
          headDescription={'Zimowa sobota. Kilka gorących klatek i zimne ognie. Ola i Tomek, Szklane Domy i szalona zabawa do białego rana u Niedźwiedzia. Zapraszam na bloga.'}
          headKeywords={'Zimowy ślub Kraków, kościół na Szklanych Domach, reportaż ślubny Nowa Huta'}
          headUrl={'http://99foto.pl/zimowy-slub-w-kosciele-na-szklanych-domach-nowa-huta-krakow/'}

          entryContentP1={'Zimowa sobota i koniec stycznia. Linia wspólnych znajomych moich ślubnych par z pięknych studenckich czasów na krakowskim AWF i facebook oczywiście, zaprowadziły mnie tym razem do Nowej Huty w pobliże Placu Centralnego do mieszkania Oli. Przygotowania rozpoczęliśmy wcześnie rano w mieszczącym się w nowej siedzibie <a href="https://www.facebook.com/Studio-Avangarda-188030214877751/" target="_blank">Salonie fryzjerskim Avangarda</a>. To tam powstawały fryzury Oli i jej Mamy. Gdy welon wylądował już na swoim miejscu, przenieśliśmy się do mieszkania, gdzie po odnalezieniu odpowiedniego światła, mejkapowe czary rozpoczęła <a href="https://www.facebook.com/iwonamiernikmakeup" target="_blank">Iwona Miernik</a>. Makijaż jak zawsze udał się doskonale. W tak zwanym międzyczasie odwiedziłem Tomka w jego mieszkaniu na osiedlu Górali. Krótkie pozycjonowanie muchy i powrót do Oli na pozostałą część przygotowań. Dalej klasycznie, przywitanie i gorący pocałunek, błogosławieństwo rodziców i sporo emocji w powietrzu. Chwilę później byliśmy już w <a href="http://www.szklanedomy.cystersi.pl/" target="_blank">Kościele pw. Matki Bożej Częstochowskiej w Krakowie na osiedlu Szklane Domy</a>. Ksiądż przywitał młodych w zakrystii, wprowadził do ołtarza, wygłosił kazanie i doprowadził ceremonię do najważniejszego momentu, czyli sakramentalnego TAK.'}
          entryContentP2={'Pomimo nienajwyższej temperatury udało nam się namówić gości na zdjęcie grupowe pod kościołem. Następnie autostradą pojechaliśmy prosto do <a href="http://www.uniedzwiedzia.pl/" target="_blank">Domu Weselnego "U Niedźwiedzia"</a>. Rodzice przywitali młodych chlebem i solą, kieliszki tradycyjnie już przeszły do historii, a Tomek przeniósł Olę przez próg restauracji. Obiadek, deser i pierwszy taniec, który otworzył parkiet dla pozostałych gości. <a href="http://www.magicznanoc.pl/" target="_blank">DJ Kacper i Wodzirej Tomek czyli Magiczna Noc</a> zapewnili obsługę muzyczną na najwyższym poziomie, jak w reklamie zamieniając marzenia w rzeczywistość. Za dużą ilość zabaw, atrakcji, gadżetów, super oświetlenie sali kredyt należy się właśnie im. Zrobiliśmy zdjęcia grupowe i kilka gorących klatek oświetlonych dla odmiany zimnymi ogniami. Zabawa trwała do białego rana i było miło kolekcjonować te chwile, zapisując kolejne klatki na kartach pamięci w moich aparatach. Olu i Tomku wielkie dzięki, że mogłem być Waszym gościem. Zapraszam do oglądania zdjęć, a po więcej do strefy klienta. Hasło znajdziecie na mojej wizytówce, a wizytówki można było tradycyjne już odnaleźć przy ekspresie do kawy...'}

          slug={'zimowy-slub-w-kosciele-na-szklanych-domach-nowa-huta-krakow'}

          title={'ZIMOWY ŚLUB W KOŚCIELE NA SZKLANYCH DOMACH, NOWA HUTA, KRAKÓW - OLA i TOMEK'}
          tags={'Zimowy ślub Kraków, Kościół na Szkanych Domach, reportaż ślubny Nowa Huta'}
          date={'27 stycznia 2018'}

          menuNames={'OLA i TOMEK'}
          menuTitle={'ZIMOWY ŚLUB W KOŚCIELE NA SZKLANYCH DOMACH, NOWA HUTA, KRAKÓW'}

          leadNames={'KINGA i MACIEK'}
          leadTitle={'DEKORACJA SALI WESELNEJ W STYLU RUSTYKALNYM, OSP ZAWADA'}
          leadUrl={'/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada'} 
          leadImage={'url(/static/dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.jpg)'}
          />
      </div>
    );
  }
}