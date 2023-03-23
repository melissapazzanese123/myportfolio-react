import React from 'react';

function HelloBootstrap(){
    return (
        <div className="container">
            <div className="jumbotron bg-info class">
                <h1>Melissa Pazzanese's Portfolio</h1>
                <p>mellpazzanese@icloud.com</p>
                <p><a href="https://www.linkedin.com/in/melissa-pazzanese-87b6071ab/" class="btn btn-secondary stretched-link">Check Out My Linkedin Profile</a>
                    </p>
            </div>
        <div className="card mb-4">
        <div className="card-header bg-info class">
            <h3>Project 1</h3>
        </div>
        <div className="card-body">
            <p className="card-text">password-generator2</p>
            <p>
                <a href="https://melissapazzanese123.github.io/password-generator2/" class="btn btn-secondary stretched-link">Click here</a>
            </p>

        </div>
        </div>

        <div className="card mb-4">
        <div className="card-header bg-info class">
            <h3>Project 2</h3>
        </div>
        <div className="card-body">
            <p className="card-text">code-quiz-api </p>
            <p>
                <a href="https://melissapazzanese123.github.io/code-quiz-api/" class="btn btn-secondary stretched-link">Click here</a>
            </p>

        </div>
        </div>

        <div className="card mb-4">
        <div className="card-header bg-info class">
            <h3>Project 3</h3>
        </div>
        <div className="card-body">
            <p className="card-text">bootstrap-portfolio</p>
            <p>
                <a href="https://melissapazzanese123.github.io/bootstrap-portfolio/" class="btn btn-secondary stretched-link">Click here</a>
            </p>

        </div>
        </div>
        


        </div>
    )
}


export default HelloBootstrap;