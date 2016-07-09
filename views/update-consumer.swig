{% extends 'layout.swig' %}
{% set title = 'Update Consumer' %}
{% block body %}

<div id="updateconsumer">
<form method="post" class="ui form segment">
  <h2>修改用户</h2>
  <div class="field">
     <input placeholder="Username" name="username" type="text" v-model="item.username">
  </div>
  <div id="btnSave" class="ui blue button" @click="save">保存</div>
  <input id="itemId" type="hidden" value="<%= req.param('id') %>" name="id" />
</form>
</div>

{% endblock %}

{% block script %}
<script src="/js/update.js"></script>
<script src="/js/update-consumer.js"></script>
{% endblock %}
