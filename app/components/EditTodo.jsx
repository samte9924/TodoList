"use client";

import { updateTodo } from "@app/server-actions/updateTodo";
import { useState } from "react";

const EditTodo = ({ todo }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    task: todo.task,
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <button onClick={() => setShowModal(true)}>E</button>
      {showModal && (
        <div>
          <div>
            <span onClick={() => setShowModal(false)}>&times;</span>
            <form action={updateTodo} onSubmit={() => setShowModal(false)}>
              <input type="hidden" name="id" value={todo.id} />
              <div>
                <label htmlFor="task">Attività</label>
                <input
                  type="text"
                  id="task"
                  name="task"
                  value={formData.task}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">M</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditTodo;
