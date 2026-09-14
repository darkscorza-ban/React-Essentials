function CoreElement({ item }) {
  const { image: imageSrc, title, description } = item;
  return (
    <li>
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default CoreElement;
