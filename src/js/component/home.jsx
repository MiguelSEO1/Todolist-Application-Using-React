import React, {useState} from "react";


//create your first component
const Home = () => {
	
	
	const [todoList, setTodoList] = useState([]);
	return (
		<div className="text-center m-5">
		<div className="container">
			<div className=" row">
				
				<div className=" col-4 m-auto">
			          
					  <input className=" form-control text-center " placeholder="Add Todo" 
					   onKeyUp={(e) => {
						if(e.key == "Enter" && e.target.value.trim() != "" && !todoList.includes(e.target.value.trim())){
							setTodoList([...todoList, e.target.value])
							e.target.value = "";
						} }}/>{
						todoList.map((todo, index) => {
							return <div key={index} className=" mostrar row alert border">	  
							<p className=" col-8 d-flex justify-content-start">{todo}</p>
							<p className=" ocultar offset-2 col-2" onClick={() => {
								setTodoList(todoList.filter((e, i) => i != index))
							}}><i class="fa-solid fa-trash"></i></p>
					  </div>
						
					})}

				<div className="row p-3 border">{todoList.length > 0 ? `${todoList.length} todos`:"no hay tareas"}</div>
				
			    </div>
			</div>
		</div>
		</div>
	);
};

export default Home;
