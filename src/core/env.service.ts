/*
 * File: env.service.ts
 * File Created: Thursday, 14th June 2018 9:57:03 am
 * Author: songyz
 * Description: 环境相关服务类
 * -----
 * Last Modified: Tuesday, 3rd July 2018 2:34:58 pm
 * Modified By: Wizard
 * -----
 *  All rights reserved.
 */

/** 移动终端设备检测条件 */
const deviceFeature = {

    ios: /(iPhone|iPod|iOS).*tit.*/i,
    and: /(Android).*tit.*/i,
    iosh5: /(iPhone|iPod|iOS).*/i,
    andh5: /(Android).*/i
};

/*******************************************************************************
 * isIos(),isAnd()方法判断是否为壳的ios或者安卓
 * isAndroid : 是否为安卓系统 alert(tit.platform.isAndroid) 
 * isBlackBerry : 是否为黑莓 alert(tit.platform.isBlackBerry) 
 * isIpad : 是否为iPad alert(tit.platform.isIpad)
 * isIphone : 是否为iPhone alert(tit.platform.isIphone) 
 * isMacintosh : 是否为Mac  alert(tit.platform.isMacintosh) 
 * isMobile : 是否为移动设备 alert(tit.platform.isMobile)
 * isWindows : 是否为Windows alert(tit.platform.isWindows)
 * isX11 : 是否为X11 alert(tit.platform.isX11)
 * 
 ******************************************************************************/

export class EnvService {

    private userAgent: string = navigator.userAgent;

    isIos(): boolean {
        return deviceFeature.ios.test(this.userAgent);
    }

    isAnd(): boolean {
        return deviceFeature.and.test(this.userAgent);
    }
    isIosh5(): boolean {
        return deviceFeature.iosh5.test(this.userAgent);
    }

    isAndh5(): boolean {
        return deviceFeature.andh5.test(this.userAgent);
    }
    isAndroid = /android/i.test(this.userAgent)
	isBlackBerry = /BlackBerry/i.test(this.userAgent)
	isIpad = /ipad/i.test(this.userAgent)
	isIphone = /iphone/i.test(this.userAgent)
	isMacintosh = /macintosh/i.test(this.userAgent)
	isMobile = !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/)
			|| !!navigator.userAgent.match(/AppleWebKit/)
	isWindows = /windows/i.test(this.userAgent)
    isX11 = /x11/i.test(this.userAgent)
    
    R9m = /R9m/i.test(this.userAgent)
}
