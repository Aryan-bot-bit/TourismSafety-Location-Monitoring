import React from 'react'

import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import Hero from '../landing_page/home/Hero';

describe('Hero Component', () => {
    test('renders hero image', () => {
        render(<Hero />);

        const heroImage = screen.getAltTest('Hero Image');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', 'media/images/homeHero.png');


    });
});

// import React from 'react';
// import { render, screen } from "@testing-library/react";
// import '@testing-library/jest-dom/extend-expect'; // This line will work after installation
// import Hero from '../landing_page/home/Hero';

// describe('Hero Component', () => {
//   test('renders hero image', () => {
//     render(<Hero />);

//     const heroImage = screen.getByAltText('Hero Images'); // Ensure the alt text matches
//     expect(heroImage).toBeInTheDocument();
//     expect(heroImage).toHaveAttribute('src', 'media/images/homeHero.png'); // Ensure the src matches
//   });
// });


