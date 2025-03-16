const Button = ({ buttonType = 'button', onClickHandler, buttonText }) => {
    return (
        <button type={buttonType} onClick={onClickHandler}>
            {buttonText}
        </button>
    );
};
  
export default Button;