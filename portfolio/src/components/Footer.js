

export default function Footer() {
    return (
        <div className="footer-content">
            <a href="https://github.com/ayang101">
                <img src={require("../images/github-logo.png")} alt="github-link"
                    className="footer-logo" width="30"/>
            </a>
            <a href="https://www.linkedin.com/in/ayang101/">
                <img src={require("../images/linkedin-logo.png")} alt="linkedin-link"
                    className="footer-logo" width="30"/>
            </a>
        </div>
    );
}