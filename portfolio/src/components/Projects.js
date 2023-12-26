import { useState } from 'react';
import Modal from 'react-modal';

export default function Projects() {
    {/*
    const [modalRTIsOpen, setModalRTIsOpen] = useState(false);

    function openRTModal(){
        setModalRTIsOpen(true);
    }

    function closeRTModal(){
        setModalRTIsOpen(false);
    }
    */}

    return (
        <div className="projects-content" id="projects">
            <h2>Personal Projects</h2>
            <table>
                <tr>
                    <td>
                        {/*<div className='btn-container'>
                            <button onClick={openRTModal}>*/}
                                <div>
                                    <h3>Recipe Tracker</h3>
                                    <p>A web application used to<br/>
                                    save recipes, plan meals, and<br/>
                                    manage shopping lists.</p>
                                    <a href="https://github.com/ayang101/recipe-tracker">
                                        View on github
                                    </a>
                                </div>
                            {/*</button></div>*/}
                        {/*
                        <Modal
                            isOpen={modalRTIsOpen}
                            onRequestClose={closeRTModal}
                            className="modal"
                            style={{overlay: {
                                        backgroundColor: 'black'
                                    },
                                    content: {
                                        alignContent: 'center',
                                        position: 'absolute',
                                        top: '12%',
                                        left: '12%',
                                        padding: 100,
                                        overflow: 'scroll',
                                        background: 'white'
                                    }
                            }}
                        >
                            <button onClick={closeRTModal}>X</button>
                        </Modal>
                        */}
                    </td>
                    <td>
                        <div>
                            <h3>To-Do List</h3>
                            <p>Manage day-to-day tasks<br/>
                            using modular-style layouts<br/>
                            and simple list design.</p>
                            <a href="https://github.com/KGHALAMB/Team1-ToDo">
                                View on github
                            </a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>
                            <h3>Sentiment Analysis</h3>
                            <p>Analyzes Amazon's Topical<br/>
                               Chat dataset on online dialogues<br/>
                               to extract quantitative and qualitative<br/>
                               user sentiment-level data.</p>
                        </div>
                    </td>
                    <td>
                        <div>
                            <h3>Fictional World Simulator</h3>
                            <p>Animated sprites interact with<br/>
                               each other in a virtual world.</p>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}