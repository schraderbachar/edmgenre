import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Trance(props) {
  const [subGenre, setSubGenre] = useState("");

  function startOver() {
    setSubGenre("");
    props.startOver();
  }
  function submit() {
    console.log(subGenre);
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="mb-3">
              We've determined that your genre is Trance.
            </h3>
          </div>
          <div className="col-sm-12">
            {subGenre === "" ? (
              <>
                <h6 className="mb-3">
                  When you listen to this song which option closely describes
                  it?
                </h6>
                <Form onSubmit={submit}>
                  <Form.Group
                    className="mb-3 text-sm-start"
                    controlId="checkboxes"
                  >
                    <Form.Check
                      type="radio"
                      value={`Acid Trance`}
                      name={`Acid Trance`}
                      label={`Trippy and hypnotic oscillating melodies`}
                      onChange={() => setSubGenre("Acid Trance")}
                    />
                    <Form.Check
                      type="radio"
                      value={`Balearic Trance`}
                      name={`Balearic Trance`}
                      label={`Faster tempo, warm, atmospheric vibes, perfect for sunset listening sessions, and elements of guitars with a Spanish flavor`}
                      onChange={() => setSubGenre("Balearic Trance")}
                    />

                    <Form.Check
                      type="radio"
                      value={`Dream Trance`}
                      name={`Dream Trance`}
                      label={`Laid-back, carefree, and dreamlike sound `}
                      onChange={() => setSubGenre("Dream Trance")}
                    />
                    <Form.Check
                      type="radio"
                      value={`Goa Trance`}
                      name={`Goa Trance`}
                      label={`Drone-like basslines, hippie like, fast paced`}
                      onChange={() => setSubGenre("Goa Trance")}
                    />
                    <Form.Check
                      type="radio"
                      value={`Hard Trance`}
                      name={`Hard Trance`}
                      label={`Strong kicks, full bass, and reverberating beats, hardstyle like`}
                      onChange={() => setSubGenre("Hard Trance")}
                    />
                    <Form.Check
                      type="radio"
                      value={`Psytrance`}
                      name={`Psytrance`}
                      label={`High-energy with pounding, resonating, rolling basslines and rhythms, change frequently`}
                      onChange={() => setSubGenre("Psytrance")}
                    />
                    <Form.Check
                      type="radio"
                      value={`Progressive Trance`}
                      name={`Progressive Trance`}
                      label={`Long builds and more subtle breakdowns, slower`}
                      onChange={() => setSubGenre("Progressive Trance")}
                    />
                    <Form.Check
                      type="radio"
                      value={`Tech Trance`}
                      name={`Tech Trance`}
                      label={`Techy, dirty, hard, more synthesized sounds`}
                      onChange={() => setSubGenre("Tech Trance")}
                    />
                    <Form.Check
                      type="radio"
                      value={`Uplifting Trance`}
                      name={`Uplifting Trance`}
                      label={`Uplifting, light, energetic, fast, one or two lead melodies`}
                      onChange={() => setSubGenre("Uplifting Trance")}
                    />
                    <Form.Check
                      type="radio"
                      value={`Vocal Trance`}
                      name={`Vocal Trance`}
                      label={`Heavy on vocals, and focus on melodies`}
                      onChange={() => setSubGenre("Vocal Trance")}
                    />
                  </Form.Group>
                  <Button variant="primary" className="ms-3" type="submit">
                    Start Over
                  </Button>
                </Form>
              </>
            ) : (
              <>
                <h1>Subgenre is: {subGenre}</h1>
                <div className="col-sm-12 text-lg-start">
                  <p>Here are some of my favorite Trance Artists</p>
                  <ul>
                    <li>Tiësto</li>
                    <li>Armin van Buuren</li>
                    <li>Dash Berlin</li>
                  </ul>
                </div>
                <Button variant="primary" className="ms-3" onClick={startOver}>
                  Start Over
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
