import React from 'react';
import { Link } from 'react-router-dom';

const jobListItem = ({ id, jobNumber, itemName }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{jobNumber}</h3>
        </Link>
        <p>{itemName}</p>
    </div>
);

export default jobListItem;
