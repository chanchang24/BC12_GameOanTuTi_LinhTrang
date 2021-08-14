import React, { Component } from 'react'
import './GameOanTuTi.css';
import { connect } from 'react-redux';
import KeoBuaBao from './KeoBuaBao'
import ThongTinGame from './ThongTinGame';
import ChonKeoBuaBao from './ChonKeoBuaBao';
import { actChonKeoBuaBao } from '../store/actions/gameOanTuTiAction';
import { actChoiGame } from '../store/actions/gameOanTuTiAction';



class GameOanTuTi extends Component {
    render() {
        const { chooseItem,choiGame } = this.props;
        return (

            <div className="game-container text-center">
                <div className="container-fluid">
                    <div className="row py-5">
                        <div className="col-4 game-player">
                            <div className="speech-bubble" >
                                <img src={`./images/${chooseItem}.png`} width={80} />

                            </div>
                            <div className=" mt-3">
                                <img src="./images/player.png" width={150} alt="" />
                            </div>             
                                <ChonKeoBuaBao />
                        </div>
                        <div className="col-4 ">
                            <h1 className="pb-3 text-warning ">I'm iron man, i love you 3000!! </h1>
                            <ThongTinGame />
                            <button className="btn btn-success" onClick={() => choiGame()}>PLAY GAME</button>
                        </div>
                        <div className="col-4 game-computer">
                            <div className="speech-bubble" >
                                <KeoBuaBao />
                            </div>
                            <div className=" mt-3">
                                <img src="./images/playerComputer.png" width={150} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    chooseItem: state.gameOanTuTiReducer.chooseItem,

})
const mapDispatchToProps = dispatch => ({
    choiGame: () => {
        dispatch(actChoiGame());
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(GameOanTuTi);