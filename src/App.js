import './App.css';
import 'antd/dist/antd.css';
import { useState } from 'react';
import bg1 from './images/graybg1.jpg'
import logo from './images/betts.jpg';
import sport from "./images/betting (2).png"
import mining from "./images/bitcoin.png"
import deion from './images/suit_betts.jpg'
import dumbbell from "./images/dumbbell (1).png"
import motivation from "./images/leadership.png"

import { bet1, bet2, bet3, bet4, bet5, bet6, bet7, bet8, bet9 } from "./images/bets"

import useWindowDimensions from './components/useWindowDimensions';
import { Layout, Menu, Image, Button, Card, Modal, Carousel } from 'antd';

const { Meta } = Card;
const { Header, Content, Footer } = Layout;

function App()
{
  const services = 
  [
    {
      service: "Sports Betting",
      desc: "I provide analysis of why the play might be worthy enough to do to be able to earn profit from.", // add disclaimer
      price: "Price Varies",
      image: sport
    },
    {
      service: "Personal Motivator",
      desc: "I provide motivation to help you become a better you, have someone believe in you.",
      price: "Varies, contact for more information",
      image: motivation      
    },
    {
      service: "Fitness",
      desc: "Need to get in shape, I can teach you what I've done stay healthy. By giving workout routines and ",
      price: "Varies, contact for more information",
      image: dumbbell
    },
    {
      service: "Crypto Mining",
      desc: "Need to know how to get started in crypto mining; I can help. I can provide rigs, gpus, and the basics of how to start mining.",
      price: "Varies, contact for more information",
      image: mining
    },
  ]

  const sportsBettingImages = [bet1, bet2, bet3, bet4, bet5, bet6, bet7, bet9]

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentItem, selectItem] = useState(0);

  const showModal = (item) => {
    setIsModalVisible(true);
    selectItem(item);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: 'black' }}>
        <div style={{float: 'left', width: '260px', height: '50px', margin: '8px 24px 16px 0', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          {/* <img src={bigLogo} alt='logo' style={{width: '275px'}}/> */}
          <h1 style={{color: 'white', margin: '0px 0px 0px 5px'}}>BETTS LLC</h1>
        </div>
        <Menu theme='dark' mode="horizontal" defaultSelectedKeys={['1']} style={{backgroundColor: 'black'}}>
          <Menu.Item key="1" style={{backgroundColor: 'black'}}><a href='#home' style={{color: 'white'}}>HOME</a></Menu.Item>
          <Menu.Item key="2" style={{backgroundColor: 'black'}}><a href='#services' style={{color: 'white'}}>SERVICES</a></Menu.Item>
          <Menu.Item key="3" style={{backgroundColor: 'black'}}><a href='#about' style={{color: 'white'}}>ABOUT</a></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0px', marginTop: 64, alignItems: 'center' }}>
        <div className='App-content'>
          <div id='home' style={{width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column', padding: 20,
            backgroundImage: `url(${bg1})`,
            backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', scrollMarginTop: '64px'
          }}>
            <Image src={logo} style={{width: 300, marginBottom: 20}}/>
            <h1 style={{fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase', color: 'white',
              backgroundColor: 'black', padding: 20, fontSize: '30px'
            }}>
              welcome to betts llc <br /> we provide consulting services
            </h1>
            <Button size='large'  style={{fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase', color: 'white',
              backgroundColor: 'black', borderColor: 'white'
            }}>
              <a href='#services'>services we provide</a>
            </Button>
          </div>
          <div id='services' style={{width: '100%', alignItems: 'center', display: 'flex', flexDirection: useWindowDimensions().width > 900 ? 'row' : 'column',
            backgroundColor: 'black', backgroundSize: 'cover', scrollMarginTop: '64px', justifyContent: 'center',
          }}>
            {
              services.map((item, key) =>
                {
                  return (
                    <Card
                      hoverable
                      style={{ width: 240, margin: 20 }}
                      cover={<img alt="example" src={item.image} />}
                      onClick={() => showModal(key)}
                    >
                      <Meta title={item.service} /*description={`${item.desc}`}*/ style={{textAlign: 'center'}}/>
                      {/* <Meta description={`Price: ${item.price}`} style={{textAlign: 'center'}}/> */}
                    </Card>
                  )
                })
            }
          </div>
          <div id='about' style={{width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column', padding: 20,
            backgroundImage: `url(${bg1})`,
            backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', scrollMarginTop: '64px'
          }}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={deion} />}
            >
              <Meta title="Deion Betts" description="CEO of Betts LLC" style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}/>
              <Meta description={<a target="_blank" rel="noreferrer" href='https://www.instagram.com/deion_33_/'>INSTAGRAM</a>} style={{textAlign: 'center'}}/>
            </Card>
          </div>
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>
        Made By ANT DESIGNS LLC
        <br />
        <a target="_blank" rel="noreferrer" href='https://www.instagram.com/antdesignsllc/'>INSTAGRAM</a>
        <br />
        <a target="_blank" rel="noreferrer" href='https://antdesignsllc.github.io/antdesllc/'>WEBSITE</a>
      </Footer>
      {/* not in use <a href="https://www.flaticon.com/free-icons/betting" title="betting icons">Betting icons created by Nikita Golubev - Flaticon</a> */}
      {/* <a href="https://www.flaticon.com/free-icons/basketball" title="basketball icons">Basketball icons created by Flat Icons - Flaticon</a> */}
      {/* <a href="https://www.flaticon.com/free-icons/bitcoin" title="bitcoin icons">Bitcoin icons created by Freepik - Flaticon</a> */}
      {/* <a href="https://www.flaticon.com/free-icons/strong" title="strong icons">Strong icons created by Freepik - Flaticon</a> */}
      {/* <a href="https://www.flaticon.com/free-icons/motivation" title="motivation icons">Motivation icons created by Flat Icons - Flaticon</a> */}
      <Modal title={services[currentItem].service} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
        style={{alignContent: 'center'}}
      >
        <p>{services[currentItem].desc}</p>
        <p>Price: {services[currentItem].price}</p>
        {
          currentItem == 0 ?
            <Carousel style={{justifyContent: 'center'}}>
              {
                sportsBettingImages.map(item =>
                  {
                    return (
                      <Image src={item} style={{width: 50}} />
                    )
                  })
              }
            </Carousel>
          : null
        }
      </Modal>
    </Layout>
  );
}

export default App;
