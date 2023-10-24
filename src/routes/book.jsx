import { useParams } from 'react-router-dom';
import { getBook } from '../data/data';

export default function Book() {
    const params = useParams();
    const book = getBook(parseInt(params.idbook));
    const {id, title, author, price} = book;
    return (
        <section>
            <h2>Книга &quot;{title}&quot;</h2>
            <p><label>Автор:</label> <em>{author}</em></p>
            <p><label>Цена:</label> {price} руб.</p>
        </section>
    );
}