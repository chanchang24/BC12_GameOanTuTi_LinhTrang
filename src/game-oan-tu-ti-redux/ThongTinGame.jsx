import React, { Component } from 'react'
import {connect} from 'react-redux';
 class ThongTinGame extends Component {
    render() {
        const{soBanThang,tongSoBanChoi}=this.props;
        return (
            <div className="mt-3 thong-Tin-Game">
                <h2 className="text-success py-3">SỐ BÀN THẮNG: <span className="text-warning">{soBanThang}</span></h2>
                <h2 className="text-success py-3">SỐ BÀN CHƠI: <span className="text-warning">{tongSoBanChoi}</span></h2>
            </div>
        )
    }

}
const mapStateToProps= state => ({
    soBanThang: state.gameOanTuTiReducer.soBanThang,
    tongSoBanChoi: state.gameOanTuTiReducer.tongSoBanChoi,
})
export default connect(mapStateToProps)(ThongTinGame);