import Seperator from '../Seperator'
import { Link } from 'react-router-dom'

const FanFiction = () => {
    return (
        <div>
            <Seperator quote="Time for some BETACANON½!" />
            <section>
                <h2 className="subhead">Ranma ½ Fan Fiction</h2>
                <article>
                    <div className="col">
                        <p>Initially, I wanted this page to be a great resource for folks to come by and be able to find fan fiction of all kinds, 
                        to submit their own work, and basically be a Ranma ½ specific FanFiction.net. Well, that never happened, obviously, and with 
                        all the sites out there focused on fan fiction and with the age of Ranma ½, there’s little to no point in making that now.</p>
                        <p>So, this page will just be a list of fan fiction I like, a fan fic that was submitted to me way, way, back in the day, 
                        and maybe links to other fan made stuff, depending on what I find. </p>
                        <hr className="sep-hr" />
                        <h3 className="misc-char-head">Moon Trek</h3>
                        <p>Obviously, the most important fan fiction on this page is mine – Moon Trek!!!</p>
                        <img src="https://douglasave-static.sfo3.digitaloceanspaces.com/moontrek/static/img/mt_title.jpg"
                        alt="Moon Trek Title" className="center-title" />
                        <p>Moon Trek is a crossover fan fiction that takes characters from the Ranma ½ world, the Sailor Moon world, and original characters 
                        that I created and places them in the post-Dominion War Star Trek universe. I started the series long before the new movies and series, 
                        so my universe is just my mind-canon of things that take place after Deep Space Nine.</p>
                        <p>You can find it at the Moon Trek Website - <a href="http://moontrek.douglasavenue.com">http://moontrek.douglasavenue.com</a></p>
                        <hr className="sep-hr" />
                        <h3 className="misc-char-head">Genma's Daughter</h3>
                        <p>Probably my favorite piece of Ranma fanfiction, Genma’s Daughter is an amazing story that basically takes the concept ‘what is Ranma was 
                        born female and her male form is the curse’ and turns it into a sweet, amazing coming of age story that makes you both like Akane and Ryouga. 
                        Amazing, right? It can be found by following this link on <a href="https://www.fanfiction.net/s/7603977/1/Genma-s-Daughter">FanFiction.net!</a></p>
                        <hr className="sep-hr" />
                        <h3 className="misc-char-head">Ranma's Apartment</h3>
                        <p>Chris Jones is one of my favorite Ranma fanfiction authors. This is one of his stories, Ranma’s Apartment. Basically, Ranma ends up moving out from 
                        the Tendo Dojo and into his own place, and guess what – being away from all that nonsense makes his life much better! He even starts to get along with 
                        Akane! Whodathunkit? Another great story that’s on Fan Fiction Dot Net! <a href="https://www.fanfiction.net/s/92266/1/Ranma-s-Apartment">Follow the link!</a></p>
                        <hr className="sep-hr" />
                        <h3 className="misc-char-head">newRanma</h3>
                        <p>Another great Chris Jones story, this one decides that Ranma’s ‘girls are icky’ attitude comes from a brain issues and once it was corrected Ranma can 
                        progress through puberty normally. That also means he ends up experiences all the feelings, emotions, and troubles that a teenage boy would normally feel. 
                        It’s an amazing and well written story, but it is VERY adult. Like explicit sex adult, so if you are not into that, do not read it. FF.N doesn’t allow that 
                        stuff, <a href="http://stfan.free.fr/Series.php?JS=0#nR">so here is a link to an archive site</a> with it!</p>
                        <hr className="sep-hr" />
                        <h3 className="misc-char-head">Ranma ½ Meets Sailor Moon</h3>
                        <p>This is a cool crossover teaser fic from Steven Greger, a dude who used to interact with me and even helped me out by doing some prereading on Moon Trek! 
                        Since this is just a teaser, it’s hosted here, so <Link to="/fanfics/rmsm/">go ahead and read it!</Link></p>
                        <hr className="sep-hr" />
                        <h3 className="misc-char-head">Discord Links</h3>
                        <p>Discord is a cool place for you to meet and chat with other Ranma fans! I have a couple that I am on (though I don’t chat as much as I should!).</p>
                        <p><a href="https://discord.gg/UXksB5Pn9s">Super #1 Ranma ½ Fan Discord</a> - A general Ranma ½ discussion server!</p>
                        <p><a href="https://discord.gg/3DGBT7cHed">Ranma ½ Fandom</a> - Discussion about fanarts, fanfiction, cosplay, and all other fandom aspects of Ranma ½!</p>
                        <hr className="sep-hr" />
                        <p>As I find more neat stuff, I will add it here!</p>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default FanFiction
