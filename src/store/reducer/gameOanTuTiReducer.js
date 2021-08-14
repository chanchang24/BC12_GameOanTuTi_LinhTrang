
import * as gameOanTuTiConstant from '../constants/gameOanTuTiConstant';
const initialState = {
    chooseItem: 'bao',
    mayChon:'keo',
    soBanThang: 0,
    tongSoBanChoi: 0,
}
const gameOanTuTiReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case gameOanTuTiConstant.CHON_KEO_BUA_BAO:{
            //player lựa chọn item
            const item = payload ;
            return {...state, chooseItem: item};
        }
        case gameOanTuTiConstant.CHOI_GAME:{
                //Tăng số bàn chơi
                state.tongSoBanChoi +=1;
                //Tìm 1 số random  0 hoặc 1 hoặc 2
                let numberRandom = Math.floor(Math.random() * 3)
                // Đặt 1 số ứng với 1 item
                if (numberRandom === 0) {
                    state.mayChon = 'keo'
                } else if (numberRandom === 1) {
                    state.mayChon = 'bua'
                } else {
                    state.mayChon = 'bao'
                }
                //Tính bàn thắng
                if(state.chooseItem === 'keo' && state.mayChon === 'bao'){
                    ++state.soBanThang
                }else if(state.chooseItem === 'bua' && state.mayChon === 'keo'){
                    ++state.soBanThang
                }else if(state.chooseItem === 'bao' && state.mayChon === 'bua'){
                    ++state.soBanThang
                }
                return { ...state, mayChon: state.mayChon, soBanThang: state.soBanThang }
        }  
        default:
            return state;
    }

}
export default gameOanTuTiReducer;