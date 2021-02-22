import React from 'react'
import Profile from './Profile'
import Projects from './Projects'
import { Layout, Row, Col, Card, Typography, Spin } from 'antd';
import { motion } from 'framer-motion'

const { Title, Text } = Typography

const { Header, Footer, Content } = Layout;

const style = { background: '#0092ff', padding: '8px 0' };
const CardStyle = { margin: '16px auto', minHeight: 420, display: 'flex', flexDirection: 'column' }


const SocialMedia = [
    { name: "Github", link: "", logo: "/image/github-logo.png", description: "" },
    { name: "Facebook", link: "", logo: "/image/facebook-logo.png", description: "" },
    { name: "Instagram", link: "", logo: "/image/instagram-logo.png", description: "" },
    { name: "Pinterest", link: "", logo: "/image/github-logo.png", description: "" },
    { name: "Medium", link: "", logo: "/image/github-logo.png", description: "" },
    { name: "Pinterest", link: "", logo: "/image/github-logo.png", description: "" },
]

export default function Main() {


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
            transition={{delay: 1, duration: 1}}
            initial='hidden'
            animate='visible'
        >
            <Layout style={{ minHeight: '100vh', background: "#fff" }}>
                <Header style={{ background: "transparent" }} />
                <Layout style={{ background: 'transparent' }}>
                    <Content>
                        <Row style={{margin: 0}} gutter={[16, 16]}>
                            <Col className="gutter-row" span={16} offset={4}>
                                <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                                    <Col className="gutter-row" span={24} lg={16}>
                                        {/* Profile */}
                                        <Profile />
                                    </Col>
                                    <Col className="gutter-row" span={24} lg={8}>
                                        {/* Social Media */}
                                        <Title level={2}>Social Media</Title>

                                        <div style={{ overflowX: 'scroll', maxHeight: '480px' }}>
                                            {
                                                SocialMedia.map((social) => (
                                                    <Card key={social.name} style={CardStyle} >
                                                        <Title level={4}>{social.name}</Title>
                                                        <img src={social.logo} style={{ width: 100, height: 100 }} />
                                                        <Text>
                                                            Ullamco anim dolore cupidatat ad tempor cillum id irure laborum aute ullamco voluptate. Cupidatat ad sunt tempor consectetur. Cupidatat magna aute quis duis commodo. Voluptate excepteur fugiat officia irure aliquip consequat. Aute aliqua mollit mollit cupidatat nostrud occaecat proident aute in commodo.
                                                    </Text>
                                                    </Card>
                                                ))
                                            }

                                        </div>

                                    </Col>
                                    <Col className="gutter-row" span={24} lg={24}>
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
