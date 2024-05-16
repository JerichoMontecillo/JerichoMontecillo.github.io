import React from 'react';
import './Works.css'
import zombie from '../../assets/zombies.png';
import vinyl from '../../assets/vinyl.png';
import invader from '../../assets/spaceinvaders.png';
import blackjack from '../../assets/blackjack.png';

const Works = () => {
    return (
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDescription">This is a collection of all of my projects I have done within the past 4 years. A majority of these were projects for classes I took, and I have other personal projects that I can show off. Click each project to see the GitHub repository.</span>
            <div className="worksSet">
                <a href="https://github.com/Sharpaii/ZOMS" target="_blank" rel="noreferrer">
                    <div className="workBar">
                        <img src={zombie} alt="ZOMS" className="workBarImage" />
                        <div className="workBarText">
                            <h2>ZOMS</h2>
                            <p>Contributed to the game ZOMS made with Unity. The goal is to make it to the end of the level as fast as you can before the zombies defeat you.</p>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/JerichoMontecillo/NameTheSong" target="_blank" rel="noreferrer">
                    <div className="workBar">
                        <img src={vinyl} alt="Name The Song" className="workBarImage" />
                        <div className="workBarText">
                            <h2>Name The Song</h2>
                            <p>This website made in HTML prompts the player with 10 different albums all relating to Taylor Swift. Each quiz chooses songs from their respective albums and it is your job to figure out what song the given line belongs to.</p>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/JerichoMontecillo/space-invaders" target="_blank" rel="noreferrer">
                    <div className="workBar">
                        <img src={invader} alt="Space Invaders" className="workBarImage" />
                        <div className="workBarText">
                            <h2>Space Invaders</h2>
                            <p>Remake of the classic game Space Invaders. The player must shoot down all the ships before they reach your side of the screen. THis game was made with pygame.</p>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/JerichoMontecillo/blackjackgame" target="_blank" rel="noreferrer">
                    <div className="workBar">
                        <img src={blackjack} alt="Blackjack" className="workBarImage" />
                        <div className="workBarText">
                            <h2>Blackjack</h2>
                            <p>Remake of the classic Blackjack card game. The program recreates the game exactly how it would play in a casino. All inputs and outputs are done with the terminal.</p>
                        </div>
                    </div>
                </a>
            </div>
            <a href="https://github.com/JerichoMontecillo?tab=repositories" target="_blank" rel="noreferrer">
                <button className="workButton">See More</button>
            </a>
        </section>
    )
}

export default Works