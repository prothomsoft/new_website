import Link from 'next/link'
import Layout from '../components/layout'
import Fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import LazyLoad from 'react-lazy-load';
import LazyLoadWrapper from '../components/lazyLoadWrapper'


const SectionWrapper = styled.div`
img {
    max-width: 100%;
    height: auto;
}

margin: 0 auto;
width: 1160px; 
text-align: justify;   
padding: 0px 10px 0px 10px;    

.LazyLoad {
    opacity: 0;
    transition: all 1s ease-in-out;

    &.is-visible {
        opacity: 1;
    }
}
@media (max-width: 1160px) {
    width: 100%;
}
`;

export default class BlogList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        width: '0'
    }    
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

updateWindowDimensions() {  
  this.setState({ width: window.innerWidth });
}

componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {        
    window.removeEventListener('resize', this.updateWindowDimensions);
}

  render() {

    let height = 762;
    if(this.state.width < 1160) {
      height = 0;
    }

    return (
          <Layout title='Blog List Page title' description='Blog List page description'>
          <Link href='/'><a>HOME</a></Link>&nbsp;<Link href='/blog'><a>BLOG</a></Link>  
          <SectionWrapper>
            <ul>
            {this.props.posts.map((post, key) => 
                <PostLink key={post.id} post={post} height={height}/>
            )}
            </ul>
            <hr />
            <p>
            {this.props.previous_page && <Link as={`/blog/page/${this.props.previous_page}`} href={`/blog?page=${this.props.previous_page}`}><a>Prev</a></Link>}&nbsp;&nbsp;
            {this.props.next_page && <Link as={`/blog/page/${this.props.next_page}`} href={`/blog?page=${this.props.next_page}`}><a>Next</a></Link>}
            </p>
          </SectionWrapper>
          <style jsx>{`              
          `}</style>
          </Layout>
      )
  }
}

const PostLink = ({ key, post, height }) => (
  <li key={key}>

    <Link as={`/${post.slug}`} href={`/${post.slug}`}>
        <a dangerouslySetInnerHTML={{ __html: getPostTitle(post.title.rendered) }}/>
    </Link>
    <p style={{textTransform: "uppercase"}}>{getPostDate(post.date)}, TAGI: {getPostTags(post.post_tags)}</p>
    {getProperLazyLoad(getPostImage(post.content.rendered), height)}
    <p dangerouslySetInnerHTML={{ __html: getPostContent(post.content.rendered) }}/>
    <Link as={`/${post.slug}`} href={`/${post.slug}`}>
        <a>Czytaj dalej</a>
    </Link>
    <hr/>
  </li> 
)

function getProperLazyLoad(imgSrc, height) {
  if(height === 0) {
    return <LazyLoad offsetVertical={300}><img src={imgSrc} /></LazyLoad>
  } else {
    return <LazyLoad height={height} offsetVertical={300}><img src={imgSrc} /></LazyLoad>
  }  
}

function getPostTags(content) {
  let returnContent = "";
  for (let i = 0; i < 5; i++) { 
    if(content[i]) {
      returnContent = returnContent.concat(content[i].name);
      returnContent = returnContent.concat(", ");
    } 
  }
  return returnContent = returnContent.substring(0, returnContent.length-2);  
}

function getPostDate(content) {
  let postDate = new Date(Date.parse(content));
  let MonthName = new Array(12) 
  MonthName[0] = "stycznia " 
  MonthName[1] = "lutego " 
  MonthName[2] = "marca " 
  MonthName[3] = "kwietnia " 
  MonthName[4] = "maja " 
  MonthName[5] = "czerwca " 
  MonthName[6] = "lipca " 
  MonthName[7] = "sierpnia " 
  MonthName[8] = "września " 
  MonthName[9] = "października " 
  MonthName[10] = "listopada " 
  MonthName[11] = "grudnia ";
  let month = postDate.getMonth();
  let day = postDate.getDate(); 
  let year = postDate.getFullYear() 
  return day + " " + MonthName[month] + " " + year;
}

function getPostContent(content) {
  let fields = content.split('<!--more-->');
  return fields[0].concat("</p>");
}

function getPostTitle(content) {
  return content;
}

function getPostImage(content) {
  let fields = content.split('\" alt=\"');
  fields = fields[0].split('<img src="');
  return fields[1];
}