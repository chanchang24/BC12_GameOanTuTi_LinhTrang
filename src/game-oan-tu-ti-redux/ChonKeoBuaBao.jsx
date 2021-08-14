import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actChonKeoBuaBao } from '../store/actions/gameOanTuTiAction';
class ChonKeoBuaBao extends Component {
    render() {
        const { chonKeoBuaBao } = this.props;
        //render item kéo búa bao
        return (
            <div >
                <button className="btn " onClick={() => chonKeoBuaBao('keo')}><img src="./images/keo.png"width={40} /></button>
                <button className="btn " onClick={() => chonKeoBuaBao('bua')}><img src="./images/bua.png" width={40} /></button>
                <button className="btn " onClick={() => chonKeoBuaBao('bao')}><img src="./images/bao.png" width={40} /></button>


            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    chonKeoBuaBao: item => {
        dispatch(actChonKeoBuaBao(item));
    }
})
export default connect(null, mapDispatchToProps)(ChonKeoBuaBao);
