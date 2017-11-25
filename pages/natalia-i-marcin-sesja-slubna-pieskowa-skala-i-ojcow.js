import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {
    let slide = [{
      imageUrl: "/static/natalia_i_marcin_sesja_slubna_pieskowa_skala_i_ojcow_start.jpg"
    }];

    let images = [
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_pieskowa_skala_ojcow_0016.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_pieskowa_skala_ojcow_0001.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_pieskowa_skala_ojcow_0002.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_pieskowa_skala_ojcow_0003.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_pieskowa_skala_ojcow_0005.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_pieskowa_skala_ojcow_0006.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_pieskowa_skala_ojcow_0007.jpg", height: 852 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_pieskowa_skala_ojcow_0008.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_pieskowa_skala_ojcow_0009.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_pieskowa_skala_ojcow_0012.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_pieskowa_skala_ojcow_0010.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_pieskowa_skala_ojcow_0017.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_pieskowa_skala_ojcow_0011.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_pieskowa_skala_ojcow_0013.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_pieskowa_skala_ojcow_0014.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_pieskowa_skala_ojcow_0015.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_pieskowa_skala_ojcow_0020.jpg", height: 382 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_pieskowa_skala_ojcow_0004.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_pieskowa_skala_ojcow_0018.jpg", height: 852 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_pieskowa_skala_ojcow_0019.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2016/10/sesja_slubna_pieskowa_skala_ojcow_0021.jpg", height: 851 }
    ];

    return (
      <div>
        <Blogpage slide={slide}
          images={images}
          headTitle={'Sesja ślubna Pieskowa Skała i Ojców'}
          headDescription={'Kolejna odsłona pięknej jesieni. Tym razem w imieniu Natalii i Marcina zapraszam do Pieskowej Skały i Ojcowa.'}
          headKeywords={'sesja ślubna pieskowa skała,plener ojców'}
          headUrl={'http://99foto.pl/natalia-i-marcin-sesja-slubna-pieskowa-skala-i-ojcow/'}

          entryContentP1={'Od ślubu Natalii i Marcina minęło już trochę czasu. Można byłoby powiedzieć, że długo czekaliśmy na różnokolorowe liście i jesienną aurę w Ojcowskim Parku Narodowym i Pieskowej Skale, jednak nie byłaby to stuprocentowa prawda. Jak się pewnie domyślacie powstrzymała nas jesienna pogoda, która oprócz deszczu serwowała temperaturę zwykle poniżej 10 kresek na termometrze. Ale w końcu prognozy sprawdziły się i w może nie najbardziej słoneczny, ale bezdeszczowy i ciepły dzień wybraliśmy się w zaplanowane miejsce.'}
          entryContentP2={'Pracowaliśmy razem z Przemkiem, filmowcem na ślubie Natalii i Marcina, który pracowicie zbierał materiały na teledysk ślubny. Marcin pozował z wrodzonym luzem, a Natalia dzielnie pokonywała trudności w terenie ze szpilkami w rękach. Bardzo udany dzień, po którym po raz kolejny stwierdzam, że Pieskowa Skała to świetne miejsce na plener ślubny. Miłego oglądania.'}

          slug={'natalia-i-marcin-sesja-slubna-pieskowa-skala-i-ojcow'}

          title={'SESJA ŚLUBNA PIESKOWA SKAŁA I OJCÓW - NATALIA i MARCIN'}
          tags={'sesja ślubna pieskowa skała,plener ojców'}
          date={'31 października 2016'}

          menuNames={'NATALIA i MARCIN'}
          menuTitle={'SESJA ŚLUBNA PIESKOWA SKAŁA I OJCÓW'}

          leadNames={'SABINA i WIESIEK'}
          leadTitle={'ZDJĘCIA ŚLUBNE DWOREK FANTAZJA SKOMIELNA BIAŁA'}
          leadUrl={'/sabina-i-wiesiek-zdjecia-slubne-dworek-fantazja-skomielna-biala'} 
          leadImage={'url(/static/sabina_i_wiesiek_zdjecia_slubne_dworek_fantazja_skomielna_biala_start.jpg)'}
          />
      </div>
    );
  }
}