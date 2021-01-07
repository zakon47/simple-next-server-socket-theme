import React, { FC } from 'react';
import { Field, Form } from 'react-final-form';
import MyButton from '../../button/my-button';

interface IProps {

}

const FormSignup: FC<IProps> = (props) => {
  const {} = props;
  const onSubmit = (d) => {
    console.log(11, d)
  }
  return (
    <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors:any = {}
        if (!values.lastName) {
          errors.lastName = 'Required!'
        }
        return errors
      }}
      render={({handleSubmit, submitting, pristine, form, values}) => {
        return (
          <>
            <div><Field component="input" name="name" placeholder="введите имя"/></div>
            <br/>
            <div>
              <Field name="lastName">
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