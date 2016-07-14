{% extends 'layout.swig' %}
{% set title = 'Consumer Detail' %}
{% block style %}
<style>
    .infoRow { height:30px; line-height:30px; border-bottom:1px #ccc; }
</style>
{% endblock %}
{% block body %}
<div id="consumerdetail">
    <input type="hidden" id="txtId" value="<%= req.param('id')%>" />
    <h2>用户<span style="color: red;">{{item.username}}</span>详情</h2>
    <div class="ui grid">
        <div class="ui row infoRow">
            <div class="two wide column">id</div>
            <div class="ten wide column">{{ item.id}}</div>
        </div>
        <div class="ui row infoRow">
            <div class="two wide column">Username</div>
            <div class="ten wide column">{{ item.username }}</div>
        </div>
        <div class="ui row infoRow">
            <div class="two wide column">custom_id</div>
            <div class="ten wide column">{{ item.custom_id }}</div>
        </div>
    </div>
    <div class="ui row"></div>
    <h3>JWT插件</h3>
    <button class="ui button teal" @click="createCredential(item, 'jwt')">创建凭证</button>
    <button class="ui button teal" @click="showCredential(item, 'jwt')">查看凭证</button>
    <div style="margin-top: 10px;" class="ui grid">
        <div v-for="credential in additions.jwt" class="row">
           <div class="two column wide right float">
              <button class="ui red button" @click="deleteCredential(item, credential, 'jwt')"><i class="delete icon"></i> </button>
           </div>
           <div class="fourteen wide column left float">
               <span>{{ credential | json }}</span>
           </div>
        </div>
    </div>
    <h3>Key-auth插件</h3>
    <button class="ui button teal" @click="createCredential(item, 'key-auth')">创建凭证</button>
    <button class="ui button teal" @click="showCredential(item, 'key-auth')">查看凭证</button>
    <div style="margin-top: 10px;" class="ui grid">
        <div v-for="credential in additions['key-auth']" class="row">
           <div class="two column wide right float">
              <button class="ui red button" @click="deleteCredential(item, credential, 'key-auth')"><i class="delete icon"></i> </button>
           </div>
           <div class="fourteen wide column left float">
               <span>{{ credential | json }}</span>
           </div>
        </div>
    </div>
    <h3>acl插件</h3>
    <button class="ui button teal" @click="createGroup(item, 'acls')">添加分组</button>
    <button class="ui button teal" @click="showCredential(item, 'acls')">查看分组</button>
    <div style="margin-top: 10px;" class="ui grid">
        <div v-for="aclItem in additions['acls']" class="row">
           <div class="two column wide right float">
              <button class="ui red button" @click="deleteCredential(item, aclItem, 'acls')"><i class="delete icon"></i> </button>
           </div>
           <div class="fourteen wide column left float">
               <span>{{ aclItem | json }}</span>
           </div>
        </div>
    </div>
    <!-- ----------------------------------------------- -->

</div>
{% endblock %}
{% block script %}
<script src="/js/consumer-detail.js"></script>
<script type="text/javascript">
$(function(){
    detail($('#txtId').val(), 'consumerdetail');
});
</script>
{% endblock %}
