{% extends 'layout.swig' %}
{% set title = 'Consumer Detail' %}
{% block body %}
<div id="consumerdetail">
    <input type="hidden" id="txtId" value="<%= req.param('id')%>" />
    <h2>用户<span style="color: red;">{{item.username}}</span>详情</h2>
    <div class="ui grid">
        <div class="ui row">
            <div class="two wide column">Username</div>
            <div class="ten wide column">{{ item.username }}/{{item.id}}</div>
        </div>
    </div>
</div>
{% endblock %}
{% block script %}
<script src="/js/detail.js"></script>
<script type="text/javascript">
$(function(){
    detail('/api/consumers/' + $('#txtId').val(), 'consumerdetail');
});
</script>
{% endblock %}
