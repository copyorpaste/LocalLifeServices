import styles from './App.css';
import {Button, SearchBar, SafeArea, Space, Swiper, Toast} from 'antd-mobile'

function App() {
    const bgs = ['./image/b1.webp', './image/b2.webp', './image/b3.webp']
    const menus = [
        {
            text: '找导游',
            bg: "./image/m1.jpg"
        },
        {
            text: '找代驾',
            bg: "./image/m2.jpg"
        },
        {
            text: '找跑腿',
            bg: "./image/m3.webp"
        },
        {
            text: '找陪玩',
            bg: "./image/m4.webp"
        },
        {
            text: '找遛狗',
            bg: "./image/m5.jpg"
        }, {
            text: '电影票',
            bg: "./image/m6.webp"
        },
        {
            text: '小游戏',
            bg: "./image/m7.webp"
        }]

    const swiperItems = bgs.map((bg, index) => (
        <Swiper.Item key={index}>
            <div
                className="content"
                style={{
                    background: `url(${bg})`,
                    backgroundSize: 'cover',
            }}
                onClick={() => {
                    Toast.show(`你点击了卡片 ${index + 1}`)
                }}
            >
            </div>
        </Swiper.Item>))

    const menuItem = menus.map((menu, index) => (

        <div key={index} style={{
            width: '45vw',
            height: '13vh',
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignContent: 'center',
            // backgroundColor:'orangered',
            background: `url(${menu.bg})`,
            backgroundSize: 'cover',
            marginTop: '5px',
            position: 'relative',
            borderRadius: '12px'
        }}>
            <span style={{
                // backgroundColor:'rgba(227,225,225,0.78)',
                position: 'absolute',
                bottom: '2vh',
                right: '5vw',
                color: '#e3e0e0',
                fontSize: '16px',
                fontWeight: 500
            }}>{menu.text}</span>
        </div>
    ))

    return (
        <div style={{padding: '12px'}}>
            <div style={{marginBottom: '2vh'}}>
                <SearchBar placeholder='请输入内容' showCancelButton/>
            </div>
            <Space direction='vertical' block>
                <Swiper
                    style={{
                        '--border-radius': '18px',
                    }}
                    defaultIndex={0}
                >
                    {swiperItems}
                </Swiper>
            </Space>

            <div style={{marginTop: '3vh'}}>
                <div style={{
                    display: 'grid',
                    justifyContent: 'space-around',
                    gridTemplateColumns: 'repeat(auto-fill, 45vw)'
                }}>
                    {menuItem}
                </div>
            </div>
            <SafeArea position='bottom'/>
        </div>);
}

export default App;
