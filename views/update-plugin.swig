{% extends 'layout.swig' %}
{% set title = 'Update Plugin' %}
{% block body %}

<div id="updateplugin">
<form method="post" class="ui form segment">
  <h2>修改插件</h2>
  <label>插件名称</label>
  <div class="field">
    {{item.name}}
  </div>
  <label>接口名称</label>
  <div class="field">
    {{ api.name }}
  </div>
  <component :is="selectedPlugin" :plugin.sync="item">
  </component>
  <div class="ui blue button" @click="save">保存</div>
  <input id="itemId" type="hidden" value="<%= req.param('id') %>" name="id" />
  <input id="apiId" type="hidden" v-model="item.api_id" name="apiId" />
</form>
</div>
{% include 'partials/plugin-selection.swig' %}
{% include 'partials/plugin-key-auth.swig' %}
{% include 'partials/plugin-jwt.swig' %}
{% include 'partials/plugin-acls.swig' %}

{% endblock %}

{% block script %}
<script src="/js/update-plugin.js"></script>
{% endblock %}
