import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
import { isWebPSupport } from "../components/utils/checkWebP";

function BlogListComponent({ posts }) {
    const [supported, setSupported] = useState(false);
    useEffect(() => {
        isWebPSupport(result => {
          setSupported(result)
        })        
      }, [])
    const Clientlist = dynamic(() => import('../components/clientlist'))
    return (        
            <Clientlist
                posts={posts}
                headTitle={"Strefa klienta"}
                headDescription={"Strefa klienta to miejsce, w którym możesz oglądać zdjęcia i dzielić się nimi ze znajomymi i rodziną. Serdecznie zapraszam !"}
                headKeywords={"Strefa klienta, moje zdjęcia, dobre zdjęcia"}
                headUrl={"https://99foto.pl/strefa-klienta/"}
                leadNames={"MONIKA i MARTIN"}
                leadTitle={"WESELE MIĘDZYNARODOWE i POLSKIE TRADYCJE WESELNE"}
                leadUrl={"/wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne"}
                leadImage={supported ? "url(/static/webp/sala_weselna_biala_wilczyca_kocmyrzow.webp)" : "url(/static/sala_weselna_biala_wilczyca_kocmyrzow.jpg)"}
            />
        
    );
}
export async function getStaticProps() {
    const res = await fetch(`http://sk.99foto.pl/api/users/clients`);
    const posts = await res.json();
    return {
        props: {
            posts,
        },
    };
}
export default BlogListComponent;
