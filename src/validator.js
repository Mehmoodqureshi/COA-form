import validator from "validator/es";

export const fieldValidator = (fieldName, value, type, error = {}) => {
  let err = error;
  switch (type) {
    case "checkbox":
      if (!value) {
        err["msg"] = "Please Select Required Checkboxes";
      } else {
        delete err.msg;
      }
      break;
    case "text":
      switch (fieldName) {
        case "arNumber":
          if (value.dontHaveARN) {
            delete err.arNumber;
          } else {
            if (!/\bA-[0-9]{9}\b/.test(value.arNumber)) {
              err["arNumber"] =
                "Please Enter Valid Number! Please Check Placeholders";
            } else {
              delete err.arNumber;
            }
          }
          break;
        case "uscisOAN":
          if (value.dontHaveUSCIS) {
            delete err.uscisOAN;
          } else {
            if (!/^\d{12}$/.test(value.uscisOAN)) {
              err["uscisOAN"] =
                "Please Enter Valid Number! Please Check Placeholders";
            } else {
              delete err.uscisOAN;
            }
          }
          break;
        case "usssNumber":
          if (value.dontHaveUSSS) {
            delete err.usssNumber;
          } else {
            if (!/^\d{9}$/.test(value.usssNumber)) {
              err["usssNumber"] =
                "Please Enter Valid Number! Please Check Placeholders";
            } else {
              delete err.usssNumber;
            }
          }
          break;
        default:
          break;
      }
      break;
    case "required":
      if (!value[fieldName]) {
        err[fieldName] = "This is a required Field!";
      } else {
        delete err[fieldName];
      }
      break;
    case "requiredWithSpace":
      if (
        !value ||
        (value && !value[fieldName]) ||
        !/^[a-zA-Z, ]+$/.test(value[fieldName])
      ) {
        err[fieldName] = "This is a required Field with characters only!";
      } else {
        delete err[fieldName];
      }
      break;
    case "requiredBool":
      if (typeof value[fieldName] !== "boolean") {
        err[fieldName] = "This is a required Field!";
      } else {
        delete err[fieldName];
      }
      break;
    case "nonZero":
      if (!value[fieldName]) {
        err[fieldName] = "This is a required Field!";
      } else if (!(value[fieldName] > 0)) {
        err[fieldName] = "This field must have Non-Zero value!";
      } else {
        delete err[fieldName];
      }
      break;
    case "weight":
      if (!/^\d{3}$/.test(value[fieldName])) {
        err[fieldName] = "This is a required field(3 digit pound value)!";
      } else {
        delete err[fieldName];
      }
      break;
    case "feet":
      if (!/^\d{1}$/.test(value[fieldName])) {
        err[fieldName] = "This is a required field(1 digit feet value)!";
      } else {
        delete err[fieldName];
      }
      break;
    case "inch":
      if (!/^\d{2}$/.test(value[fieldName])) {
        err[fieldName] = "This is a required field(2 digit inch value)!";
      } else {
        delete err[fieldName];
      }
      break;
    case "phone":
      if (value[fieldName]) {
        let updatedValue = value[fieldName]
          .replace("(", "")
          .replace(")", "")
          .replace(/-/g, "");
        if (!/^\d{10}$/.test(updatedValue)) {
          err[fieldName] = "This is a required field!";
        } else {
          delete err[fieldName];
        }
      } else {
        err[fieldName] = "This is a required field!";
      }
      break;
    case "adNumber":
      if (!/^\d{11}$/.test(value[fieldName])) {
        err[fieldName] = "This is a required field(11 digit record number)!";
      } else {
        delete err[fieldName];
      }
      break;
    case "cardNumber":
      if (!value[fieldName]) {
        err[fieldName] = "Card Number is a required Field!";
      } else if (
        value[fieldName].length > 16 ||
        !/^[0-9]+$/.test(value[fieldName])
      ) {
        err[fieldName] = "Please Enter Correct Card Number";
      } else {
        delete err[fieldName];
      }
      break;
    case "cardExpiry":
      if (!value[fieldName]) {
        err[fieldName] = "Expiry is a required Field!";
      } else if (
        Number(value.cardExpiry.split("/")[0]) >= 13 ||
        Number(value.cardExpiry.split("/")[0]) < 1
      ) {
        err[fieldName] = "Month Field Accepts only 1 to 12!";
      } else if (
        Number(value.cardExpiry.split("/")[1]) <
        Number(new Date().getFullYear().toString().substring(2, 4))
      ) {
        err[fieldName] = "Year Field Accepts only Future Year!";
      } else {
        delete err[fieldName];
      }
      break;
    case "cvc":
      if (!value[fieldName]) {
        err[fieldName] = "cvc is a required Field!";
      } else if (
        value[fieldName].length > 4 ||
        !/^[0-9]+$/.test(value[fieldName])
      ) {
        err[fieldName] = "cvc Field Accepts only 4 digit!";
      } else {
        delete err[fieldName];
      }
      break;
    case "paymentzipcode":
      if (!value[fieldName]) {
        err[fieldName] = "Zipcode is a required Field!";
      } else if (
        value[fieldName].length < 3 ||
        value[fieldName].length > 6 ||
        !/^[0-9]+$/.test(value[fieldName])
      ) {
        err[fieldName] = "Zipcode Field Accepts only 3 to 6 digit!";
      } else {
        delete err[fieldName];
      }
      break;
    case "email":
      if (!value[fieldName]) {
        err[fieldName] = "This is a required Field!";
      } else if (!validator.isEmail(value[fieldName])) {
        err[fieldName] = "Please enter valid Email!";
      } else {
        delete err[fieldName];
      }
      break;
    case "arrayLength":
      if (
        !value[fieldName] ||
        (value[fieldName] && !(value[fieldName].length > 0))
      ) {
        err[fieldName] = "Select Atleast one value.";
      } else {
        delete err[fieldName];
      }
      break;
    case "requiredChar":
      if (!value[fieldName] || !/^[a-zA-Z]+$/.test(value[fieldName])) {
        err[fieldName] =
          "This is a required Field with only characters allowed!";
      } else {
        delete err[fieldName];
      }
      break;
    default:
      if (!value) {
        err["msg"] = "Please Provide Required Value";
      } else {
        delete err.msg;
      }
      break;
  }
  let isValid = !(Object.keys(err).length > 0);
  return { isValid, error: err };
};

