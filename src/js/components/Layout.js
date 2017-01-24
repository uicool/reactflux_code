/**
 * Created by JessJing on 2017/1/23.
 */

import React from "react";
import $ from 'jquery';


class Layout extends React.Component {
    constructor() {
        super();
    }

    test(){
        console.log($('#app'));
    }

    render() {
        this.test()
        return (
            <div className="border-black-bold">
                <span>App Layout Asyn</span>
            </div>
        );
    }
}

export default Layout;