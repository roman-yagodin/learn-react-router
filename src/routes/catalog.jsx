import {Outlet, NavLink, useSearchParams} from 'react-router-dom';
import dataBook from '../data/data';

export default function Catalog() {

    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <section>
            <h2>Каталог</h2>

            <input type="search"
                value={searchParams.get("filter") || ""}
                onChange={e => {
                    const filter = e.target.value;
                    if (filter) {
                        setSearchParams({filter})
                    }
                    else {
                        setSearchParams({});
                    }
                }}
            />

            <nav>
                {dataBook.filter(book => {
                    const filter = searchParams.get("filter");
                    if (!filter) return true;
                    return book.title.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase());

                }).map(book => (
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
            </nav>
            <Outlet />
        </section>
    );
}