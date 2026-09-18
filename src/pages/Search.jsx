import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import BookCard from "../components/BookCard"
import Loader from "../components/Loader"

const Search = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const queryParam = searchParams.get('q') || ""
    const [query, setQuery] = useState(queryParam)

    const [books, setBooks] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/search' + '?q=' + encodeURIComponent(query))
    }

    useEffect(() => {
        const loadBooks = async () => {
            setError(null)
            setIsLoading(true)
            setBooks(null)

            try {
                const response = await fetch(`https://openlibrary.org/search.json?q=${query}`)

                const data = await response.json()

                setBooks(data.docs.slice(0, 5))
                console.log(data)
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }

        loadBooks()
    }, [queryParam])

    return (
        <section className="content">
            <div className="search-page-header">
                <div className="section-label">ПОИСК</div>
                <h1>Найдите свою следующую книгу</h1>
                <form onSubmit={handleSubmit} className="search" id="searchForm">
                    <span className="search-icon">⌕</span>
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        id="searchInput"
                        type="text"
                        placeholder="Название, автор или ISBN..."
                    />
                    <button type="submit">Найти</button>
                </form>
            </div>
            <div className="section-header">
                <div>
                    <div className="section-label">РЕЗУЛЬТАТЫ</div>
                    <h2 id="searchTitle">Результаты поиска</h2>
                </div>
                <span className="result-count" id="resultCount">
                    —
                </span>
            </div>
            {isLoading && <Loader label={"Загружаем книжки..."} />}
            {!isLoading && error && <h3>{error}</h3>}
            {!isLoading && !error && books && <div className="book-grid" id="results">
                {books.map((book, i) => <BookCard {...book} key={i} book_key={book.key} />)}
            </div>
            }
        </section>
    )
}

export default Search
