import { useState } from "react"
import { useSearchParams } from "react-router-dom"

const Search = () => {
    const [searchParams] = useSearchParams()
    const queryParam = searchParams.get('q') || ""
    const [query, setQuery] = useState(queryParam)

    return (
        <section className="content">
            <div className="search-page-header">
                <div className="section-label">ПОИСК</div>
                <h1>Найдите свою следующую книгу</h1>
                <form className="search" id="searchForm">
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
