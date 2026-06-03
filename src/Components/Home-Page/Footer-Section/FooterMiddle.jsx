import React from 'react'

const FooterMiddle = ({ styles }) => {

    const footerMiddleLinks = [
        {
            name: "guristacks@gmail.com",
            url: "mailto:guristacks@gmail.com",
        },
        {
            name: "+91 7696 992194",
            url: "tel:+917696992194",
        }
    ];

    return (
        <div className={`${styles.footMiddle} ${styles.flex} ${styles.ac}`}>
            {footerMiddleLinks.map((link, index) => (
                <a className={`${styles.fancyBtn} ${styles.flex} ${styles.ac} ${styles.jc}`} key={index} target="_blank" rel="noopener noreferrer" href={link.url}>
                    {link.name}
                </a>
            ))}
        </div>
    )
}

export default FooterMiddle