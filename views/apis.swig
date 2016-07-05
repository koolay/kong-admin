{% extends 'layout.swig' %}
{% set title = 'API List' %}
{% block body %}

<div id="apis">

<h3 class="ui header">接口列表</h3>
<vuetable
    api-url="/api/apis"
    table-wrapper="#content"
    :fields="columns"
    :item-actions="itemActions"
    :query-params="{ page: 'pageNo', perPage: 'pagesize'}"
></vuetable>

</div>

<script type="text/javascript" >

function deleteApi(id, name) {
    if(confirm("确定要删除接口"+name+"?")) {
        axios.delete("/apis/" + id).then(function(response){
                if(response.data.result) {
                      alert('删除成功');
                      window.location.reload();
                  } else {
                    alert(response.data.msg);
                  }
        }).catch(function(err){
         console.log(err);
    })
  }

}

</script>
{% endblock %}

{% block script %}
<script src="/js/apis.js"></script>
{% endblock %}
