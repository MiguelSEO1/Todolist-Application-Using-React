import React, { useState, useRef } from "react";

//create your first component
const Home = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState([]);
  const [alert, setAlert] = useState(false);
  const [alert2, setAlert2] = useState(false);
  const inputRef = useRef(null);

  return (
    <section className="Fondo">
      <div className=" container text-center">
        <h1 className="Encabezado text-center">Lista de Tareas</h1>

        <div className="row d-flex justify-content-center ">
          <div className="col-lg-5 col-lg-5 col-sm-10">
            <div>
              {alert ? (
                <p className="alert text-primary">
                  {" "}
                  Por Favor, no ingrese campos Vacíos
                </p>
              ) : null}
              {alert2 ? (
                <p className="alert text-primary">
                  {" "}
                  Por Favor, no ingrese Tareas Repetidas
                </p>
              ) : null}
            </div>
            <input
              ref={inputRef}
              onKeyUp={(e) => {
                setTodo(e.target.value);
                if (
                  e.key == "Enter" &&
                  e.target.value.trim() != "" &&
                  !todoList.includes(e.target.value.trim())
                ) {
                  setTodoList([...todoList, e.target.value]);
                  e.target.value = "";
                  setAlert(false);
                  setAlert2(false);
                } else if (
                  e.key == "Enter" &&
                  todoList.includes(e.target.value.trim())
                ) {
                  setAlert2(true);
                  setAlert(false);
                } else if (e.key == "Enter" && e.target.value == "") {
                  setAlert(true);
                  setAlert2(false);
                }
              }}
              type="text"
              className=" border-0 text-center form-control p-3"
              id="todoList"
              placeholder="Agregar Tareas"
            />
            {todoList.map((todo, index) => {
              return (
                <div key={index} className="mostrar todoList border ">
                  <p className="pt-3 d-flex justify-content-evenly text-dark">
                    {`Tarea ${index + 1}:  ${todo}`}
                    <i
                      className="ocultar text-primary fa-solid fa-trash"
                      onClick={() => {
                        setTodoList(todoList.filter((e, i) => i != index));
                      }}
                    ></i>
                  </p>
                </div>
              );
            })}
            <div className="letraFinal todoList p-3 text-secondary">
              {(() => {
                if (todoList.length == 1) {
                  {
                    return `Tienes ${todoList.length} Tarea por hacer`;
                  }
                } else if (todoList.length > 1) {
                  return `Tienes ${todoList.length} Tareas por hacer`;
                } else {
                  return "¡Bien, Tiempo Libre!";
                }
              })()}
            </div>
            <div className=" todoList pliegue border mx-1"></div>
            <div className="todoList pliegue border mx-2"></div>
            <button
              className="btn btn-success mt-3 mx-2"
              onClick={() => {
                if (
                  inputRef.current.value.trim() != "" &&
                  !todoList.includes(inputRef.current.value.trim())
                ) {
                  setTodoList([...todoList, todo.trim()]);
                  inputRef.current.value = "";
                  setTodo("");
                  setAlert(false);
                  setAlert2(false);
                } else if (inputRef.current.value.trim() == "") {
                  setAlert(true);
                  setAlert2(false);
                } else if (todoList.includes(inputRef.current.value.trim())) {
                  setAlert(false);
                  setAlert2(true);
                }
              }}
            >
              Añadir tarea
            </button>
            <button
              className="btn btn-danger mt-3 mx-2"
              onClick={() => {
                setTodoList([]);
                setAlert(false);
                setAlert2(false);
              }}
            >
              Eliminar Tareas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
