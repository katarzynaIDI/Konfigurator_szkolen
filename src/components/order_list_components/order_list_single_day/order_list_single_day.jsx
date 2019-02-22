import React from "react";
import "./order_list_single_day.scss";
import { ListGroupItem } from "react-bootstrap";
import RemoveButton from "../../../logos/remove_1.png";

const OrderListSingleDay = props => {
  return (
    <div className="order-list__single-day-display">
      <p className="order-list__single-day-display-header">{props.day}</p>
      {props.chosenModulesNames.map(e => (
        <ListGroupItem
          className="order_list__single-day-module-display"
          key={e}
        >
          {e + " "}
          <div
            onClick={() => props.removeModuleNameFromOrderList(e)}
            className="order-list__single-day-remove-button"
          >
            {" "}
            <img src={RemoveButton} alt="remove button" />
          </div>
        </ListGroupItem>
      ))}
    </div>
  );
};

export default OrderListSingleDay;
