
const initialState={
    arrKetQua:{type:'bao', hinhAnh:'./images/bao.png'},
    player:{type: 'keo',hinhAnh: './images/keo.png'},
    soBanThang:0,
    tongSoBanChoi:0,  
}
const gameOanTuTiReducer =(state= initialState,{type,payload})=>{
    console.log(gameOanTuTiReducer);
}