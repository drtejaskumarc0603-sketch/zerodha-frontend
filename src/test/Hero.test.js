import {render, screen} from '@testing-library/react';
import'@testing-library/jest-dom';
import Hero from "../landingpage/home/hero.js";

//test suite

describe('hero component', () => {
    test('renders hero component correctly', () => {
        render(<Hero />);
        const heroImage = screen.getByAltText('Hero');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', '/media/Colab Notebooks/homeHero.png');
    });
});