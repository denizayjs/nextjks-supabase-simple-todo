import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  useUser,
  useSupabaseClient,
  Session,
} from "@supabase/auth-helpers-react";
import { link } from "fs";

export default function Todo() {
  const supabase = useSupabaseClient();
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoList, setTodoList] = useState("");
  const user = useUser();
  useEffect(() => {
    getTodos();
  }, []);

  async function addTodo() {
    if (todo !== "") {
      const newTodo = {
        user_id: user.id,
        description: todo,
      };
      let { error } = await supabase.from("todos").upsert(newTodo);
      console.log(error);
    }
    getTodos();
  }

  async function getTodos() {
    let { data, error, status } = await supabase
      .from("todos")
      .select("id, description, isComplete")
      .eq("user_id", user.id);

    if (data) {
      setTodos(data);
    }
  }

  return (
    <>
      <div className="flex mb-12">
        <input
          type="text"
          className="outline-0 h-12 border-0 bg-white text-black border-b-2 rounded-none p-0"
          placeholder="Add Task"
          onChange={(event) => {
            setTodo(event.target.value);
          }}
        />

        <button
          className="bg-green-600 text-white w-24 rounded border-0 ml-4 hover:bg-green-900 font-bold"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((item) => (
          <li className="text-black p-4 border-b-2 border-l-2 border-green-900 mt-4 hover:bg-green-900 hover:text-white cursor-pointer font-bold">
            {item.description}
          </li>
        ))}
      </ul>
    </>
  );
}
