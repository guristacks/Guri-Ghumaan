import React from 'react'

const FooterBottom = () => {

    const footerBottomLinks = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/guristacks",
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/guri_ghumxn/",
        },
        {
            name: "GitHub",
            url: "https://github.com/guristacks",
        }
    ];

    return (
        <div className="footBottom flex ac sb">
            <div className="reserve flex f-clmn">
                <small> Version</small>
                <p>© 2026 Guri Ghumaan. All rights reserved.</p>
            </div>

            <div className="footLinks flex f-clmn ac sb">
                <small> Socials</small>
                <div className="socialLinks flex ac">
                    {footerBottomLinks.map((link, index) => (
                        <a key={index} target="_blank" rel="noopener noreferrer" href={link.url}>
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FooterBottom