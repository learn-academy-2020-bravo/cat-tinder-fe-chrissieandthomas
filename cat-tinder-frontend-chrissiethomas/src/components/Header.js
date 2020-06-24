import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Pet Tinder</h1>
        <p className="lead">Find Love Today</p>
        <hr className="my-2" />
        <p>The cat's meeeooowwww...and the bees knees</p>
        <p className="lead">
          <Button color="success" href="/">See All Pets</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Header;