import React from 'react';
import {useParams,useSearchParams} from 'react-router-dom';

const PostDetails = () => {
    let params = useParams();
    let [searchParams] = useSearchParams();
    return(
        <React.Fragment>
           <div className="panel panel-info">
               <div className="panel-heading">
                   <h2>{params.topic} Details Page</h2>
               </div>
               <div className="panel-body">
                    <p>
                        {params.topic} Details is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>
                    <h3>You are on page number {searchParams.getAll('page')}</h3>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PostDetails;