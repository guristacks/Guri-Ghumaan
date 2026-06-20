import { useState } from "react";

const faqs = [
    {
        question: "How long does a typical project take?",
        answer:
            "Most projects are completed within 4–8 weeks, depending on the scope and complexity. Timelines can vary based on the project’s requirements, features, revisions, and overall goals. Once we discuss your project, I’ll provide a clear roadmap, estimated timeline, and development process so you know exactly what to expect from start to launch.",
    },
    {
        question: "What services do you provide?",
        answer:
            "I specialize in creating animated, high-performance websites. My services include Front-End Development, Responsive Website Development, Portfolio Websites, Landing Pages, and interactive web experiences. I also build custom WordPress websites and transform Figma designs into clean, pixel-perfect, production-ready code.",
    },
    {
        question: "Do you work with clients remotely?",
        answer:
            "Yes, I collaborate with clients worldwide through online meetings and project management tools.",
    },
    {
        question: "Can you redesign an existing website?",
        answer:
            "Absolutely. I can refresh outdated designs, improve user experience, optimize performance, and modernize your website.",
    },
    {
        question: "How much does a project cost?",
        answer:
            "The cost of a project depends on its requirements, features, and complexity. Rather than offering one-size-fits-all pricing, I focus on understanding your goals and delivering the best possible outcome. My priority is creating a website that provides real value to your business and leaves you satisfied with the final result.",
    }
];

export default function FAQ({ styles }) {
    const [active, setActive] = useState(0);

    const handleToggle = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <section className={styles.FAQ}>
            <div className={styles.container}>
                <div className={styles.TITLE}>
                    <p>✹ FAQ</p>
                </div>
                {faqs.map((item, index) => (
                    <div className={styles.faqItem} key={index}>
                        <button
                            className={styles.question}
                            onClick={() => handleToggle(index)}
                        >
                            <span>{`0${index + 1} ${item.question}`}</span>
                            <span
                                className={`${styles.icon} ${active === index ? styles.activeIcon : ""
                                    }`}
                            >
                                +
                            </span>
                        </button>

                        <div
                            className={`${styles.answerWrapper} ${active === index ? styles.open : ""
                                }`}
                        >
                            <p className={styles.answer}>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
