<div class="ui fluid search selection dropdown">
    <input type="hidden" name="country">
    <i class="dropdown icon"></i>
    <div class="default text">选择接口</div>
    <div class="menu">
        <div class="item" data-value="jwt">jwt</div>
    </div>
</div>

{% block script %}
<script type="text/javascript">

$('.ui.dropdown')
.dropdown(
{
    useLabels: false,
    fields: { name: "name", value: "name" },
    apiSettings: {
        mockResponse: {
            success: true,
            results: [
                {"description":"Opole","data-value":1},
                {"description":"Wrocław","data-value":2},
                {"description":"Warszawa","data-value":3},
                {"description":"Budapest","data-value":4},
                {"description":"Köln","data-value":5}
            ]
        }
    }
});

</script>
{% endblock %}
