import React from 'react';
import styles from './Buttons.module.css';
import { FaPlay, FaInfoCircle} from 'react-icons/fa';

const Buttons = ({name1, name2}) => {
  return (
    <div className={styles.buttons}>
    <button
      className={styles.button}> <FaInfoCircle /> {name1}
    </button>
    <button className={styles.button}> <FaPlay /> {name2}</button>
  </div>  )
}

export default Buttons
