import atmaImage from '../assets/me.jpeg'

export default function Welcome() {
    return (
    <section id="welcome-section">
        <img src={atmaImage} alt="Atma profile picture" />
        <div id="about-me">
            <h1>Greetings!</h1>
            <h1>I am Adyatma Imam Susanto</h1>
            <p>A Machine Learning and Web Dev Enthusiast.</p>
        </div>
        <a href="#projects" id="arrow-down-icon">
            <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>
        </a>
    </section>
    )
}