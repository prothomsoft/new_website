import Bloglist from '../components/bloglist'
import Fetch from 'isomorphic-unfetch'

export default class BlogListComponent extends React.Component {
    render() {
        return (
          <div>
            <Bloglist next_page={this.props.next_page} 
            posts={this.props.posts} 
            previous_page={this.props.previous_page}

            headTitle={'Zdjęcia ślubne Kraków'}
            headDescription={'Zdjęcia ślubne Kraków. Piękne zdjęcia, pełne emocji reportaże ślubne. Sprawdź moją ofertę i portfolio. Serdecznie zapraszam !'}
            headKeywords={'zdjęcia ślubne Kraków, fotograf ślubny, sesja zdjęciowa'}
            headUrl={'http://99foto.pl/blog/'}

            leadNames={'EWELINA i KAMIL'}
            leadTitle={'HOTEL TADEUSZ USZEW i GÓRALSKA SALA WESELNA'}
            leadUrl={'/hotel-tadeusz-uszew-i-goralska-sala-weselna'} 
            leadImage={'url(/static/hotel_tadeusz_uszew_i_goralska_sala_weselna_start.jpg)'}
            />
          </div>
        );
    }
}

BlogListComponent.getInitialProps = async function({ query }) {
  
    const page = parseInt(query.page) || 1
    const per_page = 9
  
    const res = await Fetch(`http://99foto.pl/wp-json/wp/v2/posts?page=${page}&per_page=${per_page}`)
    const posts = await res.json()
  
    const total = res.headers.get("X-WP-Total");
    const totalPages = res.headers.get("X-WP-TotalPages");
  
    let previous_page = 0;
    let next_page = 1;
  
    if(page == 1) {
      previous_page = false
      next_page = page + 1
    } else if (page == totalPages) {
      previous_page = page - 1
      next_page = false
    } else {
      previous_page = page - 1
      next_page = page + 1
    }
    
    return {
      posts: posts,
      previous_page : previous_page,
      next_page : next_page
    }
  }  