import React from 'react'
import { Card, Typography, Row, Col } from 'antd'
import { motion } from 'framer-motion'
import ListProject from '../constants/Projects'
import { SwapRightOutlined } from '@ant-design/icons';

const { Title, Text, Link } = Typography



export default function Projects() {
    return (
        <div>
            <Title level={2}>Projects</Title>
            <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    ListProject.map((project) => (
                        <Col key={project.name} span={24} lg={8}>
                            <motion.div whileHover={{ y: -20 }}>
                                <Card style={{ minHeight: 120 }}>
                                    <Title level={4} style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src={project.logo} style={{ width: 24, height: 24 }} />
                                        &nbsp; {project.name}
                                    </Title>
                                    <Text>
                                        {project.description}
                                    </Text>
                                    <br />
                                    <br />
                                    {
                                        project.link && (<Link
                                            style={{ marginBottom: 0 }}
                                            href={project.link} >
                                            Go <SwapRightOutlined />
                                        </Link>)
                                    }
                                </Card>
                            </motion.div>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}
