import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

const Search = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const queryParam = searchParams.get('q') || ""
    const [query, setQuery] = useState(queryParam)

    const [books, setBooks] = useState([])
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

            try {
                const response = await fetch(`https://openlibrary.org/search.json?q=${query}`)

                const data = await response.json()

                console.log(data)
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }

        loadBooks()
    }, [])

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
            <div className="book-grid" id="results" />
        </section>
    )
}

export default Search
