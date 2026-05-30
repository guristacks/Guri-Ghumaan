import React from 'react'

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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-arrow-down-left-icon lucide-arrow-down-left"
                >
                    <path d="M17 7 7 17" />
                    <path d="M17 17H7V7" />
                </svg>
            </div>

            <a class="footCta flex ac" href="#">
                Get in Touch
            </a>
        </div>
    )
}

export default FooterTop