export const validate = (data) => {
  let errors = {};
  if (!/^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/.test(data.name)) {
    errors.name = "*";
  }
  if (!/[0-9]/.test(data.phone)) {
    errors.phone = "*";
  }
  if (!/^[A-Z0-9._%+-]+@([A-Z0-9-]+.)+[A-Z]{2,4}$/i.test(data.email)) {
    errors.email = "*";
  }
  return errors;
};
