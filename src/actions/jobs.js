import uuid from 'uuid';

export const addJob = (
    {
        brand,
        jobNumber,
        itemName,
        orderedBy,
        orderDate,
        quantity,
        status,
        unitPrice,
        lineValue,
        dpbp,
        etaDate,
        etaText,
        shippingInfo,
        detailStatus,
        orderDetails,
        comments
    } = {}
) => ({
    type: 'ADD_JOB',
    job: {
        id: uuid(),
        brand,
        jobNumber,
        itemName,
        orderedBy,
        orderDate,
        quantity,
        status,
        unitPrice,
        lineValue,
        dpbp,
        etaDate,
        etaText,
        shippingInfo,
        detailStatus,
        orderDetails,
        comments
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
