import { Link } from 'react-router-dom'

import Seperator from '../Seperator'

const Information = () => {
    return (
        <div>
            <Seperator quote="The 411 of this site! Remember when 411 used to be a thing? Of course you don't, damned Zoomers..." />
            <section>
                <h3 className="misc-char-head">Ranma ½ Information and Real-World Info That Relates to Ranma ½</h3>
                <article>
                    <div className="col">
                        <img src="https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/img/bible.jpg" alt="The bible (Not that one...)" 
                        title="The bible! Look how old that picture is. CRT?!?!" className="left mob-sizing" />
                    </div>
                    <div className="col">
                        <p>First and foremost, this page is still under development.</p>
                        <p>As C&C Music Factory would say, there is a lot of stuff in the Ranma world that makes you go hmmm... Like have you ever wondered how cold 
                        the water would have to be to make them change?</p>
                        <p>I look to ruin the fantasy aspect of Ranma by attempting to answer these questions. Also, I will give you information about stuff in the Ranma 
                        would that you can check out in real life, such as Ranma's <Link to='/ailurophobia/'>ailurophobia</Link>.</p>
                        <p>If you have a question that you want to see answered in this section, please contact me on <a href="https://www.twitter.com/erinwinking" target="_blank" rel="noreferrer">Twitter</a>! 
                        I will do my best to answer it!</p>
                        <p>BTW - A lot of the info I get is thanks to the bible. No, not the one with God and all... My Ranma ½ bible, which has stuff I have 
                        gathered about Ranma ½ since I first got into it back in 1996.</p>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Information
