{% extends 'layout.swig' %}
{% set title = 'Consumer List' %}
{% block body %}

<div id="consumers">

<h3 class="ui header">用户列表</h3>
<a href="/consumers/add" class="ui teal button">
  <i class="plus icon"></i>
    添加用户
</a>
<table class="vuetable ui blue striped selectable celled stackable attached table">
  <thead>
    <tr>
      <th>Username</th>
      <th>id</th>
      <th>Custom_id</th>
      <th>Created on</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
      <tr v-for="item in items">
          <td>{{item.username}}</td>
          <td>{{item.id}}</td>
          <td>{{item.custom_id}}</td>
          <td>{{toDate(item.created_at) }}</td>
          <td class="vuetable-actions center aligned">
            <a class="ui teal button" href="/consumers/detail/{{item.id}}"><i class="zoom icon"></i> </a>
            <a class="ui orange button" href="/consumers/update/{{item.id}}"><i class="edit icon"></i> </a>
            <button class="ui red button" @click="delete(item)"><i class="delete icon"></i> </button>
          </td>
      </tr>
  </tbody>
</table>
</div>

{% endblock %}

{% block script %}

<script src="/js/list.js"></script>
<script type="text/javascript">
$(function(){
list('/api/consumers', 'consumers');
});
</script>
{% endblock %}
