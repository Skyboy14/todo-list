import React from 'react';
import { connect } from 'react-redux';
import {
    addTask,
    deleteTask,
    completeTask,
    editTask,
    setPriority,
} from '../redux/actions/index';
import styled from 'styled-components';
import TodoTable from './TodoTable';
import TodoForm from './TodoForm';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const EmptyMessage = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: #777;
`;

const TaskCount = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #555;
`;

const TodoList = ({
    tasks,
    addTask,
    deleteTask,
    completeTask,
    editTask,
    setPriority,
}) => {
    const totalTasks = tasks.length;

    return (
        <Container>
            <h1>Todo List</h1>
            <TodoForm addTask={addTask} />
            {totalTasks === 0 ? (
                <EmptyMessage>You have a full day free! 🎉</EmptyMessage>
            ) : (
                <>
                    <TaskCount>Total tasks: {totalTasks}</TaskCount>
                    <TodoTable
                        tasks={tasks}
                        completeTask={completeTask}
                        deleteTask={deleteTask}
                        editTask={editTask}
                        setPriority={setPriority}
                    />
                </>
            )}
        </Container>
    );
};

const mapStateToProps = (state) => ({
    tasks: state.tasks.tasks,
});

export default connect(mapStateToProps, {
    addTask,
    deleteTask,
    completeTask,
    editTask,
    setPriority,
})(TodoList);
