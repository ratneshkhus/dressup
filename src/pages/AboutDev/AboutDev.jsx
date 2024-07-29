import React from 'react'
import './About.css'
import { FaBold, FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

export default function AboutDev() {
    return (
        <>
            <section className='aboutdev'>
                <div className="bgvid">
                    <div className="profiletype">
                        <div className="devname">
                            <h3>Ratnesh kumawat</h3>
                            <span style={{ marginLeft: "5px" }}>UI/UX Designer | Web Developer | 3D web-designing</span>
                        </div>
                    </div>
                    <div className="profiletype">
                        <a href="https://www.instagram.com/ratneshkumawat3?igsh=M2lzNmRveTQ5MXFo"
                            target="_blank" rel="noopener noreferrer">
                            <FaInstagram fontSize={"1.3rem"} color='white' />
                        </a>
                        <a href="https://www.linkedin.com/in/ratnesh-kumawat-6301b425b"
                            target="_blank" rel="noopener noreferrer">
                            <CiLinkedin fontSize={"1.5rem"} color='white' />
                        </a>
                    </div>
                </div>
                <video
                    // src={vid}
                    src="https://www.dropbox.com/scl/fi/t12cmxx2ft7imkxc3j5lg/video_20240729_162351_edit.mp4?rlkey=mzxt33ok0eh2wqtv1xos274z9&st=9ebgs8bl&dl=1"
                    autoPlay loop muted>
                    Your browser does not support the video tag.
                </video>
            </section>
            <div className="qutionssection">
                <h2>about Developer?</h2>
                <p>
                    hey there , its me <span className='boldone'>Ratensh Kumawat</span> <br /> <br />
                    UI/UX designer and web developer, creating and coding
                    user-friendly experiences. With skills in Figma, HTML, CSS, PHP, and React.js, I
                    iam a BCA 3rd year student at saurashtra university<br />
                    <br />thanks to
                    <span className='boldone'>
                        codesoft
                    </span><br />
                    for the opportunity to intern with
                    you. I’m grateful for the experience and the chance to grow my skills.
                </p>
                <h2>get in touch!</h2>
                <div className="linksagain">
                    <p>more projects ?</p>
                    <a href="https://www.instagram.com/ratneshkumawat3?igsh=M2lzNmRveTQ5MXFo"
                        target="_blank" rel="noopener noreferrer">
                        <FaInstagram fontSize={"1.2rem"} />
                        instagram
                    </a>
                    <a href="https://www.linkedin.com/in/ratnesh-kumawat-6301b425b"
                        target="_blank" rel="noopener noreferrer">
                        <CiLinkedin fontSize={"1.5rem"} />
                        linkedin
                    </a>
                </div>
                <h2>about this project 😮</h2>
                <p>how many task i completed ?</p>
                <p>well i choosed
                    <span className='boldone'>
                        task 3 - ecommerece website using mern stack
                    </span><br /> </p>
                <p>Build an e-commerce website where users can browse products ✅</p>
                <p>add items to a shopping cart ✅</p>
                <p>and proceed to checkout ✅</p>
                <p>Implement features like user authentication ✅</p>
                <p>product filtering ✅</p>
                <p>payment integration ✅</p>
                <p>host the webiste✅</p>
                <span className='boldone'>
                    additionl :
                </span>
                <p>UI/UX design by me using figma ✅</p>
                <p>Searching ✅</p>
                <p>filter by tags (categories) ✅ </p>
                <p>user profile ✅ </p>
                <p>user profile updtaion (bad ux) ✅ </p>
                <p>user order status (history displaing) ❌ </p>

                <p>created 3d background video for this page using spline</p>
                <p>popup message (notification when adding into cart) ui packege is used only </p>
                <p>note : no boostraps.. or anything is used.. its my custome css and react code.. </p>

                <div className="hold_my_prob">

                    <h2>What i learned ?</h2>
                    <p>i alredy knew
                        <span className='boldone'>
                            React.js
                        </span>
                        {"  "} <br />so i stared leaning express.js and mongodb... it was very hard to learn for a beginner to learn backend
                        still i somehow learned it.. </p>
                    <p>
                        thanks to
                        <span className='boldone'>
                            Codsoft
                        </span> <br />
                        i learned mern stack.. and github and stuff
                    </p>
                </div>


                <div className='hold_my_prob'>

                    <h2>What probleams i faced</h2>
                    <p>
                        <span className='boldone'>
                            Css
                        </span> <br />
                        sometimes little css can make anyone mad.....
                    </p>
                    <p>
                        <span className='boldone'>
                            complex ui layouts.
                        </span> <br />
                    </p>
                    <p>
                        <span className='boldone'>
                            filtering
                        </span> <br />
                        it was hard to filter items from database.. with categoris which was array.. same goes to images.. and sizes of cloths
                    </p>
                    <p>
                        <span className='boldone'>
                            Github
                        </span> <br />
                        github almost replaced my whole backend code.. and till its not updating 😥 idk what will happed
                    </p>
                    <p>
                        <span className='boldone'>
                            api
                        </span> <br />
                        its was new concept for me.. so it was hard in beginner
                    </p>
                    <p>
                        <span className='boldone'>
                            user authentication
                        </span> <br />
                    </p>
                    <p>
                        <span className='boldone'>
                            payment getway (final boss)
                        </span> <br />
                        its took me... 4-5 days to figure out.. what was error it was a probleam in api key.. <br />
                        becoz of this.. i was feeling.... pressured 
                    </p>
                    <p>
                        <span className='boldone'>
                            order history
                        </span> <br />
                        it was hard.. bcoz i need to store cart collection data inside the order collection.. if user has cart.. <br />
                        when payment process <span className='boldone'>
                            Casefree
                        </span> opens in new tabs.. cart is deleted bcoz.. data is saved in order collection but i cants fetch that data.. becoz of sum frontend probleam

                    </p>
                    <p>
                        <span className='boldone'>
                            and more😥😥
                        </span> <br />
                    </p>
                </div>
                <div className='hold_my_prob'>
                        <h3>
                            future of this project?
                        </h3>
                        <p>whenever i will got time will will improve my skills and make this project more user-friendly and more beautifullllllll</p>
                        becoz of short time.... i cant gived time in designing as i planed...and i hope..in future i can make more mern project😁

                </div>
                <div className='hold_my_prob'>
                        <h3>
                            thanks to Codsoft
                        </h3>
                        i gived my time in another my personal projects and learned new things and technologies experience was great and..... but yeah i enjoyed this time creating 
                        <span className='boldone'>
                            Dress Up.
                        </span> <br />
                        <br /> 
                        <p>wanna know more about me ? well you can check my instagram for my desginig and stuff also likedin profile.. <br />see yaaa👋</p>
                </div>
            </div>
        </>
    )
}
