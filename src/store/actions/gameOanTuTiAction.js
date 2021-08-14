import * as gameOanTuTiConstant from '../constants/gameOanTuTiConstant';

export const actChonKeoBuaBao = item => ({
    type: gameOanTuTiConstant.CHON_KEO_BUA_BAO,
    payload:item,
})
export const actChoiGame =()=>({
    type:gameOanTuTiConstant.CHOI_GAME,
})