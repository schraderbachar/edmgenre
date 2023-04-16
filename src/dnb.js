import React from "react";
import Button from "react-bootstrap/Button";
export default function DNB(props) {
  function startOver() {
    props.startOver();
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-lg-start">
            We've determined that this song is of the DNB (Drum and Bass) genre.
            My favorite subgenre is breakcore. Give it a listen. Here are some
            other great dnb songs, hope you enjoy.
          </div>
          <div className="col-sm-12 text-lg-start">
            <ul>
              <li>Down Under (feat Colin Hay) by Luude</li>
              <li>DIGITAL BLUE by TOKOYPILL</li>
              <li>Different Places by Fifty Grand, optic core</li>
              <li>kammy (like I do) by Fred again..</li>
            </ul>
          </div>
          <Button variant="primary" className="ms-3" onClick={startOver}>
            Start Over
          </Button>
        </div>
      </div>
    </>
  );
}
