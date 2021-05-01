import React from 'react';
import ImageGallery from 'react-image-gallery';
import Seperator from '../Seperator';

class FunkdafiedImageGallery extends React.Component {

    constructor() {
        super();
        this.state = {
            showIndex: false,
            showBullets: false,
            infinite: true,
            showThumbnails: true,
            showFullscreenButton: true,
            showGalleryFullscreenButton: true,
            showPlayButton: false,
            showGalleryPlayButton: false,
            showNav: true,
            isRTL: false,
            slideDuration: 450,
            slideInterval: 2000,
            slideOnThumbnailOver: false,
            thumbnailPosition: 'bottom',
            useWindowKeyDown: true,
        };

    this.images = [
        {
            original: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/11.jpg',
            thumbnail: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/11.jpg',
            originalClass: 'featured-slide',
            thumbnailClass: 'featured-thumb',
            originalAlt: 'Girl-Type Ranma after being damaged!',
            description: 'Girl-Type Ranma after being damaged!'
        },
        {
            original: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/18karoke.jpg',
            thumbnail: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/18karoke.jpg',
            originalClass: 'featured-slide',
            thumbnailClass: 'featured-thumb',
            originalAlt: 'Even Girl-Type Ranma gets emotional while singing Hollaback Girl.',
            description: 'Even Girl-Type Ranma gets emotional while singing Hollaback Girl.'
        },
        {
            original: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/4123121313213.jpg',
            thumbnail: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/4123121313213.jpg',
            originalClass: 'featured-slide',
            thumbnailClass: 'featured-thumb',
            originalAlt: 'Huh?!',
            description: 'Huh?!'
        },
        {
            original: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/IMG_2933.PNG',
            thumbnail: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/IMG_2933.PNG',
            originalClass: 'featured-slide',
            thumbnailClass: 'featured-thumb',
            originalAlt: 'A kawaii Ranma-chan! (Of course they are all kawaii...)',
            description: 'A kawaii Ranma-chan! (Of course they are all kawaii...)'
        },
        {
            original: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/crying1.jpg',
            thumbnail: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/crying1.jpg',
            originalClass: 'featured-slide',
            thumbnailClass: 'featured-thumb',
            originalAlt: 'Crying after Akane jammed underpants into her face. I would cry too.',
            description: 'Crying after Akane jammed underpants into her face. I would cry too.'
        },
        {
            original: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/m56.jpg',
            thumbnail: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/m56.jpg',
            originalClass: 'featured-slide',
            thumbnailClass: 'featured-thumb',
            originalAlt: 'She is quite the cutie even when angry!',
            description: 'She is quite the cutie even when angry!'
        },
        {
            original: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/m60.jpg',
            thumbnail: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/m60.jpg',
            originalClass: 'featured-slide',
            thumbnailClass: 'featured-thumb',
            originalAlt: 'Blankie fort!!!',
            description: 'Blankie fort!!!'
        },
        {
            original: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/m61.jpg',
            thumbnail: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/m61.jpg',
            originalClass: 'featured-slide',
            thumbnailClass: 'featured-thumb',
            originalAlt: 'There is something kind of... nice... about her when she crawls.',
            description: 'There is something kind of... nice... about her when she crawls.'
        },
        {
            original: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/m71.jpg',
            thumbnail: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/m71.jpg',
            originalClass: 'featured-slide',
            thumbnailClass: 'featured-thumb',
            originalAlt: 'Damn, even her derp faces are cute as fudge!',
            description: 'Damn, even her derp faces are cute as fudge!'
        },
        {
            original: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/ran_ranma012.jpg',
            thumbnail: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/ran_ranma012.jpg',
            originalClass: 'featured-slide',
            thumbnailClass: 'featured-thumb',
            originalAlt: 'Even a show that is 80% fan service has to have a fan service movie!',
            description: 'Even a show that is 80% fan service has to have a fan service movie!'
        },
        {
            original: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/swim27.jpg',
            thumbnail: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/swim27.jpg',
            originalClass: 'featured-slide',
            thumbnailClass: 'featured-thumb',
            originalAlt: 'Speaking of fan service... Yummmmmmmmmmmy...',
            description: 'Speaking of fan service... Yummmmmmmmmmmy...'
        },
        {
            original: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/vlcsnap-error068.jpg',
            thumbnail: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/vlcsnap-error068.jpg',
            originalClass: 'featured-slide',
            thumbnailClass: 'featured-thumb',
            originalAlt: 'Ranma enjoying her first kiss!',
            description: 'Ranma enjoying her first kiss!'
        },
        {
            original: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/vlcsnap-error775.jpg',
            thumbnail: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/vlcsnap-error775.jpg',
            originalClass: 'featured-slide',
            thumbnailClass: 'featured-thumb',
            originalAlt: "Ryouga and Akane enjoying Ranma's first kiss!",
            description: "Ryouga and Akane enjoying Ranma's first kiss!"
        },
        {
            original: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/vlcsnap-error665.jpg',
            thumbnail: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/vlcsnap-error665.jpg',
            originalClass: 'featured-slide',
            thumbnailClass: 'featured-thumb',
            originalAlt: 'I would not mind getting my hands on that shampoo! Shampoo is cute as well!',
            description: 'I would not mind getting my hands on that shampoo! Shampoo is cute as well!'
        },
        {
            original: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/vlcsnap-error436.jpg',
            thumbnail: 'https://douglasave-static.sfo3.digitaloceanspaces.com/funkdafied-static/gallery/vlcsnap-error436.jpg',
            originalClass: 'featured-slide',
            thumbnailClass: 'featured-thumb',
            originalAlt: "Akane really seems to enjoy jamming underpants into poor Ranma's face...",
            description: "Akane really seems to enjoy jamming underpants into poor Ranma's face..."
        },
    ]
}

    render() {
        return (
        <div>
            <Seperator quote="Images!!!" />
            <section>
                <h3 className="misc-char-head">The Funkdafied Image Gallery!</h3>
                <div className="col">
                    <p>Welcome to the image gallery! Feel free to download any of these pictures! Most of them are screen captures, but others are cells and other images I 
                    found on the internet! If ANY of these pictures are fan art that you created and you don’t want them in my gallery, please 
                    <a href="https://www.twitter.com/erinwinking" target="_blank" rel="noreferrer"> let me know</a> and I will remove them ASAP. My intention is certainly not 
                    to steal your hard work!</p>
                </div>
                <hr className="sep-hr" />
                <ImageGallery 
                ref={i => this._imageGallery = i}
                items={this.images}
                lazyLoad={false}
                infinite={this.state.infinite}
                showBullets={this.state.showBullets}
                showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
                showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
                showThumbnails={this.state.showThumbnails}
                showIndex={this.state.showIndex}
                showNav={this.state.showNav}
                thumbnailPosition={this.state.thumbnailPosition}
                slideDuration={parseInt(this.state.slideDuration)}
                slideInterval={parseInt(this.state.slideInterval)}
                slideOnThumbnailOver={this.state.slideOnThumbnailOver}
                additionalClass="app-image-gallery"
                useWindowKeyDown={this.state.useWindowKeyDown}
                />
            </section>
        </div>
        )
    }
}

export default FunkdafiedImageGallery