import React from "react";

class Quote extends React.Component {
    constructor() {
        super();

        this.state = {
            quotes: 
                [
                {
                    id: 1,
                    quote: "Home of Moon Trek, the 'world famous' Engagement Chart, and 14 year old code."
                },
                {
                    id: 2,
                    quote: "Some random Ranma quote that will make no sense."
                }
            ]
        }
    }

    render() {
        return (
        <p className='sep'>
            Someday I will figure this shit out... Someday.
        </p>)
    }
}

export default Quote
