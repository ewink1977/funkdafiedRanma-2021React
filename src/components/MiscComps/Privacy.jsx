import React from 'react'
import Seperator from '../Seperator'

const Privacy = () => {
    return (
        <>
            <Seperator quote="If you're concerned about your privacy, this is the right place to be!" />
            <section>
                <h2 className="subhead">Our Privacy Policy</h2>
                <article>
                    <div className="col"></div>
                    <div className="col">
                        <p>Welcome to my website!</p>
                        <p>I do not personally collect information from people. However, I do use Google Analytics. Here is a link to Google’s 
                            <a href="https://policies.google.com/privacy?hl=en-US" target="_blank" rel="noreferrer"> privacy policy</a>.</p>
                        <p>If you email me, I will keep that information in my email inbox mainly because I am really bad at deleting emails I don’t need anymore.</p>
                        <p>Take care and stay safe!</p>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Privacy
