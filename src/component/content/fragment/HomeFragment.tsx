import React from 'react'
import { Typography } from 'antd'

const { Paragraph, Title, Link } = Typography

function Home () {
  return <h3>
      <a href="https://home.jeonghan.wo.tc">home 링크</a>
      <Typography>
        <Title> 타이포 그래피 제목</Title>
        <Paragraph>
          로렘 입숨~~~ <Link href="https://www.naver.com">네이버링크</Link>
          로렘 입숨~~~ <Link href="https://www.naver.com">네이버링크</Link>
        </Paragraph>
      </Typography>
  </h3>
}

export default Home
