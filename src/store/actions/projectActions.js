export const createProject =(project) =>{
    return (dispatch, getState)=>{
        //make async call database
        dispatch({
            type: 'CREATE_PROJECT',
            project
        });
    }
};

