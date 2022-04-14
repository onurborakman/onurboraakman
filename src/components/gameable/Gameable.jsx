import {useState} from 'react';
import './gameable.scss';
export default function Gameable() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            question: "What problem were you solving and why were you solving this problem?",
            answer: ["Many multiplayer video games uses their own matchmaking system which can be frustrating sometimes. Gameable matches people of same skill level and different roles (in order to prevent role overlapping and playing to the strengths of each player) before any game and lets them add each other as friends in a platform they would like to play in.", "Even though there are different apps out there that tries to solve this frustration, none of them offers a real-time experience to its users where Gameable's match-up system offers a real-time feature where users that appear on the match-up screen are users that are currently looking for others to play with."]
        },
        {
            id: "2",
            question: "What are the high-level functional and non-functional requirements that you supported in your project?",
            answer: ["Login", "Registration", "Admin Console", "Profile Page", "Edit Profile Page", "Real-Time Match-Up System and Results Page"]
        },
        {
            id: "3",
            question: "What technologies did you choose and why?",
            answer: ["React JS has been chosen for this project's front-end technology to learn a new technology, improve what I already knew and it is one of the most popular front-end technologies out there.", "Sprint Boot has been chosen because it is a industry-popular backend Java framework which I wanted to expand my knowledge on.", "MongoDB Atlas has been chosen for the database of this application in order to expand my knowledge through NoSQL databases, and non-relational ones. And MongoDB was one of the most popular choices out there in order to achieve my purposes.", "Heroku has been chosen as for the cloud service provider because it is easy to use and their free version offered what Gameable needed for its release version."]
        },
        {
            id: "4",
            question: "What industry best practices were supported in your design and implementation?",
            answer: ["GitHub Version Controlling has been used.", "Commented the codes for better code readability", "Divided the functionalities into classes and components in order to create a reusable and dynamic code environment", "Loggers have been used", "UPTime Robot has been set up in order to monitor the application", "Exception handling was done in order to prevent the application from crashing"]
        },
        {
            id: "5",
            question: "Is your application deployed in the cloud? How were DevOps principles applied?",
            answer: ["Yes, it is hosted on Heroku.", "Some of the DevOps principles that were used in the development of Gameable are; CI/CD (Continuous Integration/Continuous Delivery/Deployment) (CI/CD Pipeline has been used), automation (automated deployment) and use of customer-centric action where bugs and feedbacks are being collected from the users in order to fix and/or improve those flaws or designs."]
        },
        {
            id: "6",
            question: "Did you learn any new technologies for this project? If so, what were they and why did you choose to learn those new technologies?",
            answer: ["React JS was the first technology that I have chosen to learn because the frontend framework has a industry-leading popularity and thought it would be a great addition to my skillset.", "SASS was the next thing that I have learned because after learning the React JS, I loved focusing my attention to my frontend skills and wanted to expand my capabilities on this end.", "MongoDB was the non-relational NoSQL database technology that I have learned in order to expand my knowledge and understanding on non-relational and NoSQL databases, and MongoDB was one of the most popular databases which covered the needs for skillset"]
        },
        {
            id: "7",
            question: "What technical approach did you take?",
            answer: ["The technical approach that I have taken was to make sure that the technologies that I am going to be using were as new to me as possible in order to make it more challenging for myself, because if I do not challenge myself I cannot get better."]
        },
        {
            id: "8",
            question: "What risks and challenges did you have? How did you overcome these and what resources did you use? What risk management approaches did you take?",
            answer: ["The risks and challenges that I have encountered were to balance the time that I have spent on learning and development, because every step that I had to take required a deep learning phase. The main risk that occured from this time management challenge was to not being able finish the development before the delivery date. In order to manage the risks that I have had, I have created contingency plans in order to minimize the impacts of those risks on my learning and development phases.", "In order to manage the processes, I have divided the project into two phases; learning and development phases and tried to meet my goals on each of these phases. In order to see the bigger picture, I have used burndown charts, and detailed planning of the whole application including; UMLs, Flowcharts, Wireframes, User Stories, Detailed Physical Solution Design, Logical Solution Design, ER Diagrams, Sitemaps, Service API Design and Operational Support Design."]
        },
        {
            id: "9",
            question: "What outstanding issues do you have?",
            answer: ["One of the most important issues is that the application does not have any funding and running on the lowest available services where it's servers cannot hold a lot of people if it were to go viral."]
        }
    ];
    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }
    return(
        <div className = 'gameable' id = 'gameable'>
            <h1>Senior Project - Gameable</h1>
            <div className='general-information'>
                <h2>Gameable</h2>
                <div>
                    <h4>Technologies Used</h4>
                    <ul>
                        <li>React JS</li>
                        <li>Spring Boot</li>
                        <li>Heroku</li>
                        <li>MongoDB Atlas</li>
                    </ul>
                </div>
                <a href='https://gameable.herokuapp.com'>gameable.herokuapp.com</a>
            </div>
            <div className='detailed-information'>
                    <img src="assets/arrow.png" className='arrow left' alt='' onClick={() => handleClick("left")} />
                    <div className='slider' >
                        {data.map(d=>(
                            <div className='container' style={{ transform: `translateX(-${currentSlide * 40}vw)` }}>
                                    <div className='item'>
                                        <div className='title'>
                                            <p>{d.question}</p>
                                        </div>
                                        <div className='body'>
                                            <ul>{d.answer.map(a=>(
                                                <li>
                                                    {a}
                                                </li>
                                            ))}</ul>
                                        </div>
                                    </div>
                                </div>
                        ))}
                    </div>
                    <img src="assets/arrow.png" className='arrow right' alt='' onClick={() => handleClick()} />
            </div>
        </div>
    )
}