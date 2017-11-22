import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {
    let slide = [{
      imageUrl: "/static/plener_narzeczenski_krakow_i_okolice_start.jpg"
    }];

    let images = [
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0001.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0002.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0003.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0004.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0005.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0006.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0007.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0008.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0009.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0010.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0011.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0012.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0013.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0014.jpg", height: 527 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0015.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0016.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0026.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0017.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0018.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0019.jpg", height: 383 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0021.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0022.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0020.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0025.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0024.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2017/08/plener_narzeczenski_krakow_i_okolice_0023.jpg", height: 763 }
    ];

    return (
      <div>
        <Blogpage slide={slide}
          images={images}
          headTitle={'Plener narzeczeński Kraków'}
          headDescription={'Plener narzeczeński staje się integralną cześcią planowanego ślubu. Serdecznie zapraszam na zdjęcia Aliny i Michała, którzy zabrali ze sobą Bruna.'}
          headKeywords={'plener narzeczeński kraków,sesja narzeczeńska ojców'}
          headUrl={'http://99foto.pl/plener-narzeczenski-krakow-i-okolice/'}

          entryContentP1={'Plener narzeczeński bardzo często staje się integralną cześcią planowanego ślubu. Spotkanie z fotografem przed ślubem pozwala oswoić się z aparatem i zdobyć trochę doświadczenia w pozowaniu przed obiektywem. Sesja narzeczeńśka jest też świetną okazją do poznania fotografa jako człowieka, przełamania pierwszych lodów w tej znajomości. Osobiście możecie przekonać się w jakiej atmosferze powstać będą Wasze zdjęcia ślubne, a obecność fotografa w Waszym domu nie będzie stresująca, ponieważ będzie to osoba, którą mieliście okazję poznać osobiście.'}
          entryContentP2={'Zdjęcia w plenerze są okazją do pokazanie innej strony Waszego związku. Możecie zabrać ze sobą psa tak jak zrobili to Alina i Michał, gitarę i zapalić ognisko, lista pomysłów jest nieograniczona. Sesja narzeczeńska może mieć miejsce w mieście, w lesie, w domu, w parku – wszystko zależy od Waszych preferencji. Zdjęcia, które są wynikiem sesji mogą być pomocne przy przygotowywaniu zaproszeń ślubnych lub dekoracji sali. Mogą też być super dodatkiem do prezentu dla rodziców. Bardzo często jedno ze zdjęć sesji narzeczeńskiej staje się zdjęciem profilowym na Facebook czy Google+. Sesja narzeczeńska jest tylko dla Was i właśnie z tego powodu jest wyjątkowa. Mam nadzieję, że Was przekonałem, a tymczasem zapraszam na zdjęcia Aliny, Michała i Bruna, które zrobiliśmy w jedno słoneczne popołudnie w <a href="http://korzkiew.pl/" target="_blank">Zamku Korzkiew</a> i <a href="http://pieskowaskala.eu/" target="_blank">Pieskowej Skale</a>. Miłego oglądania.'}

          slug={'plener-narzeczenski-krakow-i-okolice'}

          title={'PLENER NARZECZEŃSKI KRAKÓW I OKOLICE - ALINA, MICHAŁ i RUDI'}
          tags={'plener narzeczeński kraków,sesja narzeczeńska ojców'}
          date={'7 sierpnia 2017'}

          menuNames={'ALINA, MICHAŁ i RUDI'}
          menuTitle={'PLENER NARZECZEŃSKI KRAKÓW i OKOLICE'}

          leadNames={'IWONA i MARCIN'}
          leadTitle={'WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE'}
          leadUrl={'/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice'} 
          leadImage={'url(/static/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg)'}
          />
      </div>
    );
  }
}