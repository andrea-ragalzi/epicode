import { Component } from "react";

class ImageComponent extends Component {
    render() {
        const { size, color } = this.props;
        const src = `https://placehold.it/${size}/${color}`;
        console.log(src);
        return (
            <img src={src} alt="logo" />
        );
    }
}

export default ImageComponent;
