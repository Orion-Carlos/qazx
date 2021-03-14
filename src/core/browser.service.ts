/*
 * File Created: Wednesday, 13th June 2018 3:46:05 pm
 * Author: songyz
 * Description: 浏览器相关服务
 * -----
 * Last Modified: Thursday, 14th June 2018 11:20:19 am
 * Modified By: songyz
 * -----
 *  All rights reserved.
 */

/*******************************************************************************
 * addFavorite : 添加至收藏夹
 * chrome : 输出chrome信息 alert(browser.chrome) 
 * core : 输出浏览器内核信息 alert(browser.core()) 
 * firefox : 输出ff信息 alert(browser.firefox) 
 * IE : 输出ie信息 alert(browser.ie) 
 * isGecko : 是否为Gecko内核 alert(browser.isGecko)
 * isWebkit : 是否为Webkit内核 (browser.isWebkit) 
 * opera : 输出opera信息 (browser.opera) 
 * safari : 输出safari信息 (browser.safari) 
 * version : 输出浏览器版本信息 (browser.version())
 * 
 ******************************************************************************/

 /* eslint-disable */
function _window () :any {
    // return the global native browser window object
    return window;
}

export class BrowserService {
    addFavorite (srul:string, sTitle:string, notice:string) {
        try {
            _window().external.addFavorite(srul, sTitle);
        } catch (e) {
            try {
                _window().sidebar.addPanel(sTitle, srul, "");
            } catch (e) {
                return notice;
            }
        }
    }
    chrome = /chrome\/(\d+\.\d+)/i.test(navigator.userAgent) ? +RegExp['\x241'] : undefined
    core () {
        
        var type = (
        /* @cc_on!@ */0 ? 'msie' : _window().chrome ? 'chrome'
                : _window().opera ? 'opera'
                        : _window().MouseScrollEvent ? 'gecko'
                                : _window().WheelEvent ? 'safari' : 'unknown');
        return type;
    }
    firefox = /firefox\/(\d+\.\d+)/i.test(navigator.userAgent) ? +RegExp['\x241'] : undefined
	ie = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? (document.DOCUMENT_NODE || +RegExp['\x241']) : undefined
	isGecko = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent)
	isWebkit = /webkit/i.test(navigator.userAgent)
	opera = /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent) ? +(RegExp["\x246"] || RegExp["\x242"]) : undefined
    safari = /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(navigator.userAgent)&& !/chrome/i.test(navigator.userAgent) ? +(RegExp['\x241'] || RegExp['\x242']) : undefined
    version () {
        var Sys : any = {}, ua = navigator.userAgent.toLowerCase(), s, result;
        (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : (s = ua
                .match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] : (s = ua
                .match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] : (s = ua
                .match(/opera.([\d.]+)/)) ? Sys.opera = s[1] : (s = ua
                .match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1]
                : 0;
        if (Sys.ie) {
            result = 'ie ' + Sys.ie;
        } else if (Sys.firefox) {
            result = 'firfox ' + Sys.firefox;
        } else if (Sys.chrome) {
            result = 'chrome ' + Sys.chrome;
        } else if (Sys.opera) {
            result = 'opera ' + Sys.opera;
        } else if (Sys.safari) {
            result = 'safari ' + Sys.safari;
        } else {
            result = 'other browser';
        }
        return result;
    }
}
