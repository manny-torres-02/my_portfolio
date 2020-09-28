import React from 'react';
import "../../src/App.css";
import cropped from '../../src/image/cropped.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


library.add(fab, faGithubSquare, faLinkedin)
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
                    <div className="icon-row">
                        <a href="https://github.com/squirtleturtle02" className=" fa-3x" target="blank"><FontAwesomeIcon icon={faGithubSquare} /></a>
                        <a href="https://www.linkedin.com/in/jmanueltorres/" className=" fa-3x" target="blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="https://twitter.com/home" className=" fa-3x" target="blank"><FontAwesomeIcon icon={faTwitter} /> </a>
                    </div>
                </section>
            </div>
        )
    }
};

export default Home;