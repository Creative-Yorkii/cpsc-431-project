import React from 'react'
import { Descriptions, Badge } from 'antd';

function MovieInfo(props) {

    const { movie } = props;

    return (
        <Descriptions title="Movie Info" bordered>
        <Descriptions.Item label="Title">{movie.original_title}</Descriptions.Item>
        <Descriptions.Item label="Release Date">{movie.release_date}</Descriptions.Item>
        <Descriptions.Item label="Total Revenue">{movie.revenue}</Descriptions.Item>
        <Descriptions.Item label="Runtime">{movie.runtime}</Descriptions.Item>
        <Descriptions.Item label="Average Vote" span={2}>
        {movie.vote_average}
        </Descriptions.Item>
        <Descriptions.Item label="Vote Count">{movie.vote_count}</Descriptions.Item>
        <Descriptions.Item label="Status">{movie.status}</Descriptions.Item>
        <Descriptions.Item label="Viewers">{movie.popularity}</Descriptions.Item>
      </Descriptions>
    )
}

export default MovieInfo
