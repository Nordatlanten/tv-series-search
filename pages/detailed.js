import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Search } from "../components/search/search";
import { ReturnButton } from "../components/return-button/return-button";

function Detailed() {
  const router = useRouter();
  const baseURL = "https://api.tvmaze.com/lookup/shows?thetvdb=";
  const [display, setDisplay] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}${router.query.showId}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setDisplay(result);
      })
      .then(fetch(`https://api.tvmaze.com/shows/${router.query.id}/cast`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setCast(result)
      })),
      (error) => console.log(error);
  }, []);

  const handleClick = () => {
    let href = { pathname: "/", query: { } };
    router.push(href);
  };

  const handleReturn = () => {
    let href = { pathname: "/", query: {storedRequest: `https://api.tvmaze.com/search/shows?q=${router.query.keyword}`, keyword: router.query.keyword} };
    router.push(href);
    console.log(href.query.storedRequest)
  };

  let castList = cast.slice(0, 6).map((i) => {
    return (
      <div key={i.person.name}>
        <img
          src={i.person.image ? i.person.image.medium : "/images/Branding.svg"}
        />
        <p style={{color: '#fff'}}>
          {i.person.name}
        </p>
        <p>as {i.character.name}</p>
      </div>
    );
  });

  return (
    <>
      <Search onClick={handleClick} />
      <ReturnButton onClick={handleReturn} />
      {display && (
        <div>
          <section>
            <img
              src={
                display.image ? display.image.medium : "/images/Branding.svg"
              }
            />
          </section>
          <section>
            <h2 style={{ color: "#fff" }}>{display.name}</h2>
            <p>
              { display.rating ? [...Array(Math.floor(display.rating.average))].map((e, i) => (
                <span style={{ color: "yellow" }} key={i}>
                  ★
                </span>
              )): ""}
            </p>
            <p style={{ color: "#fff" }}>
              <strong>Genres: </strong>{" "}
              {display.genres ? display.genres.map((i, n) => {
                if (n != display.genres.length - 1) {
                  return <span key={i}>{i} | </span>;
                } else {
                  return <span key={i}>{i}</span>;
                }
              }) : ""}
            </p>
            <div
              style={{ color: "#fff" }}
              dangerouslySetInnerHTML={{ __html: display.summary }}
            />
          </section>
          <section>
            {cast && (
              <div style={{ display: "flex", gap: 24, flexWrap: 'wrap' }}>
                    {castList}
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
}

export default Detailed;
