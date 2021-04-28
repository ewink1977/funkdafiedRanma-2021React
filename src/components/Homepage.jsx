import { Link } from 'react-router-dom'
import Seperator from "./Seperator"
import FrontPageImg from "../assets/img/frontpage-img.jpg"

const Homepage = () => {
    return (
        <>
            <Seperator quote="Home of Moon Trek, the 'world famous' Engagement Chart, and 14 year old code." />
            <section>
                <h2 className="subhead">Welcome!</h2>
                <article>
                    <div className="col">
                        <img src={FrontPageImg} alt="Ranma and the rest of the gang!" className="left mob-sizing" />
                    </div>
                    <div className="col">
                        <h3 className="article-head">Ranma ½ in 60 seconds!</h3>
                        <p>Many years ago a man named <a href="genma.html">Genma Saotome</a> had relations with his wife. They had a son. Across town, a man named 
                            <a href="soun.html"> Soun Tendo</a> had relations with his wife. They had a daughter. If you need further information on this, call your 
                            parents or do a Google search for ‘rule 34’.</p>
                        <p>Don’t actually do that search.</p>
                        <p>Anyway, after all of this getting it on, Genma and Soun decided that their children would marry each other in order to continue the 
                            Anything Goes School Of Martial Arts, the school that they ran, founded by their master, Happosai.</p>
                        <p>While Genma and his son Ranma were in China on an ill-conceived training trip, the pair fell into cursed ponds. Ranma fell in Spring of 
                            Drowned Girl, and Genma fell into Spring of Drowned Panda. Now when splashed with cold water, they turn into a girl and panda, respectively. 
                            Hot water reverses this effect.</p>
                        <p>Yada, yada, yada, welcome to Ranma ½. If you need more explanation than this, let me know. I'll talk to you about it. Better yet, check 
                            out <Link to='/10minutes/'>Ranma ½ in 10 Minutes</Link>.</p>
                        <hr className="sep-hr" />
                        <h3 className="article-head">Information ½</h3>
                        <p>This website is a fun little project I started back in 1996 or so as <em>ewink's groovy Ranma ½ and Sailor Moon Page</em>. Eventually, I 
                            realized Sailor Moon was far too complex for my laziness to maintain and I made it a Ranma exclusive page.</p>
                        <p>It’s pretty much been in archive mode for the past fifteen years or so, but I recently decided to change things around and make the site 
                            more responsive to mobile users. I am also going through a coding bootcamp right now, so I figured changing the site up would be good 
                            practice.</p>
                        <p>Anyway, please enjoy the site. Bounce around, there’s character information, an engagement chart that used to be cool, miscellaneous 
                            information, and some fan fiction links! If you want to have a chat about Ranma, feel free to hit me up on Twitter at 
                            <a href="https://www.twitter.com/erinwinking/" target="_blank" rel="noreferrer"> @erinwinking</a>.</p>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Homepage
