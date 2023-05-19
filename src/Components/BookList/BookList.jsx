import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../../store/actions/bookCreator";
import { Link } from "react-router-dom";
import cont from "../../Components/BookList/Posts.module.css"

const BookList = () => {
    const { books, booksIsLoading } = useSelector((state) => state.booksReducer);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchBooks())
    }, []);

    console.log(books, booksIsLoading);

    return (
        <div>{!booksIsLoading ? books.map((el) => {
            return (
                <div key={el.id} className={cont.secman}>
                    <h2 className={cont.man}>{el.id} <br /> {el.title}</h2>
                    <Link to={`/posts/${el.id}`}> <button>Details</button></Link>
                    <div className={cont.men}> <div className={'bodyPosts'}>{el.body.length > 20 ? el.body.substr(0, 20) + '...' : el.body}</div>
                        <Link to={`/posts/${el.id}`}> More </Link> </div>
                </div>
            );
        }) : <h1>error</h1>}</div>
    )
}

export default BookList;