// Import Project Photos
import pokedex from './projectphotos/pokedex.png';
import weatherdashboard from './projectphotos/weatherdashboard.png';
import notetaker from './projectphotos/notetaker.png';
import underataack from './projectphotos/underatack.png';
import profilegen from './projectphotos/profilegen.png';

// Import Cover Photos
import pokedexCover from './coverphotos/alessandro-ferrari-Ktz-wTiZy1I-unsplash.jpg';
import weatherDashboardCover from './coverphotos/katarzyna-dutkowska-bJAXbSJ-nEs-unsplash.jpg';
import noteTakerCover from './coverphotos/kawe-rodrigues-KSBir8RErAY-unsplash.jpg';
import underataackCover from './coverphotos/rezvani-gr2KN6sW5wk-unsplash.jpg';
import profileGeneratorCover from './coverphotos/yves-cedric-schulze-EAJ7H1G4ZPA-unsplash.jpg';

/* projects */
export const projects = [
    {
        id: 0,
        title: "Pokedex",
        description: "An in-browser pokedex that displays a picture of a pokemon, it's pokemon cards, and the pokemon's data",
        image: pokedex,
        image2: pokedexCover,
        link: "https://github.com/ChefKhoiRD/PokemonProject",
    },
    {
        id: 1,
        title: "Under A Tack",
        description: "A cork board that allows users to log in and attach events on sticky notes and post it to the global website",
        image: underataack,
        image2: underataackCover,
        link: "https://github.com/Avenix17/Project-3-Under-a-tack",
    },
    {
        id: 2,
        title: "Note Taker",
        description: "An application that utilizes express and allows users to save and delete personal notes",
        image: notetaker,
        image2: noteTakerCover,
        link: "https://github.com/ChefKhoiRD/note-taker-app",
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "A dashboard that shows a city's weather when it is searched using a third party API",
        image: weatherdashboard,
        image2: weatherDashboardCover,
        link: "https://github.com/ChefKhoiRD/weather-dashboard",
    },
    {
        id: 4,
        title: "Profile Generator",
        description: "A website that allows a user to add user via code editor command line and generates an html file that displays the team and their info",
        image: profilegen,
        image2: profileGeneratorCover,
        link: "https://github.com/ChefKhoiRD/team-gen",
    },
];