import React, { useRef, useState, useEffect } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import user_2 from "../../assets/user-2.png";

const Testimonials = () => {
  const slider = useRef(null);
  const [tx, setTx] = useState(0);

  const slideForward = () => {
    if (tx > -75) {
      setTx(tx - 25);
    }
  };

  const slideBackward = () => {
    if (tx < 0) {
      setTx(tx + 25);
    }
  };

  useEffect(() => {
    if (slider.current) {
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  }, [tx]);
  return (
    <div className="testimonials">
      <img className="next-btn" src={next_icon} alt="" onClick={slideForward} />
      <img
        className="back-btn"
        src={back_icon}
        alt=""
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson 1</h3>
                  <span>Edsity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I' ever made. The supportive community, state of the
                art facilities, and commitment to academic excellence have truly
                exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jackson 2</h3>
                  <span>Edsity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I' ever made. The supportive community, state of the
                art facilities, and commitment to academic excellence have truly
                exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>William Jackson 3</h3>
                  <span>Edsity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I' ever made. The supportive community, state of the
                art facilities, and commitment to academic excellence have truly
                exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>William Jackson 4</h3>
                  <span>Edsity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I' ever made. The supportive community, state of the
                art facilities, and commitment to academic excellence have truly
                exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
