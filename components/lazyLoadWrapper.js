import {Fragment} from "react";
import Image from 'next/image';

const LazyLoadWrapper = (props) => {
    return <Fragment>{props.images.map((image, key) => <Image alt={props.title} src={image.imageSrc.replace("https://www.99foto.pl", "")} width={1140} height={image.height} key={key} placeholder="blur" blurDataURL={image.imageSrc.replace("https://www.99foto.pl", "")}/>)}</Fragment>
}
export default LazyLoadWrapper;