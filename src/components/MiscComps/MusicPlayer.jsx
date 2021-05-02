
const MusicPlayer = ({ title, source, desc, key }) => {
    return (
        <div key={key}>
            <h3 className="misc-char-head">{ title }</h3>
            <audio controls preload="auto" className="aud-player">
                <source src={ source } type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <p>{ desc }</p>
            <p>Download by <a href={ source }>right clicking here</a> and choosing 'Save Target As' or however the hell you'd do it on a Mac or phone...</p>
            <hr className="sep-hr" />
        </div>
    )
}

export default MusicPlayer
