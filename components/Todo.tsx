import { Input } from "@chakra-ui/react";

export default function Todo() {
  return (
    <>
      <input
        type="text"
        className="outline-0 h-12 border-0 bg-white text-black border-b-2 rounded-none p-0"
        placeholder="Add Task"
      />

      <button className="bg-green-600 text-white w-24 rounded border-0 ml-4 hover:bg-green-900 font-bold">
        Add
      </button>
    </>
  );
}
