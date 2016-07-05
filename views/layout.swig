<!DOCTYPE html>
<html>
<head>
    <title><%= title|default('kong admin') %></title>
<!-- Viewport mobile tag for sensible mobile support -->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

<script src="/js/dependencies/jquery.min.js"></script>
<script src="/semantic/semantic.min.js"></script>
<!--STYLES-->
<link rel="stylesheet" href="/styles/importer.css">
<!--STYLES END-->
<link rel="stylesheet" href="/semantic/semantic.min.css">
{% block style %}{% endblock %}
</head>

<body>
<div class="ui grid" style="margin-top: 50px;">
    <div class="one wide column"></div>
    <div class="three wide column">
        <div class="ui label">
            Welcome <%= req.user.username %>!
            <a href="/logout"><i class="power icon"></i>logout</a>
        </div>
        <div class="ui vertical menu">
            <div class="item">
                <div class="header">接  口</div>
                <div class="menu">
                    <a class="item" href="/apis">接口列表</a>
                    <a class="item" href="/apis/add">添加接口</a>
                </div>
            </div>
            <div class="item">
                <div class="header">接口用户</div>
                <div class="menu">
                    <a class="item" href="/consumers">用户列表</a>
                    <a class="item" href="/consumers/add">添加用户</a>
                </div>
            </div>
            <div class="item">
                <div class="header">插件</div>
                <div class="menu">
                    <a class="item" href="/plugins">插件列表</a>
                    <a class="item" href="/plugins/add">添加插件</a>
                </div>
            </div>
        </div>
    </div>
    <div class="ten wide stretched column">
        <!-- Site content !-->
        {% block body %}{% endblock %}
        {% include 'partials/alerts.swig' %}

    </div>
    <div class="one wide column"></div>
</div>
<!--TEMPLATES-->

<!--TEMPLATES END-->

<!--SCRIPTS-->
<script src="/js/dependencies/sails.io.js"></script>
<!--SCRIPTS END-->
<script src="/js/dependencies/common.js"></script>
<script src="/js/dependencies/axios.min.js"></script>
<script src="/js/dependencies/vue.min.js"></script>
<script src="/js/dependencies/vue-resource.min.js"></script>
<script src="/js/dependencies/vue-table.js"></script>

<script type="text/javascript">
$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .hide()
    ;
  })
;
</script>
{% block script %}{% endblock %}
</body>
</html>
