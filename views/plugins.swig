{% extends 'layout.swig' %}
{% set title = 'Plugin List' %}
{% block body %}

<table class="ui very basic table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Api</th>
      <th>Enabled</th>
      <th>Config</th>
      <th>Created on</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  {% for item in data.data %}
      <tr>
          <td>{{item.name}}</td>
          <td><a href="/admin/updateApi/{{item.api_id}}" target="_self">{{item.api_name}}</a></td>
          <td>{% if item.enabled %} 启用 {% else %} 禁用 {% endif %}</td>
          <td>{{item.Config}}</td>
          <td>{{toDate(item.created_at) }}</td>
          <td><a href="javascript:void(0)" onclick="deleteApi('{{item.id}}', '{{item.name}}')">删除</a></td>
          <td><a href="/admin/updatePlugin/{{item.id}}" >修改</a></td>
      </tr>
  {% endfor %}
  </tbody>
</table>
<script type="text/javascript" >
function deleteApi(id, name) {
    if(confirm("确定要删除接口"+name+"?")) {
        axios.delete("/plugins/" + id).then(function(response){
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
