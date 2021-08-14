import React, { Component } from 'react'
import { connect } from 'react-redux';
class KeoBuaBao extends Component {
    render() {
        const {mayChon} = this.props;
        return (
            <div>
                (<img src={`./images/${mayChon}.png`} width="80px" alt="" />)

            </div>
        )
    }
}
const mapStateToProps = state => ({
    mayChon: state.gameOanTuTiReducer.mayChon,
});
export default connect(mapStateToProps)(KeoBuaBao)