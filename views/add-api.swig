{% extends 'layout.swig' %}
{% set title = 'Add API' %}
{% block body %}

<form method="post" class="ui form segment" action="/apis">
  <h2>添加接口</h2>
  <div class="field">
     <input placeholder="Name" name="name" type="text" >
  </div>
  <div class="field">
    <input placeholder="Request host" name="request_host" type="text" >
  </div>
  <div class="field">
    <input placeholder="Request path" name="request_path" type="text" >
  </div>
  <div class="field">
    <input placeholder="Upstream url" name="upstream_url" type="text" >
  </div>
  <div class="two fields">
    <div class="field">
        <div class="ui checkbox">
          <input type="checkbox" name="strip">
          <label>Strip request path</label>
        </div>
    </div>
    <div class="field">
        <div class="ui checkbox">
          <input type="checkbox" name="preserve">
          <label>Preserve host</label>
        </div>
    </div>
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
       name: {
            identifier  : 'name',
            rules: [
              {
                type   : 'regExp[/^[a-z0-9_-]{3,50}$/]',
                prompt : '只能是字母和数字,长度3-50'
              }
            ]
          },

       request_host: {
            identifier  : 'request_host',
            rules: [
              {
                type   : 'empty',
                prompt : 'host不能为空'
              }
            ]
          },
       upstream_url: {
            identifier  : 'upstream_url',
            rules: [
              {
                type   : 'empty',
                prompt : 'url不合法'
              }
            ]
          },
       request_path: {
            identifier  : 'request_path',
            rules: [
              {
                type   : 'regExp[/^\/.+/]',
                prompt : '必须是/开头的路径'
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
    axios.post('/apis', $('.ui.form').form('get values')
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