export const arrayFieldsValidator = (
  fieldName,
  value,
  index,
  type = "required",
  arrayName,
  error = {}
) => {
  let err = error;
  if (!err[arrayName]) {
    err = {
      ...err,
      [arrayName]: [],
    };
  }
  switch (type) {
    case "required":
      if (!value[arrayName][index][fieldName]) {
        err[arrayName][index] = {
          ...err[arrayName][index],
          [fieldName]: "This is a required Field!",
        };
      } else {
        if (err[arrayName] && err[arrayName][index])
          delete err[arrayName][index][fieldName];
      }
      break;
    case "requiredChar":
      if (
        !value[arrayName][index][fieldName] ||
        !/^[a-zA-Z]+$/.test(value[arrayName][index][fieldName])
      ) {
        err[arrayName][index] = {
          ...err[arrayName][index],
          [fieldName]: "This is a required Field with only characters allowed!",
        };
      } else {
        if (err[arrayName] && err[arrayName][index])
          delete err[arrayName][index][fieldName];
      }
      break;
    default:
      break;
  }
  if (
    err.hasOwnProperty("childrenInfo") &&
    err.childrenInfo[index] &&
    Object.keys(err.childrenInfo[index]).length === 0
  ) {
    delete err.childrenInfo[index];
  }

  if (err.childrenInfo && Object.keys(err.childrenInfo).length === 0) {
    delete err.childrenInfo;
  }

  let isValid = !(Object.keys(err).length > 0);
  return { isValid, error: err };
};
