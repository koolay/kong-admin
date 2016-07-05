{% extends 'layout.swig' %}
{% set title = 'Add Consumer' %}
{% block body %}

<form method="post" class="ui form segment">
  <h2>添加用户</h2>
  <label>username</label>
  <div class="field">
     <input placeholder="Username" name="username" type="text" >
  </div>
  <div class="ui blue button" onclick="save()">保存</div>
</form>

{% endblock %}

{% block script %}
<script type="text/javascript" >
var rules = {
    inline : true,
    on     : 'blur',
    fields : {
       username: {
            identifier  : 'username',
            rules: [
              {
                type   : 'regExp[/^[a-z0-9_-]{3,20}$/]',
                prompt : '只能是字母和数字下划线,长度3-20'
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

function save() {
   $('.ui.form').form(rules).form('validate form');
}
function success() {
    axios.post('/consumers', $('.ui.form').form('get values')
     )
    .then(function(response) {
        if (response.data.result) {
            ui.alert('success', 'success', response.data.data);
            } else {
           ui.alert('fail', 'Fail', response.data.msg);
         }
    })
    .catch(function(err) {
        ui.alert('fail', 'Fail', '添加失败');
    });

}
</script>
{% endblock %}
