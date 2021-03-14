/*
 * File: img.service.ts
 * Project: ng4dora
 * File Created: Wednesday, 13th June 2018 3:46:05 pm
 * Author: songyz
 * Description: 图片服务
 * -----
 * Last Modified: Thursday, 14th June 2018 11:20:19 am
 * Modified By: songyz
 * -----
 *  All rights reserved.
 */

/*******************************************************************************
 * var img = $("#abc"); isComplete : 判断图片是否已经加载完成 alert(tit.img.isComplete(img))
 * preload : 预加载图片 tit.img.preload('1.jpg','2.jpg','3.jpg')
 * 
 ******************************************************************************/

export class ImgService {
    isComplete (img:any) {
        if (!img.complete) {
            return false;
        }
        if (typeof img.naturalWidth != "undefined" && img.naturalWidth == 0) {
            return false;
        }
        return true;
    }
    preload (...argument:any[]) {
        var imageArray = new Array(argument.length);
        for ( var i = 0; i < argument.length; i++) {
            imageArray[i] = new Image;
            imageArray[i].src = argument[i];
        }
    }
}
