import PropTypes from 'prop-types';

const ServicesCard = ({service}) => {

    const {title, img, price} = service ;

    return (
        <div className="card w-96 bg-[] shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl h-64" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-[#444] text-4xl font-bold">{title}</h2>
    <p className='text-[#FF3811] text-2xl font-semibold'>Price : ${price}</p>
    <div className="card-actions">
     
    </div>
  </div>
</div>
    );
};

export default ServicesCard;

ServicesCard.propTypes = {
    service: PropTypes.object
}