import React from "react";

const stats = [
    {
        Result: "$74M",
        Value: 74,
        Suffix: "M",
        Prefix: "$",
        Reason: "Driving growth with strategy.",
    },
    {
        Result: "95%",
        Value: 95,
        Suffix: "%",
        Prefix: "",
        Reason: "Building trusted partnerships.",
    },
    {
        Result: "225+",
        Value: 225,
        Suffix: "+",
        Prefix: "",
        Reason: "Delivering industry success.",
    },
    {
        Result: "92%",
        Value: 92,
        Suffix: "%",
        Prefix: "",
        Reason: "Turning traffic into growth.",
    },
];

const brands = [
    {
        LogoImg:
            "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2aefb0c5c9128f0dd58b6_Brand%2007.webp",
        LogoAlt: "Brand 07 company logo",
    },
    {
        LogoImg:
            "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2aefb0f49bca3c1742f2f_Brand%2003.webp",
        LogoAlt: "Brand 03 company logo",
    },
    {
        LogoImg:
            "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2aefbeb9a99a07522dd00_Brand%2004.webp",
        LogoAlt: "Brand 04 company logo",
    },
    {
        LogoImg:
            "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2aefbf5f22f3b3bf85a8a_Brand%2001.webp",
        LogoAlt: "Brand 01 company logo",
    },
    {
        LogoImg:
            "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2aefb9dd713edf13a284f_Brand%2002.webp",
        LogoAlt: "Brand 02 company logo",
    },
    {
        LogoImg:
            "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2aefbeb9a99a07522dd00_Brand%2004.webp",
        LogoAlt: "Brand 04 company logo",
    },
    {
        LogoImg:
            "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2aefb0adf56b97802a9be_Brand%2006.webp",
        LogoAlt: "Brand 06 company logo",
    },
    {
        LogoImg:
            "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2aefbf5f22f3b3bf85a8a_Brand%2001.webp",
        LogoAlt: "Brand 01 company logo",
    },
    {
        LogoImg:
            "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2aefb9dd713edf13a284f_Brand%2002.webp",
        LogoAlt: "Brand 02 company logo",
    },
];
const AboutScnd = ({ styles, logosRef, counterRefs, sectionRef }) => {
    return (
        <section className={styles.AboutScnd} ref={sectionRef} >
            <div className={styles.container}>
                <div className={styles.TITLE}>
                    <p>✹ Growth Metrics</p>
                </div>
                <div className={styles.ScndContent}>
                    <div className={`${styles.data} ${styles.flex} ${styles.ac} ${styles.sb}`}>
                        <div className={`${styles.images} ${styles.flex} ${styles.sb}`}>
                            <img className={styles.firstImg} src="https://images.pexels.com/photos/7693199/pexels-photo-7693199.jpeg?_gl=1*bmy9ia*_ga*MTk2NTY1NTAwMS4xNzgwMDc1OTcy*_ga_8JE65Q40S6*czE3ODE4OTUzNzgkbzEwJGcxJHQxNzgxODk2OTE5JGo2MCRsMCRoMA.." alt="" />
                            <img className={styles.lastImg} src="https://images.pexels.com/photos/6814524/pexels-photo-6814524.jpeg?_gl=1*17y9psa*_ga*MTk2NTY1NTAwMS4xNzgwMDc1OTcy*_ga_8JE65Q40S6*czE3ODE4OTUzNzgkbzEwJGcxJHQxNzgxODk2ODkzJGoxJGwwJGgw" alt="" />
                        </div>

                        <div className={styles.numbers}>

                            {stats.map((item, index) => (

                                <div key={index}>

                                    <p
                                        ref={(el) => (counterRefs.current[index] = el)}
                                        data-value={item.Value}
                                        data-prefix={item.Prefix}
                                        data-suffix={item.Suffix}
                                    >
                                        {item.Prefix}0{item.Suffix}
                                    </p>
                                    <p>{item.Reason}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.logoWrap}>
                    <div className={styles.logoTrack} ref={logosRef}>
                        {brands.map((brand, index) => (
                            <img
                                key={index}
                                src={brand.LogoImg}
                                alt={brand.LogoAlt}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutScnd;
