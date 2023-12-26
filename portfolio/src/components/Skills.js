
function createPyramidTable(skills) {
    const res_table = document.createElement('table');
    for (let i=0; i<skills.length; i++) {
        const tr = res_table.insertRow();
        for (let j=0; j<i + 1; j++) {
            const td = tr.insertCell();
            td.appendChild(document.createTextNode(skills[j - 1]));
        }
    }
}


export default function Skills() {
    const skills = ['ReactJs', 'Javascript', 'Python', 'HTML', 'CSS', 'NodeJs',
                    'ExpressJs', 'Java', 'MySQL', 'MongoDB', 'RESTful APIs',
                    'Web Scraping', 'Unix', 'Linux', 'Git']
    return (
        <div className="skills-content">
            <h2 className="skills-header" id="skills">SKILLS</h2>
            <div>
                {createPyramidTable(skills)}
                <table>
                    <tr>
                        <td>ReactJs</td>
                        <td>JavaScript</td>
                        <td>Python</td>
                        <td>HTML</td>
                        <td>CSS</td>
                        <td>NodeJs</td>
                    </tr>
                    <tr>
                        <td>ExpressJs</td>
                        <td>Java</td>
                        <td>MySQL</td>
                        <td>MongoDB</td>
                        <td>RESTful APIs</td>
                        <td>Web Scraping</td>
                    </tr>
                    <tr>
                        <td>Unix</td>
                        <td>Linux</td>
                        <td>Git</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}