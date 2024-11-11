const Favourite = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="fav-icon" onClick={toggleFavorite}>
            {isFavorite ? "♥" : "♡"}
        </div>
    );
};

export default Favourite;