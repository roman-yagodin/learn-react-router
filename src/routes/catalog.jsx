import {Outlet, NavLink} from 'react-router-dom';
import dataBook from '../data/data';

export default function Catalog() {
    return (
        <section>
            <h2>Каталог</h2>
            {dataBook.map(book => (
                <>
                    <NavLink to={`/catalog/${book.id}`}
                        style={({isActive}) => {
                            return {
                                color: isActive ? "#369" : "",
                                fontWeight: isActive ? "bold" : "normal"       
                            };
                        }}
                    >
                        {book.title}
                    </NavLink> { ' ' }
                </>
            ))}
            <Outlet />
        </section>
    );
}