{% extends 'layout.swig' %}
{% set title = 'Update API' %}
{% block body %}

<div id="updateapis">
<form method="post" class="ui form attached segment">
  <input id="apiId" name="id" type="hidden" value="<%= req.param("id")%>"/>
  <h2>修改接口</h2>
  <label>name</label>
  <div class="field">
     <input placeholder="Name" name="name" type="text" v-model="api.name">
  </div>
  <label>request path</label>
  <div class="field">
    <input placeholder="Request path" name="request_path" type="text" v-model="api.request_path">
  </div>
  <label>upstream url</label>
  <div class="field">
    <input placeholder="Upstream url" name="upstream_url" type="text" v-model="api.upstream_url">
  </div>
  <div class="two fields">
    <div class="field">
        <div class="ui checkbox">
          <input type="checkbox" name="strip_request_path" v-model="api.strip_request_path">
          <label>Strip request path</label>
        </div>
    </div>
    <div class="field">
        <div class="ui checkbox">
          <input type="checkbox" name="preserve_host" v-model="api.preserve_host" >
          <label>Preserve host</label>
        </div>
    </div>
  </div>
  <div id="btnSave" class="ui blue button" @click="save">保存</div>
</form>
</div>

{% endblock %}

{% block script %}
<script src="/js/update-api.js"></script>
{% endblock %}
