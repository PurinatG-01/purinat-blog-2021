import React from 'react'
import github from '../hooks/useGithub'
import { Card, Typography, Row, Col } from 'antd'
import { motion } from 'framer-motion'
import { SwapRightOutlined } from '@ant-design/icons';

const { Title, Text, Link } = Typography

export default function GithubMain() {
    
    const { githubRepos, githubError} = github.useGithubRepos()

    return (
        <div>
            <Title level={2}>Projects</Title>
            <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} style={{ display: 'flex', flexWrap: 'wrap' }}>
                { !githubError && githubRepos &&
                    githubRepos.map((project) => (
                        <Col key={project.name} span={24} lg={8}>
                            <motion.div whileHover={{ y: -20 }}>
                                <Card style={{ minHeight: 120 }}>
                                    <Title level={4} style={{ display: 'flex', alignItems: 'center', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                                        {/* <img src={project.logo} style={{ width: 24, height: 24 }} /> */}
                                        {project.name}
                                    </Title>
                                    {
                                        project.html_url && (<Link
                                            style={{ marginBottom: 0 }}
                                            href={project.html_url} >
                                            Git repo <SwapRightOutlined />
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
