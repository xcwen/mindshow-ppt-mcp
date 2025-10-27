
// 自动生成，请勿修改
/**
 * Interface for MCP Tool Definition
 */
export interface McpToolDefinition {
    name: string;
    description: string;
    inputSchema: any;
    outputSchema: any;
    method: string;
    pathTemplate: string;
    executionParameters: { name: string, in: string }[];
    requestBodyContentType?: string;
    securityRequirements: any[];
}


/**
 * Map of tool definitions by name
 */
export const toolDefinitionMap: Map<string, McpToolDefinition> = new Map([

  ["account_info", {
    name: "account_info",
    description: `得到账号信息




`,
    inputSchema: {"type":"object","properties":{},"description":"The JSON request body."},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{"id":{"description":"账号ID ","examples":["xxxxxxx"],"type":"string"},"name":{"description":"名称 ","examples":["账号名称"],"type":"string"},"score":{"description":"当前积分 ","examples":[10000],"type":"number"},"created_at":{"description":"账号创建时间  ","examples":["2020-01-01T00:00:00+08:00"],"type":"string"},"vip_type":{"description":"会员类型:  `general:普通会员` `month:月会员` `season:季会员` `year:年会员`  ","examples":["year"],"type":"string"},"vip_expiration_time":{"description":"会员到期时间 ","examples":["2020-01-01T00:00:00+08:00"],"type":"string"}},"required":["id","name","score","created_at","vip_type","vip_expiration_time"],"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/account/info",
    executionParameters: [],
    requestBodyContentType: "application/json",
    securityRequirements: [{"bearer":[]}]
  }],
  ["account_score_log", {
    name: "account_score_log",
    description: `积分变更记录

最新的在前.



`,
    inputSchema: {"type":"object","properties":{"after":{"description":"第一页请求无需设置, 后续页的请求使用上页返回 'after'值   ","default":"","type":"string"},"limit":{"description":"每页的条数, 默认10条  ","default":10,"type":"number"}},"description":"The JSON request body."},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{"list":{"type":"array","description":"变更列表","items":{"description":"","type":"object","properties":{"title":{"description":"标题 ","examples":["标题"],"type":"string"},"log_time":{"description":"记录时间  ","examples":["2020-01-01T00:00:00+08:00"],"type":"string"},"original_score":{"description":"修改前的积分","type":"number"},"modified_score":{"description":"修改积分","type":"number"},"final_score":{"description":"修改后的积分","type":"number"}},"required":["title","log_time","original_score","modified_score","final_score"]}},"after":{"description":"是否有更多数据, 如果不为空, 可以请用该值请求下一页","type":"string"}},"required":["list","after"],"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/account/score_log",
    executionParameters: [],
    requestBodyContentType: "application/json",
    securityRequirements: [{"bearer":[]}]
  }],
  ["template_list", {
    name: "template_list",
    description: `得到模版列表


  生成PPT时,需要用到该请求的返回列表中的 模板id:\`template_id\`

  每个模板的详细情况, 请到**官网**:[www.mindshow.vip](https://www.mindshow.vip/workstation "官网") 查看



`,
    inputSchema: {"type":"object","properties":{"type":{"description":"分类: private: 私有模板, public: 公共模板,  share: 分享模板.  ","default":"public","examples":["public"],"type":"string"},"color":{"description":"颜色分类 ","default":0,"examples":[0],"type":"number"},"scene":{"description":"场景分类 ","default":0,"examples":[0],"type":"number"},"query_text":{"description":"关键字查询 ","default":"","type":"string"},"after":{"description":"第一页请求无需设置, 后续页的请求使用上页返回 'after'值   ","default":"","type":"string"},"limit":{"description":"每页的条数, 默认10条  ","default":10,"type":"number"},"recommend_content":{"description":"优先输出推荐的模版 ","default":"","examples":["大语言模型发展史"],"type":"string"},"preview_img_width":{"description":"指定预览图片的宽度,(px) ","default":0,"type":"number"},"preview_img_quality":{"description":"指定预览图片的质量,(10-90) ","default":0,"type":"number"}},"description":"The JSON request body."},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{"list":{"type":"array","description":"模板列表","items":{"description":"","type":"object","properties":{"template_id":{"description":"模板id ","examples":["138dlkafalk348ff"],"type":"string"},"title":{"description":"标题 ","examples":["模板标题1"],"type":"string"},"from_type":{"description":"来源： `recommend`: 推荐， `default`:默认","type":"string"},"type":{"description":"分类: private: 私有模板, public: 公共模板, share: 分享模板 ","examples":["public"],"type":"string"},"vip_flag":{"description":"是否需要会员才能使用 ","examples":[false],"type":"boolean"},"preview_img_list":{"type":"array","description":"预览图片列表","items":{"description":"","type":"string"}}},"required":["template_id","title","from_type","type","vip_flag","preview_img_list"]}},"after":{"description":"是否有更多数据, 如果不为空, 可以请用该值请求下一页","type":"string"}},"required":["list","after"],"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/template/list",
    executionParameters: [],
    requestBodyContentType: "application/json",
    securityRequirements: [{"bearer":[]}]
  }],
  ["template_get", {
    name: "template_get",
    description: `得到单个模版





`,
    inputSchema: {"type":"object","properties":{"template_id":{"description":"模板id ","examples":["138dlkafal"],"type":"string"}},"required":["template_id"],"description":"The JSON request body."},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{"item":{"description":"模板","type":"object","properties":{"template_id":{"description":"模板id ","examples":["138dlkafalk348ff"],"type":"string"},"title":{"description":"标题 ","examples":["模板标题1"],"type":"string"},"from_type":{"description":"来源： `recommend`: 推荐， `default`:默认","type":"string"},"type":{"description":"分类: private: 私有模板, public: 公共模板, share: 分享模板 ","examples":["public"],"type":"string"},"vip_flag":{"description":"是否需要会员才能使用 ","examples":[false],"type":"boolean"},"preview_img_list":{"type":"array","description":"预览图片列表","items":{"description":"","type":"string"}}},"required":["template_id","title","from_type","type","vip_flag","preview_img_list"]}},"required":["item"],"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/template/get",
    executionParameters: [],
    requestBodyContentType: "application/json",
    securityRequirements: [{"bearer":[]}]
  }],
  ["job_template_create_by_ppt", {
    name: "job_template_create_by_ppt",
    description: `创建任务:通过PPT文件生出模版

  :::caution

  生成PPT模版是 **异步任务**

  该请求会生成异步任务, 并返回任务id ,此时的 \`template_id\` 为空

  生成时间预计: **30秒-60秒**


  需要 后续轮询调用 **获取单个任务数据** \`/v1/job/get\` 协议获取任务的最新状态 (推荐每隔5秒请求一次,直到任务成功)

  :::


`,
    inputSchema: {"type":"object","properties":{"resource_id":{"description":"上传的 pptx/ppt 文件的 资源id","type":"string"}},"required":["resource_id"],"description":"The JSON request body."},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{"job":{"description":"任务消息","type":"object","properties":{"id":{"description":"任务id  ","examples":["1dk13k3hgfk"],"type":"string"},"title":{"description":"标题 ","examples":["标题"],"type":"string"},"status":{"description":"状态 [ `queued`:排队中, `running`:进行中 ,  `succeeded`:完成, `failed`:失败  ]  ","examples":["succeeded"],"type":"string"},"queue_wait_count":{"description":"队列等待个数.","type":"number"},"progress_percent":{"description":"进度: 0-100 , status=`running` 有效 ","examples":[0],"type":"number"},"created_at":{"description":"任务创建时间 ","examples":["2020-01-01T00:00:00+08:00"],"type":"string"},"finished_at":{"description":"任务完成时间 ","examples":["2020-01-01T00:00:00+08:00"],"type":"string"},"ppt_url":{"description":"生成ppt 对应的url,`有效时间为一周,请及时下载到本地`","type":"string"},"template_id":{"description":"(任务：生成模版才有值) 生成的模版ID, 可用用于后续生成PPT","type":"string"},"preview_img_list":{"type":"array","description":"PPT前3张预览图的图片列表, `有效时间为一周,请及时下载到本地`","items":{"description":"","type":"string"}},"error":{"description":"任务错误情况下的报错信息","type":"string"}},"required":["id","title","status","queue_wait_count","progress_percent","created_at","finished_at","ppt_url","template_id","preview_img_list","error"]}},"required":["job"],"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/job/template_create_by_ppt",
    executionParameters: [],
    requestBodyContentType: "application/json",
    securityRequirements: [{"bearer":[]}]
  }],
  ["template_tag_cfg", {
    name: "template_tag_cfg",
    description: `得到模版标签配置

用于模版的筛选的配置


`,
    inputSchema: {"type":"object","properties":{},"description":"The JSON request body."},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{"color_list":{"type":"array","description":"颜色列表","items":{"description":"","type":"object","properties":{"id":{"description":"id ","examples":[1],"type":"number"},"label":{"description":"标题 ","examples":["白色"],"type":"string"},"color":{"description":"颜色hex值 ","examples":["#FF0000"],"type":"string"}},"required":["id","label","color"]}},"scene_list":{"type":"array","description":"场景列表","items":{"description":"","type":"object","properties":{"id":{"description":"id ","examples":[1],"type":"number"},"label":{"description":"标题 ","examples":["白色"],"type":"string"},"color":{"description":"颜色hex值 ","examples":["#FF0000"],"type":"string"}},"required":["id","label","color"]}}},"required":["color_list","scene_list"],"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/template/tag_cfg",
    executionParameters: [],
    requestBodyContentType: "application/json",
    securityRequirements: [{"bearer":[]}]
  }],
  ["gpt_gen_outline_by_topic", {
    name: "gpt_gen_outline_by_topic",
    description: `通过标题生成PPT大纲

  输出PPT大纲
  :::caution
  该请求推荐使用流式输出(参数： stream=true)
  请参考 [gpt流式接口调用介绍](apifox://link/pages/6480736)
  :::

  :::caution
  消耗积分规则： 每次扣除1个积分
  :::





`,
    inputSchema: {"type":"object","properties":{"topic":{"description":"要生成的主题 ","default":"","examples":["大语言模型发展历程"],"type":"string"},"stream":{"description":"是否流式输出 ","default":false,"examples":[""],"type":"boolean"},"model":{"description":"使用模型. `ali` :阿里，`deepseek`: \"Deepseek\" ,  ","default":"ali","type":"string"},"page_count":{"description":"建议生成的页面个数  ","default":0,"examples":["15"],"type":"number"},"language":{"description":"分类: `zh`: 简体中文, `zh_hant`: 繁体中文,  `en`: 英文, `jp`: 日文, `kr`:韩文.   ","default":"zh","examples":[""],"type":"string"},"scene":{"description":"在什么样场景下使用, 如：`分析报告`， `教学课件`, `产品介绍`, `公众演讲`, `财务分析` ...  ","default":"","examples":[""],"type":"string"},"target_audience":{"description":"目标受众, 如：`学生`， `大众`, `员工`  ...  ","default":"","examples":[""],"type":"string"},"desc_info":{"description":"备注，关于该主题的更多说明,或用户对话内容 ","default":"","examples":[""],"type":"string"},"qa_list":{"type":"array","description":"问答列表  ","items":{"description":"","default":{"question":"","answer":""},"type":"object","properties":{"question":{"description":"问题","type":"string"},"answer":{"description":"回答","type":"string"}},"required":["question","answer"]}},"resource_id_list":{"type":"array","description":"参考的文件id列表:[\"xxxx1\",\"xxxx2\"], ","items":{"description":"","default":"xxxx","examples":["xxxxxxxx"],"type":"string"}}},"description":"The JSON request body."},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{"content":{"description":"输出内容","type":"string"},"content_ex_info":{"description":"内容扩展信息,用于后续操作 ,在stop 时才有值","type":"string"},"all_content":{"description":"全量的输出内容. stream=true ,在stop 时才有值","type":"string"},"finish_reason":{"description":"\"stop\":正常结束, null: 流式输出过程, \"topic_invalid\" : 主题无效无法生成大纲 , \"content_inappropriate\" : 出现敏感内容中断, \"system_error\" : 系统异常, topic_or_resource_id_list_invalid: 需要主题或文件资源","type":"string"}},"required":["content","content_ex_info","all_content","finish_reason"],"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/gpt/gen_outline_by_topic",
    executionParameters: [],
    requestBodyContentType: "application/json",
    securityRequirements: [{"bearer":[]}]
  }],
  ["gpt_gen_content_by_outline", {
    name: "gpt_gen_content_by_outline",
    description: `通过PPT大纲生成PPT完整内容

  输出PPT大纲
  :::caution
  该请求推荐使用流式输出(参数： stream=true)
  请参考 [gpt流式接口调用介绍](apifox://link/pages/6480736)
  :::

  :::caution
  消耗积分规则： 每次扣除1个积分
  :::







`,
    inputSchema: {"type":"object","properties":{"outline":{"description":"markdown格式大纲 ","default":"","examples":["# 大语言模型发展历程\n .."],"type":"string"},"stream":{"description":"是否流式输出 ","default":false,"examples":[""],"type":"boolean"},"content_ex_info":{"description":"内容扩展信息 , 生成大纲时的得到的， 如果设置了，后续的 配置 model, desc_info,qa_list, resource_id_list无需填写。 ","default":"","type":"string"},"scene":{"description":"在什么样场景下使用, 如：`分析报告`， `教学课件`, `产品介绍`, `公众演讲`, `财务分析` ...  ","default":"","examples":[""],"type":"string"},"target_audience":{"description":"目标受众, 如：`学生`， `大众`, `员工`  ...  ","default":"","examples":[""],"type":"string"},"model":{"description":"使用模型. `ali` :阿里，`deepseek`: \"Deepseek\" ,  ","default":"ali","type":"string"},"desc_info":{"description":"备注，关于该主题的更多说明, ","default":"","examples":[""],"type":"string"},"qa_list":{"type":"array","description":"问答列表  ","items":{"description":"","default":{"question":"","answer":""},"type":"object","properties":{"question":{"description":"问题","type":"string"},"answer":{"description":"回答","type":"string"}},"required":["question","answer"]}},"resource_id_list":{"type":"array","description":"参考的文件id列表:[\"xxxx1\",\"xxxx2\"], ","items":{"description":"","default":"xxxx","examples":["xxxxxxxx"],"type":"string"}}},"description":"The JSON request body."},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{"content_ex_info":{"description":"内容扩展信息 ,在stop 时才有值","type":"string"},"content":{"description":"输出内容 ,每次更新后的完整的markdown","type":"string"},"progress_percent":{"description":"进度: 0-100","type":"number"},"finish_reason":{"description":"\"stop\":正常结束, null: 流式输出过程, \"outline_invalid\" : 大纲无效 , \"content_inappropriate\" : 出现敏感内容中断, \"system_error\" : 系统异常","type":"string"}},"required":["content_ex_info","content","progress_percent","finish_reason"],"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/gpt/gen_content_by_outline",
    executionParameters: [],
    requestBodyContentType: "application/json",
    securityRequirements: [{"bearer":[]}]
  }],
  ["job_ppt_create_by_json", {
    name: "job_ppt_create_by_json",
    description: `创建任务:[非AI]通过JSON结构生成PPT[支持图片/高级单页模版..]


:::caution

生成PPT是 **异步任务**

该请求会生成异步任务, 并返回任务id ,此时的 \`ppt_url\` 为空


生成时间预计: **10-20秒**

需要 后续轮询调用 **获取单个任务数据** \`/v1/job/get\` 协议获取任务的最新状态 (推荐每隔5秒请求一次,直到任务成功)

:::

:::caution
消耗积分规则： 每次扣除10个积分
:::

:::caution
插入高级模版相关文档： [PPT插入单页高级模版流程](apifox://link/pages/6854797)
:::

JSON格式如下:
\`\`\`typescript

//封面页
type ppt_page_data_cover_t = {
    type: 'cover'
    title: string  //标题
    sub_title: string //副标题
    speaker: string //演讲者
    date: string //日期
    remark: string //备注
}


//目录页
type ppt_page_data_menu_t = {
    type: 'menu'
    list: { title: string }[] //目录标题列表
    remark: string //备注

}

//章节页
type ppt_page_data_sub_menu_t = {
    type: 'sub_menu'
    title: string //标题
    list: {
        title: string  //小标题
    }[]
    remark: string //备注

}
//内容页
type ppt_page_data_content_t = {
    type: 'content'
    title: string //标题
    list: {
        title: string  //小标题
        description: string //小标题描述
        image_url_list: string[] //图片地址列表, http:// 或https://
    }[]
   remark: string //备注
}

//高级模版页
type ppt_page_data_advance_t = {
    type: 'advance'
    id: string //高级模版ID
    data: {
       //每个高级模版 私有的数据列表
    }
   remark: string //备注
}




//结束页
type ppt_page_data_finish_t = {
    type: 'finish'
    title: string //标题,一般没有
    speaker: string //
    speaker: string //演讲者
    date: string //日期
    remark: string //备注
}

//JSON内容为以上内容的列表
type ppt_page_data_t = (
    | ppt_page_data_cover_t
    | ppt_page_data_finish_t
    | ppt_page_data_content_t
    | ppt_page_data_advance_t
    | ppt_page_data_menu_t
    | ppt_page_data_sub_menu_t
)[]



\`\`\`
案例如下:
\`\`\`json
 [
    {
        "type": "cover",
        "title": "中国传统文化艺术之美",
        "sub_title": "",
        "speaker": "你的姓名",
        "date": "2025-07-17",
        "remark": "中国传统文化艺术之美，承载着中华民族几千年的智慧与精神。今天，我将带大家一起走进这一片瑰丽的世界，感受传统艺术的独特魅力。接下来，让我们先来看一下今天的演讲目录。"
    },
    {
        "type": "menu",
        "list": [
            {
                "title": "介绍中国传统文化艺术的丰富内涵和影响"
            },
            {
                "title": "中国传统绘画艺术的魅力"
            }
        ]
    },
    {
        "type": "sub_menu",
        "title": "介绍中国传统文化艺术的丰富内涵和影响",
        "remark": "中国传统文化艺术是中华民族悠久历史的重要组成部分，蕴含着丰富的思想、情感和智慧。它不仅塑造了中华民族独特的审美观和价值观，也在世界文化舞台上占据着重要地位。这一页我们将聚焦于中国传统文化艺术的丰富内涵，以及它如何影响着我们的生活和社会。接下来，我们将进一步探讨这些文化传统的重要性和现实价值。"
    },
    {
        "type": "content",
        "title": "传统文化的重要性和价值",
        "list": [
            {
                "title": "传承千年的文化宝藏",
                "description": "中国传统文化是一座千年的宝藏，蕴含着丰富的哲学思想、价值观念和审美情趣。这些传统元素是中华民族独特的文化基因，凝聚了历史的智慧和精髓。",
                "image_url_list": ["https://www.baidu.com/img/flexible/logo/pc/result@2.png"]
            },
            {
                "title": "对现代社会的启示和影响",
                "description": "　"
            }
        ]
    },
    {
        "type": "sub_menu",
        "title": "中国传统绘画艺术的魅力"
    },
    {
        "type": "content",
        "title": "国画的独特韵味",
        "list": [
            {
                "title": "水墨意境的表达",
                "description": "水墨意境是国画的灵魂，通过线条、墨色、留白等表现情感与意境。画家在作品中运用“有形无形”的艺术手法，勾勒出深远的意境，引导观者自由想象。"
            },
            {
                "title": "山水、花鸟、人物画的特点",
                "description": "国传统绘画包括山水、花鸟、人物等多种题材。山水画以“山呼万壑赴碧空”表现大自然壮美，花鸟画以“梅兰竹菊”传递深意，人物画以“以形写神”展现人物性格。"
            }
        ]
    },
    {
        "type": "content",
        "title": "工笔与写意的艺术表现",
        "list": [
            {
                "title": "工笔画的精细技法",
                "description": "工笔画追求精细写实，要求线条准确、细腻，色彩鲜艳。画家通过层层叠加的颜色和细节描绘，创造出生动逼真的画面，令人陶醉其中。"
            },
            {
                "title": "写意画的意境与自由",
                "description": "写意画强调意境与表现力，画家以自由的笔墨表现内心情感。通过墨点、墨痕、笔法的变化，创造出富有情感和个性的艺术效果，令人感受到画家的创作情趣。"
            }
        ]
    },
    {
        "type": "content",
        "title": "画家与作品赏析",
        "list": [
            {
                "title": "吴道子的人物风貌",
                "description": "吴道子以深刻的人物刻画而著称。他通过精湛的线条和丰富的神态表现，勾勒出生动立体的人物形象，展现了人物的性格和情感。"
            },
            {
                "title": "张大千的山水传奇",
                "description": "张大千是一位跨界艺术家，他的山水画作品充满浪漫主义气息。他通过丰富的色彩和大胆的构图，创造出独特的山水意境，赋予作品深厚的情感内涵。"
            }
        ]
    },
    {
        "type": "finish",
        "title": "谢谢观看",
        "speaker": "你的姓名",
        "date": "2025-07-17"
    }
]


\`\`\`

`,
    inputSchema: {"type":"object","properties":{"template_id":{"description":"","type":"string"},"page_list":{"type":"array","description":"页面 json 内容","items":{"description":"","type":"object","properties":{"type":{"description":"页面类型: `cover`,  `menu`,  `sub_menu`,  `content` ,`finish` ，其它参数请看文档说明","type":"string"}},"required":["type"]}},"create_ppt_flag":{"description":"是否生成ppt,  ","default":false,"type":"boolean"},"aigc_implicit_label":{"description":"合规性要求( 互联网安全-人工智能合成内容表示的 JSON) 内容:    ","default":"{\"Label\":\"Mindshow\",\"ContentProducer\":\"Mindshow API\",\"ProduceID\":\"Mindshow\",\"ReservedCode1\":\"0\",\"ContentPropagator\":\"0\",\"PropagateID\":\"0\",\"ReservedCode2\":\"1\"}","type":"string"}},"required":["template_id","page_list"],"description":"The JSON request body."},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{"job":{"description":"任务消息","type":"object","properties":{"id":{"description":"任务id  ","examples":["1dk13k3hgfk"],"type":"string"},"title":{"description":"标题 ","examples":["标题"],"type":"string"},"status":{"description":"状态 [ `queued`:排队中, `running`:进行中 ,  `succeeded`:完成, `failed`:失败  ]  ","examples":["succeeded"],"type":"string"},"queue_wait_count":{"description":"队列等待个数.","type":"number"},"progress_percent":{"description":"进度: 0-100 , status=`running` 有效 ","examples":[0],"type":"number"},"created_at":{"description":"任务创建时间 ","examples":["2020-01-01T00:00:00+08:00"],"type":"string"},"finished_at":{"description":"任务完成时间 ","examples":["2020-01-01T00:00:00+08:00"],"type":"string"},"ppt_url":{"description":"生成ppt 对应的url,`有效时间为一周,请及时下载到本地`","type":"string"},"template_id":{"description":"(任务：生成模版才有值) 生成的模版ID, 可用用于后续生成PPT","type":"string"},"preview_img_list":{"type":"array","description":"PPT前3张预览图的图片列表, `有效时间为一周,请及时下载到本地`","items":{"description":"","type":"string"}},"error":{"description":"任务错误情况下的报错信息","type":"string"}},"required":["id","title","status","queue_wait_count","progress_percent","created_at","finished_at","ppt_url","template_id","preview_img_list","error"]}},"required":["job"],"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/job/ppt_create_by_json",
    executionParameters: [],
    requestBodyContentType: "application/json",
    securityRequirements: [{"bearer":[]}]
  }],
  ["job_ppt_create_by_markdown", {
    name: "job_ppt_create_by_markdown",
    description: `创建任务:[非AI]通过MarkDown大纲生成PPT


:::caution

生成PPT是 **异步任务**

该请求会生成异步任务, 并返回任务id ,此时的 \`ppt_url\` 为空


生成时间预计: **10-20秒**

需要 后续轮询调用 **获取单个任务数据** \`/v1/job/get\` 协议获取任务的最新状态 (推荐每隔5秒请求一次,直到任务成功)

:::

:::caution
消耗积分规则： 每次扣除10个积分
:::





markdown 3级格式如下:
\`\`\`markdown
#  主标题

##  1级

###  2级
####  3级
3级描述
####  3级
3级描述

\`\`\`
案例如下:
\`\`\`markdown
# 中国传统文化艺术之美

## 介绍中国传统文化艺术的丰富内涵和影响

### 传统文化的重要性和价值
#### 传承千年的文化宝藏
中国传统文化是一座千年的宝藏，蕴含着丰富的哲学思想、价值观念和审美情趣。这些传统元素是中华民族独特的文化基因，凝聚了历史的智慧和精髓。

#### 对现代社会的启示和影响
传统文化在现代社会依然具有重要的启示意义。通过对古人的智慧进行深入思考，我们可以找到应对现实问题的新路径。传统文化也是塑造社会共识、凝聚国家认同感的重要纽带。

## 中国传统绘画艺术的魅力

### 国画的独特韵味
#### 水墨意境的表达
水墨意境是国画的灵魂，通过线条、墨色、留白等表现情感与意境。画家在作品中运用“有形无形”的艺术手法，勾勒出深远的意境，引导观者自由想象。

#### 山水、花鸟、人物画的特点
国传统绘画包括山水、花鸟、人物等多种题材。山水画以“山呼万壑赴碧空”表现大自然壮美，花鸟画以“梅兰竹菊”传递深意，人物画以“以形写神”展现人物性格。

### 工笔与写意的艺术表现
#### 工笔画的精细技法
工笔画追求精细写实，要求线条准确、细腻，色彩鲜艳。画家通过层层叠加的颜色和细节描绘，创造出生动逼真的画面，令人陶醉其中。

#### 写意画的意境与自由
写意画强调意境与表现力，画家以自由的笔墨表现内心情感。通过墨点、墨痕、笔法的变化，创造出富有情感和个性的艺术效果，令人感受到画家的创作情趣。

### 画家与作品赏析
#### 吴道子的人物风貌
吴道子以深刻的人物刻画而著称。他通过精湛的线条和丰富的神态表现，勾勒出生动立体的人物形象，展现了人物的性格和情感。

#### 张大千的山水传奇
张大千是一位跨界艺术家，他的山水画作品充满浪漫主义气息。他通过丰富的色彩和大胆的构图，创造出独特的山水意境，赋予作品深厚的情感内涵。
\`\`\`
请求案例:
\`\`\`json
{
"template_id": "xxxxxxxx",
"speaker": "演讲者名称",
"content": "# 中国传统文化艺术之美\\n\\n## 介绍中国传统文化艺术的丰富内涵和影响\\n\\n### 传统文化的重要性和价值\\n#### 传承千年的文化宝藏\\n中国传统文化是一座千年的宝藏，蕴含着丰富的哲学思想、价值观念和审美情趣。这些传统元素是中华民族独特的文化基因，凝聚了历史的智慧和精髓。\\n\\n#### 对现代社会的启示和影响\\n传统文化在现代社会依然具有重要的启示意义。通过对古人的智慧进行深入思考，我们可以找到应对现实问题的新路径。传统文化也是塑造社会共识、凝聚国家认同感的重要纽带。\\n\\n## 中国传统绘画艺术的魅力\\n\\n### 国画的独特韵味\\n#### 水墨意境的表达\\n水墨意境是国画的灵魂，通过线条、墨色、留白等表现情感与意境。画家在作品中运用“有形无形”的艺术手法，勾勒出深远的意境，引导观者自由想象。\\n\\n#### 山水、花鸟、人物画的特点\\n国传统绘画包括山水、花鸟、人物等多种题材。山水画以“山呼万壑赴碧空”表现大自然壮美，花鸟画以“梅兰竹菊”传递深意，人物画以“以形写神”展现人物性格。\\n\\n### 工笔与写意的艺术表现\\n#### 工笔画的精细技法\\n工笔画追求精细写实，要求线条准确、细腻，色彩鲜艳。画家通过层层叠加的颜色和细节描绘，创造出生动逼真的画面，令人陶醉其中。\\n\\n#### 写意画的意境与自由\\n写意画强调意境与表现力，画家以自由的笔墨表现内心情感。通过墨点、墨痕、笔法的变化，创造出富有情感和个性的艺术效果，令人感受到画家的创作情趣。\\n\\n### 画家与作品赏析\\n#### 吴道子的人物风貌\\n吴道子以深刻的人物刻画而著称。他通过精湛的线条和丰富的神态表现，勾勒出生动立体的人物形象，展现了人物的性格和情感。\\n\\n#### 张大千的山水传奇\\n张大千是一位跨界艺术家，他的山水画作品充满浪漫主义气息。他通过丰富的色彩和大胆的构图，创造出独特的山水意境，赋予作品深厚的情感内涵。\\n\\n"
}
\`\`\`

`,
    inputSchema: {"type":"object","properties":{"template_id":{"description":"模板id  ","examples":["xxxxxxxx"],"type":"string"},"speaker":{"description":"演讲者 ","examples":["演讲者名称"],"type":"string"},"content":{"description":"3级 markdown 内容   ","examples":["# 中国传统文化艺术之美\n\n## 介绍中国传统文化艺术的丰富内涵和影响\n\n### 传统文化的重要性和价值\n#### 传承千年的文化宝藏\n中国传统文化是一座千年的宝藏，蕴含着丰富的哲学思想、价值观念和审美情趣。这些传统元素是中华民族独特的文化基因，凝聚了历史的智慧和精髓。\n\n#### 对现代社会的启示和影响\n传统文化在现代社会依然具有重要的启示意义。通过对古人的智慧进行深入思考，我们可以找到应对现实问题的新路径。传统文化也是塑造社会共识、凝聚国家认同感的重要纽带。\n\n## 中国传统绘画艺术的魅力\n\n### 国画的独特韵味\n#### 水墨意境的表达\n水墨意境是国画的灵魂，通过线条、墨色、留白等表现情感与意境。画家在作品中运用“有形无形”的艺术手法，勾勒出深远的意境，引导观者自由想象。\n\n#### 山水、花鸟、人物画的特点\n国传统绘画包括山水、花鸟、人物等多种题材。山水画以“山呼万壑赴碧空”表现大自然壮美，花鸟画以“梅兰竹菊”传递深意，人物画以“以形写神”展现人物性格。\n\n### 工笔与写意的艺术表现\n#### 工笔画的精细技法\n工笔画追求精细写实，要求线条准确、细腻，色彩鲜艳。画家通过层层叠加的颜色和细节描绘，创造出生动逼真的画面，令人陶醉其中。\n\n#### 写意画的意境与自由\n写意画强调意境与表现力，画家以自由的笔墨表现内心情感。通过墨点、墨痕、笔法的变化，创造出富有情感和个性的艺术效果，令人感受到画家的创作情趣。\n\n### 画家与作品赏析\n#### 吴道子的人物风貌\n吴道子以深刻的人物刻画而著称。他通过精湛的线条和丰富的神态表现，勾勒出生动立体的人物形象，展现了人物的性格和情感。\n\n#### 张大千的山水传奇\n张大千是一位跨界艺术家，他的山水画作品充满浪漫主义气息。他通过丰富的色彩和大胆的构图，创造出独特的山水意境，赋予作品深厚的情感内涵。\n"],"type":"string"},"create_preview_image_type":{"description":"创建预览图.（会减慢生成速度!）   `null` :无需生成，`title`: \"标题页\" ,  `top3` :\"前3张\" ,   ","default":"null","type":"string"},"create_ppt_flag":{"description":"是否生成ppt,  ","default":true,"type":"boolean"},"use_img_mode":{"description":"使用图片模式:  `default`: 自身图片 +系统推荐图片    ,   `self`:尽量只用自身图片, ","default":"default","type":"string"},"aigc_implicit_label":{"description":"合规性要求( 互联网安全-人工智能合成内容表示的 JSON) 内容:    ","default":"{\"Label\":\"Mindshow\",\"ContentProducer\":\"Mindshow API\",\"ProduceID\":\"Mindshow\",\"ReservedCode1\":\"0\",\"ContentPropagator\":\"0\",\"PropagateID\":\"0\",\"ReservedCode2\":\"1\"}","type":"string"}},"required":["template_id","speaker","content"],"description":"The JSON request body."},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{"job":{"description":"任务消息","type":"object","properties":{"id":{"description":"任务id  ","examples":["1dk13k3hgfk"],"type":"string"},"title":{"description":"标题 ","examples":["标题"],"type":"string"},"status":{"description":"状态 [ `queued`:排队中, `running`:进行中 ,  `succeeded`:完成, `failed`:失败  ]  ","examples":["succeeded"],"type":"string"},"queue_wait_count":{"description":"队列等待个数.","type":"number"},"progress_percent":{"description":"进度: 0-100 , status=`running` 有效 ","examples":[0],"type":"number"},"created_at":{"description":"任务创建时间 ","examples":["2020-01-01T00:00:00+08:00"],"type":"string"},"finished_at":{"description":"任务完成时间 ","examples":["2020-01-01T00:00:00+08:00"],"type":"string"},"ppt_url":{"description":"生成ppt 对应的url,`有效时间为一周,请及时下载到本地`","type":"string"},"template_id":{"description":"(任务：生成模版才有值) 生成的模版ID, 可用用于后续生成PPT","type":"string"},"preview_img_list":{"type":"array","description":"PPT前3张预览图的图片列表, `有效时间为一周,请及时下载到本地`","items":{"description":"","type":"string"}},"error":{"description":"任务错误情况下的报错信息","type":"string"}},"required":["id","title","status","queue_wait_count","progress_percent","created_at","finished_at","ppt_url","template_id","preview_img_list","error"]}},"required":["job"],"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/job/ppt_create_by_markdown",
    executionParameters: [],
    requestBodyContentType: "application/json",
    securityRequirements: [{"bearer":[]}]
  }],
  ["job_ppt_create_by_gpt", {
    name: "job_ppt_create_by_gpt",
    description: `创建任务:[AI]通过GPT生成PPT

  :::caution

  生成PPT是 **异步任务**

  该请求会生成异步任务, 并返回任务id ,此时的 \`ppt_url\` 为空

  生成时间预计: **1-2分钟**


  需要 后续轮询调用 **获取单个任务数据** \`/v1/job/get\` 协议获取任务的最新状态 (推荐每隔5秒请求一次,直到任务成功)

  :::
  :::caution
  消耗积分规则： 每次扣除11~12个积分, ppt生成10积分 + gpt调用 1-2 积分。
  :::




`,
    inputSchema: {"type":"object","properties":{"template_id":{"description":"模板id  ","examples":["xxxxxxxxx"],"type":"string"},"speaker":{"description":"演讲者 ","examples":["演讲者名称"],"type":"string"},"type":{"description":"方案类型  topic: 通过标题生成ppt,  outline: 通过大纲生成PPT","type":"string"},"content":{"description":"type=topic 为标题, type=outline: markdown大纲","type":"string"},"content_ex_info":{"description":"内容扩展信息 , 生成大纲时的得到的，type=outline 时使用   如果设置了，后续的 配置 model, desc_info,qa_list, resource_id_list无需填写。  ","default":"","type":"string"},"model":{"description":"使用模型. `ali` :阿里，`deepseek`: \"Deepseek\" ,  ","default":"ali","type":"string"},"page_count":{"description":"建议生成的页面个数  ","default":0,"examples":["15"],"type":"number"},"language":{"description":"分类: `zh`: 简体中文, `zh_hant`: 繁体中文,  `en`: 英文, `jp`: 日文, `kr`:韩文.   ","default":"zh","examples":[""],"type":"string"},"scene":{"description":"在什么样场景下使用, 如：`分析报告`， `教学课件`, `产品介绍`, `公众演讲`, `财务分析` ...  ","default":"","examples":[""],"type":"string"},"target_audience":{"description":"目标受众, 如：`学生`， `大众`, `员工`  ...  ","default":"","examples":[""],"type":"string"},"desc_info":{"description":"备注，关于该主题的更多说明,或用户对话内容 ","default":"","examples":[""],"type":"string"},"qa_list":{"type":"array","description":"问答列表  ","items":{"description":"","default":{"question":"","answer":""},"type":"object","properties":{"question":{"description":"问题","type":"string"},"answer":{"description":"回答","type":"string"}},"required":["question","answer"]}},"resource_id_list":{"type":"array","description":"参考的文件id列表:[\"xxxx1\",\"xxxx2\"], ","items":{"description":"","default":"xxxx","examples":["xxxxxxxx"],"type":"string"}},"create_preview_image_type":{"description":"创建预览图.（会减慢生成速度!）   `null` :无需生成，`title`: \"标题页\" ,  `top3` :\"前3张\" ,   ","default":"null","type":"string"},"create_ppt_flag":{"description":"是否生成ppt,  ","default":true,"type":"boolean"},"with_create_log_flag":{"description":" 是否生成过程图片,用于移动端显示生成过程,   会多扣 *10积分*","default":false,"type":"boolean"},"aigc_implicit_label":{"description":"合规性要求( 互联网安全-人工智能合成内容表示的 JSON) 内容:    ","default":"{\"Label\":\"Mindshow\",\"ContentProducer\":\"Mindshow API\",\"ProduceID\":\"Mindshow\",\"ReservedCode1\":\"0\",\"ContentPropagator\":\"0\",\"PropagateID\":\"0\",\"ReservedCode2\":\"1\"}","type":"string"}},"required":["template_id","speaker","type","content"],"description":"The JSON request body."},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{"job":{"description":"任务消息","type":"object","properties":{"id":{"description":"任务id  ","examples":["1dk13k3hgfk"],"type":"string"},"title":{"description":"标题 ","examples":["标题"],"type":"string"},"status":{"description":"状态 [ `queued`:排队中, `running`:进行中 ,  `succeeded`:完成, `failed`:失败  ]  ","examples":["succeeded"],"type":"string"},"queue_wait_count":{"description":"队列等待个数.","type":"number"},"progress_percent":{"description":"进度: 0-100 , status=`running` 有效 ","examples":[0],"type":"number"},"created_at":{"description":"任务创建时间 ","examples":["2020-01-01T00:00:00+08:00"],"type":"string"},"finished_at":{"description":"任务完成时间 ","examples":["2020-01-01T00:00:00+08:00"],"type":"string"},"ppt_url":{"description":"生成ppt 对应的url,`有效时间为一周,请及时下载到本地`","type":"string"},"template_id":{"description":"(任务：生成模版才有值) 生成的模版ID, 可用用于后续生成PPT","type":"string"},"preview_img_list":{"type":"array","description":"PPT前3张预览图的图片列表, `有效时间为一周,请及时下载到本地`","items":{"description":"","type":"string"}},"error":{"description":"任务错误情况下的报错信息","type":"string"}},"required":["id","title","status","queue_wait_count","progress_percent","created_at","finished_at","ppt_url","template_id","preview_img_list","error"]},"create_log_url":{"description":"生成过程的 sse 链接：  with_create_log_flag,","type":"string"}},"required":["job","create_log_url"],"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/job/ppt_create_by_gpt",
    executionParameters: [],
    requestBodyContentType: "application/json",
    securityRequirements: [{"bearer":[]}]
  }],
  ["job_ppt_create_by_ppt", {
    name: "job_ppt_create_by_ppt",
    description: `创建任务:[AI]美化PPT

  :::caution

  生成PPT是 **异步任务**

  该请求会生成异步任务, 并返回任务id ,此时的 \`ppt_url\` 为空

  生成时间预计: **1-2分钟**


  需要 后续轮询调用 **获取单个任务数据** \`/v1/job/get\` 协议获取任务的最新状态 (推荐每隔5秒请求一次,直到任务成功)

  :::


`,
    inputSchema: {"type":"object","properties":{"template_id":{"description":"模板id  ","examples":["xxxxxxxxx"],"type":"string"},"resource_id":{"description":"上传的pptx/ppt 文件的 资源id","type":"string"},"ai_content_flag":{"description":"是否使用AI润色","type":"boolean"},"create_preview_image_type":{"description":"创建预览图.（会减慢生成速度!）   `null` :无需生成，`title`: \"标题页\" ,  `top3` :\"前3张\" ,   ","default":"null","type":"string"},"with_create_log_flag":{"description":" 是否生成过程图片,用于移动端显示生成过程,   会多扣 *10积分*","default":false,"type":"boolean"},"aigc_implicit_label":{"description":"合规性要求( 互联网安全-人工智能合成内容表示的 JSON) 内容:    ","default":"{\"Label\":\"Mindshow\",\"ContentProducer\":\"Mindshow API\",\"ProduceID\":\"Mindshow\",\"ReservedCode1\":\"0\",\"ContentPropagator\":\"0\",\"PropagateID\":\"0\",\"ReservedCode2\":\"1\"}","type":"string"}},"required":["template_id","resource_id","ai_content_flag"],"description":"The JSON request body."},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{"job":{"description":"任务消息","type":"object","properties":{"id":{"description":"任务id  ","examples":["1dk13k3hgfk"],"type":"string"},"title":{"description":"标题 ","examples":["标题"],"type":"string"},"status":{"description":"状态 [ `queued`:排队中, `running`:进行中 ,  `succeeded`:完成, `failed`:失败  ]  ","examples":["succeeded"],"type":"string"},"queue_wait_count":{"description":"队列等待个数.","type":"number"},"progress_percent":{"description":"进度: 0-100 , status=`running` 有效 ","examples":[0],"type":"number"},"created_at":{"description":"任务创建时间 ","examples":["2020-01-01T00:00:00+08:00"],"type":"string"},"finished_at":{"description":"任务完成时间 ","examples":["2020-01-01T00:00:00+08:00"],"type":"string"},"ppt_url":{"description":"生成ppt 对应的url,`有效时间为一周,请及时下载到本地`","type":"string"},"template_id":{"description":"(任务：生成模版才有值) 生成的模版ID, 可用用于后续生成PPT","type":"string"},"preview_img_list":{"type":"array","description":"PPT前3张预览图的图片列表, `有效时间为一周,请及时下载到本地`","items":{"description":"","type":"string"}},"error":{"description":"任务错误情况下的报错信息","type":"string"}},"required":["id","title","status","queue_wait_count","progress_percent","created_at","finished_at","ppt_url","template_id","preview_img_list","error"]},"create_log_url":{"description":"生成过程的 sse 链接：  with_create_log_flag,","type":"string"}},"required":["job","create_log_url"],"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/job/ppt_create_by_ppt",
    executionParameters: [],
    requestBodyContentType: "application/json",
    securityRequirements: [{"bearer":[]}]
  }],
  ["resource_upload", {
    name: "resource_upload",
    description: `文件资源上传

:::caution
该协议使用  \`multipart/form-data\` 上传文件, 不是通常的 \`json\` 方式

:::
:::caution
文件大小限制: 最大20MB
:::


:::caution
资源保留时间: 24小时
:::


`,
    inputSchema: {"type":"string","description":"Request body (content type: multipart/form-data)"},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{"resource_id":{"description":"资源id","type":"string"}},"required":["resource_id"],"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/resource/upload",
    executionParameters: [],
    requestBodyContentType: "multipart/form-data",
    securityRequirements: [{"bearer":[]}]
  }],
  ["job_list", {
    name: "job_list",
    description: `得到任务列表

得到任务列表, 最新的在前.



`,
    inputSchema: {"type":"object","properties":{"after":{"description":"第一页请求无需设置, 后续页的请求使用上页返回 'after'值   ","default":"","type":"string"},"limit":{"description":"每页的条数, 默认10条  ","default":10,"type":"number"}},"description":"The JSON request body."},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{"list":{"type":"array","description":"列表","items":{"description":"","type":"object","properties":{"id":{"description":"任务id  ","examples":["1dk13k3hgfk"],"type":"string"},"title":{"description":"标题 ","examples":["标题"],"type":"string"},"status":{"description":"状态 [ `queued`:排队中, `running`:进行中 ,  `succeeded`:完成, `failed`:失败  ]  ","examples":["succeeded"],"type":"string"},"progress_percent":{"description":"进度: 0-100 , status=`running` 有效 ","examples":[0],"type":"number"},"created_at":{"description":"任务创建时间 ","examples":["2020-01-01T00:00:00+08:00"],"type":"string"},"finished_at":{"description":"任务完成时间 ","examples":["2020-01-01T00:00:00+08:00"],"type":"string"},"ppt_url":{"description":"生成ppt 对应的url,`有效时间为一周,请及时下载到本地`","type":"string"},"template_id":{"description":"(任务：生成模版才有值) 生成的模版ID, 可用用于后续生成PPT","type":"string"},"error":{"description":"任务错误情况下的报错信息","type":"string"}},"required":["id","title","status","progress_percent","created_at","finished_at","ppt_url","template_id","error"]}},"after":{"description":"是否有更多数据, 如果不为空, 可以请用该值请求下一页","type":"string"}},"required":["list","after"],"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/job/list",
    executionParameters: [],
    requestBodyContentType: "application/json",
    securityRequirements: [{"bearer":[]}]
  }],
  ["job_get", {
    name: "job_get",
    description: `获取单个任务数据




`,
    inputSchema: {"type":"object","properties":{"id":{"description":"任务id ","examples":["1b3dkf13Ac80"],"type":"string"}},"required":["id"],"description":"The JSON request body."},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{"job":{"description":"任务数据","type":"object","properties":{"id":{"description":"任务id  ","examples":["1dk13k3hgfk"],"type":"string"},"title":{"description":"标题 ","examples":["标题"],"type":"string"},"status":{"description":"状态 [ `queued`:排队中, `running`:进行中 ,  `succeeded`:完成, `failed`:失败  ]  ","examples":["succeeded"],"type":"string"},"queue_wait_count":{"description":"队列等待个数.","type":"number"},"progress_percent":{"description":"进度: 0-100 , status=`running` 有效 ","examples":[0],"type":"number"},"created_at":{"description":"任务创建时间 ","examples":["2020-01-01T00:00:00+08:00"],"type":"string"},"finished_at":{"description":"任务完成时间 ","examples":["2020-01-01T00:00:00+08:00"],"type":"string"},"ppt_url":{"description":"生成ppt 对应的url, 注意：该链接带签名需要完整的链接才能下载, `有效时间为一周,请及时下载到本地`","type":"string"},"template_id":{"description":"(任务：生成模版才有值) 生成的模版ID, 可用用于后续生成PPT","type":"string"},"preview_img_list":{"type":"array","description":"PPT前3张预览图的图片列表, `有效时间为一周,请及时下载到本地`","items":{"description":"","type":"string"}},"error":{"description":"任务错误情况下的报错信息","type":"string"}},"required":["id","title","status","queue_wait_count","progress_percent","created_at","finished_at","ppt_url","template_id","preview_img_list","error"]}},"required":["job"],"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/job/get",
    executionParameters: [],
    requestBodyContentType: "application/json",
    securityRequirements: [{"bearer":[]}]
  }],
  ["job_get_quality_check_data", {
    name: "job_get_quality_check_data",
    description: `获取单个任务的质检数据

  :::caution
   返回 ppt里的文本和使用到的图片，可用于检查是否有违规内容
  :::





`,
    inputSchema: {"type":"object","properties":{"id":{"description":"任务id ","examples":["1b3dkf13Ac80"],"type":"string"}},"required":["id"],"description":"The JSON request body."},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{"page_list":{"type":"array","description":"页面列表","items":{"description":"","type":"object","properties":{"text":{"description":"文本","type":"string"},"img_list":{"type":"array","description":"图片列表","items":{"description":"","type":"string"}}},"required":["text","img_list"]}}},"required":["page_list"],"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/job/get_quality_check_data",
    executionParameters: [],
    requestBodyContentType: "application/json",
    securityRequirements: [{"bearer":[]}]
  }],
  ["job_get_pdf", {
    name: "job_get_pdf",
    description: `获取任务的pdf文件

  :::caution
  异步请求: 每隔5秒请求接口一次，直到生成成功
  首次请求需要10-20秒钟时间
  :::


  :::caution
  消耗积分规则： 每次扣除10个积分
  :::



`,
    inputSchema: {"type":"object","properties":{"id":{"description":"任务id ","examples":["1b3dkf13Ac80"],"type":"string"},"async_flag":{"description":"是否异步模式","type":"boolean"}},"required":["id","async_flag"],"description":"The JSON request body."},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{"pdf_url":{"description":"pdf 文件地址，请及时保存到本地","type":"string"},"status":{"description":"状态 [ `queued`:排队中, `running`:进行中 ,  `succeeded`:完成, `failed`:失败  ]  ","examples":["succeeded"],"type":"string"},"queue_wait_count":{"description":"队列等待个数.","type":"number"},"progress_percent":{"description":"进度: 0-100 , status=`running` 有效 ","examples":[0],"type":"number"},"created_at":{"description":"任务创建时间 ","examples":["2020-01-01T00:00:00+08:00"],"type":"string"},"finished_at":{"description":"任务完成时间 ","examples":["2020-01-01T00:00:00+08:00"],"type":"string"}},"required":["pdf_url","status","queue_wait_count","progress_percent","created_at","finished_at"],"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/job/get_pdf",
    executionParameters: [],
    requestBodyContentType: "application/json",
    securityRequirements: [{"bearer":[]}]
  }],
  ["job_get_jump_link", {
    name: "job_get_jump_link",
    description: `获取单个任务的编辑/查看链接

  :::caution
  :::



`,
    inputSchema: {"type":"object","properties":{"id":{"description":"任务id ","examples":["1b3dkf13Ac80"],"type":"string"},"theme":{"description":"主题: `dark` :黑夜，`light`: 白天 ","default":"light","type":"string"},"mobile_flag":{"description":"手机版本  ","default":false,"type":"boolean"}},"required":["id"],"description":"The JSON request body."},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{"url":{"description":"跳转链接","type":"string"}},"required":["url"],"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/job/get_jump_link",
    executionParameters: [],
    requestBodyContentType: "application/json",
    securityRequirements: [{"bearer":[]}]
  }],
  ["job_del", {
    name: "job_del",
    description: `删除任务




`,
    inputSchema: {"type":"object","properties":{"id":{"description":"任务id ","examples":["1b3dkf13Ac80"],"type":"string"}},"required":["id"],"description":"The JSON request body."},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{},"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/job/del",
    executionParameters: [],
    requestBodyContentType: "application/json",
    securityRequirements: [{"bearer":[]}]
  }],
  ["advance_template_add", {
    name: "advance_template_add",
    description: `添加高级模版

获得 page_id: 说明

1. 打开官网高级模版： https://www.mindshow.vip/workstation/#/advance_template

2. 打开 需要的页面模板  跳转链接是: https://www.mindshow.vip/workstation/#/create_advance_template?page_id=xxxxxxxxxxx

其中 复制 page_id 的值， 即为 page_id

:::



`,
    inputSchema: {"type":"object","properties":{"page_id":{"description":"官网上可用的高级模版id ，详情查询协议说明  ","examples":["411-xxxxxxxxxxx"],"type":"string"},"title":{"description":"标题","type":"string"}},"required":["page_id","title"],"description":"The JSON request body."},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{"id":{"description":"","type":"string"}},"required":["id"],"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/advance_template/add",
    executionParameters: [],
    requestBodyContentType: "application/json",
    securityRequirements: [{"bearer":[]}]
  }],
  ["advance_template_list", {
    name: "advance_template_list",
    description: `得到高级模版列表

 最新的在前.



`,
    inputSchema: {"type":"object","properties":{"after":{"description":"第一页请求无需设置, 后续页的请求使用上页返回 'after'值   ","default":"","type":"string"},"limit":{"description":"每页的条数, 默认10条  ","default":10,"type":"number"}},"description":"The JSON request body."},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{"list":{"type":"array","description":"列表","items":{"description":"","type":"object","properties":{"id":{"description":"高级模版id  ","examples":["1dk13k3hgfk"],"type":"string"},"title":{"description":"标题 ","examples":["标题"],"type":"string"},"created_at":{"description":"生成时间","type":"string"},"updated_at":{"description":"生成时间","type":"string"},"preview_img_url":{"description":"预览图","type":"string"},"input_args":{"description":"输入参数列表,JSON","type":"string"},"input_args_example":{"description":"输入参数列表，案例","type":"string"}},"required":["id","title","created_at","updated_at","preview_img_url","input_args","input_args_example"]}},"after":{"description":"是否有更多数据, 如果不为空, 可以请用该值请求下一页","type":"string"}},"required":["list","after"],"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/advance_template/list",
    executionParameters: [],
    requestBodyContentType: "application/json",
    securityRequirements: [{"bearer":[]}]
  }],
  ["advance_template_get", {
    name: "advance_template_get",
    description: `获取单个高级模版




`,
    inputSchema: {"type":"object","properties":{"id":{"description":"高级模版id ","examples":["1b3dkf13Ac80"],"type":"string"}},"required":["id"],"description":"The JSON request body."},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{"item":{"description":"模版数据","type":"object","properties":{"id":{"description":"高级模版id  ","examples":["1dk13k3hgfk"],"type":"string"},"title":{"description":"标题 ","examples":["标题"],"type":"string"},"created_at":{"description":"生成时间","type":"string"},"updated_at":{"description":"生成时间","type":"string"},"preview_img_url":{"description":"预览图","type":"string"},"input_args":{"description":"输入参数列表,JSON","type":"string"},"input_args_example":{"description":"输入参数列表，案例","type":"string"}},"required":["id","title","created_at","updated_at","preview_img_url","input_args","input_args_example"]}},"required":["item"],"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/advance_template/get",
    executionParameters: [],
    requestBodyContentType: "application/json",
    securityRequirements: [{"bearer":[]}]
  }],
  ["advance_template_set", {
    name: "advance_template_set",
    description: `设置取单个高级模版数据




`,
    inputSchema: {"type":"object","properties":{"id":{"description":"高级模板id ","examples":["1b3dkf13Ac80"],"type":"string"},"title":{"description":"标题","type":"string"}},"required":["id","title"],"description":"The JSON request body."},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{},"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/advance_template/set",
    executionParameters: [],
    requestBodyContentType: "application/json",
    securityRequirements: [{"bearer":[]}]
  }],
  ["advance_template_del", {
    name: "advance_template_del",
    description: `删除高级模版




`,
    inputSchema: {"type":"object","properties":{"id":{"description":"高级模版id ","examples":["1b3dkf13Ac80"],"type":"string"}},"required":["id"],"description":"The JSON request body."},
    outputSchema: {"type":"object","title":"ResponseModel","properties":{"code":{"type":"number","description":"错误码( 0:成功. 其它值:失败[无data数据区])"},"info":{"type":"string","description":"错误信息","examples":["succ"]},"request_id":{"type":"string","description":"请求id,用于定位请求","examples":["21al1389334aal4f"]},"data":{"type":"object","properties":{},"description":"数据区"}},"required":["code","info","request_id"],"description":"成功"},
    method: "post",
    pathTemplate: "/v1/advance_template/del",
    executionParameters: [],
    requestBodyContentType: "application/json",
    securityRequirements: [{"bearer":[]}]
  }],
]);

