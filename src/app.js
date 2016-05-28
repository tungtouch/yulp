/**
 * Created by Administrator on 5/28/16.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import './app.css'
import styles from './styles.module.css'
import 'font-awesome/css/font-awesome.css'

const App = React.createClass({
    render: function () {
        return (
            <div className={styles['container']}>
                <i className="fa fa-star"></i>
                Hello world !!!
            </div>
        );
    }
});

const mountNode = document.querySelector('#root');

ReactDOM.render(<App />, mountNode);