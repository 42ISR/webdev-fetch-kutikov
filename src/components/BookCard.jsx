import { Link } from "react-router-dom"

const BookCard = ({title, first_publish_year, author_name, cover_i}) => {
    return (
        <Link className="book-card" to="book">
            <div className="book-image">
                <img
                    src={`https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`}
                    alt="The Little Prince"
                />
                <button className="favorite">♡</button>
            </div>
            <div className="book-info">
                <h3>{title}</h3>
                {author_name && <p>{author_name.join(", ")}</p>}
                <span className="year">{first_publish_year}</span>
            </div>
        </Link>
    )
}

export default BookCard
