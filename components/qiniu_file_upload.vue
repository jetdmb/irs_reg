<template lang="pug">
p.qiniu-container
  button.button(:id="buttonID") 上传
  img(src="/images/spinner.gif", v-if="showLoading")
  a.button.is-link(:href="fileLink", v-if="showFile") {{fileName}}
  a.button.is-link.red(v-if="showFile", @click.prevent.stop="removeFile") x
</template>

<script>
import Qiniu from 'qiniu-js'
export default {
  props:{
      buttonID:{
          type: String,
          required: true,
          twoWay:false
      },
      tokenUrl:{
          type: String,
          required: true,
          twoWay:false
      },
      bucketDomain: {
        type: String,
        required: true,
        twoWay:false  
      }
  },
  data: () => {
    return {
      showLoading: false,
      fileLink: "",
      fileName: ""
    };
  },
  computed: {
    showFile: ()=> {
      return !!this.fileLink
    }
  },
  mounted: () => {
    this.setUploader()  
  },
  methods: {
    removeFile: function() {
      this.fileName = ""
      this.fileLink = ""
      this.$emit("removed")
    },
    setUploader: function() {
      let self = this
      let uploader = Qiniu.uploader({
      runtimes: 'html5,flash,html4',      // 上传模式，依次退化
      browse_button: this.buttonID,         // 上传选择的点选按钮，必需
      // 在初始化时，uptoken，uptoken_url，uptoken_func三个参数中必须有一个被设置
      // 切如果提供了多个，其优先级为uptoken > uptoken_url > uptoken_func
      // 其中uptoken是直接提供上传凭证，uptoken_url是提供了获取上传凭证的地址，如果需要定制获取uptoken的过程则可以设置uptoken_func
      // uptoken : '<Your upload token>', // uptoken是上传凭证，由其他程序生成
      uptoken_url: self.tokenUrl,         // Ajax请求uptoken的Url，强烈建议设置（服务端提供）
      // uptoken_func: function(file){    // 在需要获取uptoken时，该方法会被调用
      //    // do something
      //    return uptoken;
      // },
      get_new_uptoken: false,             // 设置上传文件的时候是否每次都重新获取新的uptoken
      // downtoken_url: '/downtoken',
      // Ajax请求downToken的Url，私有空间时使用，JS-SDK将向该地址POST文件的key和domain，服务端返回的JSON必须包含url字段，url值为该文件的下载地址
      // unique_names: true,              // 默认false，key为文件名。若开启该选项，JS-SDK会为每个文件自动生成key（文件名）
      // save_key: true,                  // 默认false。若在服务端生成uptoken的上传策略中指定了sava_key，则开启，SDK在前端将不对key进行任何处理
      domain: self.bucketDomain,     // bucket域名，下载资源时用到，必需
      //container: 'container',             // 上传区域DOM ID，默认是browser_button的父元素
      max_file_size: '100mb',             // 最大文件体积限制
      flash_swf_url: '/js/Moxie.swf',  //引入flash，相对路径
      max_retries: 3,                     // 上传失败最大重试次数
      dragdrop: false,                     // 开启可拖曳上传
      //drop_element: 'container',          // 拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
      chunk_size: '4mb',                  // 分块上传时，每块的体积
      auto_start: true,                   // 选择文件后自动上传，若关闭需要自己绑定事件触发上传
      multi_selection: false,
      filters : {
        max_file_size : '100mb',
        prevent_duplicates: true,
        // Specify what files to browse for
        mime_types: [ 
          {title : "Image files", extensions : "jpg,gif,png"}, // 限定jpg,gif,png后缀上传
        ]
      },
      //x_vars : {
      //    查看自定义变量
      //    'time' : function(up,file) {
      //        var time = (new Date()).getTime();
                // do something with 'time'
      //        return time;
      //    },
      //    'size' : function(up,file) {
      //        var size = file.size;
                // do something with 'size'
      //        return size;
      //    }
      //},
      init: {
          'FilesAdded': function(up, files) {
              //plupload.each(files, function(file) {
                  // 文件添加进队列后，处理相关的事情
              //});
          },
          'BeforeUpload': function(up, file) {
                 // 每个文件上传前，处理相关的事情
            self.showLoading = true
          },
          'UploadProgress': function(up, file) {
                 // 每个文件上传时，处理相关的事情
          },
          'FileUploaded': function(up, file, info) {
                 // 每个文件上传成功后，处理相关的事情
                 // 其中info是文件上传成功后，服务端返回的json，形式如：
                 // {
                 //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                 //    "key": "gogopher.jpg"
                 //  }
                 // 查看简单反馈
                 var domain = up.getOption('domain');
                 var res = parseJSON(info);
                 var sourceLink = domain +"/"+ res.key; 
                 self.fileName = file.name
                 self.fileLink = sourceLink
                 self.$emit("uploaded", sourceLink)
          },
          'Error': function(up, err, errTip) {
            self.showLoading = false
            //上传出错时，处理相关的事情
            self.fileName = ""
            self.fileLink = ""
            self.$emit("error", err)
          },
          'UploadComplete': function() {
            //队列文件处理完毕后，处理相关的事情
            self.showLoading = false
          },
          'Key': function(up, file) {
            // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
            // 该配置必须要在unique_names: false，save_key: false时才生效

            var key = file.name;
            // do something with key here
            return key
          }
        }
      });
    }
  }
}
</script>

<style lang="stylus">
.qiniu-container
  a.button.is-link.red 
    color: #dd2f00
</style>