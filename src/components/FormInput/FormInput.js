import React, { useState } from "react";
import { useForm } from "react-hook-form";

/*******************  FORM *******************/
export function Form({ defaultValues, children, onSubmit, watchFields = [] }) {

  /* HOOK FORM */
  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors },
    control,
    getValues,
    resetField,
  } = useForm({ defaultValues: defaultValues });

  const subscricedWatchFields = watch(watchFields);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      {children(register, errors, { control, getValues, resetField }, subscricedWatchFields)}
    </form>
  );
}


/*******************  STANDARD INPUT *******************/
export function StandardInput({
  class_name,
  label,
  inputType,
  append,
  required = false,
  name,
  register,
  errors,
  value,
  rules,
  pattern,
  ...rest
}) {

  return (
    <div className={class_name || ""}>
      <div className="standard-form">
        <div action="" className="form">
          <input className="form__input" placeholder=" "
            type={inputType || "text"}
            pattern={pattern}
            {...register(name, { required })}
            {...rest}
          />
          <label htmlFor="" className="form__label">{label === undefined ? name.toUpperCase().split("_").join(" ") : label}</label>
          {append && <span className='form__append'>{append}</span>}
        </div>
      </div>
    </div>
  );
}



/*******************  OUTLINED INPUT *******************/
export function OutlinedInput({
  class_name,
  label,
  name,
  inputType,
  append,
  required = false,
  register,
  errors,
  value,
  rules,
  pattern,
  ...rest
}) {

  return (
    <>
      <div className={class_name || ""}>
        <div className="outlined-form">
          <div action="" className="form">
            <input className="form__input" placeholder=" " autoComplete="off"
              type={inputType || "text"}
              pattern={pattern}
              {...register(name, { required })}
              {...rest}
            />
            <label htmlFor="" className="form__label">{label === undefined ? name.toUpperCase().split("_").join(" ") : label}</label>
            {append && <span className='form__append'>{append}</span>}
          </div>
        </div>
      </div>
    </>
  );
}




/*******************  PLAIN INPUT *******************/
export function PlainInput({
  class_name,
  label,
  name,
  inputType,
  append,
  required = false,
  register,
  errors,
  value,
  rules,
  pattern,
  ...rest
}) {

  return (
    <>
      <div className={class_name || ""}>
        <div className="plain-form">
          <div action="" className="form">
            <label htmlFor="" className="form__label">{label === undefined ? name.toUpperCase().split("_").join(" ") : label}</label>
            <input className="form__input" autoComplete="off"
              type={inputType || "text"}
              pattern={pattern}
              {...register(name, { required })}
              {...rest}
            />
            {append && <span className='form__append'>{append}</span>}
          </div>
        </div>
      </div>
    </>
  );
}



/*******************  PLAIN TEXTAREA *******************/
export function PlainTextArea({
  class_name,
  label,
  name,
  inputType,
  append,
  required = false,
  register,
  errors,
  value,
  rules,
  pattern,
  ...rest
}) {

  return (
    <>
      <div className={class_name || ""}>
        <div className="plain-form">
          <div action="" className="form">
            <label htmlFor="" className="form__label">{label === undefined ? name.toUpperCase().split("_").join(" ") : label}</label>
            <textarea className="form__textarea" autoComplete="off" rows='5' cols='5'
              type={inputType || "text"}
              pattern={pattern}
              {...register(name, { required })}
              {...rest}
            />
            {append && <span className='form__append'>{append}</span>}
          </div>
        </div>
      </div>
    </>
  );
}



/*******************  PLAIN FORM *******************/
export function PlainSelectInput() {

  return (
    <>

    </>
  );
}