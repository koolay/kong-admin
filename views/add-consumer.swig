{% extends 'layout.swig' %}
{% set title = 'Add Consumer' %}
{% block body %}

<div id="addconsumer">
<form method="post" class="ui form segment">
  <h2>添加用户</h2>
  <label>username</label>
  <div class="field">
     <input placeholder="Username" name="username" type="text" >
  </div>
  <div id="btnSave" class="ui blue button" @click="save">保存</div>
</form>
</div>
{% endblock %}

{% block script %}
<script src="/js/add.js"></script>
<script src="/js/add-consumer.js"></script>
{% endblock %}
