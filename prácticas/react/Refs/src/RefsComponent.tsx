import "./App.css";

function RefsComponent() {
  return (
    <>
      <h1>Refs</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target.one.value);
          console.log(e.target.two.value);
        }}
        className="form"
      >
        <input type="text" className="input" name="one" />
        <input type="text" className="input" name="two" />
        <button>Enviar</button>
      </form>
    </>
  );
}

export default RefsComponent;
