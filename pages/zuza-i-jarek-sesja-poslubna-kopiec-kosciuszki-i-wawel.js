import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {
    let slide = [{
      imageUrl: "/static/zuza_i_jarek_sesja_poslubna_kopiec_kosciuszki_i_wawel_start.jpg"
    }];

    let images = [
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0003.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0002.jpg", height: 851 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0013.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0004.jpg", height: 852 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0005.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0006.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0007.jpg", height: 852 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0008.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0009.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0010.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0011.jpg", height: 852 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0012.jpg", height: 763 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0001.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0014.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0015.jpg", height: 850 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0016.jpg", height: 762 },
      { imageSrc: "http://99foto.pl/wp-content/uploads/2015/09/sesja_poslubna_kopiec_kosciuszki_wawel_0017.jpg", height: 763 }
    ];

    return (
      <div>
        <Blogpage slide={slide}
          images={images}
          headTitle={'Sesja zdjęciowa Kopiec Kościuszki'}
          headDescription={'Kraków i jego najbardziej znane miejsce na plener czyli Kopiec Kościuszki i Wawel. Sesja ślubna Zuzy i Jarka. Zapraszam do oglądania.'}
          headKeywords={'zdjęcia ślubne wawel,plener ślubny kopiec kościuszki'}
          headUrl={'http://99foto.pl/zuza-i-jarek-sesja-poslubna-kopiec-kosciuszki-i-wawel/'}

          entryContentP1={'Zuzę i Jarka znacie już z <a href="http://99foto.pl/zuza-i-jarek-zdjecia-slubne-modrzewiowe-wzgorze-zakliczyn/" target="_blank">tego ślubnego wpisu</a> na moim blogu. Spotkaliśmy się w tygodniu po ślubie w ramach wspominanego już urlopu w ojczyźnie w Krakowie na plenerowej sesji ślubnej. Początkowo planowaliśmy sesję w okolicach Tarnowa lub w Brzesku w Pałacu Goetzów, jednak w końcu postawiliśmy na Kraków wybierając Kopiec Kościuszki i Wawel.'}
          entryContentP2={'Miejsca te podobnie jak Rynek, Kazimierz, Mogilany, Kryspinów, Tyniec można uznać za wizytówkę Krakowa i wszystkim, którzy decydują się na sesję w Krakowie bardzo je polecam. Trzy godzinna sesja minęła nam w dobrych humorach i delikatnych starciach ze strażnikami KRÓLEWSKIEJ TRAWY WAWELU. Miłego oglądania.'}

          slug={'zuza-i-jarek-sesja-poslubna-kopiec-kosciuszki-i-wawel'}

          title={'SESJA ŚLUBNA KOPIEC KOŚCIUSZKI i WAWEL - ZUZA i JAREK'}
          tags={'zdjęcia ślubne wawel,plener ślubny kopiec kościuszki'}
          date={'23 września 2015'}

          menuNames={'ZUZA i JAREK'}
          menuTitle={'SESJA ŚLUBNA KOPIEC KOŚCIUSZKI i WAWEL'}

          leadNames={'IWONA i MARCIN'}
          leadTitle={'WESELE W GÓRALSKIM KLIMACIE PRZYSTAŃ KABANOS SPYTKOWICE'}
          leadUrl={'/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice'} 
          leadImage={'url(/static/wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg)'}
          />
      </div>
    );
  }
}