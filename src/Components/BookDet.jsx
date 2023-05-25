import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import con from "../Components/Post.module.css"
import fetchBook from "../store/actions/bookDetCreator";

const BookDet = () => {
    const navig = useNavigate();
    const params = useParams();
    console.log(params);

    // const { post, loading, error } = useSelector((state) => state.postReducer);
    // const dispatch = useDispatch()

    const { book, bookIsLoading } = useSelector((state) => state.bookReducer);
    const dispatch = useDispatch();
    console.log(book);

    useEffect(() => {
        dispatch(fetchBook(params.id));
    }, []);


    // if (booksIsError) {
    //     return <div>err: {booksIsError}</div>;
    // }
    return (
        <div>
            {bookIsLoading || !book ? (
                "loading"
            ) : (
                <div className={con.secmen}>
                    <button onClick={() => navig("/")}>Back</button>
                    <h1 className={con.men}> {book.id} <br />  {book.title} <br /></h1>
                    <div> {book.body}</div>
                </div>
            )}
        </div>
    )
}

// useEffect(() => {
//     dispatch(setLoading(true));

//     fetch(`http://localhost:4000/posts/${params.id}`)
//         .then((response) => response.json())
//         .then((data) => {
//             dispatch(setUsers(data));
//         })

//         .catch((err) => dispatch(setError(err)))
//         .finally(() => dispatch(setLoading(false)))


// }, [])
export default BookDet;