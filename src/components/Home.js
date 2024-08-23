import React from 'react';

const Home = () => {
    return (
        <section className="home">
            <div className="content">
                <h1>Hello, I'm <span className="highlight">Moises D</span></h1>
                <p>I'm a Fullstack Developer but also, i've done proyects in VB.NET, ASP.NET, and SQL Server.</p>
                <div className="buttons">
                    <a href="#portfolio" className="btn">Mis Trabajos</a>
                    <a href="#contact" className="btn">Contactame</a>
                </div>
            </div>
        </section>
    );
}

export default Home;
