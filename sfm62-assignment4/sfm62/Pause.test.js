//Test file for the Play/Pause method
import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Pause from './Pause';

//Check if pause method is called when clicked
describe('Playlist Component', () => {

    it('call the play/pause method on button click', () => {
        const doPause = jest.fn();
        const { getByText } = render(<Pause performPlayPause={doPause} />);

        const pauseButton = getByText(/pause/i);
        fireEvent.click(pauseButton);


        expect(doPause).toHaveBeenCalled();


    });

});