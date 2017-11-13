import Blogpage from '../components/blogpage'

export default class BlogPageComponent extends React.Component {
  render() {
    let slides = [{
      imageUrl: "/static/blog_start.jpg",
      caption: "Image 1"
    }];

    return (
      <div>
        <Blogpage slides={slides}
          headTitle={'Sesja ślubna Strbskie Pleso, Popradzki Staw, Słowacja'}
          headDescription={'Iwona i Marcin w idealnie wybrany dzień. Słowackie góry Strbskie Pleso, Popradzki Staw. Zapraszam na bloga i kilka zdjęć z tej sesji plenerowej.'}
          headKeywords={'sesja ślubna słowacja,plener strbskie pleso,popradzki staw zdjęcia ślubne'}
          headUrl={'http://99foto.pl/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja/'}

          slug={'sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja'}

          title={'SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA - IWONA i MARCIN'}
          tags={'PLENER STRBSKIE PLESO, POPRADZKI STAW ZDJĘCIA ŚLUBNE, SESJA ŚLUBNA SŁOWACJA'}
          date={'3 LISTOPADA 2017'}

          menuNames={'IWONA I MARCIN2'}
          menuTitle={'SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA2'}

          leadNames={'IWONA I MARCIN3'}
          leadTitle={'SESJA ŚLUBNA STRBSKIE PLESO i POPRADZKI STAW, SŁOWACJA3'}
          leadUrl={'opactwo-cystersow-w-mogile-sesja-zdjeciowa-kasprowy'} 
          backgroundImage={'url(/static/parallax1.jpg)'}
          />
      </div>
    );
  }
}