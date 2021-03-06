import React from "react";
import { apiEntity } from "../../apiConfig";
import useApi from "../../hooks/useApi";
import Separator from "../Separator/Separator";
import styles from "./Banner.module.css";
import Buttons from "../Buttons/Buttons";

const Banner = () => {
  const [movie, loading, error, randomMovie, backImg] = useApi(
    apiEntity.popularMovies
  );

  return (
    <div
      className={`${styles.banner_container}${styles.banner_header}`}
      style={
        loading
          ? { backgroundImage: "none" }
          : {
              backgroundImage: `url(${backImg})`,
            }
      }
    >
      <div className={styles.banner_gradient}>
        <Separator height={"150px"} />

        <div className={styles.banner_title}>
          <h1>{loading ? "Loading..." : randomMovie?.title}</h1>
        </div>

        <div className={styles.banner_description}>
          <h2>{loading ? "Loading..." : randomMovie?.overview}</h2>
        </div>
      <Buttons name1="Mas informacion" name2="Reproducir"/>
      </div>
    </div>
  );
};

export default Banner;
