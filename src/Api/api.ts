import instance from './request';

// 演示 
export const getTypeOne = (params:any)=>instance.get('/store/getShopList',{params});

