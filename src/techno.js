import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function House(props) {
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
              We've determined that your genre is Techno.
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
                      value={`Progressive house`}
                      name={`Progressive house`}
                      label={`Layered, constant drums, on a journey when listening, lots of drops, euphoric`}
                      onChange={() => setSubGenre("Progressive House")}
                    />
                    <Form.Check
                      type="radio"
                      value={`Deep house`}
                      name={`Deep house`}
                      label={`Slower Tempo, chill vibes, late night vibes, soulful, jazzy, not as much percussion`}
                      onChange={() => setSubGenre("Deep House")}
                    />

                    <Form.Check
                      type="radio"
                      value={`Acid house`}
                      name={`Acid house`}
                      label={`Steady beat. Not a lot of movement, 80s/70s vibes, wierd sounds `}
                      onChange={() => setSubGenre("Acid House")}
                    />
                    <Form.Check
                      type="radio"
                      value={`French house`}
                      name={`French house`}
                      label={`Very disco like, feels nostalgic, funky, filterd or phased vocals`}
                      onChange={() => setSubGenre("French House")}
                    />
                    <Form.Check
                      type="radio"
                      value={`Bass Electro house`}
                      name={`Bass Electro house`}
                      label={`Heavy, intense, dubstepy, distored`}
                      onChange={() => setSubGenre("Bass Electro House")}
                    />
                    <Form.Check
                      type="radio"
                      value={`Big Room House`}
                      name={`Big Room House`}
                      label={`Big drop, dancy, simple melody, synth, build up to the drop`}
                      onChange={() => setSubGenre("Big Room House")}
                    />
                    <Form.Check
                      type="radio"
                      value={`Future house`}
                      name={`Future house`}
                      label={`Futuristic, contagious hooks and drops, wierd and wonderful`}
                      onChange={() => setSubGenre("Future House")}
                    />
                    <Form.Check
                      type="radio"
                      value={`Latin house`}
                      name={`Latin house`}
                      label={`Heavy on the drums, latin feeling, afro feeling, in Spanish or Portugues`}
                      onChange={() => setSubGenre("Latin House")}
                    />
                    <Form.Check
                      type="radio"
                      value={`Tech house`}
                      name={`Tech house`}
                      label={`Techno-like, steady beat, rugged baseline, groovy, filter and distortion, repetive melodic synths`}
                      onChange={() => setSubGenre("Tech House")}
                    />
                    <Form.Check
                      type="radio"
                      value={`Tropical house`}
                      name={`Tropical house`}
                      label={`Beach Vibes, uplifting, relaxing`}
                      onChange={() => setSubGenre("Tropical House")}
                    />
                  </Form.Group>
                  <Button variant="primary" className="ms-3" type="submit">
                    Start Over
                  </Button>
                </Form>
              </>
            ) : (
              <>
                {" "}
                <h1>Subgenre is: {subGenre}</h1>
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
