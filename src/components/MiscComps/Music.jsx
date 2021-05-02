import Seperator from '../Seperator'
import MusicPlayer from './MusicPlayer'

const musicList = [
    {
        id: 1,
        title: 'Shampoo: Too Close',
        source: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/audio/shampootooclose.mp3',
        desc: "How Shampoo makes me feel, sung by N.EX.T! (Shampoo only makes a small appearance in it, but just pretend she's dancing with you through most of the song and you will understand."
    },
    {
        id: 2,
        title: 'Ranma Saotome',
        source: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/audio/ranmasaotome.mp3',
        desc: "This is a hilarious parody of the Beach Boy's 'Kokomo'. I would love to know who made this because I want to give them a giant high five."
    },
    {
        id: 3,
        title: 'You and Me: DOCO USA',
        source: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/audio/RanmaYouAndMe.mp3',
        desc: "My favorite of the theme songs (though I will always have a soft spot in my heart for Yapapayapapa). This is the English version and was heard on a couple of the OVAs. It's sung by some of the voice cast (I say some because I am pretty sure Akane and Nabiki's parts are sung by different singers)."
    },
    {
        id: 4,
        title: 'Love Panic: Connie Levin',
        source: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/audio/lovepanic.mp3',
        desc: "Another one of the OVA themes. The origional Japanese version was done by YAWMIN."
    },
    {
        id: 5,
        title: 'Ryouga Welcomes You To My Website!',
        source: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/audio/Ryouga2.mp3',
        desc: "Imagine being a not even 20 year old nobody with a crappy fan site dedicated to your favorite anime and one of the voice actors emails you out of the blue. That was me when the amazing Michael Donovan, the English VA for Ryouga did. He was super nice and even though I was very rude to ask him, he did an intro to my original 'Groovy' website. It was cool being a webmaster back in the olden days!"
    }
]

const Music = () => {
    return (
        <div>
            <Seperator quote="I'm your boogieman. Yes, I am." />
            <section>
                <h2 className="subhead">Ranma ½ Audio & Music</h2>
                <article>
                    <div className="col">
                        <p>Music is a grand part of Ranma ½. Almost all the theme songs are great, almost all the ending songs are 
                        great, the DOCO songs are great. Everything is great. Now, I am not going to post that all here, and in fact 
                        I am not going to post almost any of it here to try and avoid the wrath of the DMCA oni. I will, however, post a 
                        little bit, will add some YouTube links eventually, and post some audio files that I think I can get away with!</p>
                        <hr className="sep-hr" />
                        { musicList.map((song) => (<MusicPlayer key={song.id} title={song.title} desc={song.desc} source={song.source} />)) }
                        <p>If you think anything else should be added, let me know!</p>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Music
