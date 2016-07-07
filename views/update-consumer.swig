{% extends 'layout.swig' %}
{% set title = 'Update Consumer' %}
{% block body %}

<div id="updateconsumer">
<form method="post" class="ui form segment">
  <h2>修改用户</h2>
  <div class="field">
     <input placeholder="Username" name="username" type="text" v-model="consumer.username">
  </div>
  <div id="btnSave" class="ui blue button" @click="save">保存</div>
  <input id="consumerId" type="hidden" value="<%= req.param('id') %>" name="id" />
</form>
</div>

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
                prompt : '只能是字母和数字,长度3-20'
              }
            ]
          },
    }, onSuccess : function(){
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
    var formData = $('.ui.form').form('get values');
    var id = $('.ui.form').form('get value', 'id');
    axios.put('/consumers/' + id, formData)
    .then(function(response) {
        if (response.data.result) {
            ui.alert('success', 'success', response.data.data);
            } else {
           ui.alert('fail', 'Fail', response.data.msg);
         }
    })
    .catch(function(err) {
        ui.alert('fail', 'Fail', '修改失败');
    });

}
</script>
{% endblock %}


{% block script %}
<script src="/js/update-consumer.js"></script>
{% endblock %}
