

export default function Education() {
    return (
        <div className="education-content">
            <h2 id="education">Education</h2>
            <div className="edu-large-container">
                <div className="edu-container">
                    <div class="edu-logo">
                        <img src={require("../images/cal_poly_logo.png")} alt="CPSLO logo"
                            width="175"/>
                    </div>
                    <div class="edu-content">
                        <h3>California Polytechnic University, San Luis Obispo</h3>
                        <h4>San Luis Obispo, CA</h4>
                        <div>Bachelors of Science, Computer Science</div>
                        <p>2021-2023</p>
                    </div>
                </div>
                <div className="edu-container">
                    <div class="edu-logo">
                        <img src={require("../images/pcc_logo.png")} alt="PCC logo"
                            width="200"/>
                    </div>
                    <div class="edu-content">
                        <h3>Pasadena City College</h3>
                        <h4>Pasadena, CA</h4>
                        <div>Associates in Science in Mathematics for Transfer</div>
                        <p>2019-2021</p>
                    </div>
                </div>
            </div>
        </div>
    );
}