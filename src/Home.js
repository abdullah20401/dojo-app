const Home = () => {
    const handleClick = (e) => {
        console.log('Hello, Users!', e);
    }

    const HandleClickAgain = (name, e) => {
        console.log('Hello, ' + name, e.target);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me!</button>
            <button onClick={(e) => HandleClickAgain('Mario', e)}>Click Me Again!</button>
        </div>
    );
}
 
export default Home;