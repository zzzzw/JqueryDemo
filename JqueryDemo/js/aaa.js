/**
 * Created by Administrator on 15-8-20.
 */
//文档加载完毕执行
$(function() {

    // 在js中获取web路径
    var location = (window.location + '').split('/');
    var basePath = location[0] + '//' + location[2] + '/' + location[3] + '/';

    // 加载新闻
    $
        .ajax( {
            type : 'POST',
            dataType : 'json', // json对象
            url : 'news-ajax!showAll.action',
            data : null,
            success : function(response, status, xhr) {
                var s = "";
                $
                    .each(
                    response,
                    function(index, value) {
                        // 组合
                        s += '<tr><td>' + value.title;
                        s += '</td><td>' + value.pubdate
                            + '</td><td>' + value.content
                            + '</td><td>';
                        s += '<a class="btn btn-danger" href="news!getNews.action?entity.id=' + $
                        {
                            u.id
                        }
                        +'">修改</a>';
                        s += '<a class="btn btn-danger" href="news!deleteNews.action?entity.id=' + aaa + '">删除</a>';
                        s += '</td></tr>';
                    })
                $("#xwmain").append(s);

            },
            error : function() {
                alert("加载失败");
            }

        })

})