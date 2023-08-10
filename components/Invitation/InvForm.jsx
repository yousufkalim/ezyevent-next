import React from 'react';
import Style from '../../styles/InvFrom.module.css';
import Image from 'next/image';
import apple from '../../public/assets/img/common/Home-Apple-download.png';
import google from '../../public/assets/img/common/Home-Play-store-Download.png';
import phone from '../../public/assets/img/InvForm/Phone.png';
import card from '../../public/assets/img/InvForm/card.png';
import eveimg from '../../public/assets/img/InvForm/eveimg.png';
import { ReactComonent as Calendar } from '../../public/assets/img/InvForm/Calendar.svg';

const InvFrom = () => {
  return (
    <section className={Style.join_event_section}>
      <div className={Style.side1}>
        <h1>
          {' '}
          Welcome on <br />
          <span> EzyEvent </span>
        </h1>
        <div className={Style.download_container}>
          <Image src={apple} alt='Apple App Store Link' />
          <Image src={google} alt='Play Store Link' />
        </div>
        <Image src={phone} alt='Play Store Link' className={Style.phoneimg} />
      </div>
      <div className={Style.side2}>
        <div className={Style.side2_data}>
          <h2> Join Event</h2>
          <p>
            We believe that every event has the potential to <br /> be extraordinary.
          </p>
          <div className={Style.card}>
            <Image src={card} alt='card Image' className={Style.event_image} /> <br />
            <div className={Style.Calendar_container}>
              <Calendar alt='Calendar' /> <p className={Style.card_date}>12-05-23</p>
            </div>
            <h3>Dream world wide in France</h3>
            <p>
              Embark on a magical journey through the breathtaking landscapes, captivating <br />
              culture Embark on a magical journey through the breathtaking landscapes,{' '}
            </p>
            <p>Event Created By</p>
            <div className={Style.crator_name}>
              <Image src={eveimg} alt='Event Crator Image' className={Style.eve_create} />{' '}
              <p>Alina Khan</p>
            </div>
          </div>
          <div className={Style.input_form}>
            <label htmlFor='name'> Your Name</label>
            <input type='name' className={Style.form_name} placeholder='Adeel' />
            <label htmlFor='email'> Email</label>
            <input type='email' placeholder='abc@xyz.com' className={Style.form_email} />
            <div className={Style.form_button}>
              <button className={Style.button_join}> Join</button>
              <button className={Style.button_decline}> Decline</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvFrom;
