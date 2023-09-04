import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function ContactMe() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (values) => {
    setIsLoading(true);
    axios
      .post("/send_mail", {
        message: values.message,
        fullName: values.fullName,
        email: values.email,
      })
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        toast.success("email sent !");
        formik.resetForm({values:""})

        
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        toast.error("an error occurred!");
      });
  };
  const MessageSchema = Yup.object().shape({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().required("Required"),
  });

  const formik = useFormik({
    validationSchema: MessageSchema,
    initialValues: {
      fullName: fullName,
      message: message,
      email: email,
    },
    onSubmit: (values) => {
      handleSubmit(values);
     
    },
  });

  return (
    <Container>
      <div>
        <ToastContainer />
      </div>
      <form className="contact" onSubmit={formik.handleSubmit}>
        <i className="fas fa-envelope"></i>
        <h2> Contact Me </h2>
        <input
          type="text"
          value={formik.values.fullName}
          name="fullName"
          onChange={formik.handleChange}
          placeholder="Full Name"
          className={formik.touched.fullName && formik.errors.fullName && ( "border-color-error")}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <div className="error">{formik.errors.fullName}</div>
          )}

        <input
          type="email"
          value={formik.values.email}
          name="email"
          onChange={formik.handleChange}
          placeholder="Email"
         
          className={formik.touched.email && formik.errors.email && ( "border-color-error")}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="error">{formik.errors.email}</div>
        )}

        <textarea
          value={formik.values.message}
          name="message"
          onChange={formik.handleChange}
          placeholder="Your Message"
          className={formik.touched.message && formik.errors.message && ( "border-color-error")}
          />
          {formik.touched.message && formik.errors.message && (
            <div className="error">{formik.errors.message}</div>
          )}
        <button type="submit">
          <span> Submit </span>
          {isLoading && (
            <CircularProgress size={20} className="progress-icon" />
          )}
        </button>
      </form>
      <SociaMediaContainer>
        <a href="https://twitter.com/AbdessamadOuabi/" target="_blank">
          <TwitterIcon className="icon" />
        </a>
        <a href="https://www.instagram.com/samad__dev/" target="_blank">
          <InstagramIcon className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/ouabi-abdessamad-0060601ba/"
          target="_blank"
        >
          <LinkedInIcon className="icon" />
        </a>
        <a href="https://github.com/ouabi1999/" target="_blank">
          <GitHubIcon className="icon" />
        </a>
      </SociaMediaContainer>
    </Container>
  );
}

export default ContactMe;
const Container = styled.div`
  margin-top: 35px;
  padding: 10px;
  background-color: #c8eeff;
  background-repeat: no-repeat;
  border-top-right-radius: 15%;
  border-top-left-radius: 15%;
  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  i {
    font-size: 4rem;
    color: rgb(17, 18, 19);
    margin: 0;
  }

  textarea,
  input {
    margin: 5px;
    outline: none;
    border: 1px solid lightgray;
  }
  input {
    padding: 10px;
    width: 300px;
  }
  .border-color-error{
    border-color:#f31e1e;
    transition:1s;

    }
  .error{
    font-size:13px;
    color:#f31e1e;;
    transition:1s;

  }

  button {
    background-color: #0a0a0a;
    cursor: pointer;
    height:30px;
    border-radius: 3px;
    color: white;
    border: none;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
  }
  .progress-icon {
    margin-left: 3px;
  }
  h2 {
    margin: 0 0 6px 0;
    letter-spacing: 2px;
    font-size: 1.6rem;
    font-weight: 900;
    color: #0a0a0a;
    text-transform: uppercase;
  }
  textarea {
    height: 300px;
    width: 40vw;
    min-width:320px;
    max-width:500px;
    padding: 5px 10px;
  }
  
`;
const SociaMediaContainer = styled.div`
  margin: 30px 10px;
  display: flex;

  gap: 20px;
  .icon {
    font-size: 30px;
  }
`;
