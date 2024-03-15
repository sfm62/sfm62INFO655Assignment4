//This is the test file for Song.js using Jest 
import React from 'react';
import Song from './Song';
import ReactDOM from 'react-dom';

//Check a generated song component
describe('Song component', () => {
    let container = document.createElement('div');

    beforeEach(() => {
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);

    });

    it('Should Song Component', () => {
        const props = {
            artist: "Scooby Doo",
            title: "What's New Scooby Doo",
            year: "2002"

        };
        ReactDOM.render(< Song {...props} />, container);

        expect(container.querySelector('h2').textContent).toBe("What's New Scooby Doo by Scooby Doo");
        expect(container.querySelector('p').textContent).toBe("Year: 2002");

        
    });

});

//Check a null year 
describe('Song component', () => {
    let container = document.createElement('div');

    beforeEach(() => {
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);

    });

    it('Will not display null year', () => {
        const props = {
            artist: "Scooby Doo",
            title: "What's New Scooby Doo",
            year: null

        };
        ReactDOM.render(< Song {...props} />, container);

        expect(container.querySelector('h2').textContent).toBe("What's New Scooby Doo by Scooby Doo");
        expect(container.querySelector('p').textContent).toBe("Year: ");

        
    });

});

//Check for a null component
describe('Song component', () => {
    let container = document.createElement('div');

    beforeEach(() => {
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);

    });

    it('Will not display a null component', () => {
        const props = {
            artist: null,
            title: null,
            year: null

        };
        ReactDOM.render(< Song {...props} />, container);

        expect(container.querySelector('h2').textContent).toBe(" by ");
        expect(container.querySelector('p').textContent).toBe("Year: ");

        
    });

});

