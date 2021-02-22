import React from 'react'
import { Card, Typography, Row, Col } from 'antd'
import { motion } from 'framer-motion'
const { Title, Text } = Typography

const listProject = [
    { name: "AiRadar" },
    { name: "Vue 1" },
    { name: "Vue 2" },
    { name: "React 1" }
]

export default function Projects() {
    return (
        <div>
            <Title level={2}>Projects</Title>

            <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    listProject.map((project) => (
                        <Col key={project.name} span={24} lg={8}>
                            <motion.div whileHover={{ y: -20 }}>
                                <Card style={{ minHeight: 400 }}>
                                    <Title level={4}>{project.name}</Title>
                                    <Text>
                                        Consectetur nostrud id incididunt minim aute ut. Cillum pariatur ex non dolor et nostrud cillum. Ullamco et esse duis eiusmod nulla amet. Velit aliquip anim nisi deserunt cupidatat velit sunt est ex. Sint sunt enim minim est ullamco Lorem. Consectetur duis consectetur minim fugiat labore sint aliquip officia. Consequat ea laboris non excepteur adipisicing ex velit pariatur aliqua velit magna est ipsum et.
                                        <br />
                                        Veniam dolor aute duis consequat sit eu consequat incididunt ipsum cillum et nulla. Enim aliquip enim nostrud occaecat mollit laborum esse fugiat officia et. Minim laborum id non incididunt aliquip nostrud laborum pariatur exercitation duis aliqua aliquip. Culpa ullamco ipsum laboris eiusmod. Officia officia dolore eiusmod cupidatat eu labore tempor est. Officia enim amet voluptate pariatur non reprehenderit. Qui et Lorem excepteur quis proident commodo laborum sunt aliqua do exercitation excepteur.</Text>
                                </Card>
                            </motion.div>

                        </Col>

                    ))
                }

            </Row>
        </div>
    )
}
