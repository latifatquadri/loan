import React, { useState } from "react";
import { FaMoneyBill } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import LoanModal from "./LoanModal";
import welcomeLoan from "../assets/images/welcomeLoan.jpeg";
import { Link } from "react-router-dom";

function loan() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleClick = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="block ml-4 lg:flex lg:justify-between">
          <div>
            <div className="flex text-blue-600 gap-3 items-center text-3xl font-bold p-4">
              <FaMoneyBill className="text-3xl inline-block align-middle" />
              <p className="text-2xl inline-block align-middle">Loan</p>
            </div>
          </div>
          <Link to="/loanhistory">
            <button className="flex items-center text-blue-600 font-bold p-2 cursor-pointer">
              <FaHistory className="inline-block align-middle" />
              <p className="text-2xl ml-3 inline-block align-middle">
                Loan History
              </p>
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <img className="rounded-2xl hidden lg:visible" src={welcomeLoan} />
          <div className="h-auto px-4 grid gap-4 mt-2 md:grid-cols-2 lg:grid-cols-1">
            <div className="bg-blue-600 shadow-lg shadow-blue-800 p-4 rounded-2xl">
              <p className="text-2xl lg:text-3xl font-bold text-white">
                Total Amount of Loan
              </p>
              <p className="text-lg lg:text-xl font-medium text-white">
                authorized as of April, 2025{" "}
              </p>
              <p className="text-2xl lg:text-3xl font-bold text-white">N0.00</p>
            </div>
            <div className="bg-white shadow-lg shadow-blue-800 p-4 rounded-2xl">
              <p className="text-2xl lg:text-3xl font-bold text-blue-700">
                Total Amount Repaid
              </p>
              <p className="text-lg lg:text-xl font-medium text-blue-700">
                as of April, 2025
              </p>
              <p className="text-2xl lg:text-3xl font-bold text-blue-700">
                N0.00
              </p>
            </div>
            <div className="bg-blue-600 shadow-lg shadow-blue-800 p-4 rounded-2xl">
              <p className="text-2xl lg:text-3xl font-bold text-white">
                Balance Left
              </p>
              <p className="text-lg lg:text-xl font-medium text-white">
                as of April, 2025{" "}
              </p>
              <p className="text-2xl lg:text-3xl font-bold text-white">N0.00</p>
            </div>
          </div>
        </div>
        <button
          className="bg-blue-700 text-white font-semibold p-4 lg:p-8 my-4 ml-4 lg:text-xl cursor-pointer rounded-2xl shadow-2xl shadow-blue-800 justify-center items-center "
          onClick={() => setModalOpen(true)}
        >
          Request for Loan
        </button>
      </div>
      {modalOpen && <LoanModal onClose={handleClick} />}
    </div>
  );
}

export default loan;
