import React, { useEffect, useState } from "react"
import ImageView from "./ImageView"

function Gallery() {
    let [data, setData] = useState([])

    function fetchData() {
        fetch("https://fakestoreapi.com/products")
        .then(function(data) {
            // console.log("========== ", data)
            return data.json()
        })
        .then(function(jsonData) {
            console.log("=============", jsonData)
            // data = jsonData
            setData(jsonData)
        })
        .catch(function(error) {
            alert(error)
        })
    }

    useEffect(
        function () {
            fetchData()
        },
        []
    )

    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                    {
                        data.map(function (element, index) {
                            return (
                                <ImageView
                                    title={element.title}
                                    description={element.description}
                                    image={element.image}
                                    price={element.price}
                                    rating={element.rating}
                                />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Gallery