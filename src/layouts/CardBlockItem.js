import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, ProgressBar } from "react-bootstrap";

const CardBlockItem = (props) => {
  return (
    <div className="col-4">
      <Card className={props.card}>
        <Link to={props.html}>
          <Card.Img style={{ height: "14rem" }} src={props.image} />
          <Card.Body>
            <Card.Text
              className="grey-text text-lighten-3"
              style={{ height: "6rem" }}
            >
              <b>{props.title}</b>
            </Card.Text>
            <Card.Text className="grey-text text-lighten-3">
              Số tiền quyên góp: {props.money} USD
            </Card.Text>

            <ProgressBar striped variant="warning" now={30} label={`${30}%`} />
            <br />
            <Card.Text
              className="grey-text text-lighten-3"
              style={{ height: "1.5rem" }}
            >
              Số lượt quyên góp: <br />
              {props.quantity} lượt
            </Card.Text>
            <div className="right">
              <Button href={props.html}>Quyên góp</Button>
            </div>
          </Card.Body>
        </Link>
      </Card>
    </div>
  );
};

export default CardBlockItem;
