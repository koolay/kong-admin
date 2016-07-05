<!DOCTYPE html>
<html>
<head>
<title>注册</title>

<!-- Viewport mobile tag for sensible mobile support -->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

<!--STYLES-->
<link rel="stylesheet" href="/styles/importer.css">
<!--STYLES END-->
<link rel="stylesheet" href="/semantic/semantic.min.css">
  <style type="text/css">
    body {
      background-color: #DADADA;
    }
    body > .grid {
      height: 100%;
    }
    .image {
      margin-top: -100px;
    }
    .column {
      max-width: 450px;
    }
  </style>

</head>

<body>

<div class="ui middle aligned center aligned grid">
    <div class="column">
        <h2 class="ui teal image header">
            <div class="content">
                注册
            </div>
        </h2>
        <form class="ui large form">
            <div class="ui stacked segment">
                <div class="field">
                    <div class="ui left icon input">
                        <i class="user icon"></i>
                        <input type="text" name="username" placeholder="username">
                    </div>
                </div>
                <div class="field">
                    <div class="ui left icon input">
                        <i class="user icon"></i>
                        <input type="text" name="email" placeholder="E-mail address">
                    </div>
                </div>
                <div class="field">
                    <div class="ui left icon input">
                        <i class="lock icon"></i>
                        <input type="password" name="password" placeholder="Password">
                    </div>
                </div>
                <div id="submitLogin" class="ui fluid large teal button" onclick="signup()">注册</div>
            </div>

            {% include '../partials/alerts.swig' %}

        </form>

        <div class="ui message">
            已有帐号? <a href="/login">登录</a>
        </div>
    </div>
</div>



<!--SCRIPTS-->
<script src="/js/dependencies/sails.io.js"></script>
<script src="/js/dependencies/axios.min.js"></script>
<script src="/js/dependencies/jquery.min.js"></script>
<!--SCRIPTS END-->
<script src="/semantic/semantic.min.js"></script>

<script type="text/javascript">

var rules = {
    inline : true,
    on     : 'blur',
    fields : {
       username: {
            identifier  : 'username',
            rules: [
              {
                type   : 'regExp[/^[a-zA-Z]+[0-9]*/]',
                prompt : '只能是字母和数字'
              },
                {
                    type   : 'minLength[3]',
                    prompt : '最小长度为{ruleValue}'
                },
                {
                    type   : 'maxLength[20]',
                    prompt : '最大长度为{ruleValue}'
                }
            ]
          },
       email: {
            identifier  : 'email',
            rules: [
              {
                type   : 'email',
                prompt : 'email格式不正确'
              }
            ]
          },
       password: {
            identifier  : 'password',
            rules: [
              {
                type   : 'minLength[3]',
                prompt : '最小长度为{ruleValue}'
              },
              {
                type   : 'maxLength[20]',
                prompt : '最大长度为{ruleValue}'
              }
            ]
          },
},  onSuccess : function(){
        success();
        return false;
    },
    'onFailure': function() {
        return false;
    }
};
function signup() {
   $('.ui.form').form(rules).form('validate form');
}
function success() {
    axios.post('/signup', $('.ui.form').form('get values')
     )
    .then(function(response) {
        if (response.data.result) {
            ui.alert('success', 'success', response.data.data);
            } else {
           ui.alert('fail', 'Fail', response.data.msg);
         }
    })
    .catch(function(err) {
        ui.alert('fail', 'Fail', '注册失败');
    });

}

</script>
<script src="/js/dependencies/common.js"></script>
</body>
</html>
