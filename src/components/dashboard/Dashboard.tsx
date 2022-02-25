import React, { useEffect, useState } from "react";
import Api from "../../services";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  getSelectCategory,
  getCats,
  getLimit,
  setLimit,
  setCats,
  setCatsLoading,
  getCatsLoading,
} from "../../redux/dashboard";
import clsx from "clsx";
import { useStyles } from "./styles";

function Dashboard() {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const selectedCategory = useAppSelector(getSelectCategory);
  const cats = useAppSelector(getCats);
  const limit = useAppSelector(getLimit);
  const fetchLoading = useAppSelector(getCatsLoading);

  useEffect(() => {
    dispatch(setCatsLoading(true));
    axios
      .get(
        `https://api.thecatapi.com/v1/images/search?limit=${limit}&category_ids=${selectedCategory}`
      )
      .then((response) => {
        console.log("cats response: ", response);
        dispatch(setCats(response.data));
        dispatch(setCatsLoading(false));
      })
      .catch((err) => {
        dispatch(setCatsLoading(false));
      });
  }, [selectedCategory, limit]);

  const handleShowMorePosts = () => {
    dispatch(setLimit(limit + 10));
  };

  return (
    <div className={classes.container}>
      {fetchLoading ? (
        <div className={classes.fetchCatsLoading}>loading...</div>
      ) : (
        cats?.map((cat: any) => (
          <div className={classes.imgBox}>
            <img
              className={clsx(classes.img, {
                width: cat.width,
                heigh: cat.heigh,
              })}
              src={cat.url}
              alt="BigCo Inc. logo"
            />
            <p className={classes.catID}> {cat.id} : ID</p>
          </div>
        ))
      )}
      {!fetchLoading && (
        <button className={classes.loadMore} onClick={handleShowMorePosts}>
          Load more
        </button>
      )}
    </div>
  );
}

export default Dashboard;
