/**
 * Created by JessJing on 2017/1/23.
 */

import React from "react";
import $ from 'jquery';


class Demo extends React.Component {
    constructor() {
        super();
    }

    test(){
        console.log($('#app'));
    }

    render() {
        this.test()
        return (
            <div className="border-black-bold col-lg-1">
                <span>App Layout Asyn</span>
            </div>
        );
    }
}

export default Demo;