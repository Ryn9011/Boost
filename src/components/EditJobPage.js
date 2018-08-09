import React from 'react';
import JobForm from './JobForm';
import { connect } from 'react-redux';
import { editJob, deleteJob } from '../actions/jobs';
import Modal from 'react-modal';

const EditJobPage = (props) => {

    return (
        <Modal
            isOpen={true}
            contentLabel="Selected Option"
        >
            <div>
                <h1>Edit Job</h1>
                <JobForm
                    button={'Save Changes'}
                    job={props.job}
                    onSubmit={(job) => {
                        props.dispatch(editJob(props.job.id, job));
                        props.history.push('/dashboard');
                    }}
                />
                <button onClick={() => {
                    props.dispatch(deleteJob(props.job.id ));
                    props.history.push('/dashboard');
                }}
                >
                Delete Job
                </button>
            </div>
        </Modal>
    );
}

const mapStateToProps = (state, props) => {
    return {
        job: state.jobs.find((job) => job.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditJobPage);