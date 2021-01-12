import React, { FC } from 'react';
import { Field, Form } from 'react-final-form';
import MyButton from '../../button/my-button';

interface IProps {

}

const FormSignup: FC<IProps> = (props) => {
  const {} = props;
  const onSubmit = async (d) => {
    const data = await fetch("http://localhost:3100/api/auth/signin",{
      method: "POST",
      body: JSON.stringify(d)
    })
    const JS = await data.json();
    console.log(11, d, JS);
  }
  return (
    <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors:any = {}
        if (!values.password) {
          errors.password = 'Required!'
        }
        return errors
      }}
      render={({handleSubmit, submitting, pristine, form, values}) => {
        return (
          <>
            <div><Field component="input" name="email" placeholder="введите имя"/></div>
            <br/>
            <div>
              <Field name="password">
                {({input, meta}) => (
                  <>
                    <input {...input} type='text' placeholder="введите фамилию"/>
                    &nbsp;&nbsp;{meta.error && meta.touched && <span>{meta.error}</span>}
                  </>
                )}
              </Field>
            </div>
            <p>
              <MyButton onClick={handleSubmit} disabled={submitting || pristine}>отправить</MyButton>
              &nbsp;
              <MyButton onClick={form.reset} disabled={submitting || pristine}>сбросить</MyButton>
            </p>
            <br/>
          </>
        )
      }}
    />
  );
};

export default FormSignup;