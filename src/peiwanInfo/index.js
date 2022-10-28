import React from 'react';
import {Button, NavBar, Space, Swiper, Toast} from "antd-mobile";

function PeiwanInfo(props) {
    const images = ['./image/1-1.png', './image/1-2.png', './image/1-3.png', './image/1-4.png', './image/1-5.png', './image/1-6.png',]
    const swiperItems = images.map((image, index) => (<Swiper.Item key={index}>
        <div
            className="content"
            style={{
                color: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '48px',
                userSelect: 'none',
            }}
            onClick={() => {
                Toast.show(`你点击了卡片 ${index + 1}`)
            }}
        >
            <img src={image} style={{
                width: '100vw', height: "auto!important"
            }}/>
        </div>
    </Swiper.Item>));

    return (<div>
        <NavBar back='返回'>
            介绍
        </NavBar>
        <Space direction='vertical' block>
            <Swiper
                style={{
                    '--border-radius': '0px',
                }}
                defaultIndex={0}
                indicator={(total, current) => (<div style={{
                    position: 'absolute',
                    top: '6px',
                    right: '6px',
                    background: 'rgba(0, 0, 0, 0.3)',
                    padding: '4px 8px',
                    color: '#ffffff',
                    borderRadius: '4px',
                    userSelect: 'none'
                }}>
                    {`${current + 1} / ${total}`}
                </div>)}
            >
                {swiperItems}
            </Swiper>
        </Space>
        <div style={{padding: '16px'}}>
            <div style={{
                marginBottom: '8px', fontSize: '15px', lineHeight: '24px'
            }}>
                <span style={{width: '62px'}}>名字：</span><span>櫻桃貓🐱本照（有藍勾）</span>
            </div>
            <div style={{
                marginBottom: '8px', fontSize: '15px', lineHeight: '24px', display: 'flex'
            }}>
                <div style={{flex: 1}}>
                    <span style={{width: '62px'}}>身高：</span><span>162cm</span>
                </div>
                <div style={{flex: 1}}>
                    <span style={{width: '62px'}}>体重：</span><span>60kg</span>
                </div>
            </div>
            <div style={{
                marginBottom: '8px', fontSize: '15px', lineHeight: '24px'
            }}>
                <span style={{width: '62px'}}>爱好：</span><span>爱旅游、LOL</span>
            </div>
            <div>
                <div>（本照）全职陪玩，下午一点半后都能找到我，DC敲我比较容易注意到，目前再台北租屋房租好贵，赶紧点认真赚钱，最大愿望有天吃的起三餐（？）是个超级宅，每单都很认真完成！快找我玩看看！
                    ！ ！语音聊天可用DC，也可以一起DC看影片和电影，我很好聊的
                </div>
            </div>
            <div style={{marginTop:'16px'}}>

                <Button block  size='large'>
                    立即下单
                </Button>
            </div>
        </div>
    </div>);
}

export default PeiwanInfo;