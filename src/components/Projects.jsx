import visitorSystemImg from '../assets/visit.png'
import quizImage from '../assets/quiz.png'
const discordImage = "https://d1lss44hh2trtw.cloudfront.net/assets/article/2019/05/13/discord-has-amassed-over-250-million-users-in-four-years_feature.jpg"

export default function Projects() {
    return (
        <section id="projects">
            <h2 className="title">Past Projects</h2>
            <div id="projects-grid-container">
                <div className="project-tile">
                    <a href="">
                        <img className="project-image" src={visitorSystemImg} alt="Zoo Visitor Monitoring System" />
                        <h2 className="project-title">Zoo Visitor Monitoring</h2>
                    </a>
                </div>
                <div className="project-tile">
                    <a href="">
                        <img className="project-image" src={discordImage} alt="Discord Bot" />
                        <h2 className="project-title">Discord Bot</h2>
                    </a>
                </div>
                <div className="project-tile">
                    <a href="">
                        <img className="project-image" src={quizImage} alt="Quizzical" />
                        <h2 className="project-title">Quizzical</h2>
                    </a>
                </div>
            </div>
        </section>
    )
}