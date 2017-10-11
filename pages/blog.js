import Link from 'next/link'
import Layout from '../components/layout'
import Fetch from 'isomorphic-unfetch'

const PostLink = ({ key, post }) => (
  <li key={key}>
    <Link as={`/${post.slug}`} href={`/${post.slug}`}>
        <a dangerouslySetInnerHTML={{ __html: post.title.rendered }}/>        
    </Link>    
  </li> 
)

const Blog = (props) => (  
    <Layout title='Blog Page title' description='Blog page description'>

      <Link href='/'>HOME</Link>&nbsp;<Link href='/blog'>BLOG</Link>  

      <div>
        <ul>
        {props.posts.map((post, key) => 
            <PostLink post={post} key={post.id} />
        )}
        </ul>
        <hr />
        <p>
        {props.previous_page && <Link as={`/blog/page/${props.previous_page}`} href={`/blog?page=${props.previous_page}`}><a>Prev</a></Link>}&nbsp;&nbsp;
        {props.next_page && <Link as={`/blog/page/${props.next_page}`} href={`/blog?page=${props.next_page}`}><a>Next</a></Link>}
        </p>
      
      </div>
      <style jsx>{`
          h1 {
              color: blue;
          }

          ul {
              color: blue;
          }

          li {
              color:blue;                
          }

          @media (max-width: 1146px) {
            div {
              width: 100%;
            }
          }

          
          div {
                width: 1146px;
                margin: 0 auto;
                padding: 0 10px;
                position: relative;
                border: 1px solid #000;
              }
      `}</style>
      </Layout>
)

Blog.getInitialProps = async function({ query }) {

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

export default Blog