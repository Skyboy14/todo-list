import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { IconButton } from '@mui/material';

const TaskName = styled.span`
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  white-space: normal;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
`;

const TodoItem = ({ task, completeTask, deleteTask, editTask, setPriority }) => {
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingPriority, setIsEditingPriority] = useState(false);
    const [editedName, setEditedName] = useState(task.name);
    const [editedPriority, setEditedPriority] = useState(task.priority);

    const handleEditTask = () => {
        if (isEditingName && editedName.trim() !== '') {
            editTask(task.id, editedName);
            setIsEditingName(false);
        } else if (isEditingPriority) {
            setPriority(task.id, editedPriority);
            setIsEditingPriority(false);
        }
    };

    return (
        <TableRow>
            <TableCell style={{ width: '300px' }}>
                {(!isEditingPriority && !isEditingName) && (
                    <Checkbox
                        checked={task.completed}
                        onChange={() => completeTask(task.id)}
                    />
                )}
                {isEditingName ? (
                    <TextField
                        size="small"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                    />
                ) : (
                    <TaskName completed={task.completed}>{task.name}</TaskName>
                )}
            </TableCell>
            <TableCell>
                {isEditingPriority ? (
                    <Select
                        size="small"
                        value={editedPriority}
                        onChange={(e) => setEditedPriority(e.target.value)}
                    >
                        <MenuItem value="low">Low</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="high">High</MenuItem>
                    </Select>
                ) : (
                    task.priority
                )}
            </TableCell>
            <TableCell>
                {isEditingName || isEditingPriority ? (
                    <ActionButtons>
                        <Button size="small" onClick={handleEditTask}>
                            Save
                        </Button>
                        <Button size="small" onClick={() => setIsEditingName(false)}>
                            Cancel
                        </Button>
                    </ActionButtons>
                ) : (
                    <ActionButtons>
                        <Tooltip title="Delete">
                            <IconButton size="small" color="error" onClick={() => deleteTask(task.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit">
                            <IconButton size="small" color="success" onClick={() => setIsEditingName(true)}>
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Set Priority">
                            <IconButton size="small" color="secondary" onClick={() => setIsEditingPriority(true)}>
                                <PriorityHighIcon />
                            </IconButton>
                        </Tooltip>
                    </ActionButtons>
                )}
            </TableCell>
        </TableRow>
    );
};

export default TodoItem;
