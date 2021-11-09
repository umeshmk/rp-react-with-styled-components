export type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type FieldData = {
  name: keyof Inputs;
  type: string;
  placeholder: string;
  //   registerOptions: RegisterOptions;
};

export const data: FieldData[] = [
  {
    name: "name",
    type: "text",
    placeholder: "Name",
  },
  {
    name: "email",
    type: "text",
    placeholder: "Email",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
  },
];
