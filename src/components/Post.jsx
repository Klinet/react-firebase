import React from 'react';
import { Card } from 'antd';
import Meta from "antd/es/card/Meta";

export const Post = (props) => {
    return (
        <div className='post_container'>
            <h3>post_container</h3>
            <div className='articles_container'>
                <div className='article_container'>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={''}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </div>
            </div>
        </div>
    )
}
/*export default function Post(props) {
    return (
        <div className='post_container'>
            <h3>post_container</h3>
            <div className='articles_container'>
                <div className='article_container'>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={''}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </div>
            </div>
        </div>
    )
}*/


