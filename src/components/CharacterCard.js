import React from "react";
import { Card, Button, CardTitle, CardText } from 'reactstrap';

export default function CharacterCard(props) {
  return (
    <div>
  <Card body className="text-center">
    <CardTitle>{props.name}</CardTitle>
    <CardText>{props.species}</CardText>
  </Card>
    </div>
  );
};
{/* </div>
  <div>
    <p>{props.name}</p>
    <p>{props.species}</p>
  </div> */}