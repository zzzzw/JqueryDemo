/**
 * Created by Administrator on 15-8-20.
 */
//�ĵ��������ִ��
$(function() {

    // ��js�л�ȡweb·��
    var location = (window.location + '').split('/');
    var basePath = location[0] + '//' + location[2] + '/' + location[3] + '/';

    // ��������
    $
        .ajax( {
            type : 'POST',
            dataType : 'json', // json����
            url : 'news-ajax!showAll.action',
            data : null,
            success : function(response, status, xhr) {
                var s = "";
                $
                    .each(
                    response,
                    function(index, value) {
                        // ���
                        s += '<tr><td>' + value.title;
                        s += '</td><td>' + value.pubdate
                            + '</td><td>' + value.content
                            + '</td><td>';
                        s += '<a class="btn btn-danger" href="news!getNews.action?entity.id=' + $
                        {
                            u.id
                        }
                        +'">�޸�</a>';
                        s += '<a class="btn btn-danger" href="news!deleteNews.action?entity.id=' + aaa + '">ɾ��</a>';
                        s += '</td></tr>';
                    })
                $("#xwmain").append(s);

            },
            error : function() {
                alert("����ʧ��");
            }

        })

})