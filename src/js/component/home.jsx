import React from "react";

//include images into your bundle
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons'; 


//create your first component
const Home = ({digito1,digito2,digito3,digito4,digito5,digito6}) => {
	return (
		<div className="container-fluid d-flex justify-content-between bg-dark" style={{ height: '75px' }}>
			<div className="rounded m-auto d-flex justify-content-center align-items-center" style={{ height: '65px', width: '50px', backgroundColor: 'rgba(255, 255, 255, 0.03)', fontSize: '30px' }}>
				<FontAwesomeIcon icon={faClock} style={{ color: '#ffffff' }} />
			</div>
			<div className="rounded m-auto d-flex justify-content-center align-items-center" style={{ height: '65px', width: '50px', backgroundColor: 'rgba(255, 255, 255, 0.03)', fontSize: '30px' }}>
				<p className="fw-bold text-white w-100 h-100 d-flex justify-content-center align-items-center m-0">{digito1}</p>
			</div>
			<div className="rounded m-auto d-flex justify-content-center align-items-center" style={{ height: '65px', width: '50px', backgroundColor: 'rgba(255, 255, 255, 0.03)', fontSize: '30px' }}>
				<p className="fw-bold text-white w-100 h-100 d-flex justify-content-center align-items-center m-0">{digito2}</p>
			</div>
			<div className="rounded m-auto d-flex justify-content-center align-items-center" style={{ height: '65px', width: '50px', backgroundColor: 'rgba(255, 255, 255, 0.03)', fontSize: '30px' }}>
				<p className="fw-bold text-white w-100 h-100 d-flex justify-content-center align-items-center m-0">{digito3}</p>
			</div>
			<div className="rounded m-auto d-flex justify-content-center align-items-center" style={{ height: '65px', width: '50px', backgroundColor: 'rgba(255, 255, 255, 0.03)', fontSize: '30px' }}>
				<p className="fw-bold text-white w-100 h-100 d-flex justify-content-center align-items-center m-0">{digito4}</p>
			</div>
			<div className="rounded m-auto d-flex justify-content-center align-items-center" style={{ height: '65px', width: '50px', backgroundColor: 'rgba(255, 255, 255, 0.03)', fontSize: '30px' }}>
				<p className="fw-bold text-white w-100 h-100 d-flex justify-content-center align-items-center m-0">{digito5}</p>
			</div>
			<div className="rounded m-auto d-flex justify-content-center align-items-center" style={{ height: '65px', width: '50px', backgroundColor: 'rgba(255, 255, 255, 0.03)', fontSize: '30px' }}>
				<p className="fw-bold text-white w-100 h-100 d-flex justify-content-center align-items-center m-0">{digito6}</p>
			</div>
		</div>
		
	);
};

export default Home;
