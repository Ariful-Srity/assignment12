import React from 'react';
import notfound from '../../../images/notfound.jpg';

const Notfound = () => {
    return (
        <div>
            <div>
                <h2 className="text-danger text-center">Page Not Found!</h2>
                <img className='items-center flex my-8' src={notfound} alt="" />
            </div>
        </div>
    );
};

export default Notfound;