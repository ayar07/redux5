// import { Link } from "react-router-dom"
// import { useEffect } from "react-redux";
// import { useDispatch, useSelector } from "react-redux"
// import fetchBooks from "../../store/actions/bookCreator";


// const routes = [
//     {
//         path: "/",
//         label: "Posts",
//         id: "1",
//     },
// ];

// const BookPosts = () => {
//     // const { post, loading, error } = useSelector((state) => state.usersReducer);
//     // const dispatch = useDispatch();

//     const { books, booksIsLoading, booksIsError } = useSelector((state) => state.booksReducer);
//     const dispatch = useDispatch();

//     // useEffect(() => {
//     //     dispatch(fetchAllUsers())
//     // }, []);

//     useEffect(() => {
//         dispatch(fetchBooks())
//     }, []);


//     // console.log(loading, post);

//     console.log(books, booksIsError, booksIsLoading);


//     if (booksIsError) {
//         return <div>{booksIsError}</div>
//     }

//     return (
//         <>
//             <div>
//                 {routes.map((el) => (
//                     <Link style={{ marginRight: "30px" }}
//                         to={el.path}
//                         key={`${el.id} ${el.label}`}
//                     >
//                         {el.label}
//                     </Link>
//                 ))}
//             </div>
//         </>
//     )
// }

// export default BookPosts;