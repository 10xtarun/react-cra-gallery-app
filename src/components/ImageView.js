import React from "react";

function ImageView(props) {
    

    return (
        <div className="col" key={`gallery-item-`}>
           
            <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={props.image} />

                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Price</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">{props.price}</button>
                        </div>
                        <small className="text-muted">{props.rating.rate}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageView