import React, { useState, useReducer } from "react";
import { fetchAPI, submitAPI } from "../utils/apiMockup";
import restaurant from "../assets/restaurant.jpg";
import cross from "../assets/cross.png";

const today = new Date();

const initializeTimes = () => {
  return fetchAPI(today);
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "DATE_CHANGE":
      return fetchAPI(new Date(action.payload));
    case "ADD_BOOKING":
      return state.filter((time) => time.value !== action.payload);
    default:
      return state;
  }
};

const Reserve = () => {
  const [isShow, setIsShow] = useState(false);

  const [formData, setFormData] = useState({
    date: today.toISOString().substring(0, 10),
    time: "",
    persons: "",
    occasion: "",
    name: "",
    phone: "",
    confirmation: false,
  });

  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes()
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    setAvailableTimes({
      type: "ADD_BOOKING",
      payload: formData.time,
    });
    setFormData({
      date: today.toISOString().substring(0, 10),
      time: "",
      persons: "",
      occasion: "",
      name: "",
      phone: "",
      confirmation: false,
    });
    const response = submitAPI(formData);
    if (response) {
      setIsShow(true);
    }
  };

  return (
    <>
      <h2 className="reserve__heading">RESERVATION</h2>
      <div className="reserve">
        <div className="reserve__container">
          <div className="reserve_form">
            <form method="POST" onSubmit={(e) => handleSubmit(e)}>
              <div className="form_block">
                <input
                  type="date"
                  id="date"
                  name="date"
                  placeholder="05/02/2023"
                  value={formData.date}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    });
                    setAvailableTimes({
                      type: "DATE_CHANGE",
                      payload: e.target.value,
                    });
                  }}
                  required
                />
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                >
                  {availableTimes.map((time, idx) => (
                    <option key={idx} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                <select
                  id="persons"
                  name="persons"
                  value={formData.persons}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                >
                  <option value="">Number of guests</option>
                  <option value="1">1 person</option>
                  <option value="2">2 person</option>
                  <option value="3">3 person</option>
                  <option value="4">4 person</option>
                  <option value="5">5 person</option>
                  <option value="6">6 person</option>
                  <option value="7">7 person</option>
                  <option value="8">8 person</option>
                </select>
                <select
                  id="occasion"
                  name="occasion"
                  value={formData.occasion}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                >
                  <option value="">Occasion</option>
                  <option value="1">Date</option>
                  <option value="2">Birthday</option>
                  <option value="3">Anniversary</option>
                </select>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Reservation Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                required
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{10}"
                maxLength={10}
                placeholder="Phone Number (10 digits)"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                required
              />
              <div className="form__checkbox">
                <input
                  type="checkbox"
                  id="confirmation"
                  name="confirmation"
                  checked={formData.confirmation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.checked,
                    })
                  }
                />{" "}
                <span>Don’t call for confirmation</span>
              </div>
              <button aria-label="On Click" type="submit">
                RESERVE A TABLE
              </button>
            </form>
          </div>
          <div className="reserve__image">
            <img src={restaurant} alt="restaurant" />
          </div>
        </div>
        <div className={`booking__confirmation ${isShow ? "" : "hidden"}`}>
          <h2>Thank you for your booking!</h2>
          <h3>Can't wait to see you in our restaurant!</h3>
          <img src={cross} alt="cross" onClick={() => setIsShow(false)} />
        </div>
      </div>
    </>
  );
};

export default Reserve;
