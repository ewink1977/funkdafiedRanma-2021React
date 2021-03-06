import { Link } from 'react-router-dom'
import Seperator from './Seperator'

const Homepage = () => {
	return (
		<>
			<Seperator quote="Home of Moon Trek, the 'world famous' Engagement Chart, and formerly 14 year old code." />
			<section>
				<h2 className='subhead'>Welcome!</h2>
				<article>
					<div className='col'>
						<img
							src='https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/img/frontpage-img.jpg'
							alt='Ranma and the rest of the gang!'
							title='Ranma and the rest of the gang!'
							className='left mob-sizing'
						/>
						<img
							src='https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/img/gorimage4.jpg'
							alt='RanChan in the lead!'
							title='RanChan in the lead!'
							className='left mob-sizing'
						/>
					</div>
					<div className='col'>
						<h3 className='article-head'>Ranma ½ in 60 seconds!</h3>
						<p>
							Many years ago a man named{' '}
							<Link to='/characters/genma/'>Genma Saotome</Link>{' '}
							had relations with his wife. They had a son. Across
							town, a man named
							<Link to='/characters/soun/'> Soun Tendo</Link> had
							relations with his wife. They had a daughter. If you
							need further information on this, call your parents
							or do a Google search for ‘rule 34’.
						</p>
						<p>Don’t actually do that search.</p>
						<p>
							Anyway, after all of this getting it on, Genma and
							Soun decided that their children would marry each
							other in order to continue the Anything Goes School
							Of Martial Arts, the school that they ran, founded
							by their master, Happosai.
						</p>
						<p>
							While Genma and his son Ranma were in China on an
							ill-conceived training trip, the pair fell into
							cursed ponds. Ranma fell in Spring of Drowned Girl,
							and Genma fell into Spring of Drowned Panda. Now
							when splashed with cold water, they turn into a girl
							and panda, respectively. Hot water reverses this
							effect.
						</p>
						<p>
							Yada, yada, yada, welcome to Ranma ½. If you need
							more explanation than this, let me know. I'll talk
							to you about it. Better yet, check out{' '}
							<Link to='/10minutes/'>Ranma ½ in 10 Minutes</Link>.
						</p>
						<hr className='sep-hr' />
						<h3 className='article-head'>Information ½</h3>
						<p>
							This website is a fun little project I started back
							in 1996 or so as{' '}
							<em>ewink's groovy Ranma ½ and Sailor Moon Page</em>
							. Eventually, I realized Sailor Moon was far too
							complex for my laziness to maintain and I made it a
							Ranma exclusive page.
						</p>
						<p>
							Funkdafied has pretty much been in archive mode for
							the past fifteen years or so, but I recently decided
							to change things around and make the site more
							responsive to mobile users. I also just recently
							graduated from a coding bootcamp, so I figured
							changing the site up would be good practice. The
							site has now been rebuilt using React and fancy new
							CSS. I might post some of the old code using tables
							embedded within tables embedded within tables to
							teach people how f’ing great flexbox is.
						</p>
						<p>
							I do plan on doing more updates as I learn more
							things. I feel like the site needs to be unique in a
							way and with all the other websites about Ranma and
							anime out there, figuring out what will make
							Funkdafied unique will be a challenge.
						</p>
						<p>
							Anyway, please enjoy the site. Bounce around,
							there’s character information, an engagement chart
							that used to be cool, miscellaneous information, and
							some fan fiction links! If you want to have a chat
							about Ranma, feel free to hit me up on Twitter at
							<a
								href='https://www.twitter.com/erinwinking/'
								target='_blank'
								rel='noreferrer'>
								{' '}
								@erinwinking
							</a>
							.
						</p>
					</div>
				</article>
			</section>
		</>
	)
}

export default Homepage
