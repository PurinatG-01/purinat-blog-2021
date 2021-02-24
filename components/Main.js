import React from 'react'
import Profile from './Profile'
import Projects from './Projects'
import { Layout, Row, Col, Card, Typography, Grid } from 'antd';
import { SwapRightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion'
import SocialMedia from '../constants/SocialMedia'


const { Title, Text, Link } = Typography
const { Header, Footer, Content } = Layout
const { useBreakpoint } = Grid

const style = { background: '#0092ff', padding: '8px 0' };
const CardStyle = { margin: '16px 16px', minHeight: 160, minWidth: '80%', display: 'flex', flexDirection: 'column' }


export default function Main() {
    const breakpoints = useBreakpoint();

    console.log('> breakpoints : ', breakpoints)

    return (
        <motion.div
            variants={{
                hidden: {
                    opacity: 0,
                    y: -8
                },
                visible: {
                    opacity: 1,
                    y: 0
                }
            }}
            transition={{ delay: 1, duration: 1 }}
            initial='hidden'
            animate='visible'
        >
            <Layout style={{ minHeight: '100vh', background: "#fff" }}>
                <Header style={{ background: "transparent" }} />
                <Layout style={{ background: 'transparent' }}>
                    <Content>
                        <Row style={{ margin: 0 }} gutter={[16, 16]}>
                            <Col className="gutter-row" span={16} offset={4}>
                                <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                                    <Col className="gutter-row" span={24} xl={16}>
                                        {/* Profile */}
                                        <Profile />
                                    </Col>
                                    <Col style={{ paddingTop: 64 }} className="gutter-row" span={24} xl={8}>
                                        {/* Social Media */}
                                        <Title level={2}>Social Media</Title>
                                        <div style={{
                                            overflow: 'scroll',
                                            display: 'flex',
                                            maxHeight: '480px',
                                        }}
                                        >
                                            {
                                                SocialMedia.map((social) => (
                                                    <Card
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                        }}
                                                        key={social.name}
                                                        style={CardStyle}
                                                    >
                                                        <Title level={4}>
                                                            <img src={social.logo} style={{ width: 32, height: 32 }} />
                                                            &nbsp; {social.name}
                                                        </Title>
                                                        <Text>
                                                            {social.description}
                                                        </Text>
                                                        <br />
                                                        <br />
                                                        <Link
                                                            style={{ marginBottom: 0 }}
                                                            href={social.link} >
                                                            Go <SwapRightOutlined />
                                                        </Link>
                                                    </Card>
                                                ))
                                            }
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={24} xl={24}>
                                        {/* Project */}
                                        <Projects />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
                <Footer style={{ background: 'transparent' }}>

                </Footer>
            </Layout>
        </motion.div>
    )
}
