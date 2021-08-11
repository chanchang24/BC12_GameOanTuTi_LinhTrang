import React, { Component } from 'react'
import KeoBuaBao from './KeoBuaBao'
import ThongTinGame from './ThongTinGame'

export default class GameOanTuTi extends Component {
    render() {
        return (
            <div className="game-container text-center">
                <h1 className="py-5">I'm iron man, i love you 3000!! </h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4 game-player">

                        </div>
                        <div className="col-4">
                            <ThongTinGame/>
                        </div>
                        <div className="col-4 game-computer">
                            <KeoBuaBao/>
                        </div>

                    </div>
                </div>
                
            </div>
        )
    }
}
