import passwordMod from '@/uni_modules/uni-id-pages/common/password.js'
export default {
	"username": {
		"rules": [{
				required: true,
				errorMessage: 'please enter user name',
			},
			{
				minLength: 3,
				maxLength: 32,
				errorMessage: 'Username length between {minLength} and {maxLength} characters',
			},
			{
				validateFunction: function(rule, value, data, callback) {
					// console.log(value);
					if (/^1\d{10}$/.test(value) || /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(value)) {
						callback('The username cannot be: mobile phone number or email address')
					};
					if (/^\d+$/.test(value)) {
						callback('Username cannot be purely numeric')
					};
					if(/[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/.test(value)){
						callback('Username cannot contain Chinese characters')
					}
					return true
				}
			}
		],
		"label": "User name"
	},
	"nickname": {
		"rules": [{
				minLength: 3,
				maxLength: 32,
				errorMessage: 'Nickname length is between {minLength} and {maxLength} characters',
			},
			{
				validateFunction: function(rule, value, data, callback) {
					// console.log(value);
					if (/^1\d{10}$/.test(value) || /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(value)) {
						callback('Nickname cannot be: mobile phone number or email address')
					};
					if (/^\d+$/.test(value)) {
						callback('Nickname cannot be purely numeric')
					};
					if(/[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/.test(value)){
						callback('Nickname cannot contain Chinese characters')
					}
					return true
				}
			}
		],
		"label": "Nickname"
	},
	...passwordMod.getPwdRules()
}
