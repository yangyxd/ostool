<template>
    <div class="container timestamp">
        <el-row>
            <el-col>
                <div class="desc mt8 now"><span class="tt">现在：</span>
                    <a class="ml8 tw1" title="点击复制" href="javascript:;" @click="setValue()">{{now}}</a>
                    <span>控制：</span>
                    <el-button :type="stopUpdateNow ? 'success' : 'danger'" @click="switchUpdateNow()"><i class="el-icon-lx-time"></i> {{stopUpdateNow ? '开始' : '停止'}}</el-button>
                </div>
                <div class="desc mt8"><span class="tt">时间戳：</span>
                    <el-input class="tw2" placeholder="时间戳" v-model="value"></el-input>
                    <el-select v-model="valueType" style="width: 110px" class="ml8">
                        <el-option
                        v-for="item in valueTypes"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-button class="ml8" @click="convToTimeStr()" type="info">转换 >></el-button>
                    <el-input class="tw3 ml8" v-model="valueStr"></el-input>
                </div>
                <div class="desc mt8"><span class="tt">时间：</span>
                    <el-date-picker class="tw3" v-model="valueStr2" type="datetime" prefix-icon="-" :clearable='false' value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
                    <el-button class="ml8" @click="convTimeStrToTime()" type="info">转换 >></el-button>
                    <el-input class="tw2 ml8" placeholder="时间戳" v-model="value2"></el-input>
                    <el-select v-model="valueType2" style="width: 110px" class="ml8">
                        <el-option
                        v-for="item in valueTypes"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="title mt16">获取当前时间戳</div>
                <el-table
                    :data="tableData"
                    border
                    stripe
                    :show-header="false"
                    style="width: 100%">
                    <el-table-column
                    prop="name"
                    width="120">
                    <template slot-scope="scope"><span class="cname">{{scope.row.name}}</span></template>
                    </el-table-column>
                    <el-table-column
                    prop="code">
                    <template slot-scope="scope"><el-input type="textarea" :value="scope.row.code" maxlength="10" autosize></el-input></template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'timestampPage',
        components: { },
        data() {
            return {
                now: undefined,
                stopUpdateNow: false,
                value: undefined,
                valueStr: '',
                valueType: 0,
                value2: undefined,
                valueStr2: '',
                valueType2: 0,
                valueTypes: [{value: 0, label: "毫秒(ms)"},{value: 1, label: "秒(s)"}],
                tableData: [
                    {name: "Swift", code: "NSDate().timeIntervalSince1970"},
                    {name: "Flutter/Dart", code: "DateTime.now().millisecondsSinceEpoch"},
                    {name: "Go", code: 'import ("time")\nint32(time.Now().Unix())'},
                    {name: "Java", code: "// pure java\n(int) (System.currentTimeMillis() / 1000)\n\n// joda\n(int) (DateTime.now().getMillis() / 1000)"},
                    {name: "JavaScript", code: "Math.round(new Date() / 1000)\nnew Date().getTime()"},
                    {name: "Objective-C", code: "[[NSDate date] timeIntervalSince1970]"},
                    {name: "MySQL", code: "SELECT unix_timestamp(now())"},
                    {name: "SQLite", code: "SELECT strftime('%s', 'now')"},
                    {name: "Erlang", code: "calendar:datetime_to_gregorian_seconds(calendar:universal_time())-719528*24*3600."},
                    {name: "PHP", code: "// pure php\ntime()\n\n// Carbon\Carbon\nCarbon::now()->timestamp"},
                    {name: "Python", code: "import time\ntime.time()"},
                    {name: "Ruby", code: "Time.now.to_i"},
                    {name: "Shell", code: "date +%s"},
                    {name: "Groovy", code: "(new Date().time / 1000).intValue()"},
                    {name: "Lua", code: "os.time()"},
                    {name: ".NET/C#", code: "(DateTime.Now.ToUniversalTime().Ticks - 621355968000000000) / 10000000"},
                ]
            }
        },
        mounted() {
            this.updatedNow()
            this.value = this.now
            this.valueStr2 = this.formatDate(this.value)
        },
        methods: {
            updatedNow() {
                this.now = new Date().getTime()
                setTimeout(() => {
                    if (! this.stopUpdateNow) {
                        this.updatedNow()
                    }
                }, 500)
            },
            switchUpdateNow() {
                this.stopUpdateNow = !this.stopUpdateNow
                if (! this.stopUpdateNow) {
                    this.updatedNow()
                }
            },
            setValue(v) {
                this.value = v === undefined ? this.now : v
            },
            convToTimeStr() {
                this.valueStr = this.formatDate(Number(this.value) * (this.valueType === 0 ? 1 : 1000))
            },
            convTimeStrToTime() {
                const date = new Date(this.valueStr2)
                this.value2 = this.valueType2 === 0 ? date.getTime() : Math.ceil(date.getTime() / 1000)
            },
            formatDate(time) {
                const date = typeof time === 'number' ? new Date(time) : time
                const YY = date.getFullYear()
                if (Number.isNaN(YY)) {
                    return '无效时间'
                }
                const _twoNum = (v) => {
                    return v < 10 ? '0' + v.toString() : v.toString();
                }
                const MM = _twoNum(date.getMonth() + 1)
                const DD = _twoNum(date.getDate())
                const hh = _twoNum(date.getHours())
                const mm = _twoNum(date.getMinutes())
                const ss = _twoNum(date.getSeconds())
                return YY.toString() + "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss
            }
        },
    };
</script>

<style scoped>
.title {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 16px;
}
.subtitle {
    font-weight: bold;
    font-size: 14px;
    color: #111
}
.desc {
    font-size: 15px;
    margin-bottom: 8px;
    margin-left: 8px;
    color: #666;
    line-height: 38px;
}
.cname {
    font-size: 14.5px;
    color: #111;
    font-weight: bold;
}
.tt { width: 75px; display: inline-block; }
h3 {
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
}
.container {
    min-height: calc(100vh - 70px);
    padding: 10px!important;
    overflow: hidden;
}
.pb8 {
    padding-bottom: 20px;
}
.mt8 {
    margin-top: 8px;
}
.mt16 {
    margin-top: 16px;
}
.ml8 { margin-left: 8px; }
.ml16 { margin-left: 16px; }
.tw1 { width: 140px; }
.tw2 { width: 150px; }
.tw3 { width: 220px; }
.now a {
    color: #009a61;
    display: inline-block;
}
.now a:hover {
    text-decoration: underline;
}
</style>

<style>
/** iframe样式 */
.iframeContain{
    width: 100%;
    height: 100%;
}
.timestamp .el-input__inner {
    font-size: 15px;
    font-family: 'Courier New', Courier, monospace;
    color: #010203;
    height: 33px;
    padding: 15px 6px 15px 8px;
}
.timestamp .el-textarea__inner {
    color: #010203;
}
</style>