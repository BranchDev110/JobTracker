export const SIGN_IN = 0x0001;
export const SIGN_UP = 0x0010;

export const FORM_DATA = [
  {
    id: "firstname",
    type: "text",
    text: "First name",
    name: "firstname",
    require: SIGN_UP
  },
  {
    id: "lastname",
    type: "text",
    text: "Last name",
    name: "lastname",
    require: SIGN_UP
  },
  {
    id: "user-email",
    type: "email",
    text: "Email Address",
    name: "email",
    require: SIGN_IN | SIGN_UP
  },
  {
    id: "password",
    type: "password",
    text: "User password",
    name: "password",
    require: SIGN_IN | SIGN_UP
  },
  {
    id: "password-confirm",
    type: "password",
    text: "Password Confirm",
    name: "confirm",
    require: SIGN_UP
  }  
]