import React from 'react';
import styles from '../../styles/Home.module.css';

const Details = () => {
  return (
    <section className={styles.home}>
      <div className='contentContainer'>
        <h3>Ezy Event</h3>
        <h2>Ensures audience engagement</h2>
        <p>
          Ezy Event ensures audience engagement with its dynamic features and interactive tools.
          From personalized alerts that keep attendees informed about event updates to centralized
          communication that fosters seamless interaction between organizers and participants
        </p>
        <button className='contact'>Contact Us</button>
      </div>
    </section>
  );
};

export default Details;
