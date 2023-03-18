import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import moment from "moment";

const initialValues = {
  name: "",
  email: "",
  birthdate: moment().format("YYYY-MM-DD"),
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  birthdate: Yup.string().required("Birthdate is required"),
});

const onSubmit = (values) => {
  console.log(values);
};

const MyForm = () => {
  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" />
            </div>
            <div>
              <label htmlFor="birthdate">Birthdate</label>
              <Field
                type="date"
                name="birthdate"
                value={moment(values.birthdate).format("YYYY-MM-DD")}
                onChange={(event) =>
                  setFieldValue(
                    "birthdate",
                    moment(event.target.value).format("YYYY-MM-DD")
                  )
                }
              />
              <ErrorMessage name="birthdate" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;