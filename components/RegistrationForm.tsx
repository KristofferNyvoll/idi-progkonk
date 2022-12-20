import styles from "../styles/styling.module.css";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

export default function RegistrationForm() {
  const grades = [
    "1.Klasse",
    "2.Klasse",
    "3.Klasse",
    "4.Klasse",
    "5.Klasse",
    "Ikke student",
  ];
  const universities = ["NTNU", "UiO", "UiB", "Annet"];
  const validationSchema = Yup.object({
    teamName: Yup.string().required(),
    teamMembers: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        univesity: Yup.string()
          .required("Vennligst velg universitet")
          .oneOf(universities),
        grade: Yup.string()
          .required("Vennligst velg klassetrinn")
          .oneOf(grades),
      })
    ),
    participation: Yup.string().required(),
    source: Yup.string(),
    pizzaWish: Yup.string(),
  });

  const initialValues = {
    teamName: "",
    teamMembers: [],
    participation: "",
    source: "",
    pizzaWish: "",
  };

  //   const onChangeteamMembers = (e, field, values, setValues) => {
  //     // update dynamic form
  //     const teamMembers = [...values.teamMembers];
  //     const numberOfteamMembers = e.target.value || 0;
  //     const previousNumber = parseInt(field.value || '0');
  //     if (previousNumber < numberOfteamMembers) {
  //         for (let i = previousNumber; i < numberOfteamMembers; i++) {
  //             teamMembers.push({ name: '', email: '' });
  //         }
  //     } else {
  //         for (let i = previousNumber; i >= numberOfteamMembers; i--) {
  //             teamMembers.splice(i, 1);
  //         }
  //     }
  //     setValues({ ...values, teamMembers });

  //     // call formik onChange method
  //     field.onChange(e);
  // }

  const onSubmit = (fields: any) => {
    console.log(fields);
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
  };

  return (
    <div className={styles.registrationForm}>
      <h1>Påmelding</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, values, touched, setValues }) => (
          <Form className={styles.form}>
            <Field type="teamName" name="teamName" />
            <ErrorMessage name="teamName" component="div" />
            <FieldArray name="teamMembers">
              {() =>
                values.teamMembers.map((ticket, i) => {
                  const ticketErrors =
                    (errors.teamMembers?.length && errors.teamMembers[i]) || {};
                  const ticketTouched =
                    (touched.teamMembers?.length && touched.teamMembers[i]) ||
                    {};
                  return (
                    <div key={i} className="list-group list-group-flush">
                      <div className="list-group-item">
                        <h5 className="card-title">Ticket {i + 1}</h5>
                        <div className="form-row">
                          <div className="form-group col-6">
                            <label>Name</label>
                            <Field
                              name={`teamMembers.${i}.name`}
                              type="text"
                              className={"form-control"}
                            />
                            <ErrorMessage
                              name={`teamMembers.${i}.name`}
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="form-group col-6">
                            <label>Email</label>
                            <Field
                              name={`teamMembers.${i}.email`}
                              type="text"
                              className={"form-control"}
                            />
                            <ErrorMessage
                              name={`teamMembers.${i}.email`}
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </FieldArray>
            <label>
              Onsite
              <Field type="radio" name="participation" value="Onsite" />
              <ErrorMessage name="participation" component="div" />
            </label>
            <label>
              Remote
              <Field type="radio" name="participation" value="Remote" />
              <ErrorMessage name="participation" component="div" />
            </label>
            <label>
              Source
              <Field type="text" name="source" />
            </label>
            <label>
              Pizza
              <Field type="text" name="pizzaWish" />
            </label>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
