import { Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Favorites from "./pages/Favorites"
import Search from "./pages/Search"
import Book from "./pages/Book"
import Layout from "./components/Layout"

const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Main />} />
                <Route path="favorites" element={<Favorites />} />
                <Route path="search" element={<Search />} />
                <Route path="book/:id" element={<Book />} />
            </Route>
        </Routes>)
}

export default App
