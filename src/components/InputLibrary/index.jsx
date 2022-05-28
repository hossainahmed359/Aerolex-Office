import React from 'react';

const InputLibrary = () => {
  return (
    <div>
      {/* STANDARD */}
      <div className='standard-form-container'>
        <h2>Standard</h2>
        <div className="standard-form">
          <div action="" className="form">
            <input type="text" className="form__input" placeholder=" " />
            <label htmlFor="" className="form__label">Email</label>
            <span className='form__append'>Append</span>
          </div>
        </div>
        <div className="standard-form">
          <div action="" className="form">
            <input type="password" className="form__input" placeholder=" " />
            <label htmlFor="" className="form__label">Password</label>
          </div>
        </div>
      </div>
      {/* OUTLINED */}
      <div className='outlined-form-container'>
        <h2>Outlined</h2>
        <div className="outlined-form">
          <div action="" className="form">
            <input type="text" className="form__input" placeholder=" " autoComplete='false' />
            <label htmlFor="" className="form__label">Email</label>
            <span className='form__append'>Append</span>
          </div>
        </div>
        <div className="outlined-form">
          <div action="" className="form">
            <input type="password" className="form__input" placeholder=" " />
            <label htmlFor="" className="form__label">Password</label>
          </div>
        </div>
      </div>
      {/* PLAIN */}
      <div className='plain-form-container'>
        <h2>Standard</h2>
        <div className="plain-form">
          <div action="" className="form">
            <label htmlFor="" className="form__label">Email</label>
            <input type="text" className="form__input" placeholder=" " />
            <span className='form__append'>Append</span>
          </div>
        </div>
        <div className="plain-form">
          <div action="" className="form">
            <label htmlFor="" className="form__label">Password</label>
            <input type="password" className="form__input" placeholder=" " />
            <span className='form__append'>Append</span>
          </div>
        </div>
        <div className="plain-form">
          <div action="" className="form">
            <label htmlFor="" className="form__label">Description</label>
            <textarea rows='5' cols='5' type="text" className="form__textarea" placeholder=" " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputLibrary;