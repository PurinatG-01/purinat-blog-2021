import React from 'react'
import { Typography } from 'antd';
const { Title, Text } = Typography;

export default function Profile() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
                style={{ borderRadius: '50%', width: 200, height: 200, marginBottom: 32 }}
                width={200}
                src="/image/profile-img.jpg"
            />

            <Title>Purinat Sanbundit</Title>
            <Text style={{textAlign: 'center'}}>
                4th year student in ICT, Mahidol University with Software Engineering Track. I passionate in developing IT platform, software, and IT relate technology. I also passionate in blending the emotional to logical subject which lead to in new invention.
                <br />
                <br/>
                - Main concentration in Software engineering and Web/Mobile development.<br />
                - Intern at Dek-D company (School team) with the Front-End development position.<br />
            </Text>
        </div>
    )
}
