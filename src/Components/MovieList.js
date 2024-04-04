import React from 'react'
import { genres } from '../Data/genre'
import { movies } from '../Data/data'

const MovieList = () => {

    return (
        <div>
            <div className='table'>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie, index) => (
                            <tr key={index}>
                                <td>{movie.title}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MovieList