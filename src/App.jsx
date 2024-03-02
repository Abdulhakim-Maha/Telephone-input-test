import { useState } from "react";
import phoneNumberAutoFormat from "./utils";
import Condition from "./Condition";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const phoneNumbersHandler = (e) => {
    const targetValue = phoneNumberAutoFormat(e.target.value);
    setPhoneNumber(targetValue);
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div
        className="card w-50 box-shadow p-4"
        style={{ backgroundColor: "#fefefe" }}
      >
        <div className="card-body d-flex flex-column h-100vh">
          <label
            htmlFor=""
            className="form-label mb-3 h2"
            style={{ color: "#6c757c" }}
          >
            <i className="bi bi-phone " style={{ color: "#6c757c" }}></i>{" "}
            &nbsp;Phone number
          </label>
          <input
            type="tel"
            className="form-control mb-3"
            value={phoneNumber}
            onChange={phoneNumbersHandler}
            maxLength={15}
          />
          <section>
            <Condition />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
