<div class="ui fluid search selection dropdown">
    <input type="hidden" name="name">
    <i class="dropdown icon"></i>
    <div class="default text">选择插件</div>
    <div class="menu">
        <div class="item" data-value="jwt">jwt</div>
        <div class="item" data-value="key-auth">key-auth</div>
    </div>
</div>

{% block script %}
<script type="text/javascript">

$('.ui.dropdown')
.dropdown({
    useLabels: false,
    maxSelections: 3
  });

</script>
{% endblock %}
