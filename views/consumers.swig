{% extends 'layout.swig' %}
{% set title = 'Consumer List' %}
{% block body %}

<table class="ui very basic table">
  <thead>
    <tr>
      <th>Username</th>
      <th>id</th>
      <th>Custom_id</th>
      <th>Created on</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  {% for item in data.data %}
      <tr>
          <td>{{item.username}}</td>
          <td>{{item.id}}</td>
          <td>{{item.custom_id}}</td>
          <td>{{toDate(item.created_at) }}</td>
          <td><a href="javascript:void(0)" onclick="deleteApi('{{item.id}}', '{{item.username}}')">删除</a></td>
          <td><a href="/admin/updateConsumer/{{item.id}}" >修改</a></td>
      </tr>
  {% endfor %}
  </tbody>
</table>
<script type="text/javascript" >
function deleteApi(id, name) {
    if(confirm("确定要删除接口"+name+"?")) {
        axios.delete("/consumers/" + id).then(function(response){
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
