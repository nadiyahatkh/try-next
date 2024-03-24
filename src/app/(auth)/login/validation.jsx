const Validation = (value) => {
    let error = {};
    if (!value.email) {
      error.email = "Email is Requierd";
    } else if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(value.email)) {
      error.email = "Email invalid";
    }
  
    if (!value.password) {
      error.password = "Password Is Required";
    } else if (value.password.length < 8) {
      error.password = "Password Is Invalid";
    }
  
    return error;
  };
  
  export default Validation;