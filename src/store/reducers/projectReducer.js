const initState = {
    projects: [
        {id:'1', title:'help me find peach', content: 'blah blah b a a a '},
        {id:'2', title:'collect all the start', content: 'blah blah b a a a '},
        {id:'3', title:'egg hunt with yoshi300', content: 'blah blah b a a a '}
    ]
}

const projectReducer = (state = initState, action) =>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('create project', action.project)
        
    }
    return state
}

export default projectReducer 