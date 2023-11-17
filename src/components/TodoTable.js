import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #f2f2f2;
  padding: 12px;
  text-align: left;
`;

const ThAction = styled(Th)`
  background-color: #f2f2f2;
  padding: 12px;
  text-align: left;
  text-align: center;
`;

const TodoTable = ({ tasks, completeTask, deleteTask, editTask, setPriority }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <Th>Task</Th>
                    <Th>Priority</Th>
                    <ThAction>Actions</ThAction>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <TodoItem
                        key={task.id}
                        task={task}
                        completeTask={completeTask}
                        deleteTask={deleteTask}
                        editTask={editTask}
                        setPriority={setPriority}
                    />
                ))}
            </tbody>
        </Table>
    );
};

export default TodoTable;
