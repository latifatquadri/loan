import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import FileLoader from "./FileLoader";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import LoanRequest from "../assets/images/Loan_request.jpeg";
import { Bounce } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function LoanForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [loanLimit, setLoanLimit] = useState(0);
  // const [loanAmount, setLoanAmount] = useState();
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   const availableBalance = document.getElementById("balance");
  //   if (availableBalance) {
  //     const value = parseFloat(availableBalance.textContent);
  //     setLoanLimit(value * 2);
  //   }
  // }, []);

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setLoanAmount(value);

  //   if (value > loanLimit) {
  //     setError(`value cannot exceed ${loanLimit}`);
  //   }
  // };

  const onSubmitHandler = async (data) => {
    const formData = new FormData();

    formData.append("loanAmount", data.loanAmount);
    formData.append("monthlySavings", data.monthlySavings);
    formData.append("repayment", data.repayment);
    formData.append("about", data.about);
    formData.append("paySlip", data.paySlip[0]);
    try {
      const response = await axios.post(
        "http://localhost:3001/users",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Success:", response.data);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const notify = () => toast("Form Submitted Successfully!.");

  return (
    <div className="container mx-auto my-6">
      <div className="flex justify-between mb-4">
        <p className="text-3xl font-bold">Request Loan</p>
        <Link to="/" className="flex gap-3 items-center text-2xl">
          {" "}
          <FaChevronLeft /> Back{" "}
        </Link>
      </div>
      <Bounce cascade>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <img src={LoanRequest} />
          </div>
          <Toaster />
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <p className="flex gap-2 p-4 text-xl font-semibold items-center">
              Available Balance:
              <span
                id="balance"
                className="text-2xl font-bold text-black bg-gray-100 p-2 rounded-2xl shadow-2xl shadow-gray-200"
              >
                N200,000.00
              </span>
            </p>
            <div className="p-2">
              <label htmlFor="loanAmount">
                <span className="text-red-700 p-2">*</span>Loan Amount
              </label>
              <input
                {...register("loanAmount", { required: "This is required" })}
                id="loanAmount"
                type="number"
                placeholder="Enter Your Loan Amount"
                className="block rounded-md w-full bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
              />
              <p className="text-red-600">{errors.loanAmount?.message}</p>
            </div>
            <div className="p-2">
              <label htmlFor="monthlySavings">
                <span className="text-red-700 p-2">*</span>Monthly Savings
                Amount
              </label>
              <input
                {...register("monthlySavings", {
                  required: "This is required",
                })}
                id="monthlySavings"
                type="number"
                placeholder="Enter Your Monthly Savings Amount"
                className="block rounded-md w-full bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
              />
              <p className="text-red-600">{errors.monthlySavings?.message}</p>
            </div>
            <div className="p-2">
              <label
                htmlFor="repayment"
                className="block text-sm/6 font-medium text-gray-900"
              >
                <span className="text-red-700 p-2">*</span>
                Repayment Duration
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  {...register("repayment", { required: "This is required" })}
                  id="repayment"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>6 Month(s)</option>
                  <option>1 Month(s)</option>
                  <option>2 Month(s)</option>
                  <option>5 Month(s)</option>
                  <option>7 Month(s)</option>
                  <option>12 Month(s)</option>
                </select>
                <FaChevronDown
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
                <p className="text-red-600">{errors.repayment?.message}</p>
              </div>
            </div>
            <div className="p-2">
              <label
                htmlFor="about"
                className="block text-sm/6 font-medium text-gray-900"
              >
                <span className="text-red-700 p-2">*</span>
                Purpose of Loan
              </label>
              <div className="mt-2">
                <textarea
                  {...register("about", { required: "This is required" })}
                  id="about"
                  placeholder="Give a name or a brief purpose for loan request"
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  defaultValue={""}
                />
                <p className="text-red-600">{errors.about?.message}</p>
              </div>
            </div>
            <div>
              <label
                htmlFor="paySlip"
                className="block text-sm/6 font-medium text-gray-900"
              >
                <span className="text-red-700 p-2">*</span>
                Upload Pay Slip
              </label>
              <input
                type="file"
                {...register("paySlip", { required: "This is required" })}
              />
              <p className="text-red-600">{errors.paySlip?.message}</p>
            </div>
            {/* <FileLoader /> */}
            <button
              type="submit"
              onClick={notify}
              className="bg-blue-600 font-semibold text-xl text-white px-4 py-2 rounded-lg shadow-lg cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </Bounce>
    </div>
  );
}

export default LoanForm;
