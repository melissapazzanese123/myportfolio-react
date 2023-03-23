import React from 'react';

function HelloBootstrap(){
    return (
        <div className="container">
            <div className="jumbotron bg-info class">
                <h1>Melissa Pazzanese's Portfolio</h1>
                <p>mellpazzanese@icloud.com</p>
                <p><button className="btn btn-secondary">
                    Learn more
                    </button>
                    </p>
            </div>
        <div className="card mb-4">
        <div className="card-header bg-info class">
            <h3>Project 1</h3>
        </div>
        <div className="card-body">
            <p className="card-text">password-generator2</p>
            <p><button className="btn btn-secondary">
                    Learn more
                    </button>
                    </p>

        </div>
        </div>

        <div className="card mb-4">
        <div className="card-header bg-info class">
            <h3>Project 2</h3>
        </div>
        <div className="card-body">
            <p className="card-text">console_finances </p>
            <p><button className="btn btn-secondary">
                    Learn more
                    </button>
                    </p>

        </div>
        </div>

        <div className="card mb-4">
        <div className="card-header bg-info class">
            <h3>Project 3</h3>
        </div>
        <div className="card-body">
            <p className="card-text">bootstrap-portfolio</p>
            <p><button className="btn btn-secondary">
                    Learn more
                    </button>
                    </p>

        </div>
        </div>
        


        </div>
    )
}


export default HelloBootstrap;