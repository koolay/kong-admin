{% extends 'layout.swig' %}
{% set title = 'Plugin List' %}
{% block body %}

<div id="plugins">
<h3 class="ui header">插件列表</h3>
<a href="/plugins/add" class="ui teal button">
  <i class="plus icon"></i>
    添加插件
</a>

<table class="vuetable ui blue striped sortable selectable celled stackable attached table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Api</th>
      <th>Enabled</th>
      <th>Config</th>
      <th>Created on</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
      <tr v-for="item in items">
          <td>{{item.name}}</td>
          <td><a href="/apis/update/{{item.api_id}}" target="_self">{{item.api_name}}</a></td>
          <td>{{ item.enabled ? '启用' : '禁用' }}</td>
          <td>{{item.Config}}</td>
          <td>{{item.created_at|moment}}</td>
          <td class="vuetable-actions center aligned">
            <button class="ui teal button"><i class="zoom icon"></i> </button>
            <a class="ui orange button" href="/plugins/update/{{item.id}}"><i class="edit icon"></i> </a>
            <button class="ui red button" @click="delete(item, item.name)"><i class="delete icon"></i> </button>
          </td>
      </tr>
  </tbody>
</table>
{% endblock %}

{% block script %}
<script src="/js/list.js"></script>
<script type="text/javascript">
$(function(){
list('/api/plugins', 'plugins', '插件配置');
});
</script>
{% endblock %}
