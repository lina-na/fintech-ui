import * as Yup from "yup";

export const clientSchema = Yup.object().shape({
  firstname: Yup.string()
    .label('Firstname')
    .required()
    .min(3, 'Seems a bit short...'),
  surname: Yup.string()
    .label('Surname')
    .required()
    .min(3, 'Seems a bit short...'),
  address: Yup.string()
    .label('Address')
    .required()
    .min(3, 'Seems a bit short...'),
  phone: Yup.string()
    .label('Phone')
    .required()
    .min(5, 'Seems a bit short...'),
  ssn: Yup.string()
    .label('ssn')
    .required(
      'SSN is a required field.',
    )
    .min(9, 'the ssn number must not be less than 9')
    .max(9, 'the ssn number must not exceed 9'),
});

//TODO: match
