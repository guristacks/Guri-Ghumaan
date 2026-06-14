import React from "react";

const ServiceCard = ({ service, styles }) => {
  return (
    <div className={`${styles.service} ${styles.flex} ${styles.fClmn}`}>
      <div className={styles.numbering}>
        <p>{service.num}</p>
      </div>
      <div className={styles.title}>
        <p>{service.title}</p>
      </div>
      <div className={styles.description}>
        <p>{service.details}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
