import React, { Fragment } from "react";
import Image from 'next/image';

export default class LazyLoadWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Fragment>{this.props.images.map((image, key) => <Image src={image.imageSrc.replace("https://99foto.pl", "")} width={1140} height={image.height} />)}</Fragment>
    }
}