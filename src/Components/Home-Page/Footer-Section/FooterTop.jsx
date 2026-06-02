import React from 'react'
import { Link } from 'react-router-dom';

const FooterTop = () => {
    return (
        <div className="foot-text flex ac sb">
            <p>
                Let's Work <br /> Together
            </p>

            <div className="footArrow">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-down-left-icon lucide-arrow-down-left"
                >
                    <path d="M17 7 7 17" />
                    <path d="M17 17H7V7" />
                </svg>
            </div>

            <Link to="/contact" className="footCta flex ac jc">
                Get In Touch
            </Link>
        </div>
    )
}

export default FooterTop