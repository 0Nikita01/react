
const GamePage = ({onChangePage}) => {
    const handleClick = () => {
        onChangePage("app");
    }
    return (
        <div>
            <p>This is Game Page!!!</p>
            <button onClick={handleClick}>
                Home
            </button>
        </div>
    );
};

export default GamePage;