import React from 'react'
import { genres } from '../Data/genre'

const GenreList = () => {

    const handleGenreClick = (genre) => {
        console.log(`Filtered By: ${genre}`);
    };

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Top 15 Movies of All Time</h1>
            <div className='filter'>
                <div className='filter_2'>
                    <h2>Filter by Genre</h2>
                </div>
                <div className='geners'>
                    {
                        genres.map((genre, index) => {
                            return <div key={index} className='item_geners' onClick={() => handleGenreClick(genre)}>{genre}</div>
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default GenreList