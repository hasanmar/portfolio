import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import { Button } from 'react-bootstrap';
import poster from '../docs/Poster.pdf'
import thesis from '../docs/thesis.pdf'

export default function CustomTab() {
    return (
        <>
            <Tabs
                defaultActiveKey="Education"
                className="mb-3 bg-dark"
                fill
            >
                <Tab eventKey="Education" title="Education">
                    <Accordion style={{
                        '--bs-accordion-bg': 'rgba(255, 255, 255, 0.05)',
                        '--bs-accordion-active-bg': 'rgba(255, 255, 255, 0.05)'
                    }}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>General Assembly</Accordion.Header>
                            <Accordion.Body style={{
                                'color': 'white'
                            }}>
                                <small>January 2023 - April 2023</small>
                                <hr />
                                <p>
                                    General Assembly was founded in 2011 and has since grown to become one of the largest and most well-respected providers of technology education in the world.
                                    They provide training and courses in technology, design, business, and other fields, and I enrolled in the software engineering immersive program to practice my coding skills, learn new frameworks and get guidance from professionals in the field.
                                </p>
                                <p>
                                    The software engineering immersive program is a challenging three month program where we intensively covered four modules, and were assigned in teams to create a project for each of the following:
                                </p>
                                <ol>
                                    <li>
                                        <span className='highlight'>HTML, CSS & JavaScript:</span> Since not all of the students enrolled have experience or studied CS, we started with the basics of web development. That is not to say that this module wasn't beneficial for me, as I was introduced to <span className='highlight'>JQuery</span> for the first time, and practiced my CSS skills (which i very much needed, sadly)
                                    </li>
                                    <li>
                                        <span className='highlight'>NodeJS, Express and mongoose:</span> I was already familiar with these technologies, however I got to experiment with new libraries that I hadn't used prior to joining general assembly, such as mongoose, Dotenv etc.
                                    </li>
                                    <li>
                                        <span className='highlight'>Python, Django & PostgreSQL:</span>Through General Assembly, I was able to gain a solid understanding of Python, Django, and PostgreSQL, and how they work together to build web applications. I gained hands-on experience through projects and assignments, and also had the opportunity to collaborate with other learners and receive guidance from experienced instructors.
                                    </li>
                                    <li>
                                        <span className='highlight'>React:</span> I gained hands-on experience in building dynamic user interfaces with React for the first time. I learned how to create reusable components, manage state and props, and work with APIs to fetch and display data using Axios. This has given me the skills and confidence to develop complex web applications using React and related tools and libraries.
                                    </li>
                                </ol>
                                <p>
                                    Overall, my time at General Assembly has equipped me with the skills and knowledge I need to succeed as a software engineer.
                                </p>
                                <small>*All of the projects I worked on at General assembly can be found on <a href='https://github.com/hasanmar'>Github</a></small>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Bahrain Polytechnic</Accordion.Header>
                            <Accordion.Body style={{
                                'color': 'white'
                            }}>
                                <small>September 2018 - January 2023</small>
                                <hr />
                                <p>I earned my Bachelor's Degree in Information and Communication Technology (<span className='highlight'>CGPA 3.17</span>) at Bahrain Polytechnic, majoring in programming.
                                    The institution's curriculum is designed to ensure that graduates are equipped with practical skills and hands-on experience through project based learning, preparing us for jobs and making us standout candidates in every field we graduate from.
                                </p><p>Over the course of four years to achieve the B.Sc. in ICT - programming major, the study plan includes the following courses:
                                </p>
                                <ol>
                                    <li>
                                        <span className='highlight'>Database Programming 2 (IT8415):</span> For this individual project, I created a website using PHP, connected to a SQL database. The project brief was provided by the tutor, which was a news company website. The most challenging part of this project was implementing AJAX in the website and I ended up overcoming this challenge.
                                    </li>
                                    <li>
                                        <span className='highlight'>Game Development (IT8101):</span> Due to Covid-19 restrictions, this was an individual project as well. I created a fully functional PC game with Unity Engine. The premise of the game is that the player is placed in a maze with a flashlight that has limited battery capacity, so the player has to manage their battery efficiently as the environment is pitch dark, and they'll need their flashlight to maneuver the maze and avoid the traps. The game had powerups as well.
                                    </li>
                                    <li>
                                        <span className='highlight'>Mobile Programming (IT8108):</span> In this group project, we used Swift to create an IOS app that enables user to track their vehicle's service/ insurance/ annual checkup status as well as find garages nearby. This was my first time using Git, which in hindsight was the most challenging part of this project.
                                    </li>
                                    <li>
                                        <span className='highlight'>Senior Project (IT7099):</span> The last project was an individual project, and I created the Employee Development Planner using .NET (C#) and a SQL database. The project's idea was to enable system administrators to track their employees progression inside and outside of work using charts and statistics. The desktop application had two separate views, one for the admin to track the employees and an employee view that enabled employees to update their details.
                                    </li>
                                </ol>
                                <p>
                                    Overall, my time at Bahrain Polytechnic gave me the foundation to many different languages, coding best practices and design principles which will prove to be invaluable to me in my future endeavours.
                                </p>
                                <small>*Unfortunately I do not have access to any of these projects at this time because the device I was using got damaged.</small>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Tab>
                <Tab eventKey="Experience" title="Practical Experience">
                    <Accordion style={{
                        '--bs-accordion-bg': 'rgba(255, 255, 255, 0.05)',
                        '--bs-accordion-active-bg': 'rgba(255, 255, 255, 0.05)'
                    }}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >
                                AWS Bahrain
                            </Accordion.Header>
                            <Accordion.Body style={{
                                'color': 'white'
                            }}>
                                <small>September 2022 - January 2023</small>
                                <hr />
                                <p>
                                    As a part of my graduation requirements, I was placed at AWS Bahrain for my Co-operative Learning Project with other senior students.
                                    During my time at AWS, we were assigned a real client, had to go through the entire process from designing the system architecture, to developing it and to finally presenting it.
                                </p>
                                <p>
                                    The project's name was Takhatta(تخطى) and at it's core the project makes simulations based on the available resources at Bahrain Airport Company (BAC), departing flights and the number of passenger on each flight to enable BAC operations to effectively allocate resources.
                                    <br /> My role in this project was to handle the virtual queueing system, using Amazon SQS (FIFO), and automatically generated QR codes. <br /> Key takeaways from the project:
                                </p>
                                <ol>
                                    <li>
                                        <span className='highlight'>Designing a system architecture:</span>
                                    </li>
                                    <li>
                                        <span className='highlight'>AWS services:</span>
                                    </li>
                                    <li>
                                        <span className='highlight'>Agile development:</span>
                                    </li>
                                    <li>
                                        <span className='highlight'>Presentation:</span>
                                    </li>
                                </ol>
                                <div id='aws-buttons'>
                                    <Button variant="outline-secondary" href={thesis} rel="noopener noreferrer" target="_blank" style={{ '--bs-btn-color': 'orangered', '--bs-btn-hover-bg': 'orangered' }}>
                                        View project thesis
                                    </Button>
                                    <Button variant="outline-secondary" href={poster} rel="noopener noreferrer" target="_blank" style={{ '--bs-btn-color': 'orangered', '--bs-btn-hover-bg': 'orangered' }}>
                                        View project poster
                                    </Button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Citi</Accordion.Header>
                            <Accordion.Body style={{
                                'color': 'white'
                            }}>
                                <small>June 2022 - August 2022</small>
                                <hr />
                                <p>

                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Tab>
            </Tabs>
        </>
    );
}