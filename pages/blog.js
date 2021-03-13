import { useState, useEffect } from 'react';
import Bloglist from "../components/bloglist";
import { isWebPSupport } from "../components/utils/checkWebP";

function BlogListComponent({ posts }) {
    const [supported, setSupported] = useState(false);
    useEffect(() => {
        isWebPSupport(result => {
          setSupported(result)
        })        
      }, [])
    return (
        <div>
            <Bloglist
                posts={posts}
                headTitle={"Zdjęcia ślubne Kraków"}
                headDescription={"Zdjęcia ślubne Kraków. Piękne zdjęcia, pełne emocji reportaże ślubne. Sprawdź moją ofertę i portfolio. Serdecznie zapraszam !"}
                headKeywords={"zdjęcia ślubne Kraków, fotograf ślubny, sesja zdjęciowa"}
                headUrl={"https://99foto.pl/blog/"}
                leadNames={"IZABELA i ARKADIUSZ"}
                leadTitle={"DOM WESELNY EUFORIA MYŚLENICE i SŁONECZNE LOVE"}
                leadUrl={"/dom-weselny-euforia-myslenice-i-sloneczne-love"}
                leadImage={supported ? "url(/static/webp/dom_weselny_euforia_myslenice_1.webp)" : "url(/static/dom_weselny_euforia_myslenice_1.jpg)"}
            />
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch(`http://wp.99foto.pl/wp-json/wp/v2/posts`);
    const posts = await res.json();
    return {
        props: {
            posts
        }
    };
}
export default BlogListComponent;
