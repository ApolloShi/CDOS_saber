<template>
  <el-form class="login-form"
           status-icon
           :rules="loginRules"
           ref="loginForm"
           :model="loginForm"
           label-width="0">
    <el-form-item v-if="tenantMode" prop="tenantId">
      <el-input size="small"
                @keyup.enter.native="handleLogin"
                v-model="loginForm.tenantId"
                auto-complete="off"
                :placeholder="$t('login.tenantId')">
        <i slot="prefix" class="icon-quanxian"/>
      </el-input>
    </el-form-item>
    <el-form-item prop="username">
      <el-input size="small"
                @keyup.enter.native="handleLogin"
                v-model="loginForm.username"
                auto-complete="off"
                :placeholder="$t('login.username')">
        <i slot="prefix" class="icon-yonghu"/>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input size="small"
                @keyup.enter.native="handleLogin"
                :type="passwordType"
                v-model="loginForm.password"
                auto-complete="off"
                :placeholder="$t('login.password')">
        <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"/>
        <i slot="prefix" class="icon-mima"/>
      </el-input>
    </el-form-item>
    <el-form-item v-if="this.website.captchaMode" prop="code">
      <el-row :span="24">
        <el-col :span="16">
          <el-input size="small"
                    @keyup.enter.native="handleLogin"
                    v-model="loginForm.code"
                    auto-complete="off"
                    :placeholder="$t('login.code')">
            <i slot="prefix" class="icon-yanzhengma"/>
          </el-input>
        </el-col>
        <el-col :span="8">
          <div class="login-code">
            <img :src="loginForm.image" class="login-code-img" @click="refreshCode"
            />
          </div>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"
                 size="small"
                 @click.native.prevent="handleLogin"
                 class="login-submit">{{$t('login.submit')}}
      </el-button>
    </el-form-item>
    <el-dialog title="??????????????????"
               append-to-body
               :visible.sync="userBox"
               width="350px">
      <avue-form :option="userOption" v-model="userForm" @submit="submitLogin"/>
    </el-dialog>
  </el-form>
</template>

<script>
  import {mapGetters} from "vuex";
  import {info} from "@/api/system/tenant";
  import {getCaptcha} from "@/api/user";
  import {getTopUrl} from "@/util/util";

  export default {
    name: "userlogin",
    data() {
      return {
        tenantMode: this.website.tenantMode,
        loginForm: {
          //??????ID
          tenantId: "000000",
          //??????ID
          deptId: "",
          //??????ID
          roleId: "",
          //?????????
          username: "admin",
          //??????
          password: "admin",
          //????????????
          type: "account",
          //???????????????
          code: "",
          //??????????????????
          key: "",
          //?????????????????????
          image: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        },
        loginRules: {
          tenantId: [
            {required: false, message: "???????????????ID", trigger: "blur"}
          ],
          username: [
            {required: true, message: "??????????????????", trigger: "blur"}
          ],
          password: [
            {required: true, message: "???????????????", trigger: "blur"},
            {min: 1, message: "?????????????????????6???", trigger: "blur"}
          ]
        },
        passwordType: "password",
        userBox: false,
        userForm: {
          deptId: '',
          roleId: ''
        },
        userOption: {
          labelWidth: 70,
          submitBtn: true,
          emptyBtn: false,
          submitText: '??????',
          column: [
            {
              label: '??????',
              prop: 'deptId',
              type: 'select',
              props: {
                label: 'deptName',
                value: 'id'
              },
              dicUrl: '/api/blade-system/dept/select',
              span: 24,
              display: false,
              rules: [{
                required: true,
                message: "???????????????",
                trigger: "blur"
              }],
            },
            {
              label: '??????',
              prop: 'roleId',
              type: 'select',
              props: {
                label: 'roleName',
                value: 'id'
              },
              dicUrl: '/api/blade-system/role/select',
              span: 24,
              display: false,
              rules: [{
                required: true,
                message: "???????????????",
                trigger: "blur"
              }],
            },
          ]
        }
      };
    },
    created() {
      this.getTenant();
      this.refreshCode();
    },
    mounted() {
    },
    watch: {
      'loginForm.deptId'() {
        const column = this.findObject(this.userOption.column, "deptId");
        if (this.loginForm.deptId.includes(",")) {
          column.dicUrl = `/api/blade-system/dept/select?deptId=${this.loginForm.deptId}`;
          column.display = true;
        } else {
          column.dicUrl = '';
        }
      },
      'loginForm.roleId'() {
        const column = this.findObject(this.userOption.column, "roleId");
        if (this.loginForm.roleId.includes(",")) {
          column.dicUrl = `/api/blade-system/role/select?roleId=${this.loginForm.roleId}`;
          column.display = true;
        } else {
          column.dicUrl = '';
        }
      }
    },
    computed: {
      ...mapGetters(["tagWel", "userInfo"])
    },
    props: [],
    methods: {
      refreshCode() {
        if (this.website.captchaMode) {
          getCaptcha().then(res => {
            const data = res.data;
            this.loginForm.key = data.key;
            this.loginForm.image = data.image;
          })
        }
      },
      showPassword() {
        this.passwordType === ""
          ? (this.passwordType = "password")
          : (this.passwordType = "");
      },
      submitLogin (form, done) {
        if (form.deptId !== '') {
          this.loginForm.deptId = form.deptId;
        }
        if (form.roleId !== '') {
          this.loginForm.roleId = form.roleId;
        }
        this.handleLogin();
        done();
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            const loading = this.$loading({
              lock: true,
              text: '?????????,??????????????????',
              spinner: "el-icon-loading"
            });
            this.$store.dispatch("LoginByUsername", this.loginForm).then(() => {
              if (this.website.switchMode) {
                const deptId = this.userInfo.dept_id;
                const roleId = this.userInfo.role_id;
                if (deptId.includes(",") || roleId.includes(",")) {
                  this.loginForm.deptId = deptId;
                  this.loginForm.roleId = roleId;
                  this.userBox = true;
                  this.$store.dispatch("LogOut").then(() => {
                    loading.close();
                  });
                  return false;
                }
              }
              this.$router.push({path: this.tagWel.value});
              loading.close();
            }).catch(() => {
              loading.close();
              this.refreshCode();
            });
          }
        });
      },
      getTenant() {
        let domain = getTopUrl();
        // ?????????????????????????????????
        //domain = "https://bladex.vip";
        info(domain).then(res => {
          const data = res.data;
          if (data.success && data.data.tenantId) {
            this.tenantMode = false;
            this.loginForm.tenantId = data.data.tenantId;
            this.$parent.$refs.login.style.backgroundImage = `url(${data.data.backgroundUrl})`;
          }
        })
      }
    }
  };
</script>

<style>
</style>
