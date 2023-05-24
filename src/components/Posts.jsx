import React from 'react';
import { Card } from 'antd';
import Meta from "antd/es/card/Meta";
import {Post} from "./Post";
export default function Posts(props) {
    return (
        <div className='post_container'>
            <h3>posts_container</h3>
            <div className='articles_container'>
                <div className='article_container'>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </div>
    )
}


