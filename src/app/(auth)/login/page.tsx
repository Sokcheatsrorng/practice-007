"use client"
import React from 'react'
import { Metadata } from 'next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// export const metadata: Metadata = {
//   icons: {
//     icon: "/assets/pic.jpg",
//   },
//   title: "Login",
//   description: "Welcome to Our Page.",
//   keywords: ['shop', 'ecommerce', 'sell']
// };

const UserSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  comfirmPassword: Yup.string()
     .min(8,"Password must be at least 8 characters")
     .required("Required"),
  firstName : Yup.string().required("Required"),
  lastName: Yup.string().required("Required")
});

const page = () => {
  const handleSubmit = (values: any) => {
    const { email, password, confirmPassword, firstName, lastName } = values;
    console.log("value", values);
    fetch("https://store.istad.co/api/user/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password1: password,
        password2: confirmPassword,
        first_name: firstName,
        last_name: lastName,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };
  
 

  return (
       <div className="w-full mt-9 flex gap-3 flex-col justify-center items-center">
      <Formik
        initialValues={{
         email: "",
         password: "",
         confirmPassword: "",
         firstName: "",
         lastName: ""
        }}

        validationSchema={UserSchema}
        onSubmit={(values, { setSubmitting }) => {
          // alert(JSON.stringify(values, null, 2));
          // console.log(values)
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="flex flex-col">
              <label htmlFor="email">Email:</label>
              <Field
                className="w-[400px] border border-gray-300 rounded-md"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email">
                {(msg) => <div className="text-red-600 text-[14px]">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password:</label>
              <Field
                className="w-[400px] border border-gray-300 rounded-md"
                name="password"
                type="password"
                placeholder="Enter your Password"
              />
              <ErrorMessage name="password">
                {(msg) => <div className="text-red-600 text-[14px]">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <Field
                className="w-[400px] border border-gray-300 rounded-md"
                name="confirmPassword"
                type="password"
                placeholder="Enter your confirm Password "
              />
              <ErrorMessage name="confirmPassword">
                {(msg) => <div className="text-red-600 text-[14px]">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="flex flex-col">
              <label htmlFor="firstName">FirstName:</label>
              <Field
                className="w-[400px] border border-gray-300 rounded-md"
                name="firstName"
                type="text"
                placeholder="Enter your first name "
              />
              <ErrorMessage name="firstName">
                {(msg) => <div className="text-red-600 text-[14px]">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName">LastName:</label>
              <Field
                className="w-[400px] border border-gray-300 rounded-md"
                name="lastName"
                type="text"
                placeholder="Enter your last name "
              />
              <ErrorMessage name="lastName">
                {(msg) => <div className="text-red-600 text-[14px]">{msg}</div>}
              </ErrorMessage>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 text-white rounded-md mt-6 bg-blue-500 px-4">
                Submit 
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default page
