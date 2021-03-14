/**
 * core服务类
 */
import { BrowserService } from './browser.service';
import { DateService } from './date.service';
import { DomService } from './dom.service';
import { EnvService } from './env.service';
import { ImgService } from './img.service';
import { MathService } from './math.service';
import { PageService } from './page.service';
import { RegExpService } from './regexp.service';
// import { StringService } from './string.service';
// import { UtilsService } from './util.service';
// import { CryptoService } from './cryptoJS.service';
class Core {
	/** 交互类 */
	/** 浏览器服务类 */
	public browser: BrowserService = new BrowserService(); // 小程序端会报错，所以小程序端不注入这个服务
	public env: EnvService = new EnvService(); // 小程序端会报错，所以小程序端不注入这个服务
	public img: ImgService = new ImgService();
	public page: PageService = new PageService();
	/** 时间服务类 */
	/** dom操作交互类 */
	public dom: DomService = new DomService();
	public date: DateService = new DateService();
	public math: MathService = new MathService();
	public regexp: RegExpService = new RegExpService();
	// public string: StringService = new StringService();
	// public util: UtilsService = new UtilsService();
	// public crypto: CryptoService = new CryptoService();
	public log: any;
}
const core = new Core();
export { Core };
export default core;
