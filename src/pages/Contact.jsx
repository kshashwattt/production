import React, { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactUsSVG from "../assets/contactus.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CONTACT_INFO } from "../data/data";

const ContactCard = ({ icon, title, description, contact, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="flex items-center mb-4">
        <div
          className="bg-primary-text rounded-full p-3 mr-4"
          aria-hidden="true"
        >
          <FontAwesomeIcon icon={icon} className="text-white text-xl" />
        </div>
        <h2 className="text-xl font-bold text-primary-text">{title}</h2>
      </div>
      <p className="text-gray-600 mb-4 font-bold italic">{description}</p>
      <a
        href={link}
        className="text-primary-text font-semibold hover:underline break-words"
        aria-label={`${title}: ${contact}`}
      >
        {contact}
      </a>
    </div>
  );
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const textareaRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        200
      )}px`;
    }
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const pendingToast = toast.loading("Sending your message...", {
      position: "top-right",
    });

    try {
      const response = await fetch("https://ks-wealth-backend-1.onrender.com/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data) ,
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const result = await response.json();

      toast.update(pendingToast, {
        render: result.message,
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });
      reset();
    } catch (error) {
      console.error("Error:", error);
      toast.update(pendingToast, {
        render: "Failed to send your message. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto bg-gray-100 text-primary-gray min-h-screen mb-5">
      <ToastContainer position="top-right" />

      <header
        className="bg-[url('../src/assets/contactbg.jpg')] bg-cover bg-center text-white mb-10"
        role="banner"
      >
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold sm:text-6xl mb-4">
            Contact Us
          </h1>
          <p className="text-xl uppercase">
            Feel free to send us a message now!
          </p>
        </div>
      </header>

      <main>
        <h2 className="text-4xl font-bold mb-12 text-center">
          Get in <em className="text-primary-text">Touch</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 mx-5">
          {CONTACT_INFO.map((info, index) => (
            <ContactCard key={index} {...info} />
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mx-auto text-center mb-5">
            <h2 className="text-3xl font-semibold mb-4 text-primary-gray text-center">
              Send us a <em className="text-primary-text">message 📬</em>
            </h2>
            <p className="text-lg text-primary-gray font-medium text-center mb-8">
              <em>
                We're here to help with any questions or feedback you might
                have.
              </em>
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8 md:justify-between items-center mx-5">
            <section className="bg-white rounded-xl shadow-lg md:p-8 p-4 w-full md:w-1/2 mb-8 md:mb-0">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                noValidate
                aria-label="Contact form"
              >
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-primary-text mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    autoComplete="name"
                    {...register("name", { required: "Name is required" })}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-text bg-white"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      role="alert"
                      className="mt-1 text-sm text-red-600"
                    >
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-primary-text mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john.doe@example.com"
                    autoComplete="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Please enter a valid email",
                      },
                    })}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-text bg-white"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      role="alert"
                      className="mt-1 text-sm text-red-600"
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-primary-text mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    ref={textareaRef}
                    placeholder="Your message here..."
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-text bg-white resize-none overflow-hidden"
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    onChange={(e) => {
                      e.target.style.height = "auto";
                      e.target.style.height = `${Math.min(
                        e.target.scrollHeight,
                        200
                      )}px`;
                    }}
                  ></textarea>
                  {errors.message && (
                    <p
                      id="message-error"
                      role="alert"
                      className="mt-1 text-sm text-red-600"
                    >
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-text text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-text disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </section>

            <img
              src={ContactUsSVG}
              alt="Illustration of people communicating"
              className="w-full md:w-1/2"
            />
          </div>
        </div>

        <section className="mt-16 bg-white rounded-xl shadow-lg md:p-8 p-4 mx-5">
          <h2 className="text-2xl font-semibold mb-4 text-primary-text">
            📌 Find Us Here
          </h2>
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=Connaught+Place+Regal+Building,+New+Delhi,+India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Our Location"
              aria-label="Interactive map showing our location"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
