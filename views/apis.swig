{% extends 'layout.swig' %}
{% set title = 'API List' %}
{% block body %}

<div id="apis">

<h3 class="ui header">接口列表</h3>
<div class="ui grid">
    <div class="ui left aligned nine wide column">
        <a href="/apis/add" class="ui teal button">
          <i class="plus icon"></i>
            添加接口
        </a>
        <a href="/apis/batch/add" class="ui teal button">
          <i class="plus icon"></i>
            批量添加接口
        </a>
    </div>
    <div class="ui right aligned seven wide column">
        <div class="ui labeled icon input">
            <div class="ui label">Search:</div>
            <input class="ui input" placeholder="search by name" name="key" v-model="key" v-on:keyup.enter="search">
            <i class="search icon"></i>
        </div>
        <button id="btnSearch" @click="search"  class="ui button primary">Go</button>
    </div>
</div>
<table class="vuetable ui blue striped selectable celled sortable stackable attached table">
            <thead>
                <tr>
                    <th>name</th>
                    <th>upstream_url</th>
                    <th>request_path</th>
                    <th>plugins</th>
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
                  <td>{{item.plugins}}</td>
                  <td>{{item.request_host }}</td>
                  <td>{{item.strip_request_path}}</td>
                  <td>{{item.created_at|moment}}</td>
                  <td class="vuetable-actions center aligned">
                    <a class="ui teal button" href="/apis/detail/{{item.id}}"><i class="zoom icon"></i></a>
                    <a class="ui orange button" href="/apis/update/{{item.id}}"><i class="edit icon"></i> </a>
                    <a class="ui red button" href="javascript:;" @click="delete(item, item.name)"><i class="delete icon"></i> </a>
                  </td>
              </tr>
            </tbody>
             <tfoot>
    <tr><th colspan="7">
      <div class="ui right floated pagination menu">
        <a class="icon item">
          <i class="left chevron icon"></i>
        </a>
        <a class="icon item">
          <i class="right chevron icon"></i>
        </a>
      </div>
    </th>
  </tr></tfoot>
</table>

</div>

{% endblock %}

{% block script %}
<script src="/js/list.js"></script>
<script type="text/javascript">
$(function(){
list('/api/apis', 'apis', '接口');
});
</script>
{% endblock %}
