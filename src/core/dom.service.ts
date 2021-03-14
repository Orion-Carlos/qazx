/*
 * File: dom.service.ts
 * File Created: Wednesday, 13th June 2018 3:46:05 pm
 * Author: songyz
 * Description: 统一的DOM交互相关
 * -----
 * Last Modified: Thursday, 14th June 2018 11:20:19 am
 * Modified By: songyz
 * -----
 *  All rights reserved.
 */

 /* eslint-disable */

function _window() {
    // return the global native browser window object
    return window;
}

export class DomService {

    /**
     * 获取浏览器环境下的window全局对象
     */
    get window() :any {
        return _window();
    }
	/**
	 * 从url中获取查询字符串的值
	 * @param {string} name 获取的key值
	 * @return {string}
	 */
    getQueryString(name:any,str?:string) :string {
        var svalue = str || location.hash.match(new RegExp("[\?\&]" + name + "=([^\&]*)(\&?)","i"));
        if(svalue) {
            return svalue[1]
        }else {
            return '' 
        }
    }
	/**
	 * 加载一个脚本文件
	 * @param {string} name 加载的文件路径,例如:'/static/test.js'
	 */
    loadScript(name:any) :Promise<any> {
        return new Promise((resolve,reject) => {
            const script = document.createElement('script');
            script.src = name;
            script.onload = () => {
                resolve('ok')
            }
            script.onerror = () => {
                reject()
            }
            document.body.appendChild(script);
        })
    }

}
