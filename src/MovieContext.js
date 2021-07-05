import  React, { useState, createContext } from 'react';
import MovieList from './MovieList';

// Movie context its call from wherever its need it
export const MovieContext = createContext();

//Provide the information 
export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23124
        },
        {
            name: 'Games of thrones',
            price: '$10',
            id: 231254
        },
        {
            name: 'Inception',
            price: '$10',
            id: 123124
        }
    ]);

    return (
        /*here, we are giving all the info up to the components between (Nav, MovieList)
        <MovieContext.Provider>
            <Nav/>
            <MovieList/>
        </MovieContext.Provider>
        */
       // render all the childs components the info
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}