import { Link } from 'react-router-dom'
import Seperator from './Seperator'

const characterPages = [
    {
        id: 1,
        name: 'Ranma Saotome (Boy-Type)',
        desc: 'Ranma Saotome in his alleged natural boy form!',
        url: '/characters/ranma-boy/'
    }, 
    {
        id: 2,
        name: 'Ranma Saotome (Girl-Type)',
        desc: "Ranma Saotome in his so called 'cursed' yet much cuter girl form!",
        url: '/characters/ranma-girl/'
    },
    {
        id: 3,
        name: 'Akane Tendo',
        desc: "Ranma's semi-reluctant fiancee, Akane Tendo!",
        url: '/characters/akane/'
    }, 
    {
        id: 4,
        name: 'Genma Saotome',
        desc: "Ranma's lazy father, Genma!",
        url: '/characters/genma/'
    }, 
    {
        id: 5,
        name: 'Soun Tendo',
        desc: "Akane's slightly less lazy father, Soun!",
        url: '/characters/soun/'
    }, 
    {
        id: 6,
        name: 'Ryouga Hibiki',
        desc: 'Friend to Ranma, pet to Akane. The lost boy!',
        url: '/characters/ryouga/'
    }, 
    {
        id: 7,
        name: 'Shampoo',
        desc: 'My second waifu* and the sexiest Amazon, Shampoo!',
        url: '/characters/shampoo/'
    }, 
    {
        id: 8,
        name: 'Tatewaki Kuno',
        desc: "Nerima's local nutcase, The Blue Thunder!",
        url: '/characters/kuno/'
    }, 
    {
        id: 9,
        name: 'Nabiki Tendo',
        desc: "Voted most likely to join the Yakuza, Akane's older sister, Nabiki!",
        url: '/characters/nabiki/'
    }, 
    {
        id: 10,
        name: 'Kasumi Tendo',
        desc: "The sweetest character in all of Ranmaland, Akane's oldest sister, Kasumi!",
        url: '/characters/kasumi/'
    },  
    {
        id: 11,
        name: 'Happosai',
        desc: 'A pervert and king pantsu connoisseur, Happosai!',
        url: '/characters/happosai/'
    }, 
    {
        id: 12,
        name: 'Cologne (Great Grandmother)',
        desc: "Master of Ramen and martial arts, Shampoo's great grandmother, Cologne!",
        url: '/characters/cologne/'
    }, 
    {
        id: 13,
        name: 'Kodachi Kuno',
        desc: 'A close runner up for the insanist character, Kodachi Kuno!',
        url: '/characters/kodachi/'
    }, 
    {
        id: 14,
        name: 'Ukyou Konji',
        desc: 'The self declared cute fiancee, Ukyou!',
        url: '/characters/ukyou/'
    }, 
    {
        id: 15,
        name: 'Miscellanious',
        desc: 'Characters that are unworthy of their own page, or I forgot about them.',
        url: '/characters/misc/'
    }, 
]


const Characters = () => {
    return (
        <div>
            <Seperator quote="Every character you could need any information on! (Except for the ones I didn't do...)" />
            <section>
                <h2 className="subhead">Characters Pages</h2>
                <p>In order to supply you with the most detailed character biography, our staff journalists have sat down with all the characters and done an 
                    in-depth interview. This way we can find out more about what makes them do what it is they do when they are doing it.</p>
                <p>Anyway, you should find most of what you need to know about the main characters of Ranma by following the links below!</p>
            </section>
            <div className="char-namelist">
                <div className="char-col-left">
                    { characterPages.map((character) => (<p className="char-name" key={character.id}><Link to={character.url}>{character.name}</Link></p>) ) }
                </div>
                <div className="char-col-right">
                { characterPages.map((character) => (<p class="char-desc" key={character.id}>{character.desc}</p>) ) }
                </div>
            </div>
            <section>
                <p className="tiny-text">*Minako Aino from Sailor Moon has Shampoo beat by a couple of years.</p>
                <p>Feel free to give me a shout on <a href="https://www.twitter.com/erinwinking/" target="_blank" rel="noreferrer">Twitter</a> if you think I need to 
                    add more characters!</p>
            </section>
        </div>
    )
}

export default Characters
