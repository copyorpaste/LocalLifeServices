import React from 'react';
import {NavBar, Space, Toast,CapsuleTabs,Dropdown, Radio } from 'antd-mobile'

function Peiwan(props) {
    const peiwanList = [
        {
            name: "蒙蒙",
            imagePath: "./image/1.webp",
            desc: "身高:180cm 体重：90kg 爱好：玩游戏",
            price: "800",
        },
        {
            name: "皮皮",
            imagePath: "./image/2.webp",
            desc: "身高:180cm 体重：90kg 爱好：运动",
            price: "900",
        },
        {
            name: "尼卡",
            imagePath: "./image/3.webp",
            desc: "身高:180cm 体重：90kg 爱好：旅游",
            price: "1200",
        },
        {
            name: "飘飘",
            imagePath: "./image/4.webp",
            desc: "身高:180cm 体重：90kg",
            price: "1500",
        },
        {
            name: "小白猪",
            imagePath: "./image/5.webp",
            desc: "身高:180cm 体重：90kg",
            price: "1000",
        }
    ]

    const listItem = peiwanList.map((item, index) => (
        <div style={{borderRadius: '8px', backgroundColor: "#FFF", overflow: 'hidden', marginTop: '18px'}}>
            <img src={item.imagePath} style={{width: '180px'}}/>
            <div style={{height: '8vh', padding: '8px 10px'}}>
                <div style={{display:"flex",alignItems:"flex-end"}}>
                    <div style={{color: '#222c43',fontWeight:'1000', fontSize: '18px',flex:1}}>{item.name}</div>
                    <div style={{color: '#d87901', fontSize: '16px',}}>{item.price}</div>
                </div>
                <div style={{color: '#4f6594', fontSize: '14px', marginTop: '3px'}}>{item.desc}</div>
            </div>
        </div>
    ))

    return (
        <div>
            <NavBar back='返回'>
                陪玩
            </NavBar>
            <Dropdown>
                <Dropdown.Item key='sorter' title='排序'>
                    <div style={{ padding: 12 }}>
                        <Radio.Group defaultValue='default'>
                            <Space direction='vertical' block>
                                <Radio block value='default'>
                                    综合排序
                                </Radio>
                                <Radio block value='nearest'>
                                    距离最近
                                </Radio>
                                <Radio block value='top-rated'>
                                    评分最高
                                </Radio>
                            </Space>
                        </Radio.Group>
                    </div>
                </Dropdown.Item>
                <Dropdown.Item key='bizop' title='商机筛选'>
                    <div style={{ padding: 12 }}>
                        商机筛选内容
                        <br />
                        商机筛选内容
                        <br />
                        商机筛选内容
                        <br />
                    </div>
                </Dropdown.Item>
            </Dropdown>
            <div style={{
                display: "grid",
                justifyContent: "space-around",
                gridTemplateColumns: 'repeat(auto-fill, 180px)',
                backgroundColor: '#efeded'
            }}>
                {listItem}
            </div>
        </div>
    );
}

export default Peiwan;