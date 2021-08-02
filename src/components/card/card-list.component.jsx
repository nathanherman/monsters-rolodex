import React from "react";
import "./card.styles.css";
import { Col } from "react-flexbox-grid";
export const Card = (props) => (
  <Col xs={12} sm={6} md={4} lg={3}>
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h2>{props.monster.name}</h2>
      <p>
        <strong>{props.monster.email}</strong>
      </p>
    </div>
  </Col>
);
