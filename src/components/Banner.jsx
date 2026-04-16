import sphinxImg from '../assets/sphinx.png';

const Banner = () => {
    return(
        <div className="panel banner">
            <div className="imgContainer">
                <img src={sphinxImg} alt="Sphinx Image" />
            </div>
            <h1>A-IAM Auto Certification</h1>
            <div className="imgContainer">
                <img src={sphinxImg} alt="Sphinx Image" className='reversed' />
            </div>
            
        </div>
    );
}

export default Banner;