import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieList from './MovieList';


function Home() {

    const [moviesData, setMoviesData] = useState([])

    const getAllMovies = () => {

        const serverURL = `http://localhost:3002/trending`;

        axios.get(serverURL)
            .then(response => {
                setMoviesData(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getAllMovies();
    }, [])

    return (
        <>
            <MovieList moviesData={moviesData} />
        </>
    )
}

export default Home;