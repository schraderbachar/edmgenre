import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./App.css";
import House from "./house";
import Trance from "./trance";
import Techno from "./techno";
import DNB from "./dnb";
import Hardstyle from "./hardstyle";

function App() {
  const CLIENT_ID = "8a5ac8cd9a464c06b5e2e0ceec2495ba";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [song, setSong] = useState("");
  const [genre, setGenre] = useState("");

  // TODO make genres defined here and after move them into a diff file called genre constants or sum
  //*  taken from https://towardsdatascience.com/genre-classification-of-electronic-dance-music-using-spotifys-audio-analysis-7350cac7daf0 figure 3 and list above in ranges

  /** // * genre distinguishers

 * 
· Tempo — The overall estimated tempo of a track in beats per minute (BPM).

· Instrumentalness — Probability of a song containing no vocals. Purely instrumental songs will have values closer to 1. techno and trance especially don't have vocals

· Valence — Mood of a song. Happier sounding songs have a value closer to 1, sadder songs closer to 0. house is a happy genre, trance is somewhat low

**/
  // * [BPM, valence, instrumentalness]
  // const generalBPM = [
  //   { house: [122, 0.6, 0.1] },
  //   { trance: [134, 0.3, 0.9] },
  //   { techno: [129, 0.1, 0.8] },
  //   { dnb: [173, 0.4, 0.4] },
  //   { hardstyle: [150, 0.2, 0.6] },
  // ];

  useEffect(() => {
    const hash = window.location.hash;

    let tok = window.localStorage.getItem("token");
    if (!tok && hash) {
      // if we don't have a token yet but there is a hash
      //set the token to the url bar(hash) and split the first adn to get the access_token, and then split it up from that (gives an array) to get the one that starts with access_token and then split that array up to get the 2nd value which is the token
      tok = hash
        .substring(1)
        .split("&")
        .find((el) => el.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      //save in local storage
      window.localStorage.setItem("token", tok);
    }
    setToken(tok);
    setGenre("");
  }, []);

  async function getSong(e) {
    e.preventDefault();
    if (song === "") {
      alert("Please copy and past the link");
    }
    let id = song.split("track/")[1];

    const { data } = await axios.get(
      `https://api.spotify.com/v1/audio-features/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    //this gets the track info, within it is the temp which I am basing my calculations off of
    //we need to compare BPM , valence, and instrumentalness

    let bpm = data.tempo;
    let valence = data.valence;
    let inst = data.instrumentalness;
    determineGenre({ bpm, valence, inst });
  }

  function submit() {
    console.log(genre);
  }

  function determineGenre(data) {
    console.log(data);
    setGenre("");
    if (data.bpm < 129) {
      setGenre("house");
    } else if (data.bpm > 132 && data.bpm < 140) {
      console.log(data.bpm);
      setGenre("trance");
    } else if (data.bpm > 122 && data.bpm <= 132) {
      setGenre("techno");
    } else if (data.bpm <= 155 && data.bpm > 135) {
      setGenre("hardstyle");
    } else if (data.bpm > 155) {
      setGenre("dnb");
    } else {
      alert("Genre Couldn't be determined");
    }
  }

  function starOver() {
    setGenre("");
    setSong("");
  }

  return (
    <div className="App">
      {!token && (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          className="btn"
        >
          Log in
        </a>
      )}

      {token && (
        <>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 mt-5">
                <h2>
                  Paste <u>Spotify</u> share link here to get the genre of the
                  song
                </h2>
                {genre === "" && (
                  <>
                    <>
                      <h6 className="mb-3">
                        Already know the genre of your song?
                      </h6>
                      <Form onSubmit={submit}>
                        <Form.Group
                          className="mb-3 text-sm-start"
                          controlId="checkboxes"
                        >
                          <Form.Check
                            type="radio"
                            value={`House`}
                            name={`House`}
                            label={`House`}
                            onChange={() => setGenre("house")}
                          />
                          <Form.Check
                            type="radio"
                            value={`Trance`}
                            name={`Trance`}
                            label={`Trance`}
                            onChange={() => setGenre("trance")}
                          />

                          <Form.Check
                            type="radio"
                            value={`Techno`}
                            name={`Techno`}
                            label={`Techno`}
                            onChange={() => setGenre("techno")}
                          />
                          <Form.Check
                            type="radio"
                            value={`DNB`}
                            name={`DNB`}
                            label={`DNB`}
                            onChange={() => setGenre("dnb")}
                          />
                          <Form.Check
                            type="radio"
                            value={`Hardstyle`}
                            name={`Hardstyle`}
                            label={`Hardstyle`}
                            onChange={() => setGenre("hardstyle")}
                          />
                        </Form.Group>
                      </Form>
                    </>
                    <Form onSubmit={getSong}>
                      <h6>
                        Otherwise you can enter link for it and we can tell you
                        what it is
                      </h6>
                      <input
                        type="text"
                        className="mt-3"
                        onChange={(e) => setSong(e.target.value)}
                      />
                      <Button variant="primary" type="submit" className="ms-3">
                        Find Genre
                      </Button>
                    </Form>
                  </>
                )}
              </div>
              <div className="col-sm-12 mt-5">
                {genre === "house" && <House startOver={starOver} />}
                {genre === "trance" && <Trance startOver={starOver} />}
                {genre === "techno" && <Techno startOver={starOver} />}
                {genre === "hardstyle" && <Hardstyle startOver={starOver} />}
                {genre === "dnb" && <DNB startOver={starOver} />}
              </div>
              <div className="col-sm-12 mt-5 text-start">
                <h6>
                  The great thing about EDM music is that a lot of the genres
                  have some overlap. We only mentioned 10 popular subgenres for
                  each genre, so it may not be 100% correct but it can give you
                  an idea of a similar sub genre.
                </h6>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
