import './img_wrapper.css';

function ImageWrapper(props) {
    return(
        <img alt="" className='img-wrapper' src={props.src} />
    );
}

export default ImageWrapper