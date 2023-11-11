import React, { useState, useEffect, useRef } from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Forms = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/homepage");
  };

  /*
  1: npm install react-hook-form
  2: import { useForm } from "react-hook-form";
  3: const { register, handleSubmit, formState: { errors } } = useForm();
  4: {...register("firstName")} use register to store the variable , eg ...register("lastName") etc
  we use it to reference the variable.
  5: Use handleSubmit() to run the submit function
  6: The register variable could take another key eg we say
    {...register("firstName", { required: true, maxLength: 10 })} etc Could read more on the
    parameter that you could use
  7: errors.firstName , The errors are run when the user don't obey the stated
     direction or path .
  8:


  */
  return (
    <div
      style={{
        width: "100%",
        height: "120vh",
        backgroundColor: "lightblue",
        padding: "100px",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          fontSize: "24px",
        }}
      >
        React Hook Form
      </h3>
      <p
        style={{
          textAlign: "center",
          fontSize: "16px",
          textTransform: "capitalize",
        }}
      >
        validation of form using react-hook-form
      </p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            type="text"
            {...register("firstName", { required: true, maxLength: 50 })}
          />
        </Form.Field>
        {errors.firstName && (
          <p
            style={{
              color: "red",
            }}
          >
            Please check the First Name
          </p>
        )}

        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            type="text"
            {...register("lastName", { required: true, maxLength: 50 })}
          />
        </Form.Field>
        {errors.lastName && (
          <p
            style={{
              color: "red",
            }}
          >
            Please check the Last Name
          </p>
        )}

        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            type="email"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
        </Form.Field>
        {errors.email && (
          <p
            style={{
              color: "red",
            }}
          >
            Please check the Email
          </p>
        )}
        <Form.Field>
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: true,
            })}
          />
        </Form.Field>
        {errors.password && (
          <p
            style={{
              color: "red",
            }}
          >
            Please check the Password
          </p>
        )}
        <Button style={{ border: "1px solid grey" }} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Forms;
