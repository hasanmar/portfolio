import React, { useState, useEffect } from "react";
import ProgressBarComponent from "./ProgressBar";
import CustomToast from "./CustomToast";


export default function Home() {

    return (
        <>
            <CustomToast />
            <div id='Home'>
                <div id='profile'>
                    <img src="https://pbs.twimg.com/profile_images/1654175128777883648/YmNmAJlX_400x400.jpg"></img>
                    <h1>Hasan Marhoon</h1>
                    <h4> Software Engineer</h4>
                    <hr />

                </div>
                <div id='placeholder' >
                    <br />
                    <p>
                        A <span className="highlight" >Bahrain Polytechnic fresh graduate</span>, who has gained invaluable experience relevant to the software engineering field working under experienced professionals in highly reputable companies.
                    </p>
                    <p>
                        Although I have had a passion for software since I was in high school, these experiences completely changed my career preferences. Initially I was planning on pursuing a career in mobile development, but after getting exposed to the real world working environment and venturing in Web Development, it has become my preferred field.
                    </p>
                    <p>
                        I have developed my soft skills over the years, namely my <span className="highlight" >communication, collaboration and self management skills.</span> Most of the projects that I have worked on in the past year or so have been collaborative projects.
                        Some critical software engineer soft skills that I enhanced while working on collaborative projects were my ability to read documentation and teach myself frameworks and programming languages as well as reading, understanding and debugging other people's code
                    </p>
                    <p>
                        Currently seeking an <span className="highlight" >internship or training opportunity </span> to further enhance my skills, get mentorship from experienced professionals in the field, build a network and become a standout candidate in the future.
                    </p>
                    <hr />
                    <div id='skills'>
                        <h3> <span className='highlight'>Self evaluation in software</span></h3>
                        <ProgressBarComponent skill='Java' now='90' label='90%' />
                        <ProgressBarComponent skill='JavaScript' now='90' label='90%' />
                        <ProgressBarComponent skill='Python' now='85' label='85%' />
                        <ProgressBarComponent skill='HTML & CSS' now='95' label='95%' />
                        <ProgressBarComponent skill='Bootstrap' now='70' label='70%' />
                        <ProgressBarComponent skill='NodeJS' now='85' label='85%' />
                        <ProgressBarComponent skill='Django' now='75' label='75%' />
                        <ProgressBarComponent skill='SpringBoot' now='75' label='75%' />
                        <ProgressBarComponent skill='React' now='75' label='75%' />
                        <ProgressBarComponent skill='Express' now='85' label='85%' />
                        <ProgressBarComponent skill='AWS Development' now='80' label='80%' />
                        <ProgressBarComponent skill='PHP' now='60' label='60%' />
                        <ProgressBarComponent skill='PostgreSQL' now='85' label='85%' />
                        <ProgressBarComponent skill='MongoDB' now='85' label='85%' />
                        <ProgressBarComponent skill='Terminal' now='70' label='70%' />
                        <ProgressBarComponent skill='JQuery' now='80' label='80%' />
                        <ProgressBarComponent skill='Git' now='90' label='90%' />
                        <ProgressBarComponent skill='Enterprise Architect' now='90' label='90%' />
                    </div>
                </div>
                <div id='home-bottom'>
                    <h2><span className='highlight'>Languages</span></h2>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-1-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                    </svg> Arabic (native)</p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-2-square-fill" viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm4.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z" />
                        </svg> English (fluent)
                    </p>
                    <h2><span className='highlight'>Hobbies </span></h2>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-square-fill" viewBox="0 0 16 16">
                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
                        </svg> Listening to and discovering music
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-square-fill" viewBox="0 0 16 16">
                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
                        </svg> Sports (football, padel, table tennis)
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-square-fill" viewBox="0 0 16 16">
                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
                        </svg> Gaming
                    </p>
                </div>
            </div>
        </>
    );
}