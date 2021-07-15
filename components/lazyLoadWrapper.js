import {Fragment} from "react";


const LazyLoadWrapper = (props) => {
    return <Fragment>{props.images.map((image, key) => <img alt={props.title} src={image.imageSrc.replace("https://www.99foto.pl", "")} width={1140} height={image.height} key={key} />)}</Fragment>
}
export default LazyLoadWrapper;