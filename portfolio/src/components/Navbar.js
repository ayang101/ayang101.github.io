

export default function Navbar() {
    return (
    <header class="header">
        <nav class="navbar">              
            <div class="nav-logo"><a href="#">AY</a></div>
            <div class="nav-items">
                <ul>
                    <li class="nav-item"><a href="#about">About</a></li>
                    <li class="nav-item"><a href="#skills">Skills</a></li>
                    <li class="nav-item"><a href="#projects">Projects</a></li>
                    <li class="nav-item"><a href="#education">Education</a></li>
                    {/*<li class="nav-item"><a href="#contact">Contact</a></li>*/}
                </ul>
            </div>
        </nav>
    </header>
    );
}