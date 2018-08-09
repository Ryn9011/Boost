import React from 'react';
import JobForm from './JobForm';
import { connect } from 'react-redux';
import { addJob } from '../actions/jobs';

const AddJobPage = (props) => (
    <div>
        <h1>Add Job</h1>
        <JobForm
            onSubmit={(job) => {
                props.dispatch(addJob(job));
                props.history.push('/dashboard');
            }} /> 
    </div>
);

export default connect()(AddJobPage);