import Mock from 'mockjs';

export const data = Mock.mock({
  "code": "1",
  "msg": "操作成功",
  "result|99-100": [
    {
      "id": "@id",
      "type": "民谣",
      "children|3-4" : [{
          "id": "@id",
          "author": "@cname",
          "musicName": "歌名：@ctitle(2, 5)",
          "contents": "歌词：@cparagraph(1, 3)",
        }
      ]
    },{
      "id": "@id",
      "type": "爵士",
      "children|3-4" : [{
          "id": "@id",
          "author": "@cname",
          "musicName": "歌名：@ctitle(2, 5)",
          "contents": "歌词：@cparagraph(1, 3)",
        }
      ]
    },{
      "id": "@id",
      "type": "流行歌曲",
      "children|3-4" : [{
          "id": "@id",
          "author": "@cname",
          "musicName": "歌名：@ctitle(2, 5)",
          "contents": "歌词：@cparagraph(1, 3)",
        }
      ]
    },{
      "id": "@id",
      "type": "摇滚乐",
      "children|3-4" : [{
          "id": "@id",
          "author": "@cname",
          "musicName": "歌名：@ctitle(2, 5)",
          "contents": "歌词：@cparagraph(1, 3)",
        }
      ]
    },{
      "id": "@id",
      "type": "轻音乐歌曲",
      "children|3-4" : [{
          "id": "@id",
          "author": "@cname",
          "musicName": "歌名：@ctitle(2, 5)",
          "contents": "歌词：@cparagraph(1, 3)",
        }
      ]
    }
  ]
});