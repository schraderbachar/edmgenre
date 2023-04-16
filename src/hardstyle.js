import React from "react";
import Button from "react-bootstrap/Button";
export default function Hardstyle(props) {
  function startOver() {
    props.startOver();
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-lg-start">
            We've determined that this song is of the <strong>Hardstyle</strong>{" "}
            genre. My favorite songs in hardstyle are remixes of popular songs.
            They go so hard. Here are some of my favs.
          </div>
          <div className="col-sm-12 text-lg-start">
            <ul>
              <li>Transcendence by Headhunterz</li>
              <li>Drowning by Excision</li>
              <li>Quédate - Hardstyle remix by Luca Testa</li>
              <li>Summertime Sadness by Martin Bravi</li>
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
