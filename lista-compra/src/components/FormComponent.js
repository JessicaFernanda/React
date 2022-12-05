const FormComponent = ({ name, onChange, onAdd }) => {
  return (
    <div className="form-compra">
      <h2>Insira os itens da sua compra:</h2>
      <form>
        <div className="form-control">
          <label htmlFor="itemCompra">O que você vai comprar?</label>
          <input
            type="text"
            name="itemCompra"
            placeholder="Nome do Item"
            value={name}
            onChange={onChange}
          />
        </div>
        <button type="button" onClick={onAdd}>
          Adicionar
        </button>
      </form>
    </div>
  );
};
export default FormComponent;
