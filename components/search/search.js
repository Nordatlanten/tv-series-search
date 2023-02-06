import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./search.module.scss";
import { Button } from "../button/button";
import { useRouter } from "next/router";

const baseURL = "https://api.tvmaze.com/search/shows?q=";

export const Search = ({ placeholder, ...props }) => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [shows, setShows] = useState("");

  function checkStoredRequest() {
    if(router.query.storedRequest) fetch(router.query.storedRequest).then((res) => res.json()).then((result) => setShows(result)).then(() => setKeyword(router.query.keyword))
    router.query.storedRequest = ""
  }
  checkStoredRequest()
 

  const handleClick = (item, id) => {
    let href = { pathname: "detailed", query: { showId: item, id: id, keyword: keyword} };
    router.push(href);
    setShows([])
    setKeyword("")
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    router.query = {}
    fetch(`${baseURL}${keyword}`)
      .then((res) => res.json())
      .then((result) => {
        setShows(result);
      }),
      (error) => console.log(error);
  };

  return (
    <div className={styles["search"]}>
      <form
        onSubmit={handleSubmit}
        className={[styles["form"]].join(" ")}
        {...props}
      >
        <input
          type="text"
          name="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className={styles["input"]}
          placeholder={placeholder}
        />
        <Button />
      </form>
      {shows.length > 0 && (
        <ul>
          {shows.map((item) => (
            <li
              key={item.show.id}
              onClick={() => {
                handleClick(item.show.externals.thetvdb, item.show.id);
              }}
            >
              <img
                src={
                  item.show.image
                    ? item.show.image.medium
                    : "/images/Branding.svg"
                }
                style={item.show.image ? {} : {maxWidth: '210px'}}
              />
              <p>{item.show.name}</p>
              <div>
                {[...Array(Math.floor(item.show.rating.average))].map(
                  (e, i) => (
                    <span className={styles.stars} key={i}>
                      ★
                    </span>
                  )
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  placeholder: "Search for TV shows",
};
