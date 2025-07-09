import Image from '../assets/minion.png';

function Footer() {
  return (
    <div className="container mt-5 pt-5 ">
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-start ms-md-5">
        <img
          src={Image}
          alt="Minion"
          style={{ height: '200px', marginRight: '10px' }}
          className="img-fluid"
        />
        <h2 className="mb-0 ffont text-center text-md-start">
          Technology is the foundation of innovation
        </h2>
      </div>
    </div>
  );
}

export default Footer;
