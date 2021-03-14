+ 该路径负责注册验证器，需要与elementui中的el-form组合使用
+ 首先在type文件夹下注册验证器例如：
``` javascript
const validateSpecial = (rule, value, callback) => {
  var containSpecial = RegExp(/[( )(~)(!)(#)($)(%)(^)(&)(*)(()())(+)(=)([)(\])({)(})(|)(\\)(;)(:)(')(")(,)(/)(<)(>)(?)()]+/)
  if (containSpecial.test(value)) {
    callback(new Error('用户名中不能包含特殊字符'))
  } else {
    callback()
  }
}

const validatePassWordNum = (rule, value, callback) => {
  const validateNum = RegExp(/^[1-9]\d*$/)
  if (validateNum.test(value)) {
    callback(new Error('密码不能为纯数字'))
  } else {
    callback()
  }
}

const validatePassWordUpper = (rule, value, callback) => {
  if (value.toUpperCase() === value || value.toLowerCase() === value) {
    callback(new Error('密码必须包含大小写字母混合'))
  } else {
    callback()
  }
}

export const userNameValidator = [
  {
    required: true, message: '请输入用户名', trigger: 'blur'
  },
  {
    min: 3, max: 20, message: '用户名长度必须在3-20位之间', trigger: 'blur'
  },
  {
    validator: validateSpecial, trigger: 'blur'
  }
]

export const passWordValidator = [
  {
    required: true, message: '请输入密码', trigger: 'blur'
  },
  {
    min: 6, max: 20, message: '密码长度必须在6-20位之间', trigger: 'blur'
  },
  {
    validator: validatePassWordNum, trigger: 'blur'
  },
  {
    validator: validatePassWordUpper, trigger: 'blur'
  }
]

```
+ 然后在vue中注册
``` vue
 data () {
    const {userNameValidator, passWordValidator} = this.$store.getters.validators
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: userNameValidator,
        password: passWordValidator
      },
      pwdType: 'password',
      loading: false,
      showDialog: false
    }
  }
```
+ 在提交时调用验证器
``` vue
handleLogin () {
      this.$refs.loginForm.validate(valid => {
        console.log(valid)
        if (valid) {
          this.loading = true
          this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: '/' })
            // this.showDialog = true
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
```