import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {
    let slide = [{
      imageUrl: "/static/wesele-tarnow_dwor_bistuszowa_i_staropolski_klimat_slubny_start.jpg"
    }];

    let images = [
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0001.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0002.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0003.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0004.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0005.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0007.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0006.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0008.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0009.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0010.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0011.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0012.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0013.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0014.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0015.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0016.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0018.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0019.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0020.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0021.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0025.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0022.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0023.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0024.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0026.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0027.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0028.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0029.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0030.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0031.jpg", height: 806 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0032.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0033.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0035.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0036.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0037.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0041.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0039.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0040.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0043.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0042.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0044.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0046.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0047.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0045.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0048.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0049.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0050.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0051.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0052.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0053.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0056.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0054.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0055.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0057.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0058.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0059.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0060.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0061.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0062.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0063.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0064.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0065.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0066.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0067.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0068.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0069.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0070.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0071.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0072.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0075.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0074.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0073.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0077.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0076.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0078.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0079.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0080.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0081.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0082.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0083.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0084.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0085.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0086.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0087.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0088.jpg", height: 510 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0089.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0090.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0091.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0092.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0093.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0094.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0095.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0096.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0097.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0098.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0099.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0100.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0101.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0102.jpg", height: 566 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/99FOTOPL_SP_300_WEB.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0104.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0105.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0106.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0107.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0108.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0109.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0110.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0111.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0112.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/05/wesele_tarnow_0103.jpg", height: 762 }
    ];

    return (
      <div>
        <Blogpage slide={slide}
          images={images}
          headTitle={'Dwór Bistuszowa, sala weselna na ślub plenerowy'}
          headDescription={'Dwór w miejscowości Bistuszowa, klasyczny i barokowy wystrój, który przeniósł gości weselnych w dawne czasy i stworzył staropolską atmosferę. Zapraszam.'}
          headKeywords={'wesele tarnów,dwór bistuszowa,dom weselny tarnów,ślub plenerowy'}
          headUrl={'http://99foto.pl/wesele-tarnow-dwor-bistuszowa-i-staropolski-klimat-slubny/'}

          entryContentP1={'Ostatnio mam coraz większe szczęście do par, którym towarzyszę w ich najważniejszym dniu. Ola i Przemek to absolutnie wyjątkowi ludzie. Spotkaliśmy się już wcześniej na sesji narzeczeńskiej i już wtedy wiedziałem, że będzie fajny ślub i z pewnością mega zdjęcia. Poszukując sali weselnej w Tarnowie, Ola i Przemek szukali miejsca, które dzięki klasycznemu i barokowemu wystrojowi pozwoli przenieść gości weselnych w dawne czasy i stworzy staropolską atmosferę. Pozytywne opinie, których pełno można znaleźć w internecie pozwoliły im dokonać właściwego wyboru <a href="http://www.dworbistuszowa.pl/" target="_blank">Dwór Bistuszowa</a> okazał się być wymarzonym miejscem na ich ślub. Siedemnastowieczny dwór, przebudowany i odrestaurowany sto lat później, którego mocną stroną jest park dworski, przepiękna aleja lipowa to świetne miejsce na ślub plenerowy. Reportaż ślubny rozpoczęliśmy właśnie w tym tego dnia oddanym do dyspozycji Oli miejscu.'}
          entryContentP2={'Wizażystka Ewa wykonała profesjonalny makijaż, a ja w tym czasie zdążyłem zwiedzić dworek i sfotografować ślubne detale. W ubieraniu sukni ślubnej Oli pomagała Ola, najlepsza przyjaciółka i niemalże siostra bliźniaczka. Adrianowi, kamerzyście z <a href="http://www.kraskastudio.pl/" target="_blank">Kraska Wedding Studio</a> bardzo spodobała się ksywa drugiej Oli i dzięki niej udało mu się kilka razy rozbawić dziewczyny. Po błogosławieństwie udaliśmy się do <a href="http://sanktuariumtuchow.pl/" target="_blank">Bazyliki Nawiedzenia Najświętszej Maryi Panny w Tuchowie</a>. Piękny kościół, który warto odwiedzić przemierzając małopolskę. Kazanie księdza kilkukrotnie wywołało uśmiech na twarzach Pary Młodej. Sakramentalne TAK, zdjęcie grupowe przy ołtarzu plenerowym i wszyscy udaliśmy się do Dworu Bistuszowa, gdzie na młodych czekał szereg atrakcji i niespodzianek. Pierwszą z nich było powitanie chlebem i solą w którym udział wzięła przebrana w staropolski strój właścicielka Dworu. Przemek otworzył drzwi lśniącego bielą Jaguara i przeprowadził Ole szpalerem wykonanym przez zaproszonych gości. Altana na moment stała się domem życzeń ślubnych, przy których nie zabrakło wzruszeń i radości. Krótki deszcz był kolejną atrakcją, która nikogo nie zaskoczyła i nadała charakteru całemu wydarzeniu.  W altanie czekał już Zespół Muzyczny Hit Street, który uświetnił zabawę tego wieczoru. Plenerowa zabawa trwała do białego rana, natomiast oczepiny tego wieczoru to istne szaleństwo. W tak zwanym między czasie zrobiliśmy wspólne zdjęcia rodzinne, które są moim zdaniem równie ważne jak reportaż ślubny. Same wspaniałe wspomnienia i mam nadzieję odzwierciedlające to fotografie poniżej. Miłego oglądania, a po więcej zdjęć zapraszam do strefy klienta z hasłem z mojej wizytówki.'}

          slug={'wesele-tarnow-dwor-bistuszowa-i-staropolski-klimat-slubny'}

          title={'WESELE TARNÓW, DWÓR BISTUSZOWA i STAROPOLSKI KLIMAT ŚLUBNY - OLA i PRZEMEK'}
          tags={'wesele tarnów,dwór bistuszowa,dom weselny tarnów,ślub plenerowy'}
          date={'14 maja 2017'}

          menuNames={'OLA i PRZEMEK'}
          menuTitle={'WESELE TARNÓW, DWÓR BISTUSZOWA i STAROPOLSKI KLIMAT ŚLUBNY'}

          leadNames={'EWELINA i KAMIL'}
          leadTitle={'HOTEL QUBUS KRAKÓW SESJA ZDJĘCIOWA'}
          leadUrl={'/hotel-qubus-krakow-sesja-zdjeciowa'} 
          leadImage={'url(/static/hotel_qubus_krakow_sesja_zdjeciowa_start.jpg)'}
          />
      </div>
    );
  }
}