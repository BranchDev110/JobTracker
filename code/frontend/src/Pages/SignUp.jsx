import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Logo from "../assets/logo.png";

import FormItem from "../Components/FormComponent";
import Remember from "../Components/FormComponent/Remember";
import SignButton from "../Components/FormComponent/SignButton";

import { FORM_DATA as data, SIGN_UP } from "../utils/constant";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            src={Logo}
            alt="HH Logo"
            height={150}
            width={150}
            className="mx-auto"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Hop Hunter
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            If you haven't got any account,{" "}
            <Link to="/signup">
              <b>Sign up</b>
            </Link>{" "}
            to hunt free jobs.
          </p>
        </div>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirm: "",
          }}
          validationSchema={Yup.object({
            firstname: Yup.string().required("First name Required"),
            lastname: Yup.string().required("Last name Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string().required("Required"),
            confirm: Yup.string()
              .required("Please confirm your password")
              .oneOf([Yup.ref("password")], "Passwords do not match"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            const response = await axios
              .post(
                "http://localhost:8000/api/profile/?format=json",
                {
                  name: values.firstname,
                  email: values.email,
                  password: values.password,
                }
              );
              console.log(response);
            // const response = await fetch(
            //   "http://localhost:8000/auth/register",
            //   {
            //     method: "POST",
            //     mode: "cors",
            //     headers: {
            //       "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(values),
            //   }
            // );
          }}
        >
          <Form className="mt-8 space-y-6">
            {data
              .filter((item) => (item.require & SIGN_UP) !== 0)
              .map((item) => (
                <FormItem
                  label={item.text}
                  name={item.name}
                  id={item.id}
                  type={item.type}
                  placeholder={item.text}
                  key={item.id}
                />
              ))}
            <Remember type={SIGN_UP} />
            <SignButton type={SIGN_UP} />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
