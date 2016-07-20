{% extends 'layout.swig' %}
{% set title = 'Add API' %}
{% block body %}
<div id="addapis">
<form method="post" class="ui form segment">
  <h3>批量添加接口</h3>
  <div class="field">
    <label>json content</label>
    <textarea name="content" placeholder="json array" rows="40"></textarea>
  </div>
  <div id="btnSave" class="ui blue button" @click="save">新增</div>

</form>
</div>

{% endblock %}
{% block script %}
<script src="/js/add-apis.js"></script>
{% endblock %}
