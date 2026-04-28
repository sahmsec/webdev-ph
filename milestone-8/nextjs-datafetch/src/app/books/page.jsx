import BookCard from "@/components/BookCard";

const getBooks = async () =>{
    const res = await fetch('http://localhost:5000/books', {cache: 'no-store'});
    return res.json();
}

const BooksPage = async () => {

    const books = await getBooks();

    return (
        <div>
            <h2>Books here!</h2>

            <div className="grid grid-cols-4 gap-4">
                {
                    books.map(book => <BookCard key={book.id} book={book} /> )
                }
            </div>
        </div>
    );
};

export default BooksPage;