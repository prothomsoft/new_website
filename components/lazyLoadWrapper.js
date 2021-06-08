import {Fragment} from "react";
import Image from 'next/image';

const LazyLoadWrapper = (props) => {
    return <Fragment>{props.images.map((image, key) => <img alt={props.title} src={image.imageSrc.replace("https://99foto.pl", "")} width={1140} height={image.height} key={key} />)}</Fragment>
}
export default LazyLoadWrapper;