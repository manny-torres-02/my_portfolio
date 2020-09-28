import React, { Component } from 'react';
import "../../src/App.css";
import cropped from '../../src/image/cropped.jpg';


class Home extends React.Component {

    render() {

        return (
            <div className="wrap">
                <section className="home-card">
                    <img src={cropped} alt="profile pic of manny" />
                    <article>
                        <p> Hi All, My name is Manny. I am a Web Developer based in
                        Milwaukee, Wisconsin. My main focuses are on HTMl, CSS, and Javascript.
                </p>
                        <p>
                            I also like to focus on Node.JS, Express, and React. I currently am working on
                building up some projects that I feel are very presentable. 
                </p>
                </article>
                </section>
            </div>
        )
    }
}

export default Home;