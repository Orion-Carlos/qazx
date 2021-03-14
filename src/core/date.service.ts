/*
 * File Created: Wednesday, 13th June 2018 3:46:05 pm
 * Author: songyz
 * Description: 时间日期服务
 * -----
 * Last Modified: Thursday, 14th June 2018 11:20:19 am
 * Modified By: songyz
 * -----
 *  All rights reserved.
 */
import Moment from 'moment';

export class DateService {
	/**
	 * 获得一个moment实例的方法
	 * @param {Date|String} 传入一个日期
	 * @return {Monent} 返回该moment实例
	 */
	getMoment(date: any) {
		if (Moment(date).isValid()) {
			return Moment(date)
		} else {
			return Moment()
		}
	}
    /**
     * 显示周或星期, dateService.getCNDay(day,"Z") "Z"显示周 否则显示星期 
     * @param  {} day 传入日期
     * @param  {} zq 传入格式代码
     */
	getCNDay(day: Date, zq: any) {
		var cnDay = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'], cnDay1 = [
			'星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
		if (typeof zq == 'undefined' || zq == 'Z') {
			return cnDay[day.getDay()];
		} else {
			return cnDay1[day.getDay()];
		}
	}
	/**
	 * 根据身份证获取出生日期以及性别
	 * @param  {} cardNo 身份证号
	 */
	getBirthDayAndSex(iIdNo: string) {
		var tmpStr = "";
		var sex = "";

		if (iIdNo.length == 15) {
			tmpStr = iIdNo.substring(6, 12);
			tmpStr = "19" + tmpStr;
			tmpStr = tmpStr.substring(0, 4) + "-" + tmpStr.substring(4, 6) + "-" + tmpStr.substring(6)
			sex = parseInt(iIdNo.substr(14, 1)) % 2 + "";
		}
		else {
			tmpStr = iIdNo.substring(6, 14);
			tmpStr = tmpStr.substring(0, 4) + "-" + tmpStr.substring(4, 6) + "-" + tmpStr.substring(6)
			sex = parseInt(iIdNo.substr(16, 1)) % 2 + "";
		}
		return {
			birthday: tmpStr,
			gender: sex
		}
	}
	/**
     * 一小时之内，显示“xx分钟前”
	 * 今天0点到一小时前，显示“xx小时前”
	 * 昨天0点到今天0点，显示“昨天xx时间”
	 * 昨天0点之前的，显示具体的时间
     * @param  {} day 传入日期
     */
	getCNTime(day: string) {
		if (!/^\d{4}[-\/]\d{1,2}[-\/]\d{1,2} \d{2}:\d{2}:\d{2}$/.test(day)) {
			return ""
		}
		var curDay = new Date();
		var zoreDay = new Date(curDay.getFullYear(), curDay.getMonth(), curDay.getDate());
		var paramDay = new Date(day.replace(/-/g, "/"));
		var timeRange1 = Math.floor((curDay.getTime() - paramDay.getTime()) / 1000 / 60);
		var timeRange2 = Math.floor((paramDay.getTime() - zoreDay.getTime()) / 1000 / 60 / 60);
		if (timeRange1 < 60) {
			return timeRange1 + "分钟前"
		} else if (timeRange2 > 0) {
			return Math.floor(timeRange1 / 60) + "小时前"
		} else if (timeRange2 > -24) {
			return "昨天" + day.split(" ")[1]
		} else {
			return day
		}
	}
}
