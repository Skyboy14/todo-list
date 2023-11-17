import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const FormContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const StyledTextField = styled(TextField)`
  flex: 1;
  margin-right: 10px;
`;

const PrioritySelect = styled(({ className, ...props }) => (
    <Select className={className} {...props} />
))`
  min-width: 120px;
`;
const TodoForm = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');
    const [priority, setPriority] = useState('low');

    const handleAddTask = () => {
        if (taskName.trim() !== '') {
            addTask(taskName, priority);
            setTaskName('');
        }
    };

    return (
        <FormContainer>
            <StyledTextField
                type="text"
                label="New task name"
                variant="outlined"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <PrioritySelect
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                label="Priority"
            >
                <MenuItem value="low">Low</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="high">High</MenuItem>
            </PrioritySelect>
            <Tooltip title="Add Task">
                <Button variant="contained" color="primary" onClick={handleAddTask}>
                    <AddIcon />
                </Button>
            </Tooltip>
        </FormContainer>
    );
};

export default TodoForm;
