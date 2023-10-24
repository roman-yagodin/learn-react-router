import {Outlet, Link} from 'react-router-dom';
import dataBook from '../data/data';

export default function Catalog() {
    return (
        <section>
            <h2>Каталог</h2>
            {dataBook.map(book => (
                <>
                    <Link to={`/catalog/${book.id}`}>
                        {book.title}
                    </Link> | { ' ' }
                </>
            ))}
            <Outlet />
        </section>
    );
}