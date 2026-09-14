function Button({ item, onClick, title }) {
  const isActive = item === title.toLowerCase();
  return (
    <button className={isActive ? "active" : ""} onClick={onClick}>
      {item.toUpperCase()}
    </button>
  );
}

export default Button;
