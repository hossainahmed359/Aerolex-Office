import { Form, StandardInput } from './../src/components/FormInput/FormInput';

const onSubmit = async (data, e) => {
  console.log(data, e)
}

const Login = () => {
  return (
    <div className="login">
      <div className="center">
        <div className="contents">
          <div className="left-items">
            <div className="banner-section">
              <div className="top-content">
                <div className="company-logo">
                  <h1 className=""><span className="text-primary">aero</span><span className="text-dark">lex</span></h1>
                </div>
                <div className="create-account">
                  <button className="btn-secondary ">
                    Create Account
                  </button>
                </div>
              </div>
              <div className="banner-img">
                <img src="https://i.ibb.co/JsRWcgx/10-6.jpg" alt="banner" />
              </div>
              <div className="bottom-titles">
                <h1>Booking your Flight & Hotel Anytime.</h1>
                <h1>Easier & Effective than before.</h1>
              </div>
            </div>
          </div>
          <div className="right-items">
            <div className="form-section">
              <h1>Log In to Your Account</h1>
              <Form onSubmit={onSubmit} defaultValues={null} watchFields={[]}>
                {(register, errors, undefined, subscribedWatchFields) => {
                  return (
                    <>
                      <StandardInput
                        register={register}
                        errors={errors}
                        label={'Username'}
                        inputType={'text'}
                        name={'name'}
                        required={true}
                        append={'append'}
                      />
                      <StandardInput
                        register={register}
                        errors={errors}
                        label={'Password'}
                        inputType={'password'}
                        name={'password'}
                        required={true}
                        append={'append'}
                      />
                      <div className="checkbox-pass">
                        <div className="check-box">
                          <input className="check-btn" type="checkbox" name="remember-me" id="remember-me" />
                          <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <div className="pass">Forgot password?</div>
                      </div>
                      <button type="submit" className="btn-danger-lg ">Login</button>
                      <div className="signup_link">
                        Not a member? <a href="#">Signup</a>
                      </div>
                    </>
                  )
                }}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


/* Prev Code */

{/*
<form action="" method="post">
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
  <div className="checkbox-pass">
    <div className="check-box">
      <input className="check-btn" type="checkbox" name="remember-me" id="remember-me" />
      <label htmlFor="remember-me">Remember me</label>
    </div>
    <div className="pass">Forgot password?</div>
  </div>
  <button type="submit" className="btn-danger-lg ">Login</button>

  <div className="signup_link">
    Not a member? <a href="#">Signup</a>
  </div>
</form>
 */}