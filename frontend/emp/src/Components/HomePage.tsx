import React from "react";
import home from "../image/home.png";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className="d-flex flex-column "
    >
      <div
        className="data-box mt-4 d-flex justify-content-evenly"
        style={{ width: "100%", height: "auto" }}
      >
        <div className="mt-5 row d-flex justify-content-evenly w-100">
          <div className=" detail-box col-8 my-4 col-md-5 d-flex flex-column align-items-center justify-content-center">
            <a
              href="/employee"
              style={{ textDecoration: "none" }}
              className="w-100"
            >
              <p className="number">140</p>
              <p
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  letterSpacing: "0.2rem",
                }}
              >
                TOTAL EMPLOYEES
              </p>
            </a>
          </div>
          <div className="detail-box col-8 my-4 col-md-5 d-flex flex-column align-items-center justify-content-center">
            <a
              href="/employee"
              style={{ textDecoration: "none" }}
              className=" w-100"
            >
              <p className="number">50</p>
              <p
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  letterSpacing: "0.2rem",
                }}
              >
                ACTIVE EMPLOYEES
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className=" w-100">
        <img src={home} alt="" className="mt-5" style={{ width: "100%" }} />
      </div>
    </motion.div>
  );
}
