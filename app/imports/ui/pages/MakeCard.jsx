import React from 'react';
import { Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../../../client/style.css';

/* Component for layout out a Profile Card. */
const MakeCard = ({ contact }) => (
  <Col>
    <Card className="h-100">
      <Card.Header>
        <img className="card-image" src={contact.image} alt="img" />
        <Card.Title>{contact.firstName} {contact.lastName}</Card.Title>
        <Card.Subtitle>{contact.address}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {contact.description}
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

MakeCard.propTypes = {
  contact: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};
export default MakeCard;
