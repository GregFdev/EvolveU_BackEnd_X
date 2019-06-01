import React from "react";

const FlaskList = props => {
  const { data } = props;

  return (
    <div>
      <div className="flask-list-header">
        <div>Date</div>
        <div>Client</div>
        <div>Invoice</div>
        <div>Items</div>
        <div>Amount</div>
      </div>
      {data.map((row, index) => {
        return (
          <FlaskItem
            key={index}
            Date={row.Date}
            Client={row.Client}
            Invoice={row.Invoice}
            Items={row.Items}
            Amount={row.Amount}
          />
        );
      })}
    </div>
  );
};
export default FlaskList;

const FlaskItem = props => {
  return (
    <div className="flask-list">
      <div className="column1 column-flask">{props.Date}</div>
      <div className="column2 column-flask">{props.Client}</div>
      <div className="column3 column-flask"> {props.Invoice}</div>
      <div className="column4 column-flask">{props.Items}</div>
      <div className="column5 column-flask">{props.Amount}</div>
    </div>
  );
};
