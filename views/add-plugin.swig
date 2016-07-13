{% extends 'layout.swig' %}
{% set title = 'Add API' %}
{% block body %}

<div id="addplugin">
<form method="post" class="ui form segment">
  <h2>添加插件</h2>
  <label>插件名称</label>
  <div class="field">
    <plugin-selection></plugin-selection>
  </div>
  <label>接口名称</label>
  <div class="field">
    <input placeholder="Api name" name="api" type="text" value="<%= req.param('apiname')%>">
  </div>
  <component :is="selectedPlugin">
  </component>
  <div class="ui blue button" @click="save">保存</div>
</form>
</div>
{% include 'partials/plugin-selection.swig' %}
{% include 'partials/plugin-key-auth.swig' %}
{% include 'partials/plugin-jwt.swig' %}

{% endblock %}

{% block script %}
<script src="/js/add.js"></script>
<script src="/js/add-plugin.js"></script>
{% endblock %}
