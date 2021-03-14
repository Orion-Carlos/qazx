/*
 * File: page.service.ts
 * File Created: Wednesday, 13th June 2018 3:46:05 pm
 * Author: songyz
 * Description: 页面滚动服务
 * -----
 * Last Modified: Thursday, 14th June 2018 11:20:19 am
 * Modified By: songyz
 * -----
 *  All rights reserved.
 */

/*******************************************************************************
 * 
 * getHeight : 获取页面高度 alert(tit.page.getHeight()) 
 * getScrollLeft : 获取横向滚动量  alert(tit.page.getScrollLeft())
 * getScrollTop : 获取纵向滚动量 alert(tit.page.getScrollTop()) 
 * getViewHeight : 获取页面视觉区域高度 alert(tit.page.getViewHeight()) 
 * getViewWidth : 获取页面视觉区域宽度  alert(tit.page.getViewWidth()) 
 * getWidth : 获取页面宽度 alert(tit.page.getWidth())
 * rollTo : 页面滚动至 tit.page.rollTo("#crumbs",20);//速度默认为80 
 * rollToBottom : 页面滚动至底部
 * tit.page.rollToBottom(20);//速度默认为50 
 * rollToTop ： 页面滚动至顶部
 * tit.page.rollToTop(20);//速度默认为50
 * 
 ******************************************************************************/

export class PageService {
    getHeight () {
        var app:any = document.getElementsByTagName('uni-page-body')[0]
        var doc = document, body = doc.body, html = doc.documentElement, client = doc.compatMode == 'BackCompat' ? body
                : doc.documentElement;
        return Math.max(html.scrollHeight, body.scrollHeight,
                client.clientHeight, app.scrollHeight);
    }
    getScrollLeft () {
        var app:any = document.getElementsByTagName('uni-page-body')[0]
        var d = document;
        return window.pageXOffset || d.documentElement.scrollLeft
                || d.body.scrollLeft || app.scrollLeft;
    }
    getScrollTop () {
        var app:any = document.getElementsByTagName('uni-page-body')[0]
        var d = document;
        return window.pageYOffset || d.documentElement.scrollTop
                || d.body.scrollTop || app.scrollTop;
    }
    getViewHeight () {
        var doc = document, client = doc.compatMode == 'BackCompat' ? doc.body
                : doc.documentElement;
        return client.clientHeight;
    }
    getViewWidth () {
        var doc = document, client = doc.compatMode == 'BackCompat' ? doc.body
                : doc.documentElement;
        return client.clientWidth;
    }
    getWidth () {
        var app:any = document.getElementsByTagName('uni-page-body')[0]
        var doc = document, body = doc.body, html = doc.documentElement, client = doc.compatMode == 'BackCompat' ? body
                : doc.documentElement;
        return Math.max(html.scrollWidth, body.scrollWidth,
                client.clientWidth, app.scrollWidth);
    }
    rollTo (endPointElement:any, speed:any, target?:any) {
        var app:any = document.getElementsByTagName('uni-page-body')[0]
        if (target) {
            app = document.getElementById(target);
        }
        var nowScrollY = app.scrollTop||0;
		var endEle =document.getElementById(endPointElement)
		var endPoint = endEle?endEle.offsetTop:0
        if (nowScrollY != endPoint) {
            speed ? speed : 50;
            if (endPoint > speed) {
                var timer = setInterval(function() {
                    if (nowScrollY < endPoint - speed/2 -1
                            || nowScrollY > endPoint + speed/2 + 1 ) {
                        if (nowScrollY < endPoint) {
                            nowScrollY = nowScrollY + speed;
                        } else if (nowScrollY > endPoint) {
                            nowScrollY = nowScrollY - speed;
                        }
                        app.scroll(0, nowScrollY);
                    } else {
                        app.scroll(0, endPoint);
                        clearInterval(timer);
                    }
                }, 13);
            } else {
                app.scroll(0, endPoint);
            }
        }
    }
    goTo (endPointElement:any, speed:any, target?:any) {
        var app:any = document.getElementsByTagName('uni-page-body')[0]
        if (target) {
            app = document.getElementById(target);
        }
        var nowScrollY:any = app.scrollTop||0;
		var endEle = document
                .getElementById(endPointElement)
		var endPoint =endEle? endEle.offsetTop:0;
        app.scrollTop = endPoint;
    }
    rollToBottom (speed:any) {
        var app:any = document.getElementsByTagName('uni-page-body')[0]
        var nowScrollY = app.scrollTop, pageHeight = app.scrollHeight, timer = setInterval(
                function() {
                    if (nowScrollY <= pageHeight) {
                        nowScrollY = nowScrollY + (speed ? speed : 50);
                        app.scroll(0, nowScrollY);
                    } else {
                        clearInterval(timer);
                    }
                }, 13);
    }
    goToBottom() {
        var app:any = document.getElementsByTagName('uni-page-body')[0]
        var nowScrollY = app.scrollTop, pageHeight = app.scrollHeight
        // this.appBriageService.alert({buttons:['确认'],title:'提示',subTitle:app.scrollHeight+''})
        // app.scroll(0, 9999);
        app.scrollTop = app.scrollHeight
        // this.appBriageService.alert({buttons:['确认'],title:'提示',subTitle:app.scrollHeight+''})
    }
    rollToTop (speed:any) {
        var app:any = document.getElementsByTagName('uni-page-body')[0]
        var nowScrollY = app.scrollTop;
        if (nowScrollY > 0) {
            var timer = setInterval(function() {
                if (nowScrollY >= 0) {
                    nowScrollY = nowScrollY - (speed ? speed : 50);
                    app.scroll(0, nowScrollY);
                } else {
                    clearInterval(timer);
                }
            }, 13);
        }
    }
    changeTitle(title:string) {
        document.getElementsByTagName('title')[0].innerHTML = title;
    }
}
