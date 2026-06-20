import React from 'react'
const customers = [
    {
        name: "Sarah Johnson",
        position: "Chief Marketing Officer",
        review:
            "Guri delivered exactly what we needed with impressive speed and quality.",
        img: "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2c80b31afe1de228046d3_Testimonial%2001.webp",
    },
    {
        name: "Michael Carter",
        position: "Founder & CEO",
        review:
            "Working with Guri was effortless, professional, and highly productive.",
        img: "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2c80b0df1b09890afd720_Testimonial%2002.webp",
    },
    {
        name: "Emily Davis",
        position: "Head of Growth",
        review:
            "Creative solutions, fast execution, and impressive attention to every detail.",
        img: "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2c80bc3c6f67024959d7c_Testimonial%2004.webp",
    },
    {
        name: "James Wilson",
        position: "Managing Director",
        review:
            "Guri transformed our ideas into a polished and impactful experience.",
        img: "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2c80bdeb7dd03eb9e01fe_Testimonial%2003.webp",
    },
    {
        name: "Olivia Brown",
        position: "Creative Director",
        review:
            "Exceptional communication, smooth collaboration, and outstanding final results.",
        img: "https://images.pexels.com/photos/34610840/pexels-photo-34610840.jpeg?_gl=1*1ikygyg*_ga*MTk2NTY1NTAwMS4xNzgwMDc1OTcy*_ga_8JE65Q40S6*czE3ODE5NDkwMDAkbzExJGcxJHQxNzgxOTQ5MDY4JGo1OSRsMCRoMA..",
    },
    {
        name: "Daniel Martinez",
        position: "VP of Product",
        review:
            "Guri consistently exceeded expectations and delivered beyond project requirements.",
        img: "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2c80b02586068035d4796_Testimonial%2005.webp",
    },
    {
        name: "Sophia Anderson",
        position: "Operations Manager",
        review:
            "The entire process felt seamless, transparent, and exceptionally well managed.",
        img: "https://images.pexels.com/photos/17341495/pexels-photo-17341495.jpeg?_gl=1*1vammwz*_ga*MTk2NTY1NTAwMS4xNzgwMDc1OTcy*_ga_8JE65Q40S6*czE3ODE5NDkwMDAkbzExJGcxJHQxNzgxOTQ5MTA0JGoyMyRsMCRoMA..",
    },
    {
        name: "Ethan Thomas",
        position: "Chief Technology Officer",
        review:
            "Strong technical expertise combined with excellent communication and reliability.",
        img: "https://cdn.prod.website-files.com/69a0a45220c8336fe957ccba/69a2c80b3b5d3ea44ecf163d_Testimonial%2006.webp",
    },
    {
        name: "Ava Taylor",
        position: "Brand Strategist",
        review:
            "Our online presence improved significantly after partnering with Guri.",
        img: "https://images.pexels.com/photos/38149389/pexels-photo-38149389.jpeg?_gl=1*zlcc3p*_ga*MTk2NTY1NTAwMS4xNzgwMDc1OTcy*_ga_8JE65Q40S6*czE3ODE5NDkwMDAkbzExJGcxJHQxNzgxOTQ5MTMzJGo2MCRsMCRoMA..",
    },
    {
        name: "Noah Harris",
        position: "Founder",
        review:
            "Responsive, efficient, and genuinely committed to achieving excellent outcomes.",
        img: "https://images.pexels.com/photos/31712631/pexels-photo-31712631.jpeg?_gl=1*1uus4bu*_ga*MTk2NTY1NTAwMS4xNzgwMDc1OTcy*_ga_8JE65Q40S6*czE3ODE5NDkwMDAkbzExJGcxJHQxNzgxOTQ5MTMzJGo2MCRsMCRoMA..",
    },
];

const Testimonials = ({ styles, testimonialsRef }) => {
    return (
        <section className={styles.testSec}>
            <div className={styles.TITLE}>
                <p>✹ Client Stories</p>
            </div>
            <div ref={testimonialsRef} className={`${styles.testimonials} ${styles.flex} ${styles.ac}`}>
                {customers.map((reviews, idx) => (
                    <div style={{ backgroundImage: `url(${reviews.img})`, }} className={styles.customerCard} key={idx}>
                        <div className={styles.customerInfo}>
                            <p className={styles.msg}>{` "${reviews.review}" `}</p>
                            <div className={`${styles.details} ${styles.flex} ${styles.fClmn}`}>
                                <p>{reviews.name}</p>
                                <p>{reviews.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Testimonials