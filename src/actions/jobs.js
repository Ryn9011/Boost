import uuid from 'uuid';

export const addJob = (
    {
        jobNumber,
        itemName,
        orderedBy,
        orderDate,
        unitPrice
    } = {}
) => ({
    type: 'ADD_JOB',
    job: {
        id: uuid(),
        jobNumber,
        itemName,
        orderedBy,
        orderDate,
        unitPrice
    }
});

export const editJob = (id, updates) => ({
    type: 'EDIT_JOB',
    id,
    updates
});

export const deleteJob = (id  = {}) => ({
    type: 'DELETE_JOB',
    id
});
