import React from "react"
import Gallery from "./Gallery"

function Home() {

    return (
        <div>
            <div className="container">
                {/* Hero Section */}
                <section className="py-5 text-center container" >
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto" >
                            <h1 class="fw-light">Album example</h1>
                            <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                        </div>
                    </div>
                </section>
            </div>

            <Gallery />
        </div>
    )
}

export default Home