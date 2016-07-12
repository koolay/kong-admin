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
<link rel="stylesheet" href="/styles/sweetalert.css">
<!--STYLES END-->
<link rel="stylesheet" href="/semantic/semantic.min.css">
{% block style %}{% endblock %}
</head>

<body>

<div class="ui inverted vertical masthead center aligned segment">

    <div class="ui" style="padding:10px;">
        <div class="ui large secondary inverted pointing menu">
            <a class="{% if req.path.indexOf('apis') > 0 || req.path == '/' %} active {% endif %} item" href="/apis">接口列表</a>
            <a class="{% if req.path.indexOf('consumers') > 0 %} active {% endif %} item" href="/consumers">用户列表</a>
            <a class="{% if req.path.indexOf('plugins') > 0 %} active {% endif %} item" href="/plugins">插件列表</a>
            <div class="right item" style="height:100px;">
                {% if req.user %}
                <div class="ui card" style="height:60px;width:60px">
                      <div class="image">
                        <img src="/images/steve.jpg">
                      </div>
                      <div class="content">
                        <a class="header" style="font-size:13px!important;font-weight:normal;color:#fff;"><%= req.user.username%></a>
                      </div>
                    </div>
                {% else %}
                  <a class="ui inverted button" href="/login">登录</a>
                {% endif %}
            </div>
        </div>
    </div>

  </div>
<div class="ui vertical stripe segment">

  <div class="ui inverted dimmer">
    <div class="ui text loader">Loading</div>
  </div>
    <div class="ui" style="padding:10px;">
        <!-- Site content !-->
        {% block body %}{% endblock %}
        {% include 'partials/alerts.swig' %}
    </div>
</div>
<!--TEMPLATES-->

<!--TEMPLATES END-->

<!--SCRIPTS-->
<script src="/js/dependencies/sails.io.js"></script>
<!--SCRIPTS END-->
<script src="/js/dependencies/common.js"></script>
<script src="/js/dependencies/axios.min.js"></script>
<script src="/js/dependencies/sweetalert.min.js"></script>
<script src="/js/dependencies/vue.min.js"></script>
<script src="/js/dependencies/tablesort.js"></script>
<script src="/js/dependencies/moment.js"></script>

<script type="text/javascript">
$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .hide()
    ;
  })
;
$('table').tablesort();
</script>
{% block script %}{% endblock %}
</body>
</html>
