import axios from "axios";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import FavoriteMovie from "../components/FavoriteMovie";
import { server } from "../config";
import requests from "./api/requests";

const Favorite = ({}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    const netflixRequest = await axios.get(
      `${server}${requests.server_requests.netflix}`
    );
    setMovies(netflixRequest.data.netflix);
  }

  // a little function to help us with reordering the result
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const newMovies = reorder(
      movies,
      result.source.index,
      result.destination.index
    );

    setMovies(newMovies);
  }

  return (
    <center
      style={{
        width: "70%",
        margin: "auto",
        display: "block",
      }}
    >
      <Head>
        <title>Favorites</title>
      </Head>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {movies !== []
                ? movies.map((item, index) => (
                    <FavoriteMovie item={item} index={index} key={item.id} />
                  ))
                : null}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </center>
  );
};

export default Favorite;
