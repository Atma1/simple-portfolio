import ballEstimationImage from '../assets/ballesti.png';
import legoFigureImage from '../assets/legofig.jpeg';
import goBerkahImage from '../assets/goberkah.png';
import foodVisionImage from '../assets/foodvision.png';
import quizImage from '../assets/quiz.png';

export default function Projects() {
    return (
        <section id="projects">
            <h2 className="title">Projects</h2>
            <h2 className="project-category">Web Dev</h2>
            <div id="projects-grid-container">
                <div className="project-tile">
                    <a href="https://quizzical-seven-black.vercel.app/">
                        <img className="project-image" src={quizImage} alt="Zoo Visitor Monitoring System" />
                        <h2 className="project-title">Quizzical</h2>
                        <div className="project-explanation-container">
                            <p className='project-desc'>A trivia game website using Open Trivia DB API </p>
                            <li className='project-tech-stack'>
                                <ul>JavaScript</ul>
                                <ul>React.js</ul>
                                <ul>API</ul>
                                <ul>Next.js</ul>
                            </li>
                        </div>
                    </a>
                </div>
                <div className="project-tile">
                    <a href="https://github.com/Atma1/go-berkah-resto">
                        <img className="project-image" src={goBerkahImage} alt="Discord Bot" />
                        <h2 className="project-title">Go Berkah Resto</h2>
                        <div className="project-explanation-container">
                            <p className='project-desc'>Restoran Berkah's (fictional) Online Order and Management System</p>
                            <li className='project-tech-stack'>
                                <ul>PHP</ul>
                                <ul>TailWind CSS</ul>
                                <ul>MySQL</ul>
                                <ul>JavaScript</ul>
                            </li>
                        </div>
                    </a>
                </div>
                <div className="project-tile">
                    <a href="https://github.com/Atma1/Lego-Figure-Classification">
                        <img className="project-image" src={legoFigureImage} alt="Quizzical" />
                        <h2 className="project-title">Lego Figure Classification Web</h2>
                        <div className="project-explanation-container">
                            <p className='project-desc'>A lego figure classification website using JavaScript for interface</p>
                            <li className='project-tech-stack'>
                                <ul>JavaScript</ul>
                                <ul>React.js</ul>
                            </li>
                        </div>
                    </a>
                </div>
            </div>
            <h2 className="project-category">Machine Learning</h2>
            <div id="projects-grid-container">
                <div className="project-tile">
                    <a href="https://github.com/Atma1/Lego-Figure-Classification">
                        <img className="project-image" src={legoFigureImage} alt="Zoo Visitor Monitoring System" />
                        <h2 className="project-title">Lego Figure Classification</h2>
                        <div className="project-explanation-container">
                            <p className='project-desc'>Lego figure classification capable of classifying 10 unique lego figure using fine-tuned Resnet16 model. Implemented pipe line from data transformation to model deployment. Deployed using Flask for inference API.</p>
                            <li className='project-tech-stack'>
                                <ul>Fast.ai</ul>
                                <ul>ZenML</ul>
                                <ul>Flask</ul>
                                <ul>Classification</ul>
                            </li>
                        </div>
                    </a>
                </div>
                <div className="project-tile">
                    <a href="https://github.com/Atma1/obj_detection">
                        <img className="project-image" src={ballEstimationImage} alt="Discord Bot" />
                        <div className="project-explanation-container">
                            <h2 className="project-title">Ball Detection and Distance Estimation</h2>
                            <p className='project-desc'>Trained a YOLOv8 nano model to detect ball from a catadioptric camera and estimate distance from center of image to detected ball bounding box. Used ROS2 library for multithreading.</p>
                            <li className='project-tech-stack'>
                                <ul>ROS2</ul>
                                <ul>YOLO</ul>
                                <ul>OpenCV</ul>
                                <ul>Object Detection</ul>
                            </li>
                        </div>
                    </a>
                </div>
                <div className="project-tile">
                    <a href="https://huggingface.co/spaces/Armful/Foodvision_BIG">
                        <img className="project-image" src={foodVisionImage} alt="FoodVision" />
                        <div className="project-explanation-container">
                            <h2 className="project-title">Food Classification Using Effnet</h2>
                            <p className='project-desc'>Trained a Effnetb2 model on 20% of FoodVision101 dataset to classify over 100 food types. Deployed using Gradio to HuggingFace platform to bring the model alive.</p>
                            <li className='project-tech-stack'>
                                <ul>Gradio</ul>
                                <ul>PyTorch</ul>
                                <ul>Effnet</ul>
                                <ul>Classification</ul>
                            </li>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}