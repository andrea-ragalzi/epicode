const changeColor = () => console.log('Mi hanno schiacciato');

const ButtonComponent = (props) => {
    return (
        <button type="button" onClick={changeColor} className="custom-btn">Schiacciami</button>
    );
}

export default ButtonComponent;
