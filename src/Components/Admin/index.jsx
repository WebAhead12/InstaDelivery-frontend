import React from "react";
import NavBar from "../NavBar";
import { useState, useEffect } from "react";
import { getAllOrders } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import style from "./style.css";
// import "antd/dist/antd.css";
import { Collapse } from "antd";

function Admin() {
  const goTo = useNavigate();
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  const { Panel } = Collapse;

  // useEffect(() => {
  //   const token = localStorage.getItem("access_token");
  //   if (token) {
  //     getAllOrders(token);
  //     // .then((res) => {
  //     // if (res.id !== 1) {
  //     //   alert("No admin privileges, you'll be forwarded to the main page.");
  //     //   goTo("/");
  //     // } else {
  //     //   console.log(res.orders);
  //     // }
  //     // });
  //   } else {
  //     alert("Please Login..");
  //     goTo("/");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className={style.adminPage}>
      <NavBar buttonValue="Home" hrefCentral="/" />
      <div className={style.unfulfilledTitle}>
        <h4>
          <u>Unfulfilled Orders</u>
        </h4>
      </div>
      <div className={style.unfulfilledOrders}>
        <div>
          <Collapse>
            <Panel header="Order #483" key="1">
              <p className="userDetails">
                <u>Name:</u>
              </p>

              <p className="userDetails">
                <u>Address:</u>
              </p>

              <p className="userDetails">
                <u>Email:</u>
              </p>

              <p className="userDetails">
                <u>Phone#:</u>
              </p>

              <hr />

              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Item</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>1% Milk</td>
                    <td>3</td>
                  </tr>

                  <tr>
                    <td>23</td>
                    <td>Croissant</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>77</td>
                    <td>Pizza Bites</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>88</td>
                    <td>Fuze Tea</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <h5>Total: 91.20??? (paid)</h5>
              <div className={style.checkbox}>
                <label>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                  />
                  {/* checkbox name under review */}
                  Done
                </label>
              </div>
            </Panel>
            <Panel header="Order #484" key="2">
              <p>Similar stuff</p>
            </Panel>
            <Panel header="Order #485" key="3">
              <p>Similar stuff</p>
            </Panel>
          </Collapse>
        </div>
      </div>

      <div className={style.historyTitle}>
        <h4>
          <u>Fulfilled Orders</u>
        </h4>
      </div>
      <div className={style.history}>
        <Collapse>
          <Panel header="Order #482" key="4">
            <p>
              <u>Name:</u>
            </p>

            <p>
              <u>Address:</u>
            </p>

            <p>
              <u>Email:</u>
            </p>

            <p>
              <u>Phone#:</u>
            </p>

            <hr />

            <table>
              <tr>
                <th>ID</th>
                <th>Item</th>
                <th>Quantity</th>
              </tr>
              <tr>
                <th>1</th>
                <th>1% Milk</th>
                <th>3</th>
                <hr />
              </tr>

              <tr>
                <th>23</th>
                <th>Croissant</th>
                <th>5</th>
              </tr>
              <tr>
                <th>77</th>
                <th>Pizza Bites</th>
                <th>2</th>
              </tr>
              <tr>
                <th>88</th>
                <th>Fuze Tea</th>
                <th>1</th>
              </tr>
            </table>
            <hr />
            <h5>Total: 91.20??? (paid)</h5>
            <div className={style.checkbox}>
              <label>
                <input
                  type="checkbox"
                  checked={checked}
                  // onChange={handleChange}
                />
                {/* checkbox name under review */}
                Done
              </label>
            </div>
          </Panel>
          <Panel header="Order #481" key="5">
            <p>Similar stuff</p>
          </Panel>
          <Panel header="Order #480" key="6">
            <p>Similar stuff</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}

export default Admin;
