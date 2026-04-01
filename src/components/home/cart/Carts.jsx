import React from 'react';

const Carts = () => {
    return (
      <div>
        <div>
          <div>
            <span className="w-15 h-15 border-2 border-amber-600 rounded-full flex items-center justify-center  bg-amber-50">
              <img src="https://i.ibb.co.com/MqvFc6n/user.png" alt="lll" />
            </span>
            <div>
              <h4 className="w-15 h-15 border-2 border-amber-600 rounded-full flex items-center justify-center  bg-amber-50">AI Writing Pro</h4>
              <p>$ 29</p>
            </div>
          </div>
          <p>REMOVE</p>
        </div>
        <div>
          <p>Total</p>
          <p>$78</p>
        </div>
      </div>
    );
};

export default Carts;