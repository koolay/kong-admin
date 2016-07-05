{% extends 'layout.swig' %}
{% set title = 'Add API' %}
{% block body %}

<form method="post" class="ui form segment">
  <h2>添加插件</h2>
  <label>插件名称</label>
  <div class="field">
     {% include 'partials/plugin-select.swig' %}
  </div>
  <label>接口名称</label>
  <div class="field">
    <input placeholder="Api name" name="api" type="text" >
  </div>
  {% include 'plugins/jwt.swig' %}
  <div class="ui blue button" onclick="save()">保存</div>

</form>

{% endblock %}

{% block script %}
<script type="text/javascript" >
var rules = {
    inline : true,
    on     : 'blur',
    fields : {
       plugin: {
            identifier  : 'plugin',
            rules: [
              {
                type   : 'regExp[/^[a-z0-9_-]{3,50}$/]',
                prompt : '只能是字母和数字,长度3-50'
              }
            ]
          },
       api: {
            identifier  : 'api',
            rules: [
              {
                type   : 'empty',
                prompt : 'api名称或id'
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
    axios.post('/plugins', $('.ui.form').form('get values')
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
