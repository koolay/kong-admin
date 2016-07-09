{% extends 'layout.swig' %}
{% set title = 'API Detail' %}
{% block body %}
<div id="apidetail">
    <input type="hidden" id="txtId" value="<%= req.param('id')%>" />
    <h2>接口<span style="color: red;">{{item.name}}</span>详情</h2>
    <div class="ui grid">
        <div class="ui row">
            <div class="two wide column">Name</div>
            <div class="ten wide column">{{ item.name }}/{{item.id}}</div>
        </div>
        <div class="ui row">
            <div class="two wide column">Request_path</div>
            <div class="ten wide column">{{ item.request_path }}</div>
        </div>
        <div class="ui row">
            <div class="two wide column">Upstream_url</div>
            <div class="ten wide column">{{ item.upstream_url }}</div>
        </div>
        <div class="ui row">
            <div class="two wide column">Strip_request_path</div>
            <div class="ten wide column">{{ item.strip_request_path }}</div>
        </div>
        <div class="ui row">
            <div class="two wide column">Preserve_host</div>
            <div class="ten wide column">{{ item.preserve_host }}</div>
        </div>
    </div>
    <h2>该接口插件信息</h2>
    <div class="ui left aligned nine wide column">
        <a href="/plugins/add?apiname={{ item.name }}" class="ui teal button">
          <i class="plus icon"></i>
            添加插件
        </a>
    </div>
<table class="vuetable ui blue striped selectable celled stackable attached table">
            <thead>
                <tr>
                    <th>name</th>
                    <th>enabled</th>
                    <th>config</th>
                    <th>created at</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
              <tr v-for="item in additions">
                  <td>{{item.name}}</td>
                  <td>{{item.enabled}}</td>
                  <td>{{item.config | json}}</td>
                  <td>{{item.created_at }}</td>
                  <td class="vuetable-actions center aligned">
                    <a class="ui orange button" href="/plugins/update/{{item.id}}"><i class="edit icon"></i> </a>
                    <button class="ui red button" @click="deletePlugin(item)"><i class="delete icon"></i> </button>
                  </td>
              </tr>
            </tbody>
 </table>
</div>
{% endblock %}
{% block script %}
<script src="/js/api-detail.js"></script>
<script type="text/javascript">
$(function(){
    detail('/api/apis/' + $('#txtId').val(), 'apidetail');
});
</script>
{% endblock %}


