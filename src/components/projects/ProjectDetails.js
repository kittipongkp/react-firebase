import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
   // console.log(id)
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Tempor duis deserunt nulla culpa nulla cillum aute Lorem Lorem in et sunt exercitation. Mollit et incididunt cillum voluptate veniam laboris pariatur incididunt ipsum officia nostrud ullamco et. Et commodo commodo voluptate in anim esse duis labore. Excepteur amet veniam incididunt laborum irure exercitation do ex ex. Non quis nisi veniam tempor do enim adipisicing incididunt excepteur occaecat ex velit nisi nostrud. Lorem proident ut exercitation nulla excepteur consectetur mollit duis proident est irure adipisicing nisi. Esse nostrud officia non exercitation mollit ad sit adipisicing excepteur eu elit laborum.</p>
                    <div className="card-action gret light-4 grey-text">
                        <div>Post by the net ninja</div>
                        <div>2nd september, 2am</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
