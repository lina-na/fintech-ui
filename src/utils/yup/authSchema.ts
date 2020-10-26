import * as Yup from 'yup';
//TODO: match fields
export const authSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .label('Email')
    .required()
    .min(5, 'Seems a bit short...'),
  password: Yup.string()
    .label('Password')
    .required(
      'Please valid password. One uppercase, one lowercase, one special character and no spaces',
    )
    .min(4, 'Seems a bit short...')
    .max(20, 'We prefer insecure system, try a shorter password.'),
});
