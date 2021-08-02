import React from "react";
import { Card } from "../card/card-list.component";
import { Grid, Row } from "react-flexbox-grid";
import "./card-list.styles.css";
export const CardList = (props) => (
  <Grid fluid>
    <Row className="card-list" center="xs">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </Row>
  </Grid>
);
