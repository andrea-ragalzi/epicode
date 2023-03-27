const Header = (props) => {
    const src = `https://placehold.it/${props.size}/${props.color}`;
    return (<header className="App-header">
        <img src={src} className="App-logo" alt="logo" />
    </header>);
};

export default Header;