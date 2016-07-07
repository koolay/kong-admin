{% extends 'layout.swig' %}
{% set title = 'Add API' %}
{% block body %}
<div id="addapi">
<form method="post" class="ui form segment">
  <h3>添加接口</h3>
  <label>name</label>
  <div class="field">
     <input placeholder="Name" name="name" type="text" >
  </div>
  <label>request path</label>
  <div class="field">
    <input placeholder="Request path" name="request_path" type="text" >
  </div>
  <label>upstream url</label>
  <div class="field">
    <input placeholder="Upstream url" name="upstream_url" type="text" >
  </div>
  <div class="two fields">
    <div class="field">
        <div class="ui checkbox">
          <input type="checkbox" name="strip_request_path">
          <label>Strip request path</label>
        </div>
    </div>
    <div class="field">
        <div class="ui checkbox">
          <input type="checkbox" name="preserve_host">
          <label>Preserve host</label>
        </div>
    </div>
  </div>
  <div id="btnSave" class="ui blue button" @click="save">新增</div>

</form>
</div>

{% endblock %}

{% block script %}
<script src="/js/add-api.js"></script>
{% endblock %}
