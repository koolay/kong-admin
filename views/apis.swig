{% extends 'layout.swig' %}
{% set title = 'API List' %}
{% block body %}

<table class="ui very basic table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Upstrem url</th>
      <th>Request host</th>
      <th>Request path</th>
      <th>Created on</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  {% for item in data.data %}
      <tr>
          <td>{{item.name}}</td>
          <td>{{item.upstream_url}}</td>
          <td>{{item.request_host }}</td>
          <td>{{item.request_path }}</td>
          <td>{{toDate(item.created_at) }}</td>
          <td><a href="javascript:void(0)" onclick="deleteApi('{{item.id}}', '{{item.name}}')">删除</a></td>
          <td><a href="/admin/updateApi/{{item.id}}" >修改</a></td>
      </tr>
  {% endfor %}
  </tbody>
</table>
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
