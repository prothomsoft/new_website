import Clientlist from "../components/clientlist";
import Fetch from "isomorphic-unfetch";

function BlogListComponent({ posts }) {
    return (
        <div>
            <Clientlist
                posts={posts}
                headTitle={"Zdjęcia ślubne Kraków"}
                headDescription={"Zdjęcia ślubne Kraków. Piękne zdjęcia, pełne emocji reportaże ślubne. Sprawdź moją ofertę i portfolio. Serdecznie zapraszam !"}
                headKeywords={"zdjęcia ślubne Kraków, fotograf ślubny, sesja zdjęciowa"}
                headUrl={"https://99foto.pl/blog/"}
                leadNames={"IZABELA i ARKADIUSZ"}
                leadTitle={"DOM WESELNY EUFORIA MYŚLENICE i SŁONECZNE LOVE"}
                leadUrl={"/dom-weselny-euforia-myslenice-i-sloneczne-love"}
                leadImage={"url(/static/dom_weselny_euforia_myslenice_1.jpg)"}
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