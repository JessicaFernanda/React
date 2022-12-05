const ListComponent = ({ list }) => {
  return (
    <div className="list-itens">
      <h2>Lista de compras:</h2>
      <ul>
        {list.length === 0 && <p>Não há itens!</p>}
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default ListComponent;
