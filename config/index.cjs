/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxa80543995127542f',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '8f6ab010e9ba422c91be1663c10f287c',

  PROVINCE: '太原',
  CITY: '清徐',

  USERS: [
    {
      // 想要发送的人的名字
      name: '倩毛毛',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'osixz6g7XmLVZkn_uVBF9OBkL_ik',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'de9gfGlXxdVub7OOie9EekwzNiZoQ4dGP58W_UAXOl0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-14',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '倩毛毛', year: '2002', date: '12-14',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '鹏鹏', year: '2002', date: '04-25',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2002', date: '05-04',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2019-06-06' },
        // 结婚前纪念日
        { keyword: 'marry_day', date: '2024-06-06' },
      ],
    },
    {
      keyword: 'lover_prattle',
      contents: [
        '因为太喜欢你，所以看谁都像是情敌。',
        '申请成为你爱里的永久居民。',
        '你很傻，你很笨，可我还是很羡慕你，因为你有我',
        '遇见你，就好像捡到了100斤的运气'
      ],
    }
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'de9gfGlXxdVub7OOie9EekwzNiZoQ4dGP58W_UAXOl0',

  CALLBACK_USERS: [
    {
      name: '鹏鹏',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'osixz6g7XmLVZkn_uVBF9OBkL_ik',
    }
  ],

}

module.exports = USER_CONFIG

