import React from 'react';
import { connect } from 'react-redux';
import JobListItem from './JobListItem';
import AddJobPage from './AddJobPage';

const JobList = (props) => (
    <div>
        <h1>Jobs List</h1>

        {props.jobs.map((job, index) => {
          return <JobListItem key={index} {...job}/>
        })}
    </div>   
);

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs
    };
};

export default connect(mapStateToProps)(JobList);