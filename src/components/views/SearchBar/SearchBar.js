import React, { useEffect, useState, useRef } from 'react'
import { Typography, Row, Button } from 'antd';
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE, POSTER_SIZE } from '../../Config'
import GridCard from '../../commons/GridCards'
import './SearchBar.css';
const { Title } = Typography;
const reloadtButton = document.querySelector("#reload");

function SearchBar() {
    const buttonRef = useRef(null);

    const [Movies, setMovies] = useState([])

    const [Loading, setLoading] = useState(true)
    const [CurrentPage, setCurrentPage] = useState(0)
    const [query, setQuery] = useState('')



    const searchMovies = async (e) => {

        e.preventDefault();
        const endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`;
        const res = await fetch(endpoint);
        const data = await res.json();
        setMovies(data.results);
        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
              setMovies([...Movies, ...result.results])
            }, setLoading(false))
            .catch(error => console.error('Error:', error)
               )
            setLoading(true)
    }




    return (
        <>
          <form onSubmit={searchMovies}>
            <div class="box">
            <input type="text" name="query" placeholder="Search" onfocus="this.placeholder = ''"
                value={query} onChange={(e) => setQuery(e.target.value)}
                />
            <a class="myButton" href="javascript:location.reload(true)">Refresh</a>
            </div>
          </form>
          <div style={{ width: '85%', margin: '1rem auto' }}>
              <hr />
              <Row gutter={[16, 16]}>
                  {Movies && Movies.map((movie, index) => (
                        <React.Fragment key={index}>
                              <GridCard
                                image={movie.poster_path ?
                                `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                    : null}
                                movieId={movie.id}
                                movieName={movie.original_title}
                              />
                        </React.Fragment>
                  ))}
              </Row>
          </div>
      </>
    )
}

export default SearchBar
