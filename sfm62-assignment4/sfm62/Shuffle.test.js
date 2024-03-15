//Test file for the Shuffle method
import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Playlist from './Playlist';
import Shuffle from './Shuffle';

//Check if shuffle is being called when clicked
describe('Playlist Component', () => {

    it('call the shuffle method on button click', () => {
        const doShuffle = jest.fn();
        const { getByText } = render(<Shuffle performShuffle={doShuffle} />);

        const shuffleButton = getByText(/shuffle/i);
        fireEvent.click(shuffleButton);


        expect(doShuffle).toHaveBeenCalled();


    });

});
