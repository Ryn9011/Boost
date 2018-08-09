const jobsReducerDefaultState = [];

export default (state = jobsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_JOB':
            return [
                ...state,
                action.job
            ];
        case 'EDIT_JOB':
            return state.map((job) => {
                if (job.id === action.id) {
                    return {
                        ...job,
                        ...action.updates
                    };
                } else {
                    return job;
                }
            });
        case 'DELETE_JOB':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    };

}