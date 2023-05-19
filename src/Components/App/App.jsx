import "bootstrap/dist/css/bootstrap.min.css"
import BookList from "../BookList/BookList"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookDet from "../BookDet";


const App = () => {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<><BookList /></>} />
                    <Route path="/posts/:id" element={<><BookDet /></>} />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </Router>
        </>
    )
}

//store - store, app - app, db.json - db.json,
//bookSlice - usersSlice, bookCreator - Users
//BookList - UserPosts, BookPosts - Navbar, BookDet - UsersDet

export default App;