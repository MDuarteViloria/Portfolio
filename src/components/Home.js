import React from 'react';

const Home = () => {
    return (
        <section className="home">
            <div className="content">
                <h1>Hello, I'm <span className="highlight">[Your Name]</span></h1>
                <p>I'm a Fullstack Developer with experience in VB.NET, ASP.NET, and SQL Server.</p>
                <div className="buttons">
                    <a href="#portfolio" className="btn">View My Work</a>
                    <a href="#contact" className="btn">Get in Touch</a>
                </div>
            </div>
        </section>
    );
}

export default Home;
