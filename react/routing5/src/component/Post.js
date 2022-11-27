import React from 'react';
import {Link} from 'react-router-dom';

const Post = (props) => {
    
    return(
        <React.Fragment>
           <div className="panel panel-success">
               <div className="panel-heading">
                   <h2>Post Page</h2>
               </div>
               <div className="panel-body">
                    <p>
                        Post is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>
                    <h2>JavaScript</h2>
                    <Link to={`/post/JavaScript?page=1`} className="btn btn-success">Details</Link>
                    <h2>React</h2>
                    <Link to={`/post/React?page=2`} className="btn btn-primary">Details</Link>
                    <h2>Node</h2>
                    <Link to={`/post/Node?page=3`} className="btn btn-danger">Details</Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Post;