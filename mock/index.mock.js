module.exports = {
	"/getUserInfo": {
		name: '张三',
		id: '管理员',
		roles: []
	},
	"/getMenu": [
		{ icon: 1, parentId: null, id: 1, name: '活动管理', url: 'taskManage' },
		{ icon: 2, parentId: null, id: 2, name: '系统管理', url: 'system' },
		{ id: 3, parentId: 1, name: '任务列表', url: 'taskList' },
		{ id: 4, parentId: 1, name: '我的任务', url: 'myTask' },
		{ id: 5, parentId: 1, name: '任务统计', url: 'taskStatistics' },
		{ id: 6, parentId: 2, name: '角色管理', url: '' }
	],
	"/getDictionary": {
		version: '1552367403038',
		data: [{
			'code': 'operationManual',
			'description': '操作手册1',
			'key': '01',
			'value': '死亡'
		}, {
			'code': 'operationManual',
			'description': '操作手册2',
			'key': '02',
			'value': '死亡'
		}]
	},
	"/outside/manageList/getSystemSign": ["XXX", "XX2"],
	"/outside/manageList/getTable": {
		content: [{ status: 1 }, {}, {}, {}, {}, {}, {}, {}, {}, {}],
		totalPages: 2,
		size: 10,
		number: 0,
	}
}
