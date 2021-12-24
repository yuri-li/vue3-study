<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="activityRules" label-width="120px" class="demo-ruleForm">
    <el-form-item label="活动名称" prop="activityName">
      <el-input v-model="ruleForm.activityName"></el-input>
    </el-form-item>
    <el-form-item label="活动地点" prop="region">
      <el-select v-model="ruleForm.region" placeholder="活动地点">
        <el-option v-for="zone in Object.keys(ActivityZone)" :key="zone" :label="ActivityZone[zone as keyof typeof ActivityZone]" :value="zone"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="开始时间" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker v-model="ruleForm.date1" type="date" placeholder="Pick a date" style="width: 100%"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker v-model="ruleForm.date2" placeholder="Pick a time" style="width: 100%"></el-time-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="立即发布" prop="delivery">
      <el-switch v-model="ruleForm.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="活动类型" prop="activityType">
      <el-checkbox-group v-model="ruleForm.activityType">
      <el-checkbox v-for="typeItem in Object.keys(ActivityType)" :key="typeItem" :label="typeItem">{{ ActivityType[typeItem as keyof typeof ActivityType] }}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="赞助资源" prop="resource">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio v-for="resourceType in Object.keys(ResourceType)" :key="resourceType" :label="resourceType">{{ ResourceType[resourceType as keyof typeof ResourceType] }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="描述" prop="desc">
      <el-input v-model="ruleForm.desc" type="textarea"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">提交</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue"
import { ActivityForm, ActivityZone, ActivityType, ResourceType, activityRules } from "@/components/form/types"
const ruleFormRef = ref()
const ruleForm: ActivityForm = reactive({
  activityType: [],
})
function submitForm() {
  ruleFormRef.value.validate((valid: boolean) => {
    if (valid) {
      alert(`成功提交。数据预览： ${JSON.stringify(ruleForm)}`)
    } else {
      console.log("error submit!!")
      return false
    }
  })
}
function resetForm() {
  ruleFormRef.value.resetFields()
}
</script>
<style lang="scss" scoped>
.demo-ruleForm {
  width: 560px;
}
.el-switch {
  width: 100%;
}
.el-select {
  width: 100%;
}
</style>