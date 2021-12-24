interface ActivityForm {
    activityName?: string,
    region?: ActivityZone,
    date1?: string,
    date2?: string,
    delivery?: boolean,
    activityType: ActivityType[],
    resource?: ResourceType,
    desc?: string,
}
enum ActivityZone {
    shanghai = "上海",
    beijing = "北京",
}
enum ActivityType {
    online = "线上活动",
    promotion = "促销活动",
    offline = "线下推广",
    brandExposure = "品牌营销",
}
enum ResourceType {
    Sponsorship = "赞助费",
    Venue = "场地",
}
const activityRules = {
    activityName: [
      {
        required: true,
        message: "请输入活动名称",
        trigger: "blur",
      },
      {
        min: 3,
        max: 5,
        message: "Length should be 3 to 5",
        trigger: "blur",
      },
    ],
    region: [
      {
        required: true,
        message: "请选择活动地点",
        trigger: "change",
      },
    ],
    date1: [
      {
        type: "date",
        required: true,
        message: "请选择日期",
        trigger: "change",
      },
    ],
    date2: [
      {
        type: "date",
        required: true,
        message: "请选择时间",
        trigger: "change",
      },
    ],
    activityType: [
      {
        type: "array",
        required: true,
        message: "请至少选择一个活动类型",
        trigger: "change",
      },
    ],
    resource: [
      {
        required: true,
        message: "请选择一个活动资源",
        trigger: "change",
      },
    ],
    desc: [
      {
        required: true,
        message: "请输入活动描述",
        trigger: "blur",
      },
    ],
  }
export { ActivityForm, ActivityZone, ActivityType, ResourceType, activityRules }