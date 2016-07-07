{% extends 'layout.swig' %}
{% set title = 'API List' %}
{% block body %}

<div id="apis">

<h3 class="ui header">接口列表</h3>
<a href="/apis/add" class="ui teal button">
  <i class="plus icon"></i>
    添加接口
</a>
<table class="vuetable ui blue striped selectable celled stackable attached table">
            <thead>
                <tr>
                    <th>name</th>
                    <th>upstream_url</th>
                    <th>request_path</th>
                    <th>request_host</th>
                    <th>strip_request_path</th>
                    <th>created at</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
              <tr v-for="item in items">
                  <td>{{item.name}}</td>
                  <td>{{item.upstream_url}}</td>
                  <td>{{item.request_path }}</td>
                  <td>{{item.request_host }}</td>
                  <td>{{item.strip_request_path}}</td>
                  <td>{{item.created_at }}</td>
                  <td class="vuetable-actions center aligned">
                    <button class="ui teal button"><i class="zoom icon"></i> </button>
                    <a class="ui orange button" href="/apis/update/{{item.id}}"><i class="edit icon"></i> </a>
                    <button class="ui red button" @click="deleteApi(item)"><i class="delete icon"></i> </button>
                  </td>
              </tr>
            </tbody>
</table>

</div>

{% endblock %}

{% block script %}
<script src="/js/apis.js"></script>
{% endblock %}
