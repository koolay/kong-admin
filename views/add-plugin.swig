{% extends 'layout.swig' %}
{% set title = 'Add API' %}
{% block body %}

<div id="addplugin">
<form method="post" class="ui form segment">
  <h2>添加插件</h2>
  <label>插件名称</label>
  <div class="field">
     {% include 'partials/plugin-select.swig' %}
  </div>
  <label>接口名称</label>
  <div class="field">
    <input placeholder="Api name" name="api" type="text" value="<%= req.param('apiname')%>">
  </div>
  <plugin-jwt></plugin-jwt>
  <plugin-key-auth></plugin-key-auth>
  <div class="ui blue button" @click="save">保存</div>
</form>
</div>

{% endblock %}

{% block script %}
</script>
{% endblock %}

{% block script %}
<script src="/js/components/plugin-jwt.js"></script>
<script src="/js/components/plugin-key-auth.js"></script>
<script src="/js/add.js"></script>
<script src="/js/add-plugin.js"></script>
{% endblock %}
