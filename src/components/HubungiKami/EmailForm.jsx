import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const EmailForm = () => {
  // // Cleansing phone number
  // const preprocessPhoneNumber = (value) => {
  //   // Remove non-digit characters from the phone number
  //   return value.replace(/\D/g, "");
  // };

  return (
    <>
      <Formik
        initialValues={{
          nama: "",
          bidangUsaha: "",
          email: "",
          telp: "",
          pesan: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().email("Alamat email tidak valid").required("Required"),
          telp: Yup.string()
            .matches(/^[0-9]{9,14}$/, "Input harus terdiri dari 9 sampai 14 angka")
            .required("Required"),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          // setTimeout(() => {
          //! Saving form values /////
          // alert(JSON.stringify(values, null, 2));

          Swal.fire({
            title: "Pesan anda telah terkirim!",
            text: "Selamat beraktivitas kembali 😊",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          }).then((result) => {
            resetForm();
            console.log("json:", JSON.stringify(values, null, 2));
            console.log("result:", values);
          });

          setSubmitting(false);
          // }, 400);
        }}
      >
        {/*  //? Original Form */}
        {/* <form action="#" method="POST" className="flex flex-col items-center mx-auto mt-16 w-[768px] sm:mt-20">
          <div className="flex flex-col gap-5 w-[768px]">
            <div className="flex justify-between gap-5 w-[100%]">
              <div>
                <label
                  htmlFor="first-name"
                  className="block font-poppins font-semibold text-[12px] tracking-[0px] leading-[19.2px] text-primary-content-uruzin"
                >
                  Nama
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-[368px] border-b-[1px] border-light-gray-uruzin px-3.5 py-2 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Bidang Usaha
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-[368px] border-b-[1px] border-light-gray-uruzin px-3.5 py-2 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-[368px] border-b-[1px] border-light-gray-uruzin px-3.5 py-2 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                  No Telp
                </label>
                <div className="relative mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-[368px] border-b-[1px] border-light-gray-uruzin px-3.5 py-2 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Pesan
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Type your Message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-light-gray-uruzin placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-[37px]">
            <button
              type="submit"
              className="font-dm font-bold text-[18px] leading-[10px] tracking-[0px] p-[25px] bg-green-uruzin text-white-pure rounded-lg"
            >
              Hubungi Kami
            </button>
          </div>
        </form> */}

        {/* //! /////////////////////////////////////////// */}
        {/* Formik format form */}
        <Form className="flex flex-col items-center mx-auto mt-16 w-[768px] sm:mt-20">
          <div className="flex flex-col gap-5 w-[768px]">
            <div className="flex justify-between items-center gap-5 w-[100%]">
              <div>
                <label
                  htmlFor="nama"
                  className="font-poppins font-semibold text-[12px] tracking-[0px] leading-[19.2px] text-primary-content-uruzin opacity-60"
                >
                  Nama
                </label>
                <div className="mt-2.5">
                  <Field
                    type="text"
                    name="nama"
                    id="nama"
                    autoComplete="given-name"
                    className="w-[368px] border-b-[1px] border-light-gray-uruzin px-3.5 py-2 font-poppins font-normal text-[16px] tracking-[0px] leading-[25.6px] text-primary-content-uruzin shadow-sm ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <ErrorMessage
                  name="nama"
                  component="div"
                  className="error mb-5 text-red-pure font-poppins font-semibold text-[12px] tracking-[0px] leading-[19.2px]"
                />
              </div>
              <div>
                <label
                  htmlFor="bidangUsaha"
                  className="font-poppins font-semibold text-[12px] tracking-[0px] leading-[19.2px] text-primary-content-uruzin opacity-60"
                >
                  Bidang Usaha
                </label>
                <div className="mt-2.5">
                  <Field
                    type="text"
                    name="bidangUsaha"
                    id="bidangUsaha"
                    autoComplete="family-name"
                    className="w-[368px] border-b-[1px] border-light-gray-uruzin px-3.5 py-2 font-poppins font-normal text-[16px] tracking-[0px] leading-[25.6px] text-primary-content-uruzin shadow-sm ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <ErrorMessage
                  name="bidangUsaha"
                  component="div"
                  className="error mb-5 text-red-pure font-poppins font-semibold text-[12px] tracking-[0px] leading-[19.2px]"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="font-poppins font-semibold text-[12px] tracking-[0px] leading-[19.2px] text-primary-content-uruzin opacity-60"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="w-[368px] border-b-[1px] border-light-gray-uruzin px-3.5 py-2 font-poppins font-normal text-[16px] tracking-[0px] leading-[25.6px] text-primary-content-uruzin shadow-sm ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error mb-5 text-red-pure font-poppins font-semibold text-[12px] tracking-[0px] leading-[19.2px]"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="telp"
                  className="font-poppins font-semibold text-[12px] tracking-[0px] leading-[19.2px] text-primary-content-uruzin opacity-60"
                >
                  No Telp
                </label>
                <div className="relative mt-2.5">
                  <Field
                    type="tel"
                    name="telp"
                    id="telp"
                    autoComplete="tel"
                    className="w-[368px] border-b-[1px] border-light-gray-uruzin px-3.5 py-2 font-poppins font-normal text-[16px] tracking-[0px] leading-[25.6px] text-primary-content-uruzin shadow-sm ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    // onChange={(e)=>{
                    //   const value = e.target.value || "";
                    //   setFieldValue('email', value.replace(/\D/g, ""))
                    // }}
                  />
                </div>
                <ErrorMessage
                  name="telp"
                  component="div"
                  className="error mb-5 text-red-pure font-poppins font-semibold text-[12px] tracking-[0px] leading-[19.2px]"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="pesan"
                className="font-poppins font-semibold text-[12px] tracking-[0px] leading-[19.2px] text-primary-content-uruzin opacity-60"
              >
                Pesan
              </label>
              <div className="mt-2.5">
                <Field
                  as="textarea"
                  name="pesan"
                  id="pesan"
                  placeholder="Type your Message"
                  rows={4}
                  className="w-full rounded-md border-0 px-3.5 py-2 font-poppins font-normal text-[16px] tracking-[0px] leading-[25.6px] text-primary-content-uruzin shadow-sm ring-1 ring-inset ring-light-gray-uruzin placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <ErrorMessage
                name="pesan"
                component="div"
                className="error mb-5 text-red-pure font-poppins font-semibold text-[12px] tracking-[0px] leading-[19.2px]"
              />
            </div>
          </div>
          <div className="mt-[37px]">
            <button
              type="submit"
              className="font-dm font-bold text-[18px] leading-[10px] tracking-[0px] p-[25px] bg-green-uruzin text-white-pure rounded-lg"
            >
              Hubungi Kami
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default EmailForm;
