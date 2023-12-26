

export default function About() {
    return (
        <div className="about-content" id="about">
            <div className="profile">
                <img src={require("../images/profile_img.png")} alt="Avatar"
                     className="profile-img" width="175"/>
            </div>
            <div className="profile_caption">
                <h1 style={{fontSize:50}} className="profile-header">Anna Yang</h1>
                <h2 style={{fontSize:30}} className="profile-header">New Grad - Computer Science Major</h2>
            </div>
            <div>
                <p style={{fontSize:17, margin:30}}>Hi! I'm a recent Computer Science 2023 graduate from<br/>
                                          California Polytechnic State University, San Luis Obispo.<br/>
                                          I am looking for entry-level roles as a Frontend Developer,<br/>
                                          Software Developer, or Full-Stack Developer.<br/><br/>
                My interests include software design and development, natural language processing, and data science.</p>
            </div>
            <a href="https://drive.google.com/file/d/1res4MdGtYRCR-MW3Jn_oi957Wwf4gH8u/view?usp=sharing" target="_blank">
                <button className="resume-btn">Resume</button>
            </a>
            <div>
                <a href="https://github.com/ayang101">
                    <img src={require("../images/github-logo.png")} alt="github-link"
                         className="footer-logo" width="30"
                         style={{marginTop: 35}}/>
                </a>
                <a href="https://www.linkedin.com/in/ayang101/">
                    <img src={require("../images/linkedin-logo.png")} alt="linkedin-link"
                         className="footer-logo" width="30"/>
                </a>
            </div>
        </div>
    );
}