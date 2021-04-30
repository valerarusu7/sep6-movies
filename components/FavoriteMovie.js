import React, { useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import styles from "../styles/FavoriteMovie.module.css";
import { MdDragHandle } from "react-icons/md";

const FavoriteMovie = ({ item, index }) => {
  useEffect(() => {}, []);

  return (
    <Draggable draggableId={item.id.toString()} index={index}>
      {(provided) => (
        <div
          onClick={() => console.log(item.id)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={styles.container}>
            <MdDragHandle size={25} />
            <div className={styles.position}> {index + 1}</div>
            <img
              src={item.poster_path}
              alt={item.title}
              className={styles.img}
            />
            <div> {item.title}</div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default FavoriteMovie;
