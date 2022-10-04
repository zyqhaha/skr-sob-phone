import React, { useRef } from 'react'
import '../../css/detail.scss'
import Rate from '../Rate评分'
import Table1 from 'page/Table表格'
import { A } from '../demo/index'
import { useEffect } from 'react';

export default function Index() {
    let ref1: any = useRef(null)  
    // 原图盒子
    let ref2: any = useRef(null)  
    // 遮罩
    let ref3: any = useRef(null)  
    // 放大图
    let ref4: any = useRef(null)
    // 原图
    let ref5: any = useRef(null)
  
    // 鼠标移入
    const mouseover=(e:any)=>{
     ref3.current.style.display="block"
     ref4.current.style.display="block"
     ref4.current.src=ref5.current.src
     let ofl=ref2.current.offsetLeft
     let oft=ref2.current.offsetTop
     let x=e.pageX-150
     let y=e.pageY-150
     let a=x-ofl
     let b=y-oft
    console.log(a);
    
     if(a<50){
        a=0
     }
     if(a>260){
        a=312
     }
     if(b<50){
        b=0
     }
     if(b>260){
        b=312
     }
    
     ref3.current.style.left=a+"px"
     ref3.current.style.top=b+"px"
      ref4.current.style.left=-a*2-40+"px"
      ref4.current.style.top=-b*2-40+"px"
    }  
    // 鼠标移除
    const mouseleave=()=>{
   ref3.current.style.display="none"
   ref4.current.style.display="none"
    }
    const ref = React.createRef()
    useEffect(() => {       
        let lis = document.querySelectorAll(".detail-list li")
        let bottom1 = document.querySelectorAll('.bottom1') as NodeListOf<HTMLBodyElement>
       Array.from(lis).forEach(function (item, index) {
            item.addEventListener("click", function () {
                console.log("555");
                document.body.scrollTop = document.documentElement.scrollTop = bottom1[index].offsetTop

     
            })
        })
    }, [ref])

    return (

        <div>
           <div className='bigBox' >
              <img src="" alt="" ref={ref4}/>
           </div>
            <div className="detail-top">
                <button onClick={() => (window.history.go(-1))}>Go back</button>
                <button onClick={() => window.history.go((1))}>Go forward</button>
            </div>
            <div className='detail-content'>
                <div className='detail-content-left'>
                    <img src="https://img.fishfay.com/shopgoods/4/162128132/162128132-5-1/c0797723fdf96b4e510c0252344e0bac.jpg" alt="" />
                    <img src="https://img.fishfay.com/shopgoods/4/162128132/162128132-5-1/c0797723fdf96b4e510c0252344e0bac.jpg" alt="" />
                    <img src="https://img.fishfay.com/shopgoods/4/162128132/162128132-5-1/c0797723fdf96b4e510c0252344e0bac.jpg" alt="" />
                </div>
                <div className='detail-content-middle' ref={ref2} onMouseMove={(e)=>mouseover(e)} onMouseLeave={()=>mouseleave()}>
                    <img src="https://img.fishfay.com/shopgoods/4/162128132/162128132-5-1/c0797723fdf96b4e510c0252344e0bac.jpg" alt="" ref={ref5}/>
                    <div className='smallBox' ref={ref3}>
                          
                    </div>
                </div>
                <div className='detail-content-right'>
                    <h1> 安踏女服短袖短T恤2021新款短t </h1>
                    <p>￥139
                        <span>￥159</span>
                    </p>
                    <div className='box'>
                        <p>官方商城全场包邮</p>
                    </div>
                    <div className='img'>
                        <img src="https://img.fishfay.com/shopgoods/4/162128132/162128132-5-1/c0797723fdf96b4e510c0252344e0bac.jpg" alt="" />
                        <img src="https://img.fishfay.com/shopgoods/4/162128132/162128132-5-1/c0797723fdf96b4e510c0252344e0bac.jpg" alt="" />
                        <img src="https://img.fishfay.com/shopgoods/4/162128132/162128132-5-1/c0797723fdf96b4e510c0252344e0bac.jpg" alt="" />
                        <img src="https://img.fishfay.com/shopgoods/4/162128132/162128132-5-1/c0797723fdf96b4e510c0252344e0bac.jpg" alt="" />
                    </div>
                    <div className='choose'>
                        <div className='left'>
                            <label htmlFor="size">尺码</label>
                            <select name="size" id="size">
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="2XL">2XL</option>
                                <option value="3XL">3XL</option>
                                <option value="4XL">4XL</option>
                                <option value="5XL">5XL</option>
                            </select>
                        </div>
                        <div className='right'>
                            <label htmlFor="count">数量</label>
                            <input type="number" id='count' max={10} min={1} />
                        </div>
                    </div>
                    <div className='bottom'>
                        <button className='btn1'>加入购物车</button>
                        <button className='btn2'>立即购买</button>
                    </div>
                </div>
            </div>
            <div className='bottom1' ref={ref1}>
                <A ref={ref} />
                <div className='content'>
                    <img src="https://img.fishfay.com/shopgoods/4/162128132/162128132-4-1/abfdebd9f20c7997706fbd197dada397.jpg" alt="" />
                    <img src="https://img.fishfay.com/shopgoods/4/162128132/162128132-4-1/abfdebd9f20c7997706fbd197dada397.jpg" alt="" />
                    <img src="https://img.fishfay.com/shopgoods/4/162128132/162128132-4-1/abfdebd9f20c7997706fbd197dada397.jpg" alt="" />
                    <img src="https://img.fishfay.com/shopgoods/4/162128132/162128132-4-1/abfdebd9f20c7997706fbd197dada397.jpg" alt="" />
                </div>
            </div>

            <div className='bottom1'>
                {
                    <A ref={ref} />
                }

                <div className='content1'>
                    <h3>产品满意度</h3>
                    <h4>这是购买者对产品的评价</h4>
                    <div className='Rate'>
                        {
                            <Rate />
                        }
                    </div>

                </div>
            </div>

            <div className='bottom1'>
                {
                    <A ref={ref} />
                }

                <div className='content1'>
                    <button className='btn3'>商品咨询</button>
                    <div className='Rate'>
                        {
                            <Table1 />
                        }
                    </div>

                </div>
            </div>

            <div className='bottom1'>
                {
                    <A ref={ref} />
                }

                <ul className='detail'>
                    <li >
                        <div className='box1' style={{ height: 144 + "px" }}>配送信息</div>
                        <div className="box2">
                            <p>根据商品的特性及配送地不同配送类型及所需时间会有所不同。</p>
                            <p>部分订购商品或预约商品的情况，除了基本配送日之外，可能会发生追加配送需要日。</p>
                            <p>即使是同一品牌的商品，由于各商品的出库日期不同，也可以分别配送。</p>
                            <p>图书山区可能会追加运费和退货费。</p>
                            <p>商品的配送费根据供应企业的政策而不同，公休日和休息日是不能配送的。</p>

                        </div>
                    </li>
                    <li>
                        <div className='box1' style={{
                            height: 322 +
                                "px"
                        }}>取消/退货/换货指南</div>
                        <div className="box2">
                            <p>商品除了瑕疵之外，尺寸，颜色交换等单纯变心的交换/退货的快递费由顾客负担，产生往返快递费。(根据电子商务等有关消费者保护的法律第18条(撤销要约等)第9款，消费者因情况撤回要约时，快递费由消费者承担。)</p>
                            <p>结算结束后立即取消订单，可在“MY Page取消/更换/退货申请”中直接办理。</p>
                            <p>订购完成后因库存不足等可能会进行取消订单处理，请谅解。</p>
                            <p>图书山区可能会追加运费和退货费。</p>
                            <p>订购状态正在准备商品的情况下，可能已经配送或包装完毕，不能直接进行处理，请通过顾客中心咨询。</p>
                            <p>换货申请第一次仅限于一次，配送完成后不可追加换货申请。</p>
                            <p>请在配送完成后的7天内接收未使用的产品。</p>
                            <p>不可退货，请务必通过客服中心或“MY Page取消订单/更换/退货申请”接受申请。</p>
                            <p>商品缺陷，误配送的情况下快递费可以免费更换/退货，但是显示器的颜色差异，穿戴感，尺寸的个人偏好度不是商品的瑕疵事由。</p>
                            <p>因顾客不注意而导致商品毁损，变更的情况，无法退货/更换。</p>
                            <p>按电子商务法，当取消/退货货款延迟退款时，按照电子商务法办理延期退款赔偿手续。</p>
                        </div>
                    </li>
                    <li>
                        <div className='box1' style={{ height: 144 + "px" }}>无法退货/换货时</div>
                        <div className="box2">
                            <p>使用或者损毁产品，遗漏赠品，商品TAG，保证书，商品附件或者丢失的</p>
                            <p>拆开密封包装或者损毁，丢失内部包装材料的(但非拆封确认产品除外)</p>
                            <p>商品价值的丧失达到难以再销售的程度</p>
                            <p>根据您的要求，订制的产品，除了您以外，很难使用</p>
                            <p>配送的商品安装完毕(家电，家具等)</p>
                            <p>有其他有关电子商务等消费者保护的法律规定的撤销要约限制情形的</p>
                        </div>
                    </li>
                    <li>
                        <div className='box1' style={{ height: 70 + "px" }}>A/S指南</div>
                        <div className="box2">
                            <p>至于能否以售后服务(A/S)为标准，根据品牌和商品不同，所以有关咨询请通过doubicon客服中心咨询。</p>
                            <p>因商品不良而发生的退货、更换、A/S、退款、质量保证及损害赔偿等事项，可以根据消费者纠纷解决标准(公平交易委员会告示)接受。</p>

                        </div>
                    </li>
                </ul>
            </div>
        </div>

    )
}
