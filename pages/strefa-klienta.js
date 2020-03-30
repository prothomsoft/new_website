import Clientlist from "../components/clientlist";
import Fetch from "isomorphic-unfetch";

function BlogListComponent({ posts }) {
    return (
        <div>
            <Clientlist
                posts={posts}
                headTitle={"Strefa klienta"}
                headDescription={"Strefa klienta to miejsce, w którym możesz oglądać zdjęcia i dzielić się nimi ze znajomymi i rodziną. Serdecznie zapraszam !"}
                headKeywords={"Strefa klienta, moje zdjęcia, dobre zdjęcia"}
                headUrl={"https://99foto.pl/strefa-klienta/"}
                leadNames={"ANNA i PIOTR"}
                leadTitle={"BAZYLIKA BOŻEGO CIAŁA KRAKÓW, FOTOREPORTAŻ ŚLUBNY"}
                leadUrl={"/bazylika-bozego-ciala-krakow-fotoreportaz-slubny"}
                leadImage={"url(/static/bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg)"}
            />
        </div>
    )
  }
export async function getStaticProps() {
  const page = 0;
  const per_page = 100;
  const res = await Fetch(`http://sk.99foto.pl/api/users/clients/${page}/${per_page}`);
  const posts = await res.json();
  return {
      props: {
        posts
      }
    }
}
export default BlogListComponent