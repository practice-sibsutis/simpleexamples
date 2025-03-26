import {use} from 'react';

export default function SearchResults({ query }) {
    if (query === '') {
        return null;
    }
    const albums = use(new Promise((resolve, reject) => {
        resolve([{
            id: 1,
            title: 'Albums1',
            year: '2017'
        }])}));
    if (albums.length === 0) {
        return <p>No matches for <i>"{query}"</i></p>;
    }
    return (
        <ul>
            {albums.map(album => (
                <li key={album.id}>
                    {album.title} ({album.year})
                </li>
            ))}
        </ul>
    );
}
