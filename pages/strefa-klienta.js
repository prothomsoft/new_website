import Clientlist from "../components/clientlist";

function BlogListComponent({ posts }) {
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
                leadImage={"url(https://res.cloudinary.com/cloud99fotopl/image/fetch/f_auto,q_auto/https://99foto.pl/static/sala_weselna_biala_wilczyca_kocmyrzow.jpg)"}
            />
        
    );
}
export async function getStaticProps() {
    const res = await fetch(`https://sk.99foto.pl/api/users/clients`);
    const posts = await res.json();
    return {
        props: {
            posts,
        },
        revalidate: 300
    };
}
export default BlogListComponent;
