import React from 'react';

const NotFound = () => {
	return (
		<section>
			<div className='notfoundbox'>
				<img
					src='https://cdn.douglasavenue.com/da-all/shamikosad.png'
					alt='Sad Shamiko is Sad...'
					className='sadsham'
				/>
				<h1 className='hero'>
					404 ERROR: <br /> PAGE NOT FOUND!!
				</h1>
			</div>
			<p className='notfound'>
				You were looking for a page but it's not here.
			</p>
			<p className='notfound'>
				This is likely my fault. I've made dozens of changes to the
				DOUGLASAVENUE.COM domain that a lot of links had become broken.
			</p>
			<p className='notfound'>
				I see you've come from somewhere and were looking for something
				interesting (or even something stupid) and I am sorry I screwed
				this up.
			</p>
			<p className='notfound'>
				Please use these links below to get you somewhere close to where
				you're supposed to be! Likely the page you're looking for still
				exists, it just happens to have a different URL now.
			</p>
			<h2 className='fourohfour'>
				<a href='https://421a.moe'>421.DOUGLASAVENUE.COM</a>
			</h2>
			<p className='notfound'>
				General slice-of-life blog that I update every now and then.
				It's now 421a.MOE! That's where the link will go!
			</p>
			<h2 className='fourohfour'>
				<a href='http://funkdafied.douglasavenue.com'>
					FUNKDAFIED.DOUGLASAVENUE.COM
				</a>
			</h2>
			<p className='notfound'>
				One of the oldest Ranma &#189; and Sailor Moon pages on the
				internet. Not updated, remaining for archival purposes!
			</p>
			<h2 className='fourohfour'>
				<a href='http://moontrek.douglasavenue.com'>
					MOONTREK.DOUGLASAVENUE.COM
				</a>
			</h2>
			<p className='notfound'>
				Ranma &#189;/Sailor Moon/Star Trek crossover fan fiction.
			</p>
			<p className='notfound'>
				<i>"One of the biggest pieces of crap I have ever seen."</i> -
				My Mother. Check it out!
			</p>
			<h2 className='fourohfour'>OTAKUPHOTOG.DOUGLASAVENUE.COM</h2>
			<p className='notfound'>
				Gone forever, sadly. You can check out some really old versions
				on the Internet Wayback Machine!
			</p>
			<h2 className='fourohfour'>USAGI.DOUGLASAVENUE.COM</h2>
			<p className='notfound'>
				Story telling site from the prospective of my EVE Online
				character. Dark. Currently offline, but will be put back online
				eventually.
			</p>
			<p className='notfound'>
				If you need anymore help finding anything, please contact me on
				twitter at{' '}
				<a href='https://twitter.com/erinwinking'>@erinwinking</a> or by
				email, erin (at) douglasavenue.com. Thanks!
			</p>
		</section>
	);
};

export default NotFound;
