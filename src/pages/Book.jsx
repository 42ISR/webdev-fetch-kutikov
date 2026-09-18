import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../components/Loader"

const Book = () => {
    const { id } = useParams()
    const [book, setBook] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {
        const loadBook = async () => {
            setError(null)
            setIsLoading(true)
            setBook(null)

            try {
                const response = await fetch(`https://openlibrary.org/works/${id}.json`)

                const data = await response.json()

                setBook(data)
                console.log(data)
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }

        loadBook()
    }, [])

    if (isLoading) return <Loader label="Загружаем книжку" />

    if (!isLoading && book) return (
        <section className="book-page">
            <div className="book-page-cover">
                <img
                    id="bookCover"
                    src="https://covers.openlibrary.org/b/id/8231856-L.jpg"
                    alt=""
                />
            </div>
            <div className="book-page-content">
                <div className="section-label">КНИГА</div>
                <h1 id="bookTitle">{book.title}</h1>
                <div className="book-page-author" id="bookAuthor">
                    Antoine de Saint-Exupéry
                </div>
                <div className="book-meta">
                    <span id="bookYear">1943</span>
                    <span>Fiction</span>
                </div>
                {book.description.value && <div className="description">
                    <h3>Об этой книге</h3>
                    <p id="bookDescription">
                        {book.description.value}
                    </p>
                </div>}
                <div className="modal-actions">
                    <button className="primary-button">Читать</button>
                    <button className="secondary-button">♡ Сохранить</button>
                </div>
            </div>
        </section>
    )
}

export default Book
