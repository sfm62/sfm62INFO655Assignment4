//This is the test file for Podcast.js using Jest 
import React from 'react';
import Podcast from './Podcast';
import ReactDOM from 'react-dom';

//Check a normal Podcast component
describe('Podcast component', () => {
    let container = document.createElement('div');

    beforeEach(() => {
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);

    });

    it('Should render Podcast component', () => {
        const props = {
           season: "1",
           episode: "2",
           episodeTitle: "Revenge of the Nerds"

        };

        ReactDOM.render(< Podcast {...props} />, container);

        const paragraphs = container.querySelectorAll('p');
        expect(container.querySelector('h2').textContent).toBe("Episode Title: Revenge of the Nerds");
        expect(paragraphs[0].textContent).toBe("Season: 1");
        expect(paragraphs[1].textContent).toBe("Episode: 2");

        
    });

});

//Check a null Podcast value
describe('Podcast component', () => {
    let container = document.createElement('div');

    beforeEach(() => {
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);

    });

    it('Should render Podcast component', () => {
        const props = {
           season: "1",
           episode: "2",
           episodeTitle: null

        };

        ReactDOM.render(< Podcast {...props} />, container);

        const paragraphs = container.querySelectorAll('p');
        expect(container.querySelector('h2').textContent).toBe("Episode Title: ");
        expect(paragraphs[0].textContent).toBe("Season: 1");
        expect(paragraphs[1].textContent).toBe("Episode: 2");

        
    });

});

//Check a null Podcast Component
describe('Podcast component', () => {
    let container = document.createElement('div');

    beforeEach(() => {
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);

    });

    it('Should render Podcast component', () => {
        const props = {
           season: null,
           episode: null,
           episodeTitle: null

        };

        ReactDOM.render(< Podcast {...props} />, container);

        const paragraphs = container.querySelectorAll('p');
        expect(container.querySelector('h2').textContent).toBe("Episode Title: ");
        expect(paragraphs[0].textContent).toBe("Season: ");
        expect(paragraphs[1].textContent).toBe("Episode: ");

        
    });

});



