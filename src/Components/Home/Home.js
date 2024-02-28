import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <div className="availability d-flex justify-content-evenly align-items-center px-2 py-1 rounded-2 mt-5 ms-4">
          {/* <li>
            <span className="fs-6">Available For Work</span>
          </li> */}
          <i className="bi bi-circle-fill dotcustom"></i>
          <span className="ms-1">Available For Work</span>
        </div>
        <div className="HeadLine d-flex  px-2 py-1 rounded-2 mt-5 ms-4">
          Hello! I'm Jaydip Nemade.
        </div>
        <div className="subLine d-flex  px-2  rounded-2 mt-1 ms-4">
          A self-governing, self-assured, proficient person, dedicated to
          providing <br />
          significance in solitary and collective environments. Eager to secure
          a role that <br />
          allows me to employ my administrative abilities and interpersonal
          acuity,
          <br /> promoting individual and career development.
        </div>
        <div className="px-2 pt-5">
          <button
            type="button arrow"
            class=" moreabtme btn btn-outline d-flex  px-4  rounded-2 mt-1 ms-4"
          >
            More about Me<i class=" arrow bi bi-arrow-right px-2"></i>
          </button>
          <br />
        </div>
          <hr className="lines"/>
        <div className="SubTopic d-flex  px-2 rounded-2  ms-4">
          Recent Projects
        </div>
      </div>
    </>
  );
}

export default Home;
