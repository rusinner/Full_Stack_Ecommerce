import React from "react";
import "./widgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => (
    <button className={"widgetLgButton " + type}>{type}</button>
  );
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>

      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <thead>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"
                alt="profile pic"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Teo Mav</span>
            </td>
            <td className="widgetLgDate">10 Jun 2022</td>
            <td className="widgetLgAmount">254.88 €</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </thead>
        <thead>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"
                alt="profile pic"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Teo Mav</span>
            </td>
            <td className="widgetLgDate">10 Jun 2022</td>
            <td className="widgetLgAmount">254.88 €</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
        </thead>
        <thead>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"
                alt="profile pic"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Teo Mav</span>
            </td>
            <td className="widgetLgDate">10 Jun 2022</td>
            <td className="widgetLgAmount">254.88 €</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
        </thead>
        <thead>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"
                alt="profile pic"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Teo Mav</span>
            </td>
            <td className="widgetLgDate">10 Jun 2022</td>
            <td className="widgetLgAmount">254.88 €</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default WidgetLg;
